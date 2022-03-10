import { CategorieService } from './../../services/categorie/categorie.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss'],
})
export class HealthComponent implements OnInit {

  @Input() check : boolean = false;
  @Input() steps : number = 8556;
  @Input() time : number = 10;
  @Input() cal : number = 10;
  @Input() floor : number = 8;
  @Input() users : number = 453;

  categorie: any;
  loading = true;

  constructor(private categorieService: CategorieService, route: ActivatedRoute, private router: Router,) {
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


  onClick(){
    this.router.navigate(['/add']);
  }
  

  ngOnInit() {}

}
