import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
import { Navbar } from "../../Components";
import { types } from "../../Types/types";

const mockNavigate = jest.fn();
const dispatch = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));
describe("Test to Nabar Component", () => {
  const contextValue = {
    user: {
      name: "licha",
    },
    dispatch,
  };
  const container = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={["/dc"]}>
        <Navbar />
      </MemoryRouter>
    </AuthContext.Provider>
  );
  it("Snapshot to Navbar component", () => {
    expect(container).toMatchSnapshot();
    expect(container.find(".text-info").text().trim()).toBe(
      contextValue.user.name
    );
  });
  it("Should execute handleLogOut", () => {
    const action = {
      type: types.logout,
    };
    container.find("button").prop("onClick")();

    expect(mockNavigate).toHaveBeenCalledWith("/login", { replace: true });
    expect(dispatch).toHaveBeenCalledWith(action);
  });
});
