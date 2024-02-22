"use client";
import { useQuery } from "@tanstack/react-query";

import { getPeople } from "@/api/people/getPeople";
import Character from "@/components/Character";

import "./page.scss";

const Page = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["people"],
    queryFn: async () => getPeople<ApiResponse>(),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  // console.log("data", data);

  return (
    <div className="characters">
      <h2 className="title">Lista postaci</h2>

      <ul className="content">
        {data.results.map((character) => {
          return <Character key={character.url} {...character} />;
        })}
      </ul>
    </div>
  );
};

export default Page;
