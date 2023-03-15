export const getImageUrl = (logo: string, logoId: number) =>
  `${
    import.meta.env.VITE_API_LOGO_BASE_URL
  }/${logo}-middle.png?logoId=${logoId}`;
