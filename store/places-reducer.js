import { ADD_PLACE, SET_PLACES } from './places-actions';
import Place from '../models/place';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        places: action.places.map(
          (pl) => new Place(String(pl.id), pl.title, pl.imageUri),
        ),
      };
    case ADD_PLACE:
      const newPlace = new Place(
        String(action.placeData.id),
        action.placeData.title,
        action.placeData.image,
      );

      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
