import { configureStore } from "@reduxjs/toolkit";

function updateLoginReducer(
  loginState = { state: false, role: "GUEST_USER" },
  action: { type: string }
) {
  switch (action.type) {
    case "GUEST_USER":
      return (loginState = { state: false, role: "GUEST_USER" });
    case "USER":
      return (loginState = { state: true, role: "USER" });
    case "SELLER":
      return (loginState = { state: true, role: "SELLER" });
  }
  return loginState;
}

const store = configureStore({ reducer: updateLoginReducer });

export default store;
