import { BUY_CAKE, RESTOCK_CAKE } from "../constants/CakeConstants";

const initialState = {
  cakes: 10,
  // message -> da se dodade variabla koja koga ke se klikne povekje torti nego sto ima da prikaze poraka za greshka
  // primer: buy 3 cakes a ima samo dve -> ovoj massage ke ispecati na ekran -> only two cakes left not enough cakes
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        cakes: state.cakes - action.payload,
      };
    case RESTOCK_CAKE:
      return {
        ...state,
        cakes: state.cakes + action.payload,
      };
    default:
      return state;
  }
};

export default CakeReducer;
