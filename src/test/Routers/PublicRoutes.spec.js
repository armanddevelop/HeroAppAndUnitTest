import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
import { Login } from "../../Components";
import { PublicRoutes } from "../../Routers/PublicRoutes";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => <span>Home</span>,
}));
describe("Test for PublicRoutes component", () => {
  it("Should show login component", () => {
    const contextValue = {
      user: {
        logged: false,
      },
    };
    const container = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    console.log("Esto vale container ", container.html());

    expect(container.find("h1").text().trim()).toBe("Login");
  });
  it("Should show home component", () => {
    const contextValue = {
      user: {
        logged: true,
      },
    };
    const container = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(container.text().trim()).toBe("Home");
  });
});
