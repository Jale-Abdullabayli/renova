import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() title: String;
  isOpen=false;
  isClose=true;
  isCollapsed = true;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    this.isOpen = !this.isOpen;
    this.isClose = !this.isClose;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
