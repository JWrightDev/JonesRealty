import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Ripple, Input, initTE, Validation, Alert } from "tw-elements";
import emailjs from '@emailjs/browser';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit{

  form: FormGroup = this.fb.group({
    from_name: '',
    from_email: '',
    message: ''
  });


  constructor(private fb: FormBuilder){

  }

  ngOnInit() {
    initTE({ Ripple, Input, Validation, Alert });
  }
  ngAfterViewInit() {
    let captchaCallback = function(){
      grecaptcha.render("recaptcha", {'sitekey': '6Lc7w7goAAAAAJ1o4EfcPOYPvF7U89eYpX0G8wDw', 'theme': 'dark'});
    }
  }

  async send(){
    console.log(grecaptcha.getResponse());
    if(grecaptcha.getResponse() == ""){
      // @ts-ignore
      document.getElementById("requiredCaptcha").classList.remove('hidden');
      // @ts-ignore
      document.getElementById("requiredCaptcha").classList.add('block');
      return;
    }
    // let response = await emailjs.send("service_ftcuz0q","template_so4m40t",{
    //   from_name: this.form.value.from_name,
    //   message: this.form.value.message,
    //   reply_to: this.form.value.from_email,
    //   "g-recaptcha-response": grecaptcha.getResponse()
    // }, "T-56xGEu6ILPpIZ-U");

    alert('Your message has been sent!');
    this.form.reset();
  }



}
