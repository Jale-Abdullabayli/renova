import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { RepairComponent } from './repair/repair.component';
import { BuildingComponent } from './building/building.component';
import { InteriorDesignComponent } from './interior-design/interior-design.component';
import { ExteriorDesignComponent } from './exterior-design/exterior-design.component';
import { RepairEx1Component } from './repair-ex1/repair-ex1.component';
import { RepairEx2Component } from './repair-ex2/repair-ex2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    ServicesComponent,
    WorksComponent,
    AboutComponent,
    ContactComponent,
    ServiceCategoryComponent,
    RepairComponent,
    BuildingComponent,
    InteriorDesignComponent,
    ExteriorDesignComponent,
    RepairEx1Component,
    RepairEx2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
