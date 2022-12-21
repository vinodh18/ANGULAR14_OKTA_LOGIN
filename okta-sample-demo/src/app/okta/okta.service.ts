import { Injectable } from '@angular/core';
import OktaSignIn from '@okta/okta-signin-widget';

@Injectable({
  providedIn: 'root'
})
export class Okta {
  widget:any;

  constructor() {
    // this.widget = new OktaSignIn({
    //     baseUrl: 'https://dev-98595095.okta.com',
    //     clientId: '0oa7n52hf5b5Lp0sl5d7',
    //     redirectUri: 'http://localhost:4200/login/callback'
    // });
  }

  getWidget() {
    return this.widget;
  }
}