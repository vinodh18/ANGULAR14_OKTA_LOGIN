import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { OktaAuthGuard, OktaAuthModule, OktaCallbackComponent, OKTA_CONFIG } from '@okta/okta-angular';
import { Router, RouterModule, Routes } from '@angular/router';
import { OktaAuth } from '@okta/okta-auth-js';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';
import myAppConfig from './config/my-app-config';
import { MessageComponent } from './message/message.component';

const oktaAuth = new OktaAuth(myAppConfig.oidc);

// const appRoutes: Routes = [
//   {path: 'product', component: ProductComponent, canActivate:[OktaAuthGuard]},
//   {path: 'message', component: MessageComponent, canActivate:[OktaAuthGuard]},
//   {path: 'login/callback', component: OktaCallbackComponent},
//   {path: 'product', redirectTo: '/product', pathMatch:'full'}
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OktaAuthModule,
    // RouterModule.forRoot(appRoutes),
  ],
  providers: [
    // { 
    //   provide: OKTA_CONFIG, 
    //   useFactory: () => {
    //     const oktaAuth = new OktaAuth(myAppConfig.oidc);
    //     console.log("oktaAuth", oktaAuth);
    //     return {
    //       oktaAuth,
    //       onAuthRequired: (oktaAuth: OktaAuth, injector: Injector) => {
    //         const triggerLogin = () => {
    //           // Redirect the user to your custom login page
    //           const router = injector.get(Router);
    //           //router.navigate(['/product']);
              
    //         };
    //         if (!oktaAuth.authStateManager.getPreviousAuthState()?.isAuthenticated) {
    //           // App initialization stage
    //           triggerLogin();
    //         } else {
    //          
    //           // Ask the user to trigger the login process during token autoRenew process
    //           // const modalService = injector.get(SuiModalService);
    //           // modalService
    //           //   .open(new ConfirmModal("Do you want to re-authenticate?", "Auth required", "Yes", "No"))
    //           //   .onApprove(triggerLogin)
    //           //   .onDeny(() => {});
    //         }
    //       }  
    //     }
    //   }
    // },
    { provide: OKTA_CONFIG, useValue: { oktaAuth } },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
