"use client";
import { useQuery } from "@tanstack/react-query";

import { getPeople } from "@/api/people/getPeople";
import Character from "@/components/Character";

import useLocalStorage from "@/hooks/useLocalStorage";
import Icon from "@/components/Icon";

import saveSvg from "@/public/assets/SVGs/save.svg";
import "./page.scss";

const Page = () => {
  const [storedCharacters, setValue] = useLocalStorage<ICharacter[]>(
    "characters",
    []
  );

  const { isPending, error, data } = useQuery({
    queryKey: ["people"],
    queryFn: async () => getPeople<ApiResponse>(),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  // console.log("data", data);

  const handleSave = (character: ICharacter) => {
    const characterUrl = character.url;

    const exists = storedCharacters.some(
      (character: ICharacter) => character.url === characterUrl
    );

    if (!exists) {
      setValue([...storedCharacters, character]);
    }
  };

  return (
    <div className="characters">
      <h2 className="title">Lista postaci</h2>

      <ul className="content">
        {data.results.map((character) => {
          return (
            <Character
              key={character.url}
              {...character}
              icon={
                <Icon
                  svg={saveSvg}
                  alt="save"
                  className="save-icon"
                  onClick={() => handleSave(character)}
                />
              }
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
