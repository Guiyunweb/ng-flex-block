import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { HeaderComponent } from './layout/header/header.component';
import {AppRoutingModule} from '../routes/app-routing.module';
import { FooterComponent } from './layout/footer/footer.component';



@NgModule({
  declarations: [LayoutComponent, NavComponent, HeaderComponent, FooterComponent],
    imports: [
        CommonModule,
        AppRoutingModule
    ]
})
export class ThemeModule { }
