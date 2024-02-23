import { RoutesEnum } from "@/constants";
import Link from "next/link";

import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="ul">
          <li className="li">
            <Link href={RoutesEnum.homePage}>Strona domowa</Link>
          </li>
          <li className="li">
            <Link href={RoutesEnum.characters}>Postacie</Link>
          </li>
          <li className="li">
            <Link href={RoutesEnum.favourites}>Ulubione</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
