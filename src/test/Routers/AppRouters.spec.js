import { mount } from "enzyme";
import { AuthContext } from "../../Auth/AuthContext";
import { AppRouters } from "../../Routers/AppRouters";

describe("Test in AppRouter component", () => {
  it("Should show login if user in not authenticate", () => {
    const contextValue = {
      user: {
        logged: false,
      },
    };
    const container = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouters />
      </AuthContext.Provider>
    );

    expect(container).toMatchSnapshot();
    expect(container.find("h1").text().trim()).toBe("Login");
  });

  it("Should show DashBoardRoutes if user is authenticate", () => {
    const contextValue = {
      user: {
        logged: true,
        name: "licha",
      },
    };
    const container = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouters />
      </AuthContext.Provider>
    );
    //console.log("Esto vale container ", container.html());
    expect(container).toMatchSnapshot();
    expect(container.find("nav").exists()).toBeTruthy();
  });
});
