
import {ADD_TODO, CLEAR_TODOS, REMOVE_TODO, TOGGLE_TODO} from './actions';

export interface ITaskingState {
  todos: {id: number, title: string}[];
  lastUpdate?: Date;
}

export const TASKING_INITIAL_STATE: ITaskingState = {
  todos: []
};

export class TodoActions {
  constructor(private state, private action) {}

  addTodo(): ITaskingState {
    const newTodo = { id: this.state.todos.length + 1, title: this.action.payload};
    const todos = [...this.state.todos, newTodo];
    return {todos: todos.slice(0), lastUpdate: new Date()};
  }

  toggleTodo(): ITaskingState {
    const toggled = this.state.todos.find((t) => t.id === this.action.payload.id);
    toggled.isCompleted = !toggled.isCompleted;
    return {todos: this.state.todos.slice(0), lastUpdate: new Date()};
  }

  removeTodo(): ITaskingState {
    this.state.todos = this.state.todos.filter((t) => t.id !== this.action.payload.id);
    return {todos: this.state.todos.slice(0), lastUpdate: new Date()};
  }

  clearTodos(): ITaskingState {
    return {todos: [], lastUpdate: new Date()};
  }

}

export function taskReducer(state: ITaskingState = TASKING_INITIAL_STATE, action): ITaskingState {

  const actions = new TodoActions(state, action);

  switch (action.type) {
    case ADD_TODO: return actions.addTodo();
    case TOGGLE_TODO: return actions.toggleTodo();
    case REMOVE_TODO: return actions.removeTodo();
    case CLEAR_TODOS: return actions.clearTodos();
    default:
      return state;
  }
}
