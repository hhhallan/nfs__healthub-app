import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  @Input() message = 'Une erreur est survenue, veuillez réessayer ultérieurement';

  constructor() { }

  ngOnInit() {}

}