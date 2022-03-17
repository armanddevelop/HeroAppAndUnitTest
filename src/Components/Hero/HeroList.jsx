import PropTypes from "prop-types";
import { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroList = useMemo(() => getHeroByPublisher(publisher), [publisher]);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {heroList.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
