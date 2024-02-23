import Link from "next/link";

import { getId } from "@/utils";
import { RoutesEnum } from "@/constants";

import "./page.scss";

interface CharacterProps extends Pick<ICharacter, "name" | "url"> {
  icon?: JSX.Element;
}

const Character = (character: CharacterProps) => {
  const { name, url, icon } = character;

  return (
    <li className="character">
      <h4 className="name">{name}</h4>

      <Link className="link" href={`${RoutesEnum.characters}/${getId(url)}`}>
        Szczegóły
      </Link>

      {icon && icon}
    </li>
  );
};

export default Character;
