import { service } from "../../data.object/service.data";
import serviceReducer from "./service.reducers";

const initialState = {
  service,
};

describe("serviceReducer", () => {
  it("should return initial state", () => {
    expect(serviceReducer(undefined, {})).toEqual(initialState);
  });
});
