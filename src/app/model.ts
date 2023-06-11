import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CurListModel } from 'features/cur-list';

export const store = StoreModule.forRoot({
  [CurListModel.CUR_LIST_FEATURE_KEY]: CurListModel.reducer,
});

export const rootEffects = EffectsModule.forRoot(
  CurListModel.effects.CurListEffects
);
