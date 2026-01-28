# Visual Testing Guide

## 🎯 Quick Start
Your dev server should be running at: **http://localhost:3000**

---

## ✅ Testing Checklist

### 1. **Header Testing**

#### Desktop (> 1024px):
1. Open http://localhost:3000
2. **Initial State**: Header should span full width with transparent background
3. **Scroll Down 30px**: Header transforms to pill-shaped, centered, with solid background and shadow
4. **Scroll Down Further (100px+)**: Header slides up and hides from view
5. **Scroll Up**: Header slides down and becomes visible again
6. **Logo Hover**: Should scale slightly
7. **Services Dropdown**: Click to see all 6 services with icons
8. **Theme Dropdown**: Click paint icon to see all 32 themes
9. **Get Started Button**: Should have hover lift effect

#### Mobile (< 1024px):
1. Resize browser to mobile width (370px)
2. **Hamburger Menu**: Should be visible
3. **Click Hamburger**: Dropdown menu appears
4. **Theme Toggle**: Should show circular button
5. **Scroll Behavior**: Same hide/show behavior

---

### 2. **Services Section Testing**

#### Scroll Animation Test:
1. Scroll down to Services section
2. **Header Animates In**: "Services That Scale" fades in first
3. **Service 1 (AI/ML)**: 
   - Card fade in + slide up
   - Icon (🤖) rotates and scales in
   - Content slides in from LEFT
   - Visual slides in from RIGHT
   - Badge shows "Service 1 of 6" in PRIMARY color
4. **Service 2 (Cyber Security)**:
   - Content slides in from RIGHT
   - Visual slides in from LEFT (alternating)
   - Badge in SECONDARY color
   - Icon: 🔒
5. **Continue for all 6 services**:
   - Each should animate as it enters viewport
   - Alternating left/right layouts
   - Different color theme for each
   - Separator line between services

#### Content Verification:
- [ ] AI/ML Solutions (🤖, TensorFlow, PyTorch, etc.)
- [ ] Cyber Security (🔒, Firewalls, Encryption, etc.)
- [ ] Dedicated Developers (👨‍💻, React/Vue, Node.js, etc.)
- [ ] Mobile Apps (📱, Swift, Kotlin, etc.)
- [ ] Website Development (🌐, React, Vue/Nuxt, etc.)
- [ ] Custom Software (⚙️, Cloud Native, APIs, etc.)

#### Responsive Test:
1. **Desktop (1920px)**: 2-column layout with large spacing
2. **Tablet (768px)**: Should still show 2-column with less spacing
3. **Mobile (375px)**: Should stack to single column

---

### 3. **Footer Testing**

#### Desktop:
1. Scroll to bottom
2. **4 Columns**: Company Info, Services, Company, Contact
3. **Social Icons**: 
   - Twitter, LinkedIn, GitHub, Instagram
   - Should scale and lift on hover
4. **Trust Badges**:
   - ISO Certified
   - SOC 2 Compliant
   - GDPR Ready
5. **Bottom Bar**: Copyright and legal links

#### Mobile:
1. Resize to 375px
2. Columns should stack vertically
3. All content should be readable
4. Social icons should remain interactive

---

### 4. **Theme Testing**

Test with multiple themes to ensure colors adapt correctly:

1. **Light**: Default light theme
2. **Dark**: Dark mode
3. **Synthwave**: Neon colors
4. **Dracula**: Dark with purple
5. **Cyberpunk**: Yellow and pink

For each theme:
- [ ] Header background adapts
- [ ] Services section badges change colors
- [ ] Footer background adapts
- [ ] Text remains readable
- [ ] No color contrast issues

---

### 5. **Scroll Performance Test**

1. Open DevTools (F12)
2. Go to Performance tab
3. **Record** while scrolling through page
4. **Stop** recording
5. Check for:
   - [ ] Consistent 60 FPS
   - [ ] No layout thrashing
   - [ ] Smooth animations
   - [ ] No janky scrolling

---

### 6. **Responsive Breakpoints**

Test these specific widths:

#### Mobile:
- **375px** (iPhone SE)
- **390px** (iPhone 12/13/14)
- **414px** (iPhone 14 Plus)

#### Tablet:
- **768px** (iPad Portrait)
- **1024px** (iPad Landscape)

#### Desktop:
- **1280px** (Laptop)
- **1920px** (Desktop)
- **2560px** (Large Desktop)

