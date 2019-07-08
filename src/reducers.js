import * as constants from './reduxconstants';

const initialState = {
   solved: false,
   moveCounter: 0,
   boardState:
     [1, 2, 3, 4,
       5, 6, 7, 8,
       9, 10, 11, 0,
       13, 14, 15, 12],
   squareClicked: new Array(16).fill(false),
   resetTimer: false,
   showNewGameModal: false
}

export const showModal = (state=initialState, action={}) => {
   switch(action.type) {
      case constants.CLICK_NEWGAME_BUTTON:
         return Object.assign({}, state, {showNewGameModal: true})
      default:
         throw new Error("Invalid action")
   }
}