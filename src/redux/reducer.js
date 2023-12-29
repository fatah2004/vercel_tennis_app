import { ActionTypes } from "./actions";
// redux/reducer.js
const initialState = {
  compteur1: 0,
  compteur2: 0,
  paused:true
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT1:
      return { ...state,
        compteur1:state.compteur1+15,
       };
        case ActionTypes.INCREMENT2:
          return { ...state, compteur2:state.compteur2+15,
           };
        case ActionTypes.MAKEPAUSE:
          return { ...state, paused:!state.paused,
           };
        case ActionTypes.RESTART:
          return { ...state, compteur1:0,
              compteur2:0
            ,
                  paused:true
           };

    default:
      return state;
  }
};

export default counterReducer;
