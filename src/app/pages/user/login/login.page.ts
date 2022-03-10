import { UserService } from './../../../services/user/user.service';
import { ToastController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
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
    formbuilder : FormBuilder,
    private router : RouterModule,
    private toastCtrl : ToastController,
    private userService: UserService
  ) 
  {
    this.formbuilder = formbuilder;
  }

  createform(): FormGroup{
    return this.formbuilder.group({
      email: ['', Validators.required, ],
      password : ['', Validators.required, ]
    });
  }

  ngOnInit() {
    this.form = this.createform();
  }

}
