<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black">Contact Submissions</h1>
        <p class="text-base-content/60 mt-1">{{ contacts.length }} total submissions, {{ unreadCount }} unread</p>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap gap-2">
      <button
        v-for="filter in filters"
        :key="filter.value"
        @click="activeFilter = filter.value"
        class="btn btn-sm transition-all"
        :class="activeFilter === filter.value ? 'btn-primary' : 'btn-ghost'"
      >
        {{ filter.label }}
        <span v-if="filter.count > 0" class="badge badge-sm" :class="activeFilter === filter.value ? 'badge-primary-content' : 'badge-primary'">{{ filter.count }}</span>
      </button>
    </div>

    <!-- Contacts Table -->
    <div class="bg-base-100 rounded-2xl border border-base-content/10 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr class="bg-base-200/50">
              <th class="font-bold">Name</th>
              <th class="font-bold">Email</th>
              <th class="font-bold">Service</th>
              <th class="font-bold">Budget</th>
              <th class="font-bold">Date</th>
              <th class="font-bold">Status</th>
              <th class="font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in filteredContacts" :key="contact.id" 
                class="hover:bg-base-200/30 transition-colors cursor-pointer" 
                :class="!contact.isRead ? 'font-semibold' : ''"
                @click="viewContact(contact)">
              <td>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    :class="contact.isRead ? 'bg-base-200 text-base-content/50' : 'bg-primary/10 text-primary'">
                    {{ contact.firstName.charAt(0) }}{{ contact.lastName.charAt(0) }}
                  </div>
                  <span>{{ contact.firstName }} {{ contact.lastName }}</span>
                </div>
              </td>
              <td>
                <a :href="`mailto:${contact.email}`" class="link link-primary text-sm">{{ contact.email }}</a>
              </td>
              <td><span class="badge badge-ghost badge-sm">{{ contact.service }}</span></td>
              <td class="text-sm">{{ contact.budget || '—' }}</td>
              <td class="text-sm text-base-content/60">{{ new Date(contact.submittedAt).toLocaleDateString() }}</td>
              <td>
                <span class="badge badge-sm" :class="contact.isRead ? 'badge-ghost' : 'badge-primary'">
                  {{ contact.isRead ? 'Read' : 'New' }}
                </span>
              </td>
              <td>
                <button @click="viewContact(contact)" class="btn btn-ghost btn-xs text-primary">View</button>
              </td>
            </tr>
            <tr v-if="filteredContacts.length === 0">
              <td colspan="7" class="text-center py-12 text-base-content/50">
                No contact submissions found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Contact Detail Modal -->
    <dialog ref="detailModal" class="modal">
      <div v-if="selectedContact" class="modal-box max-w-2xl">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-xl font-bold">Contact Details</h3>
          <form method="dialog"><button class="btn btn-sm btn-circle btn-ghost">✕</button></form>
        </div>

        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-sm font-semibold text-base-content/60">Name</label>
              <p class="font-medium">{{ selectedContact.firstName }} {{ selectedContact.lastName }}</p>
            </div>
            <div>
              <label class="text-sm font-semibold text-base-content/60">Email</label>
              <p class="font-medium"><a :href="`mailto:${selectedContact.email}`" class="link link-primary">{{ selectedContact.email }}</a></p>
            </div>
            <div>
              <label class="text-sm font-semibold text-base-content/60">Phone</label>
              <p class="font-medium">{{ selectedContact.phone || 'Not provided' }}</p>
            </div>
            <div>
              <label class="text-sm font-semibold text-base-content/60">Service</label>
              <p class="font-medium">{{ selectedContact.service }}</p>
            </div>
            <div>
              <label class="text-sm font-semibold text-base-content/60">Budget</label>
              <p class="font-medium">{{ selectedContact.budget || 'Not specified' }}</p>
            </div>
            <div>
              <label class="text-sm font-semibold text-base-content/60">Submitted</label>
              <p class="font-medium">{{ new Date(selectedContact.submittedAt).toLocaleString() }}</p>
            </div>
          </div>

          <div>
            <label class="text-sm font-semibold text-base-content/60">Message</label>
            <div class="mt-2 p-4 bg-base-200 rounded-xl">
              <p class="whitespace-pre-wrap">{{ selectedContact.message }}</p>
            </div>
          </div>
        </div>

        <div class="modal-action">
          <a :href="`mailto:${selectedContact.email}`" class="btn btn-primary">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            Reply via Email
          </a>
          <form method="dialog"><button class="btn">Close</button></form>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop"><button>close</button></form>
    </dialog>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
});

useSeoMeta({ title: 'Contacts | KM Admin' });

const detailModal = ref<HTMLDialogElement | null>(null);
const selectedContact = ref<any>(null);
const activeFilter = ref('all');

const { data: contacts, refresh } = await useFetch('/api/contact', {
  default: () => [] as any[],
});

const unreadCount = computed(() => (contacts.value as any[]).filter(c => !c.isRead).length);

const filters = computed(() => [
  { label: 'All', value: 'all', count: (contacts.value as any[]).length },
  { label: 'Unread', value: 'unread', count: unreadCount.value },
  { label: 'Read', value: 'read', count: (contacts.value as any[]).length - unreadCount.value },
]);

const filteredContacts = computed(() => {
  const list = contacts.value as any[];
  if (activeFilter.value === 'unread') return list.filter(c => !c.isRead);
  if (activeFilter.value === 'read') return list.filter(c => c.isRead);
  return list;
});

const viewContact = async (contact: any) => {
  selectedContact.value = contact;
  detailModal.value?.showModal();

  // Mark as read
  if (!contact.isRead) {
    try {
      await $fetch(`/api/contact/${contact.id}`, { method: 'PATCH' });
      contact.isRead = true;
    } catch (err) {
      console.error('Failed to mark as read:', err);
    }
  }
};
</script>
