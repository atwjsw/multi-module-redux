

import {ADD_TODO, CLEAR_TODOS, REMOVE_TODO, TOGGLE_TODO} from './tasking/actions';
import {ITaskingState, TASKING_INITIAL_STATE, taskReducer, TodoActions} from './tasking/store';
import {IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer} from './messaging/store';
import {combineReducers} from "redux";

export interface IAppState {
  tasking: ITaskingState;
  messaging: IMessagingState;
}

export const INITIAL_STATE: IAppState = {
  tasking: TASKING_INITIAL_STATE,
  messaging: MESSAGING_INITIAL_STATE
};

export const rootReducer = combineReducers<IAppState>({
  tasking: taskReducer,
  messaging: messagingReducer
});
