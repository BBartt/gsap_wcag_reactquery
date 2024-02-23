import Link from "next/link";

import { getId, noOp } from "@/utils";
import { RoutesEnum } from "@/constants";

import saveSvg from "@/public/assets/SVGs/save.svg";

import Icon from "../Icon";

import "./page.scss";

interface CharacterProps extends ICharacter {
  handleIconClick: (character: ICharacter) => void;
}

const Character = (character: CharacterProps) => {
  const { name, url, handleIconClick } = character;

  return (
    <li className="character">
      <h4 className="name">{name}</h4>

      <Link className="link" href={`${RoutesEnum.characters}/${getId(url)}`}>
        Szczegóły
      </Link>

      <Icon
        svg={saveSvg}
        alt="save"
        className="save-icon"
        onClick={() => handleIconClick(character)}
      />
    </li>
  );
};

export default Character;
