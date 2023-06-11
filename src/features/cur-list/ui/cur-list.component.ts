import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Currency } from 'shared/api';
import { CurListModel } from '..';
import { selectors, actions, types } from '../model';

@Component({
  selector: 'cur-list',
  templateUrl: './cur-list.component.html',
  styleUrls: ['./cur-list.component.css'],
})
export class CurList implements OnInit, OnDestroy {
  private timer: NodeJS.Timer;

  currencies$: Observable<Array<Currency>> = this.store.select(
    selectors.getCurrencies
  );

  constructor(private store: Store<CurListModel.CurListState>) {}

  hideListItem(name: string) {
    this.store.dispatch(actions.toggleCurVisible({ name, visible: false }));
  }

  ngOnInit() {
    this.store.dispatch({ type: types.GET_RATES });

    this.timer = setInterval(() => {
      this.store.dispatch({ type: types.GET_RATES });
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
