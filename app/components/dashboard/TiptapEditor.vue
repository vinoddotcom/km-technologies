<template>
  <ClientOnly>
    <div class="border border-base-content/10 rounded-2xl overflow-hidden bg-base-100">
      <!-- Toolbar -->
      <div v-if="editor" class="border-b border-base-content/10 p-2 flex flex-wrap gap-1 bg-base-200/50">
        <button
          v-for="action in toolbarActions"
          :key="action.label"
          @click="action.command"
          class="btn btn-ghost btn-xs"
          :class="action.isActive?.() ? 'btn-active text-primary' : ''"
          :title="action.label"
        >
          <span v-html="action.icon" class="w-4 h-4"></span>
        </button>
      </div>

      <!-- Editor Content -->
      <EditorContent :editor="editor" class="prose max-w-none p-6 min-h-[400px] focus:outline-none" />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';

const props = defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
    Image.configure({ inline: true }),
    Link.configure({ openOnClick: false }),
    Placeholder.configure({
      placeholder: props.placeholder || 'Start writing your blog post...',
    }),
  ],
  editorProps: {
    attributes: {
      class: 'focus:outline-none min-h-[400px]',
    },
  },
  onUpdate: () => {
    emit('update:modelValue', editor.value?.getHTML() || '');
  },
});

watch(() => props.modelValue, (newVal) => {
  if (editor.value && newVal !== editor.value.getHTML()) {
    editor.value.commands.setContent(newVal, { emitUpdate: false });
  }
});

const toolbarActions = computed(() => {
  if (!editor.value) return [];
  const e = editor.value;
  return [
    { label: 'Bold', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z"/><path d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z"/></svg>', command: () => e.chain().focus().toggleBold().run(), isActive: () => e.isActive('bold') },
    { label: 'Italic', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg>', command: () => e.chain().focus().toggleItalic().run(), isActive: () => e.isActive('italic') },
    { label: 'Strikethrough', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4H9a3 3 0 00-3 3v0a3 3 0 003 3h6a3 3 0 013 3v0a3 3 0 01-3 3H8"/><line x1="4" y1="12" x2="20" y2="12"/></svg>', command: () => e.chain().focus().toggleStrike().run(), isActive: () => e.isActive('strike') },
    { label: 'H1', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><text x="2" y="18" font-size="16" font-weight="bold">H1</text></svg>', command: () => e.chain().focus().toggleHeading({ level: 1 }).run(), isActive: () => e.isActive('heading', { level: 1 }) },
    { label: 'H2', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><text x="2" y="18" font-size="16" font-weight="bold">H2</text></svg>', command: () => e.chain().focus().toggleHeading({ level: 2 }).run(), isActive: () => e.isActive('heading', { level: 2 }) },
    { label: 'H3', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><text x="2" y="18" font-size="16" font-weight="bold">H3</text></svg>', command: () => e.chain().focus().toggleHeading({ level: 3 }).run(), isActive: () => e.isActive('heading', { level: 3 }) },
    { label: 'Bullet List', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="4" cy="6" r="1" fill="currentColor"/><circle cx="4" cy="12" r="1" fill="currentColor"/><circle cx="4" cy="18" r="1" fill="currentColor"/></svg>', command: () => e.chain().focus().toggleBulletList().run(), isActive: () => e.isActive('bulletList') },
    { label: 'Ordered List', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><text x="2" y="8" font-size="8" fill="currentColor">1</text><text x="2" y="14" font-size="8" fill="currentColor">2</text><text x="2" y="20" font-size="8" fill="currentColor">3</text></svg>', command: () => e.chain().focus().toggleOrderedList().run(), isActive: () => e.isActive('orderedList') },
    { label: 'Blockquote', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489 0 .964-.379 1.889-1.053 2.571A3.564 3.564 0 016.268 18a3.544 3.544 0 01-1.685-.679zM14.583 17.321C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489 0 .964-.379 1.889-1.053 2.571A3.564 3.564 0 0116.268 18a3.544 3.544 0 01-1.685-.679z"/></svg>', command: () => e.chain().focus().toggleBlockquote().run(), isActive: () => e.isActive('blockquote') },
    { label: 'Code Block', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>', command: () => e.chain().focus().toggleCodeBlock().run(), isActive: () => e.isActive('codeBlock') },
    { label: 'Horizontal Rule', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/></svg>', command: () => e.chain().focus().setHorizontalRule().run() },
    { label: 'Add Image', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>', command: () => { const url = prompt("Image URL:"); if (url) e.chain().focus().setImage({ src: url }).run(); } },
    { label: 'Add Link', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>', command: () => { const url = prompt("Link URL:"); if (url) e.chain().focus().setLink({ href: url }).run(); } },
    { label: 'Undo', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1,4 1,10 7,10"/><path d="M3.51 15a9 9 0 105.64-11.36L1 10"/></svg>', command: () => e.chain().focus().undo().run() },
    { label: 'Redo', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23,4 23,10 17,10"/><path d="M20.49 15a9 9 0 11-5.64-11.36L23 10"/></svg>', command: () => e.chain().focus().redo().run() },
  ];
});

onBeforeUnmount(() => {
  editor.value?.destroy();
});
</script>

<style>
.tiptap {
  outline: none;
}
.tiptap p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: oklch(var(--bc) / 0.3);
  pointer-events: none;
  height: 0;
}
.tiptap h1 { font-size: 2em; font-weight: 800; margin: 0.67em 0; }
.tiptap h2 { font-size: 1.5em; font-weight: 700; margin: 0.75em 0; }
.tiptap h3 { font-size: 1.25em; font-weight: 600; margin: 0.83em 0; }
.tiptap ul { list-style: disc; padding-left: 1.5em; }
.tiptap ol { list-style: decimal; padding-left: 1.5em; }
.tiptap blockquote { border-left: 4px solid oklch(var(--p)); padding-left: 1em; margin: 1em 0; font-style: italic; opacity: 0.8; }
.tiptap pre { background: oklch(var(--b2)); padding: 1em; border-radius: 0.5em; overflow-x: auto; font-family: monospace; }
.tiptap code { background: oklch(var(--b2)); padding: 0.1em 0.3em; border-radius: 0.2em; font-family: monospace; font-size: 0.9em; }
.tiptap img { max-width: 100%; border-radius: 0.5em; margin: 1em 0; }
.tiptap a { color: oklch(var(--p)); text-decoration: underline; }
.tiptap hr { border: none; border-top: 2px solid oklch(var(--bc) / 0.1); margin: 2em 0; }
.tiptap p { margin: 0.75em 0; }
</style>
