import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesAngularComponent } from './02pipes/pipes-angular/pipes-angular.component';
import { DirectivaNgIfComponent } from './03directivas/directiva-ng-if/directiva-ng-if.component';
import { DirectivaNgSwitchComponent } from './03directivas/directiva-ng-switch/directiva-ng-switch.component';
import { DirectivaNgForComponent } from './03directivas/directiva-ng-for/directiva-ng-for.component';
import { DirectivaNgClassComponent } from './03directivas/directiva-ng-class/directiva-ng-class.component';
import { DirectivaNgStyleComponent } from './03directivas/directiva-ng-style/directiva-ng-style.component';
import { PadreComponent } from './04jerarquia/padre/padre.component';
import { HijoComponent } from './04jerarquia/hijo/hijo.component';
import { ListadoClientesComponent } from './05servicios/clientes/listado-clientes/listado-clientes.component';
import { CrearClientesComponent } from './05servicios/clientes/crear-clientes/crear-clientes.component';
import { InicioComponent } from './06routing/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { VentasComponent } from './06routing/ventas/ventas.component';
import { ComprasComponent } from './06routing/compras/compras.component';
import { NavComponent } from './06routing/nav/nav.component';
import { CrearClientsComponent } from './07formularios/clientes/crear-clients/crear-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    PipesAngularComponent,
    DirectivaNgIfComponent,
    DirectivaNgSwitchComponent,
    DirectivaNgForComponent,
    DirectivaNgClassComponent,
    DirectivaNgStyleComponent,
    PadreComponent,
    HijoComponent,
    ListadoClientesComponent,
    CrearClientesComponent,
    InicioComponent,
    VentasComponent,
    ComprasComponent,
    NavComponent,
    CrearClientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
