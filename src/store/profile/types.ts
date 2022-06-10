import { CHANGE_NAME, TOGGLE_PROFILE } from './actions';

export type ProfileActions = ToggleProfile | ChangeName;

export interface ToggleProfile {
  type: typeof TOGGLE_PROFILE;
}

export interface ChangeName {
  type: typeof CHANGE_NAME;
  name: string;
}
