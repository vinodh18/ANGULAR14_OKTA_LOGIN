import { Component, ChangeDetectorRef, OnInit, Inject } from '@angular/core';
import { Okta } from './okta/okta.service';
import * as OktaSignIn from '@okta/okta-signin-widget';
import myAppConfig from './config/my-app-config';
import { OktaAuth } from '@okta/okta-auth-js';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user:any;
  oktaSignIn:any;

  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth, 
  public authService: OktaAuthStateService,
   private okta: Okta, private changeDetectorRef: ChangeDetectorRef) {
    //this.oktaSignIn = okta.getWidget();
    this.oktaSignIn = new OktaSignIn({
      logo: 'assets/okta.png',
      // features: {
      //   registration: false
      // },
      //  baseUrl: myAppConfig.oidc.baseUrl,
        clientId: myAppConfig.oidc.clientId,
        redirectUri: myAppConfig.oidc.redirectUri,
      authParams: {
        issuer: myAppConfig.oidc.issuer,
        scopes: myAppConfig.oidc.scopes
      }
    })
  }

  showLogin(): void {
    // this.oktaSignIn.renderEl({el: '#okta-login-container'}, (response:any) => {
    //   if (response.status === 'SUCCESS') {
    //     console.log("Respon", response);
    //     this.user = response.tokens.idToken.claims.email;
    //      this.oktaSignIn.remove();
    //     this.changeDetectorRef.detectChanges();
    //   }
    // });
  }

  // async ngOnInit(): Promise<void> {
  //   try {
  //     this.user = await this.oktaSignIn.authClient.token.getUserInfo();
  //   } catch (error) {
  //     this.showLogin();
  //   }
  // }

  async ngOnInit(): Promise<void> {
    try {
      this.user = await this.oktaSignIn.authClient.token.getUserInfo();
      console.log("TTTT", this.user);
    } catch (error) {
      this.showLogin();
    }
  }
  
  logout(): void {
    this.oktaSignIn.authClient.signOut(() => {
      this.user = undefined;
      this.showLogin();
    });
  }
}
