import Link from "next/link";

import { getId } from "@/utils";
import "./page.scss";
import { RoutesEnum } from "@/constants";

const Character = ({ name, url }: ICharacter) => {
  return (
    <li className="character">
      <h4 className="name">{name}</h4>

      <Link className="link" href={`${RoutesEnum.characters}/${getId(url)}`}>
        Szczegóły
      </Link>
    </li>
  );
};

export default Character;
