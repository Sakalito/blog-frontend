export const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString('fr', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
