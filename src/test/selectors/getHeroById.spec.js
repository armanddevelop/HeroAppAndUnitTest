import { getHeroById } from "../../selectors/getHeroById";
import { heroesData } from "../fixtures/herosData";

describe("test to getHeroById function", () => {
  it("getHeroById pass valid argument", () => {
    const hero = getHeroById("dc-batman");

    expect(hero).toStrictEqual(heroesData[0]);
  });
  it("getHeroById no data found", () => {
    const hero = getHeroById("licha");

    expect(hero).toStrictEqual({});
  });
});
