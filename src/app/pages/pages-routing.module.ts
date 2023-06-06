import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { PagesComponent } from './pages.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';


const routes:Routes = [
  //rutas protegidas
  {path:'dashboard',
   component:PagesComponent,
   children:[  
   {path:'', component:DashboardComponent},  
   {path:'product', component:ProductComponent},  
   {path:'category', component:CategoryComponent},
   {path: 'student', component:StudentComponent},
   {path: 'teacher', component:TeacherComponent},



   {path:'', redirectTo:'/dashboard', pathMatch:'full'},  
   //{path:'**', component:NoPagesFoundComponent},  
  ]},
  ]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
