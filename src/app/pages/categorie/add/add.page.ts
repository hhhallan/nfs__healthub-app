import { Component, OnInit } from '@angular/core';
import {CategorieService} from "../../../services/categorie/categorie.service";
import {AchivementService} from "../../../services/achivement/achivement.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {
  categories: Array<any>;
  achivements: Array<any>;
  loading = true;

  constructor(private categorieService: CategorieService, private achivementService: AchivementService) {
    this.load();
  }

  load() {
    this.categorieService.getAll().subscribe(data => {
      this.categories = data;
      this.loading = false;
    }, () => {
      this.loading = false;
    });

    this.achivementService.getAll().subscribe(data => {
      this.achivements = data;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

}
