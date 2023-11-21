import { baseApi } from "./api/baseApi";
import loginModalReducer from "./features/modals/useLoginModalSlice";
import registerModalReducer from "./features/modals/useRegisterModalSlice";
import rentModalReducer from "./features/modals/useRentModalSlice";

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  registerModal: registerModalReducer,
  loginModal: loginModalReducer,
  rentModal : rentModalReducer
};
