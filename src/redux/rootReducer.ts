import loginModalReducer from "./features/modals/useLoginSlice";
import registerModalReducer from "./features/modals/useRegisterSlice";

export const rootReducer = {
  registerModal: registerModalReducer,
  loginModal: loginModalReducer,
};
