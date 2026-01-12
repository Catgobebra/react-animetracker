const dateFormatterUS = new Intl.DateTimeFormat('en-US', {
month: 'short',
day: 'numeric',
year: 'numeric',
})

export const formatDateUS = (date: Date | string | number): string => {
  return dateFormatterUS.format(new Date(date));
};