import { baseUrl } from "@/constants";

export const getPeople = async <T,>(): Promise<T> => {
  const response = await fetch(baseUrl + "people");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = response.json();

  return data as Promise<T>;
};
