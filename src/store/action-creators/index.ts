import * as UserActionCreactors from "./user";
import * as TodoActionCreactors from "./todo";

export default {
  ...UserActionCreactors,
  ...TodoActionCreactors,
};
