import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
import { DashBoardRoutes } from "../../Routers/DashBoardRoutes";

describe("Test to DashBoardRoutes component", () => {
  it("Should mount the component home", () => {
    const contextValue = {
      user: {
        name: "licha",
        logged: true,
      },
    };
    const container = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <DashBoardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(container).toMatchSnapshot();
    expect(container.find("nav").exists()).toBeTruthy();
    expect(container.find(".text-info").text().trim()).toBe(
      contextValue.user.name
    );
    expect(container.find("h1").text().trim()).toBe("Marvel Screen");
  });
  it("Should mount the component DC", () => {
    const contextValue = {
      user: {
        name: "licha",
        logged: true,
      },
    };
    const container = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/dc"]}>
          <DashBoardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(container).toMatchSnapshot();
    expect(container.find("h1").text().trim()).toBe("DC Screen");
  });
  it("Should mount the component SearchScreen", () => {
    const contextValue = {
      user: {
        name: "licha",
        logged: true,
      },
    };
    const container = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search"]}>
          <DashBoardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(container).toMatchSnapshot();
    expect(container.find("h1").text().trim()).toBe("Search Screen");
  });
});
