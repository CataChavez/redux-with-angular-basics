import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './counter/counter.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-with-redux-app';

  counter!: number;

  constructor( 
    private store: Store<AppState>
  ) {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  increment() { 
    this.store.dispatch(actions.increment());
  }

  decrement() { 
    this.store.dispatch(actions.decrement());
  }

}
