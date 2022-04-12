import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styles: [
  ]
})
export class ChildrenComponent implements OnInit {

  counter!: number;


  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  multiply() {
    this.store.dispatch(actions.multiply({ value: 2 }));
  }
  
  divide() {
    this.store.dispatch(actions.divide({ value: 2 }));
  }  

}
