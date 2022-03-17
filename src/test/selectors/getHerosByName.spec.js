import { getHeroByName } from "../../selectors/getHerosByName";
import { heroesData } from "../fixtures/herosData";

describe("test to getHeroByName", () => {
  it("pass name argument to function", () => {
    const hero = getHeroByName(heroesData[0].superhero);

    expect(hero.length).toBe(1);
  });
  it("no pass name argument to function", () => {
    const hero = getHeroByName();

    expect(hero.length).toBe(0);
  });
});
