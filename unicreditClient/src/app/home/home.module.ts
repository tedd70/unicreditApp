import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

// Routing
import { HomeRoutingModule } from "./home-routing.module";

// Modules
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';

// Components
import { HomeComponent } from "./components/home-container/home.component";
import { HomeFormComponent } from './components/home-form/home-form.component';

@NgModule({
  declarations: [HomeComponent, HomeFormComponent],
  providers: [],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent, HomeFormComponent],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomeModule {}
