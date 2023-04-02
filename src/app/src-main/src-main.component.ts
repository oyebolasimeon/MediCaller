import { Component, OnInit } from '@angular/core';
// import * as Twilio from 'twilio-client';

@Component({
  selector: 'app-src-main',
  templateUrl: './src-main.component.html',
  styleUrls: ['./src-main.component.css']
})
export class SrcMainComponent implements OnInit {
 

  constructor(
    // private device: Twilio.Device
  ) {
    // const accountSid = 'your_account_sid';
    // const authToken = 'your_auth_token';

    // this.device = new Twilio.Device(token);
    // Twilio.Device.
   }

  ngOnInit(): void {
  }

  // makeCall() {
  //   const params = {
  //     To: '+2349017820944',
  //   };
  //   this.device.connect(params);
  // }


  sendMessage(){
    
  }

}
