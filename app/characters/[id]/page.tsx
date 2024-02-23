"use client";
import { useQueries, useQuery } from "@tanstack/react-query";

import { getFilms } from "@/api/films/getFilms";
import { getId } from "@/utils";
import Film, { IFilm } from "@/components/Film";
import Species from "@/components/Species";
import Homeworld from "@/components/Homeworld";

import "./page.scss";
import { getData } from "@/api/getData";

interface Props {
  params: { id: string };
}

const Page = ({ params }: Props) => {
  const {
    isPending: personIsPending,
    error: personError,
    data: personData,
  } = useQuery({
    queryKey: ["person"],
    queryFn: () => getData<ICharacter>("people/" + params.id),
  });

  // console.log("personData", personData);

  const filmsList = useQueries({
    queries: personData?.films
      ? personData.films.map((film) => {
          return {
            queryKey: ["film", film],
            queryFn: () => getFilms<IFilm>(getId(film)),
          };
        })
      : [],
  });

  // console.log("filmsList", filmsList);

  if (personIsPending) return "Loading...";

  if (personError) return "An error has occurred: " + personError.message;

  const { name, gender, birth_year } = personData;

  return (
    <div className="character-page">
      <h4 className="name">Imię: {name}</h4>

      <div className="gender">Płeć: {gender}</div>
      <Species id={getId(personData?.species[0] ?? "")} />
      <Homeworld id={getId((personData as ICharacter)?.homeworld ?? "")} />
      <div className="birth_year">Rok urodzenia: {birth_year}</div>

      <div className="films">
        {filmsList?.map((film, index) => {
          const isPending = film.isPending;

          return isPending ? (
            "pending"
          ) : (
            <Film key={index} {...(film?.data as IFilm)} />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
