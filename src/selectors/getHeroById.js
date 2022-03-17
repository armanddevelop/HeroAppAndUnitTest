import { heroes } from "../data/heroes";

export const getHeroById = (heroId) => {
  const heroInfo = heroes.find((hero) => hero.id === heroId);
  console.log("Me estoy ejecuntando");
  if (!heroInfo) return {};
  return heroInfo;
};
