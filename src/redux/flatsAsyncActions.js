import {setFlats} from "./flatsReducer";
import * as flats from "../data/entities.json";

export function loadFlats() {
  return (dispatch) => {
    dispatch(setFlats(flats.response.map(el => ({...el, like: false}))));
  };
}