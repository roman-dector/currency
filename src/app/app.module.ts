import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurListModule } from 'features/cur-list/';
import { Header } from 'widgets/header/';
import { store, rootEffects } from './model';
import { TuiRootModule, TuiDialogModule, TuiAlertModule } from '@taiga-ui/core';

import { AppComponent } from './ui';
import { HeaderModule } from 'widgets/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    CurListModule,
    HeaderModule,

    store,
    rootEffects,

    BrowserAnimationsModule,
    TuiRootModule,
    // TuiDialogModule,
    // TuiAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
