import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,JsonpModule } from '@angular/http'
import {ControlBarComponent} from './control-bar/control-bar.component';
import {ListComponent} from './list/list.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,JsonpModule ],
  declarations: [ AppComponent,BreadcrumbComponent,ListComponent,ControlBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
