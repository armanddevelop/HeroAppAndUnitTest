import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../Components";

const mockNavigate = jest.fn();
const onSubmit = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));
const e = {
  target: {
    value: "batman",
    name: "searchText",
  },
  preventDefault: () => {},
};
describe("Test to SearchScreen component", () => {
  it("Snapshot to SearchScreen component", () => {
    const container = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    expect(container.find(".alert-info").text().trim()).toBe("Busca un heroe");
  });
  it("Should render a hero with value of query string", () => {
    const q = "Batman";
    const container = mount(
      <MemoryRouter initialEntries={[`/search?q=${q}`]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    expect(container.find("h5").text().trim()).toBe(q);
    expect(container.find("input").prop("value")).toBe(q);
  });
  it("Should render error if no coincidences", () => {
    const q = "licha";
    const container = mount(
      <MemoryRouter initialEntries={[`/search?q=${q}`]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(container.find(".alert-danger").exists()).toBeTruthy();
  });
  it("Should change the navigate to the new url", () => {
    const container = mount(
      <MemoryRouter initialEntries={[`/search`]}>
        <SearchScreen />
      </MemoryRouter>
    );
    container.find("input").simulate("change", e);
    container.find("form").prop("onSubmit")(e);

    expect(mockNavigate).toHaveBeenCalledWith(`?q=${e.target.value}`);
  });

  it("Should button search submit form", () => {
    const container = mount(
      <MemoryRouter initialEntries={[`/search`]}>
        <SearchScreen />
      </MemoryRouter>
    );
    container.find("button").prop("type", () => {
      onSubmit(e);
    });

    expect(onSubmit).not.toHaveBeenCalled();
  });
});
