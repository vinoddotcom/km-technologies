import { nanoid } from 'nanoid';
import { contacts } from '../../database/schema';
import { useDB } from '../../utils/db';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Validate required fields
  const requiredFields = ['firstName', 'lastName', 'email', 'service', 'message'];
  for (const field of requiredFields) {
    if (!body?.[field]) {
      throw createError({
        statusCode: 400,
        statusMessage: `${field} is required`,
      });
    }
  }

  const db = useDB(event);
  const id = nanoid();
  const now = new Date().toISOString();

  await db.insert(contacts).values({
    id,
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    phone: body.phone || null,
    service: body.service,
    budget: body.budget || null,
    message: body.message,
    agreedToPrivacy: body.agreedToPrivacy || false,
    submittedAt: now,
    isRead: false,
  });

  // Send email notification to admin
  try {
    const resendApiKey = process.env.RESEND_API_KEY || '';
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@kmsoftware.com';

    if (resendApiKey) {
      await $fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: {
          from: 'KM Software <noreply@kmsoftware.com>',
          to: [adminEmail],
          subject: `New Contact Form Submission from ${body.firstName} ${body.lastName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1673c5;">New Contact Form Submission</h2>
              <hr style="border: 1px solid #e5e7eb;" />
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Name:</td><td style="padding: 8px;">${body.firstName} ${body.lastName}</td></tr>
                <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #374151;">Email:</td><td style="padding: 8px;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
                <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Phone:</td><td style="padding: 8px;">${body.phone || 'N/A'}</td></tr>
                <tr style="background: #f9fafb;"><td style="padding: 8px; font-weight: bold; color: #374151;">Service:</td><td style="padding: 8px;">${body.service}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Budget:</td><td style="padding: 8px;">${body.budget || 'N/A'}</td></tr>
              </table>
              <h3 style="color: #374151; margin-top: 20px;">Message:</h3>
              <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; color: #1f2937;">
                ${body.message}
              </div>
              <hr style="border: 1px solid #e5e7eb; margin-top: 24px;" />
              <p style="color: #6b7280; font-size: 12px;">This email was sent from the KM Software contact form. <a href="${process.env.SITE_URL || 'https://kmsoftware.com'}/admin/contacts">View in Dashboard</a></p>
            </div>
          `,
        },
      });
    }
  } catch (emailError) {
    // Don't fail the contact submission if email fails
    console.error('Failed to send email notification:', emailError);
  }

  return {
    success: true,
    message: 'Your message has been sent successfully!',
    id,
  };
});
