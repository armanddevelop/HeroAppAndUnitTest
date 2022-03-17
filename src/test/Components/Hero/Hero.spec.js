import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Hero } from "../../../Components";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));
describe("Test in Hero component", () => {
  const container = mount(
    <MemoryRouter initialEntries={["/hero"]}>
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/" element={<h1>No Hero</h1>} />
      </Routes>
    </MemoryRouter>
  );
  it("Snapshot to Hero component  without hero params", () => {
    expect(container).toMatchSnapshot();
    expect(container.find("h1").text().trim()).toBe("No Hero");
  });
  it("Snapshot to Hero component with hero params", () => {
    const hero = "dc-batman";
    const container = mount(
      <MemoryRouter initialEntries={[`/hero/${hero}`]}>
        <Routes>
          <Route path="hero/:heroId" element={<Hero />} />
          <Route path="/" element={<h1>No Hero</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    expect(container.find("h3").text().trim()).toBe("Batman");
    expect(container.find("img").prop("src")).toBe(
      `/assets/heroes/${hero}.jpg`
    );
  });
  it("hero test handleReturn", () => {
    const hero = "dc-batman";
    const container = mount(
      <MemoryRouter initialEntries={[`/hero/${hero}`]}>
        <Routes>
          <Route path="hero/:heroId" element={<Hero />} />
          <Route path="/" element={<h1>No Hero</h1>} />
        </Routes>
      </MemoryRouter>
    );

    container.find("button").prop("onClick")();

    expect(mockNavigate).toHaveBeenCalledWith("/dc", { replace: true });
  });
});
