import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BuildingComponent } from './building/building.component';
import { ContactComponent } from './contact/contact.component';
import { ExteriorDesignComponent } from './exterior-design/exterior-design.component';
import { HomeComponent } from './home/home.component';
import { InteriorDesignComponent } from './interior-design/interior-design.component';
import { RepairEx1Component } from './repair-ex1/repair-ex1.component';
import { RepairEx2Component } from './repair-ex2/repair-ex2.component';
import { RepairComponent } from './repair/repair.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  {path:"home", component: HomeComponent },
  {path:"about", component: AboutComponent },
  {path:"services", component: ServicesComponent },
  {path:"contact", component: ContactComponent },
  {path:"works", component: WorksComponent },
  {path:"repair", component: RepairComponent },
  {path:"building", component: BuildingComponent },
  {path:"interior-design", component: InteriorDesignComponent },
  {path:"exterior-design", component:ExteriorDesignComponent },
  {path:"repair-ex1", component:RepairEx1Component },
  {path:"repair-ex2", component:RepairEx2Component },
  {path:"",redirectTo: "home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
