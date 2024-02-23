import { baseUrl } from "@/constants";

export const getFilms = async <T,>(id: string): Promise<T> => {
  const response = await fetch(`${baseUrl}films/${id}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = response.json();

  return data as Promise<T>;
};
