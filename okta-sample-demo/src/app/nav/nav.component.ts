import { Component, OnInit, Inject } from '@angular/core';
import {AppComponent} from '../app.component';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import {IDToken, OktaAuth } from '@okta/okta-auth-js';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  oktaSignIn:any;
  user:any;
  claims: any;
  constructor(private appComponent: AppComponent,
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth, 
    public authService: OktaAuthStateService) { }

  async ngOnInit() {
    console.log("authService", this.authService);
    // const idToken: IDToken = await this.oktaAuth.tokenManager.get('idToken') as IDToken;
    // this.claims = Object.entries(idToken.claims).map(entry => ({ name: entry[0], value: entry[1] }));
  
  }
 async logout() {
   // this.appComponent.logout();
   await this.oktaAuth.signOut();
    // this.oktaSignIn.authClient.signOut(() => {
    //   this.user = undefined;
    //   this.appComponent.showLogin();
    // });
  }

}
