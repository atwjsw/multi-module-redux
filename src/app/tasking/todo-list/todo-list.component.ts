import {Component} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../../store';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @select(s => s.tasking.todos) todos$: {}[];

  constructor(private ngRedux: NgRedux<IAppState>) {}

  addTodo(input) {
    if (!input.value) return;

    this.ngRedux.dispatch({type: ADD_TODO, payload: input.value});

    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({type: TOGGLE_TODO, payload: todo});
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, payload: todo});
  }
}
