import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { HeroCard } from "../../../Components/Hero/HeroCard";

describe("Test to HeroCard", () => {
  const hero = {
    id: "dc-batman",
    superhero: "batman",
    publisher: "DC Comics",
    alter_ego: "paquito",
    first_appearance: "1925",
    characters: "bruce wayne",
  };
  const container = shallow(<HeroCard {...hero} />);
  it("SnapShot to HeroCard component", () => {
    expect(toJson(container)).toMatchSnapshot();
  });
  it("alter_ego label", () => {
    const hero = {
      id: "dc-batman",
      superhero: "batman",
      publisher: "DC Comics",
      alter_ego: "bruce wayne",
      first_appearance: "1925",
      characters: "bruce wayne",
    };
    const container = shallow(<HeroCard {...hero} />);
    const textMuted = container.find(".text-muted").length;
    expect(textMuted).toBe(1);
  });
  it("alter ego label", () => {
    const hero = {
      id: "dc-batman",
      superhero: "batman",
      publisher: "DC Comics",
      alter_ego: "bruce wayne",
      first_appearance: "1925",
      characters: "bruce wayne",
    };
    const container = shallow(<HeroCard {...hero} />);
    const textMuted = container.find(".text-muted").length;
    expect(textMuted).toBe(1);
  });
  it("characters label", () => {
    const textMuted = container.find(".text-muted").length;
    expect(textMuted).toBe(2);
  });
  it("link label", () => {
    const link = container.find("Link").exists();
    expect(link).toBeTruthy();
  });
});
