"use client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import styles from "./page.module.css";

const queryClient = new QueryClient();

const Test = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["people"],
    queryFn: () =>
      fetch("https://swapi.dev/api/people/").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log("data", data);

  return "test";
};

export default function Home() {
  return (
    <main className={styles.main}>
      <QueryClientProvider client={queryClient}>
        <Test />
      </QueryClientProvider>
    </main>
  );
}
