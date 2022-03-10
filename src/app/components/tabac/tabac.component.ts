import { CategorieService } from './../../services/categorie/categorie.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-tabac',
  templateUrl: './tabac.component.html',
  styleUrls: ['./tabac.component.scss'],
})
export class TabacComponent implements AfterViewInit {

  //declarations des variables input //
  @Input() check: boolean = false;
  @Input() users: number = 5063;
  @Input() conso1 : number = 4;
  @Input() conso2 : number = 3;
  @Input() conso3 : number = 2;
  @Input() conso4 : number = 7;
  @Input() conso5 : number = 5;
  @Input() conso6 : number = 3;
  @Input() conso7 : number = 1;
  @Input() objectif : number = 2;
  
  // récupération du conteneur de graphique //
  //@ViewChild('barCanvas') private barCanvas: ElementRef;

  // décalration des variables local //

  //barChart: any;
  categorie: any;
  loading = true;


 // constructeur //
  constructor(private categorieService: CategorieService, route: ActivatedRoute, private router: Router, ) {
    const id = parseInt(route.snapshot.params.id, 10);
    this.load(id);
  }
  // récupération de données catégorie pour modification de valeur en bdd //
  load(id: number) {
    this.categorieService.getId(id).subscribe(data => {
      this.categorie = data;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
 // fonction click du bouton ajouter la catégorie //
  onClick() {
    this.router.navigate(['/add']);
  }
 // affiche du graphic //
  ngAfterViewInit() {
    //this.barChartMethod();

  }
  // gestion de l'ajusteur d'objectif //
  more(){
    this.objectif= this.objectif+1;
  }
  less(){
    this.objectif= this.objectif-1;
  }
  
  // création du graphic avec les données utilisateur //
  /*
  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Lundi','Mardi', 'Mercredi' , 'Jeudi' , 'Vendredi', 'Samedi', 'Dimanche'],
        datasets: [{
          label: 'Cigarettes fumées cette semaine',
          data: [4, 3, 1, 7, 2, 3, 3],
          backgroundColor: [
            'rgba(90, 24, 154, 0.2)',
            'rgba(90, 24, 154, 0.2)',
            'rgba(90, 24, 154, 0.2)',
            'rgba(90, 24, 154, 0.2)',
            'rgba(90, 24, 154, 0.2)',
            'rgba(90, 24, 154, 0.2)'
          ],
          borderColor: [
            'rgba(90, 24, 154,1)',
            'rgba(90, 24, 154, 1)',
            'rgba(90, 24, 154, 1)',
            'rgba(90, 24, 154, 1)',
            'rgba(90, 24, 154, 1)',
            'rgba(90, 24, 154, 1)'
          ],
          borderWidth: 1
        }]
      }, 
    });  
  }
  */

  


}
