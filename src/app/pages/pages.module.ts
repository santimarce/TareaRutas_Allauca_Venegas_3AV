import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ClientComponent } from './client/client.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    PagesComponent,
    StudentComponent,
    TeacherComponent,
    ClientComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    PagesComponent,
    StudentComponent,
    TeacherComponent
  ],
})
export class PagesModule { }
