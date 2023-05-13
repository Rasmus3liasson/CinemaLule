import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "./style.module.scss";

export default function SearchInput() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState<string[]>([]);

  //temporary data should include movie title and image from database that will be retrieved from the comment code
  const data: string[] = [
    "End Game",
    "Mario",
    "Maria",
    "maridsdteo",
    "thereo",
    "Maio",
    "Maio",
    "Maio",
    "Maio",
    "fight",
    "Fight Club",
    "The Shawshank Redemption",
  ];

  //filter and show result that match value
  const manageInput = (event: { target: { value: string } }) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    if (inputValue.length >= 2) {
      const filteredResults = data.filter((input) =>
        input.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchResult(filteredResults);
    } else {
      setSearchResult([]);
    }
  };

  return (
    <form className="d-flex p-2 my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Sök"
        aria-label="Search"
        value={searchInput}
        onChange={manageInput}
      />
      {/* condition so not show dropdown */}
      {searchResult.length > 0 && (
        <div className={style.dropdownMenu}>
          <ul>
            {searchResult.map((movieDetails) => (
              <li key={movieDetails}>
                <Link
                  className="dropdown-item"
                  /* need to add correct id from database movieTitle variable */
                  href="/movies/id"
                  onClick={() => setSearchInput(movieDetails)}
                >
                  <p>{movieDetails}</p>
                  {/* temporarly image waiting on poster from database */}
                  <Image
                    src={"/dummy.jpg"} //movieImage varaible
                    alt="poster of movie"
                    width={150}
                    height={150}
                  ></Image>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* if no matching results */}
      {searchInput.length > 1 && searchResult.length === 0 && (
        <div className={`${style.dropdownMenu} ${style.noMatch}`}>
          <ul>
            <li className="no-match">Ingen matchning</li>
          </ul>
        </div>
      )}
    </form>
  );
}
