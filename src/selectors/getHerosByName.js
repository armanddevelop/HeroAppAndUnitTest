import { heroes } from "../data/heroes";

export const getHeroByName = (name = "") => {
  console.log("get hero by name called");
  const cleanName = name.toLocaleLowerCase();
  const heroName = heroes.find(
    (hero) =>
      hero.alter_ego.toLocaleLowerCase() === cleanName ||
      hero.superhero.toLocaleLowerCase() === cleanName
  );
  if (!heroName) return [];
  return [heroName];
};
