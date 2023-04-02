import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as Twilio from 'twilio-client';

@Component({
  selector: 'app-src-main',
  templateUrl: './src-main.component.html',
  styleUrls: ['./src-main.component.css']
})
export class SrcMainComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private msgService: ServiceService
  ) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  

  createForm() {
    this.myForm = this.formBuilder.group({
      number: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    });
  }


  sendMessage(){
    const payload = this.myForm.getRawValue();
    payload.message = "Happy new month";
    this.msgService.message(payload.number, payload.message).subscribe((res:any) =>{
      alert("Message Sent")
    })
  }

}
