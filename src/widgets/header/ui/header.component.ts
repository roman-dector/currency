import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from 'shared/api';
import { CurListModel } from 'features/cur-list';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class Header implements OnInit, OnDestroy {
  currentDate = new Date();
  private timer: NodeJS.Timer;

  currencies$: Observable<Array<Currency>> = this.store.select(
    CurListModel.selectors.getCurrencies
  );

  curListVisible = false;

  constructor(private store: Store<CurListModel.CurListState>) {}

  toggleCurList() {
    this.curListVisible = !this.curListVisible;
  }

  addCurToList(name: string) {
    this.store.dispatch(
      CurListModel.actions.toggleCurVisible({ name, visible: true })
    );
    this.curListVisible = false;
  }

  updateDatetime() {
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.updateDatetime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
