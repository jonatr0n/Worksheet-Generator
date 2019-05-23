import { SAVE_USERNAME } from '../actions/types';

export default function savedUsername(state = '', action) {
  switch (action.type) {
    case SAVE_USERNAME:
      return [...state, action.payload];
    default:
      return state;
  }
}
