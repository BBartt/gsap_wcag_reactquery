import { baseUrl } from "@/constants";

export const getData = async <T,>(url: string): Promise<T> => {
  const response = await fetch(`${baseUrl}/${url}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = response.json();

  return data as Promise<T>;
};
