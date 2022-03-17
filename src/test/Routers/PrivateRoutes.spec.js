import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
import { DashBoardRoutes } from "../../Routers/DashBoardRoutes";
import { PrivateRoutes } from "../../Routers/PrivateRoutes";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: () => <span>You are not loggIN</span>,
}));
describe("testo to PrivateRoutes component", () => {
  it("should show the rigth component and save in local storage", () => {
    const contextValue = {
      user: {
        name: "licha",
        logged: true,
      },
    };
    Storage.prototype.setItem = jest.fn();
    const container = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoutes>
            <DashBoardRoutes />
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    console.log("esto vale container ", container.html());
    expect(container.find("h1").text().trim()).toBe("Marvel Screen");
    expect(localStorage.setItem).toBeCalled();
  });
  it("should show the navigate mock component", () => {
    const contextValue = {
      user: {
        logged: false,
      },
    };
    Storage.prototype.setItem = jest.fn();
    const container = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <PrivateRoutes>
            <DashBoardRoutes />
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(container.text().trim()).toBe("You are not loggIN");
  });
});
