import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss'],
})
export class HomeheaderComponent implements OnInit {

  @Input() logo="../assets/img/healthub-logo.svg";
  constructor() { }

  ngOnInit() {}

}
