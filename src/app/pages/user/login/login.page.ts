import { UserService } from './../../../services/user/user.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private formbuilder : FormBuilder;
  form : FormGroup;

  constructor(
    private router: Router,
    formbuilder : FormBuilder,
    private toastCtrl : ToastController,
    private userService: UserService
  ) 
  {
    this.formbuilder = formbuilder;
  }
  onSubmit(){
    this.router.navigate(['/home']);
  }
  createform(): FormGroup{
    return this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, ]],
    });
  }

  ngOnInit() {
    this.form = this.createform();
  }

}
