import type { CollectionEntry } from 'astro:content';

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
  }).format(date).replaceAll('/', '.');

export const sortNotes = (notes: CollectionEntry<'notes'>[]) =>
  notes.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

export const sortProjects = (projects: CollectionEntry<'projects'>[]) =>
  projects.sort((a, b) => a.data.order - b.data.order);
