import { configureStore } from "@reduxjs/toolkit";

function updateLoginReducer(state = "guest", action: { type: string }) {
  switch (action.type) {
    case "GUEST":
      return (state = "guest");
    case "USER":
      return (state = "user");
    case "SELLER":
      return (state = "seller");
  }
  return state;
}

const store = configureStore({ reducer: updateLoginReducer });

export default store;
