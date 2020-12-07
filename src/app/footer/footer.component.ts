import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    $(".up").on("click", function () {
      window.scrollTo(0, 0);
    })

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const eventUrl = /(?<=\/).+/.exec(event.urlAfterRedirects);
        const currentRoute = (eventUrl || []).join('');
        if (currentRoute == "home" || currentRoute == "services") {
          $(".contact .title").text("QİYMƏT TƏKLİFİ AL");
        } if (currentRoute == "about" || currentRoute == "works"||currentRoute == "repair-ex1"||currentRoute == "repair-ex2") {
          $(".contact .title").text("Bizimlə əlaqə saxlayın");
        } if (currentRoute == "contact") {
          $(".contact .title").text("TƏMİR LAZIMDIR?");
        } 
        
      }
    });
  }
}