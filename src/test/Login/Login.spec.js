import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
import { Login } from "../../Components";
import { types } from "../../Types/types";

const mockNavigate = jest.fn();
const dispatch = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));
describe("Test in Login component", () => {
  const contextValue = {
    dispatch,
  };
  const container = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={["/login"]}>
        <Login />
      </MemoryRouter>
    </AuthContext.Provider>
  );
  it("Snapshot to Login component", () => {
    expect(container).toMatchSnapshot();
  });
  it("Should run handleLogIn without path in localStorage", () => {
    const action = {
      type: types.login,
      payload: { name: "alicha" },
    };
    container.find("button").prop("onClick")();

    expect(dispatch).toHaveBeenCalledWith(action);
    expect(mockNavigate).toHaveBeenCalledWith("", { replace: true });
  });
  it("Should run handleLogIn with path in localStorage", () => {
    const pathObj = {
      pathname: "/dc",
      search: "",
      hash: "",
      state: null,
      key: "default",
    };
    const myObjString = JSON.stringify(pathObj);
    localStorage.setItem("lastPath", myObjString);
    container.find("button").prop("onClick")();

    expect(mockNavigate).toHaveBeenCalledWith(pathObj.pathname, {
      replace: true,
    });
  });
});
