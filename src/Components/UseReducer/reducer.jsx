import initialState from "./InitialState.jsx";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        modalMessage: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
