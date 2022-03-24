
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './06routing/compras/compras.component';
import { InicioComponent } from "./06routing/inicio/inicio.component";
import { VentasComponent } from './06routing/ventas/ventas.component';

const routes: Routes = [
    {path:'',component:InicioComponent},
    {path:'ventas',component:VentasComponent},
    {path:'compras',component:ComprasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
