import { Component } from '@angular/core';
import {CategorieService} from "../../services/categorie/categorie.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {
  categorie: any;
  loading = true;

  constructor(private categorieService: CategorieService, route: ActivatedRoute) {
    const id = parseInt(route.snapshot.params.id, 10);
    this.load(id);
  }

  load(id: number) {
    this.categorieService.getId(id).subscribe(data => {
      this.categorie = data;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
  getRandomInt(max:number) 
  {   
    return Math.floor(Math.random() * max); 
  }

}
