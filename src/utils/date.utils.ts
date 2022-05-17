export const formatDate = (date: Date): string =>
  date.toLocaleDateString('fr', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
