import { getHeroByPublisher } from "../../selectors/getHeroByPublisher";
import { heroesData } from "../fixtures/herosData";

describe("Test to getHeroByPublisher function", () => {
  it("pass publisher to function", () => {
    const heroes = getHeroByPublisher("DC Comics");

    expect(heroes.length).toBe(10);
  });
  it("no pass publisher to function return dafault marvel data", () => {
    const heroes = getHeroByPublisher();

    expect(heroes.length).toBe(10);
  });
  it("contains data inside heroes", () => {
    const heroes = getHeroByPublisher("DC Comics");
    const data = heroes.filter(
      (hero) => hero.superhero === heroesData[0].superhero
    );
    expect(data.length).toBe(1);
  });
  it("not contains data inside heroes", () => {
    const heroes = getHeroByPublisher();
    const data = heroes.filter(
      (hero) => hero.superhero === heroesData[0].superhero
    );
    expect(data.length).toBe(0);
  });
});
