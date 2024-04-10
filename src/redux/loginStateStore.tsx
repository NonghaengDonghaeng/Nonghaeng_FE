import { configureStore } from "@reduxjs/toolkit";

function updateLoginReducer(state = false, action: { type: string }) {
  switch (action.type) {
    case "LOGIN":
      return (state = true);
    case "LOGOUT":
      localStorage.removeItem("token");
      return (state = false);
  }
}

const store = configureStore({ reducer: updateLoginReducer });

export default store;
