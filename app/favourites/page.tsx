"use client";
import Character from "@/components/Character";

import useLocalStorage from "@/hooks/useLocalStorage";
import Icon from "@/components/Icon";
import removeSvg from "@/public/assets/SVGs/remove.svg";

import "./page.scss";

const Page = () => {
  const [storedCharacters, setValue] = useLocalStorage<ICharacter[]>(
    "characters",
    []
  );

  const handleRemove = (newCharacter: ICharacter) => {
    const newCharacterUrl = newCharacter.url;

    setValue(
      storedCharacters.filter(
        (character: ICharacter) => character.url !== newCharacterUrl
      )
    );
  };

  return (
    <div className="favourites">
      <h2 className="title">Ulubione postacie</h2>

      <ul className="content">
        {storedCharacters.map((character: ICharacter) => {
          return (
            <Character
              key={character.url}
              {...character}
              icon={
                <Icon
                  svg={removeSvg}
                  alt="save"
                  className="save-icon"
                  onClick={() => handleRemove(character)}
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
