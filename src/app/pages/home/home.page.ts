import { Component } from '@angular/core';
import {CategorieService} from "../../services/categorie/categorie.service";
import {AchivementService} from "../../services/achivement/achivement.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  categories: Array<any>;
  achivements: Array<any>;
  loading = true;

  constructor(private categorieService: CategorieService, private achivementService: AchivementService) {
    this.load();
  }

  load() {
    this.categorieService.getAll().subscribe(data => {
      this.categories = data['hydra:member'];
      console.log(data['hydra:member']);
      this.loading = false;
    }, () => {
      this.loading = false;
    });

    this.achivementService.getAll().subscribe(data => {
      this.achivements = data['hydra:member'];
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

}
