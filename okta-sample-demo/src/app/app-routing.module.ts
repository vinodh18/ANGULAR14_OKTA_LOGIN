import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from './product/product.component';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
   {path: '', component:AppComponent, canActivate:[OktaAuthGuard]},
  {path: 'product', component: ProductComponent, canActivate:[OktaAuthGuard]},
  {path: 'message', component: MessageComponent, canActivate:[OktaAuthGuard]},
  {path: 'login/callback', component: OktaCallbackComponent},
  {path: '', redirectTo: '/product', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
