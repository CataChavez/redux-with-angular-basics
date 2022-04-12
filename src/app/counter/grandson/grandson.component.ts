import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-grandson',
  templateUrl: './grandson.component.html',
  styles: [
  ]
})
export class GrandsonComponent implements OnInit {

  counter!: number;

  constructor(
    private store: Store<{ counter: number }>  
  ) { }

  ngOnInit(): void {
    this.store.subscribe(state => { this.counter = state.counter });
  }

  reset() {
    this.store.dispatch({ type: '[Counter] Reset' });
  }

}
