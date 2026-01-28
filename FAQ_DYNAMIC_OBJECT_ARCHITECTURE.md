# FAQ Section - Dynamic Object-Based Architecture

## ✅ **Fully Dynamic FAQ Section Complete!**

Changed from hardcoded values to a **fully configurable JavaScript object** that controls everything about the FAQ section.

---

## 🎯 **What Changed**

### Before (Hardcoded):
```vue
<h2>Common Questions Answered</h2>
<p>Everything you need to know about our AI/ML services</p>
<div class="collapse collapse-plus bg-base-200">
  <!-- hardcoded classes -->
</div>
```

### After (Dynamic Object):
```vue
<h2>{{ faqSection.title }}</h2>
<p>{{ faqSection.subtitle }}</p>
<div :class="faqSection.itemClassName">
  <!-- dynamic classes from object -->
</div>
```

---

## 📐 **New Object Structure**

```javascript
const faqSection = ref({
  // Badge Configuration
  badge: {
    className: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4',
    text: 'FAQ',
    textColor: 'text-accent',
    iconColor: 'text-accent',
    iconPath: 'M18 10a8 8 0 11-16 0...' // SVG path
  },
  
  // Section Heading
  title: 'Your Questions, Answered',
  subtitle: 'Everything you need to know about our AI/ML services',
  
  // Item Styling
  itemClassName: 'collapse collapse-plus bg-gradient-to-br from-base-200 to-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-lg transition-all',
  
  // Number Badge Configuration
  showNumbers: true,
  numberClassName: 'w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0',
  
  // Alternative: Use icon instead of numbers
  itemIcon: null, // Can be SVG path
  
  // Answer Styling
  answerClassName: 'pl-11',
  
  // CTA Configuration
  cta: {
    containerClassName: 'mt-12 text-center p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10',
    text: 'Still have questions?',
    buttonText: 'Contact Our Team',
    buttonLink: '/contact',
    buttonClassName: 'btn btn-primary btn-lg'
  },
  
  // FAQ Items
  items: [
    {
      question: 'What is the typical timeline for an AI/ML project?',
      answer: 'Most AI/ML projects take 8-16 weeks...'
    },
    // ... more items
  ]
});
```

---

## 🎨 **Benefits of Object-Based Approach**

### 1. **Centralized Configuration**
All settings in ONE place:
- ✅ Badge text and colors
- ✅ Section title and subtitle
- ✅ All CSS classes
- ✅ Number vs icon display
- ✅ CTA button text and link
- ✅ FAQ items

### 2. **Easy to Customize**
Change the entire FAQ section by modifying ONE object:

```javascript
// Want different title?
faqSection.value.title = 'Frequently Asked Questions';

// Want to hide numbers?
faqSection.value.showNumbers = false;

// Want different badge text?
faqSection.value.badge.text = 'Help Center';

// Want different button text?
faqSection.value.cta.buttonText = 'Get Help Now';
```

### 3. **Theme Support**
Switch between different FAQ styles easily:

```javascript
// Professional style
faqSection.value.title = 'Your Questions, Answered';
faqSection.value.showNumbers = true;

// Casual style
faqSection.value.title = 'Got Questions?';
faqSection.value.showNumbers = false;
faqSection.value.badge.text = 'Help';
```

### 4. **Reusable**
This pattern can be used for OTHER service pages:
- Cyber Security FAQ
- Mobile Apps FAQ
- Website Development FAQ

Just copy the object and change the content!

---

## 🔧 **Dynamic Features**

### 1. **Dynamic Badge**
```vue
<div v-if="faqSection.badge" :class="faqSection.badge.className">
  <svg :class="faqSection.badge.iconColor">
    <path :d="faqSection.badge.iconPath"/>
  </svg>
  <span :class="faqSection.badge.textColor">
    {{ faqSection.badge.text }}
  </span>
</div>
```

### 2. **Dynamic Title**
```vue
<h2>{{ faqSection.title }}</h2>
<p>{{ faqSection.subtitle }}</p>
```

### 3. **Dynamic Number/Icon Toggle**
```vue
<!-- Show number if enabled -->
<span v-if="faqSection.showNumbers" :class="faqSection.numberClassName">
  {{ index + 1 }}
</span>

<!-- OR show icon if numbers disabled -->
<svg v-else-if="faqSection.itemIcon">
  <path :d="faqSection.itemIcon"/>
</svg>
```

