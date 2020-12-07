import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {SharedModule} from '../shared/shared.module';
import { PageComponent } from './page/page.component';



@NgModule({
  declarations: [IndexComponent, PageComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RoutesModule { }
