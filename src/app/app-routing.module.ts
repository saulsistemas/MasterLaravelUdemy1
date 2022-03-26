
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './06routing/compras/compras.component';
import { InicioComponent } from "./06routing/inicio/inicio.component";
import { VentasComponent } from './06routing/ventas/ventas.component';
import { ListadoClientitosComponent } from './08http/clientitos/listado-clientitos/listado-clientitos.component';
import { IniciosComponent } from './08http/inicios/inicios.component';

const routes: Routes = [
    //{path:'',component:InicioComponent},
    {path:'ventas',component:VentasComponent},
    {path:'compras',component:ComprasComponent},
    {path:'',component:IniciosComponent},
    {path:'clientitos',component:ListadoClientitosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
