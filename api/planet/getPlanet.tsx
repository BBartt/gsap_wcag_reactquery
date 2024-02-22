import { baseUrl } from "@/constants";

export const getPlanet = async <T,>(id: number): Promise<T> => {
  const response = await fetch(baseUrl + "planets/" + id);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = response.json();

  return data as Promise<T>;
};
