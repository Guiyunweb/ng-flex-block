import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';



@NgModule({
  declarations: [LayoutComponent, NavComponent, HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
