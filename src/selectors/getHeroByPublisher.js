import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher = "Marvel Comics") => {
  const validPublishers = ["Marvel Comics", "DC Comics"];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`The ${publisher} is not valid`);
  }
  const heroByPublisher = heroes.filter((hero) => hero.publisher === publisher);
  return heroByPublisher;
};