---

### 7. **Interaction Tests**

#### Header:
- [ ] Logo click navigates to home
- [ ] Services dropdown opens on hover
- [ ] Each service in dropdown is clickable
- [ ] Theme dropdown opens on click
- [ ] Theme selection changes theme immediately
- [ ] Theme persists on page reload
- [ ] Mobile menu opens/closes correctly

#### Services:
- [ ] "Explore More" buttons are clickable
- [ ] Hover effects work on tech stack icons
- [ ] Success rate badges are visible
- [ ] "Book Consultation" button at bottom works

#### Footer:
- [ ] All social links are clickable
- [ ] Email link opens email client
- [ ] Phone link initiates call (mobile)
- [ ] Legal links at bottom are clickable
- [ ] Hover effects work on all links

---

### 8. **Animation Timing Test**

Use Chrome DevTools Animation panel:

1. Open DevTools
2. Press `Cmd/Ctrl + Shift + P`
3. Type "Show Animations"
4. Scroll through page
5. Verify:
   - [ ] Staggered delays are consistent
   - [ ] No animation conflicts
   - [ ] Smooth easing curves
   - [ ] Appropriate duration (500-1000ms)

---

### 9. **Accessibility Test**

#### Keyboard Navigation:
1. Use TAB key to navigate through page
2. Check:
   - [ ] All interactive elements are reachable
   - [ ] Focus indicators are visible
   - [ ] Enter key activates buttons/links
   - [ ] Dropdown menus work with keyboard
   - [ ] Logical tab order

#### Screen Reader:
1. Enable screen reader (NVDA/JAWS/VoiceOver)
2. Navigate through page
3. Verify:
   - [ ] Headings are announced
   - [ ] Links are identifiable
   - [ ] Images have descriptions
   - [ ] Form labels are read correctly

---

### 10. **Cross-Browser Test**

Test in multiple browsers:

#### Chrome/Edge:
- [ ] All animations work smoothly
- [ ] Backdrop-blur renders correctly
- [ ] No console errors

#### Firefox:
- [ ] CSS Grid layouts correct
- [ ] Glassmorphism effects work
- [ ] Smooth scrolling

#### Safari:
- [ ] Webkit-specific prefixes work
- [ ] Backdrop-filter supported
- [ ] Touch interactions work (mobile)

---

## 🐛 Common Issues to Check

1. **Header doesn't hide on scroll**:
   - Check console for JS errors
   - Verify scroll event listeners are attached

2. **Services don't animate**:
   - Scroll slower to trigger Intersection Observer
   - Check if visibleServices array is updating

3. **Footer layout broken**:
   - Check grid classes are applied correctly
   - Verify responsive breakpoints

4. **Theme doesn't change**:
   - Check localStorage permissions
   - Verify data-theme attribute on html element

5. **Blurry text**:
   - Check if transform: translateZ(0) is needed
   - Verify backdrop-blur browser support

---

## 📊 Performance Benchmarks

Expected metrics:

- **Initial Load**: < 2 seconds
- **First Contentful Paint (FCP)**: < 1.5 seconds
- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **Time to Interactive (TTI)**: < 3 seconds
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Scroll Performance**: 60 FPS

---

## 🎨 Visual Regression Points

Take screenshots at these scroll positions to compare changes:

1. **Top of page** (scroll: 0)
2. **Header pill transition** (scroll: 30px)
3. **Header hidden** (scroll: 150px)
4. **First service visible** (Services section start)
5. **All services visible** (Services section end)
6. **Footer** (bottom of page)

Take screenshots at:
- Mobile (375px)
- Tablet (768px)
- Desktop (1920px)

---

## ✅ Sign-Off Criteria

Before considering this feature complete:

- [x] All header features working
- [x] All 6 services displaying correctly
- [x] Footer complete with all sections
- [ ] No console errors
- [ ] Responsive on all breakpoints
- [ ] Smooth 60 FPS animations
- [ ] Accessible via keyboard
- [ ] Works in all major browsers
- [ ] Theme system functional
- [ ] Performance within benchmarks

---

## 📝 Notes

- The server should be running on port 3000
- Use DevTools Device Toolbar for responsive testing
- Test with slow 3G throttling for performance
- Use Lighthouse for automated accessibility checks
- Consider using Percy or Chromatic for visual regression testing

---

Happy Testing! 🚀
