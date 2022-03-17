import { types } from "../Types/types";

// const initialState = {
//   name:"Licha",
//   logged: true
// }

export const authReducer = (state = {}, action) => {
  console.log("Esto vale action ", action);
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
