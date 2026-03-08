export const cx = (...parts: Array<string | undefined | false | null>) => {
  return parts.filter(Boolean).join(' ');
};

export const toTitleCase = (value: string) => {
  if (!value) {
    return '';
  }

  return value[0].toUpperCase() + value.slice(1);
};
