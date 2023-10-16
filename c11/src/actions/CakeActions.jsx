import { BUY_CAKE, RESTOCK_CAKE } from "../constants/CakeConstants";

export const buyCake = (numOfCakes) => {
  return {
    type: BUY_CAKE,
    payload: numOfCakes,
  };
};

export const restockCakes = () => {
  return {
    type: RESTOCK_CAKE,
    payload: 10,
  };
};
