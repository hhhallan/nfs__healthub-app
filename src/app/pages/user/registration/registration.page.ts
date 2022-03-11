import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../../services/user/user.service';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit{

  private formbuilder : FormBuilder;
  form : FormGroup;
  user = new User();

  constructor(
    private router: Router,
    formbuilder : FormBuilder,
    private toastCtrl : ToastController,
    private userService : UserService,
  ) { 
    this.formbuilder = formbuilder;
  }

  ngOnInit() {
    this.createForm();
  }
  
  createForm(){
    this.form = this.formbuilder.group({
      firstname :['',[Validators.minLength(2), Validators.maxLength(20), Validators.required]],
      lastname :['',[Validators.minLength(2), Validators.maxLength(20), Validators.required]],
      email :['', [Validators.required, Validators.email]],
      pseudo :['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      age :['', [Validators.required, Validators.min(16)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!.:,;^%*?&µù%=&])[A-Za-z\d$@$!.:,;^%*?&µù%=&].{8,}')]],   
    });
  }

  save(){  
    this.userService.add(this.user).subscribe(async () => {
        const toast = await this.toastCtrl.create({
            message: 'Nouvel utilisateur crée avec succès',
            duration: 5000,
            color: 'success',
        });
        toast.present();
        this.router.navigate(['/login']);
    });
    
  }

  // debug du formulaire //
  get f(){
    return this.form.controls;
  }

}
