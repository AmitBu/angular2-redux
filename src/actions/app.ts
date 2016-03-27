import {CHANGE_TITLE} from 'constants/actions';

export function changeTitle (newValue) {
  return {
    type: CHANGE_TITLE,
    data: newValue
  }
}
