import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  activeCard: null,
  cards: [],
  displayedCards: [],
};

const cardSlice = createSlice ({
  name: "cards",
  initialState,
  reducers: {
    
    setActiveCard(state, action) {
      console.log("Added card", action.payload);
      state.activeCard = action.payload
    },

    setDisplayedCards(state, action) {
      state.displayedCards = action.payload
    },

    addCard(state, action) {

      console.log("Added card", action.payload);
      state.cards.push(action.payload);
      state.displayedCards.push(action.payload);
    },
  },
});

export const {setActiveCard, addCard } = cardSlice.actions;

export default cardSlice.reducer;