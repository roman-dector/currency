import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiSvgModule } from '@taiga-ui/core';
import { Header } from './ui';

@NgModule({
  declarations: [Header],
  exports: [Header],
  imports: [BrowserModule, TuiSvgModule],
})
export class HeaderModule {}
