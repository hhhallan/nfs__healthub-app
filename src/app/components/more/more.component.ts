import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss'],
})
export class MoreComponent implements OnInit {
  @Input() title= "Unknow";
  @Input() icon = "information-outline";

  constructor() { }

  ngOnInit() {}

}
