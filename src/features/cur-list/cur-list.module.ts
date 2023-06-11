import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurTile } from 'entities/cur-tile/';
import { TuiSvgModule } from '@taiga-ui/core';

import { CurList } from './ui';

@NgModule({
  declarations: [CurList, CurTile],
  exports: [CurList],
  imports: [BrowserModule, HttpClientModule, TuiSvgModule],
})
export class CurListModule {}
