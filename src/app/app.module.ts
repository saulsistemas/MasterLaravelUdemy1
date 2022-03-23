import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { PipesAngularComponent } from './02pipes/pipes-angular/pipes-angular.component';
import { DirectivaNgIfComponent } from './03directivas/directiva-ng-if/directiva-ng-if.component';
import { DirectivaNgSwitchComponent } from './03directivas/directiva-ng-switch/directiva-ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    PipesAngularComponent,
    DirectivaNgIfComponent,
    DirectivaNgSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
