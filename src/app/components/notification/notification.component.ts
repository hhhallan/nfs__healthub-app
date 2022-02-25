import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  @Input() title = "Notification :";
  @Input() date = "25/02/2022";
  @Input() value = "Nouvelle notification";
  @Input() image = "../../assets/img/image4.png";

  constructor() { }

  ngOnInit() {}

}