### 4. **Dynamic CTA**
```vue
<div v-if="faqSection.cta" :class="faqSection.cta.containerClassName">
  <p>{{ faqSection.cta.text }}</p>
  <NuxtLink :to="faqSection.cta.buttonLink" :class="faqSection.cta.buttonClassName">
    {{ faqSection.cta.buttonText }}
  </NuxtLink>
</div>
```

---

## 📊 **What You Can Control**

### Badge:
- ✅ Show/hide (set to `null` to hide)
- ✅ Text content
- ✅ Icon SVG path
- ✅ Colors (text + icon)
- ✅ CSS classes

### Section Header:
- ✅ Title text
- ✅ Subtitle text

### FAQ Items:
- ✅ All questions and answers
- ✅ CSS classes for each item
- ✅ Show numbers or icons
- ✅ Number badge styling
- ✅ Answer indentation

### CTA:
- ✅ Enable/disable (set to `null`)
- ✅ Text content
- ✅ Button text
- ✅ Button link
- ✅ All CSS classes

---

## 🎯 **New Title**

Changed from:
❌ **"Common Questions Answered"** (boring, passive)

To:
✅ **"Your Questions, Answered"** (direct, active, personal)

**Why Better:**
- More personal ("Your" instead of "Common")
- Active voice
- Cleaner phrasing
- More engaging

---

## 💡 **Usage Examples**

### Example 1: Minimal FAQ (No Badge, No Numbers)
```javascript
faqSection.value = {
  badge: null, // Hide badge
  title: 'FAQ',
  subtitle: 'Quick answers to your questions',
  showNumbers: false,
  itemClassName: 'collapse bg-base-200 rounded-xl',
  cta: null // Hide CTA
  // ... rest
};
```

### Example 2: Premium FAQ (Icons Instead of Numbers)
```javascript
faqSection.value = {
  badge: { /* config */ },
  title: 'Knowledge Base',
  subtitle: 'Expert answers to common queries',
  showNumbers: false,
  itemIcon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  // ... rest
};
```

### Example 3: Different CTA
```javascript
faqSection.value.cta = {
  containerClassName: 'mt-12 text-center p-8 bg-primary/10 rounded-2xl',
  text: 'Need more help?',
  buttonText: 'Chat with Support',
  buttonLink: '/support',
  buttonClassName: 'btn btn-secondary btn-lg'
};
```

---

## 🚀 **Scalability**

This pattern makes it easy to:

### 1. **Create FAQ Templates**
```javascript
const faqTemplates = {
  professional: { /* config */ },
  casual: { /* config */ },
  minimal: { /* config */ }
};

// Switch template
faqSection.value = faqTemplates.professional;
```

### 2. **Multi-language Support**
```javascript
const faqTranslations = {
  en: {
    title: 'Your Questions, Answered',
    subtitle: 'Everything you need to know',
    // ...
  },
  es: {
    title: 'Tus Preguntas, Respondidas',
    subtitle: 'Todo lo que necesitas saber',
    // ...
  }
};

// Switch language
faqSection.value = { ...faqSection.value, ...faqTranslations.es };
```

### 3. **A/B Testing**
```javascript
const variantA = {
  title: 'Your Questions, Answered',
  showNumbers: true
};

const variantB = {
  title: 'Frequently Asked Questions',
  showNumbers: false
};

// Test which performs better
faqSection.value = Math.random() > 0.5 ? variantA : variantB;
```

---

## ✅ **Implementation Checklist**

- [x] Created `faqSection` object with all config
- [x] Changed title to "Your Questions, Answered"
- [x] Made badge fully dynamic (with SVG path)
- [x] Made title/subtitle dynamic
- [x] Made item styling dynamic
- [x] Made numbers/icons toggleable
- [x] Made CTA fully configurable
- [x] Moved FAQ items into object
- [x] Tested with Chrome DevTools
- [x] Screenshot saved

---

## 📸 **Screenshots**

1. `faq-your-questions-answered.png` - New title
2. `faq-dynamic-new-title.png` - Full section view

---

## 🎉 **Summary**

**Before**:
- ❌ Hardcoded HTML
- ❌ Difficult to change
- ❌ Not reusable
- ❌ Boring title

**After**:
- ✅ Object-based configuration
- ✅ Change one object, update everything
- ✅ Fully reusable across pages
- ✅ Better title: "Your Questions, Answered"
- ✅ Professional and maintainable

**Benefits**:
1. **Faster updates** - Change config, not HTML
2. **Consistency** - Same pattern everywhere
3. **Flexibility** - Easy to customize per page
4. **Scalability** - Support themes, languages, A/B tests
5. **Maintainability** - All logic in one place

This is how **professional enterprise applications** structure their code! 🚀
