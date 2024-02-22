export const getId = (url: string) => {
  const trimmedUrl = url.endsWith("/") ? url.slice(0, -1) : url;

  const parts = trimmedUrl.split("/");
  const id = parts[parts.length - 1];

  return id;
};
