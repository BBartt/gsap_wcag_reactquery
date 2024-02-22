import Link from "next/link";

import { getId } from "@/utils";
import "./page.scss";

const Character = ({ name, url }: ICharacter) => {
  return (
    <li className="character">
      <h4 className="name">{name}</h4>

      <Link className="link" href={"character/" + getId(url)}>
        Szczegóły
      </Link>
    </li>
  );
};

export default Character;
