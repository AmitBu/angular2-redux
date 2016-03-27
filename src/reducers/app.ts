import {CHANGE_TITLE} from "../constants/actions";
const initialState = {title: 'Angular2 and Redux'};

export function app(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return Object.assign({}, state, {title: action.data})
  }
  return state;
}
