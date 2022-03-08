import { UserService } from './../../../services/user/user.service';
import { User } from './../../../models/user';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {
  user = new User();

  constructor(
    private router: Router,
    private toastCtrl : ToastController,
    private userService : UserService,
  ) { }

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

}
