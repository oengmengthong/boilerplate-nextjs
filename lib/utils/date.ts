import { format, formatDistance } from 'date-fns';

export function formatDate(date: string | Date): string {
  return format(new Date(date), 'MMMM d, yyyy');
}

export function formatDateTime(date: string | Date): string {
  return format(new Date(date), 'MMMM d, yyyy h:mm a');
}

export function formatRelativeTime(date: string | Date): string {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
}

export function isValidDate(date: any): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}