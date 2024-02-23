"use client";
import { RoutesEnum } from "@/constants";
import Link from "next/link";

import "./styles.scss";
import useLocalStorage from "@/hooks/useLocalStorage";

const Header = () => {
  const [storedCharacter] = useLocalStorage<ICharacter[]>("characters", []);

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
            <Link href={RoutesEnum.favourites} suppressHydrationWarning>
              Ulubione ({storedCharacter.length})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
