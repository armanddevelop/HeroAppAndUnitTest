import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useSearch } from "../../Hooks/useSearch";
import { getHeroByName } from "../../selectors/getHerosByName";
import { HeroCard } from "../Hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const initialState = {
    searchText: q,
  };
  const { values, handleInputChange } = useSearch(initialState);
  const { searchText } = values;
  const heroInfo = useMemo(() => getHeroByName(q), [q]);
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Serach by Hero name"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={(e) => handleInputChange(e)}
              value={searchText}
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">Busca un heroe</div>
          ) : (
            heroInfo.length === 0 && (
              <div className="alert alert-danger">No hay resultados</div>
            )
          )}
          {heroInfo.map((hero) => (
            <HeroCard {...hero} key={hero.id} />
          ))}
        </div>
      </div>
    </>
  );
};
