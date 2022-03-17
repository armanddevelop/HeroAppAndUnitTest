import { authReducer } from "../../Auth/authReducer";
import { types } from "../../Types/types";

describe("test to authReducer", () => {
  const action = {
    type: types.login,
    payload: {
      name: "alicha",
    },
  };
  it("action login", () => {
    const auth = authReducer({}, action);
    const { name } = action.payload;

    expect(name).toBe(auth.name);
    expect(auth.logged).toBeTruthy();
  });
  it("return the same state if the action is not register", () => {
    const action = {
      type: "hola",
      payload: {
        name: "alicha",
      },
    };
    const auth = authReducer({}, action);

    expect(auth).toEqual({});
  });
  it("action logout", () => {
    const action = {
      type: types.logout,
    };
    const auth = authReducer({}, action);

    expect(auth.logged).toBeFalsy();
  });
});
