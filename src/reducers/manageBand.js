import ACTIONS from "./actions";
import uuid from "uuid";

export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  switch (action.type) {
    case ACTIONS.ADD_BAND:
      const band = {
        id: uuid(),
        name: action.name
      };
      return { ...state, bands: [...state.bands, band] };

      case ACTIONS.DELETE_BAND:
        return {...state, bands: state.bands.filter(b => b.id !== action.id)}

    default:
      return state;
  }
}
