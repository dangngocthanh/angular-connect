import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {ListComponent} from "./list/list.component";
import {ReactiveFormsModule} from "@angular/forms";
import { CategoryComponent } from './category.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
    CategoryComponent
  ],
  exports: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule {
}
