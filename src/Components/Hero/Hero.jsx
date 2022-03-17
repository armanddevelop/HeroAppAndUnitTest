import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
const herosImages = require.context("../../assets/heros", true);

export const Hero = () => {
  const { heroId } = useParams();
  console.log("esto vael heroId ", heroId);
  const navigate = useNavigate();
  const heroData = useMemo(() => getHeroById(heroId), [heroId]);

  if (Object.entries(heroData).length === 0) {
    return <Navigate to="/" />;
  }
  const imgPath = herosImages(`./${heroData.id}.jpg`);
  const handleReturn = () => {
    const path = heroId.split("-");
    navigate(`/${path[0]}`, { replace: true });
  };
  return (
    <div className="row-mt-5">
      <h1>{heroData.characters}</h1>
      <div className="col-4">
        <img
          src={imgPath}
          alt={heroData.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{heroData.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Aleter ego:</b> {heroData.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Bio:</b>
            <p>{heroData.information}</p>
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            <p>{heroData.publisher}</p>
          </li>
          <li className="list-group-item">
            <b>First Appearence:</b>
            <p>{heroData.first_appearance}</p>
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{heroData.characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
