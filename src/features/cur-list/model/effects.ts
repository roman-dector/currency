import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CurrencyService } from 'shared/api';

import * as types from './types';
import * as actions from './actions';

@Injectable()
export class CurListEffects {
  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(types.GET_RATES),
      mergeMap(() =>
        this.currencyService.getCurrencyRates().pipe(
          map((rates) => {
            return actions.getRatesSuccess(rates);
          }),
          catchError(() => {
            return EMPTY;
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {}
}
