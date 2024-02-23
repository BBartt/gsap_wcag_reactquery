import "./page.scss";

export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

const Film = ({ title, director, producer }: IFilm) => {
  return (
    <div className="film">
      <div className="title">{title}</div>

      <div className="director">{director}</div>

      <div className="producer">{producer}</div>
    </div>
  );
};

export default Film;
