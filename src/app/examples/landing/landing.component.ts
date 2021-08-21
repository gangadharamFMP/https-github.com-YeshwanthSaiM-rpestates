import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;

  constructor() { }
  nodes: any = [
    {
      name: 'CH Ravi Prasad ',
      image: '',
      title: 'Director & Founder',
      childs: [
        {
          name: 'Ramesh',
          cssClass: 'ngx-org-ceo',
          title: 'Marketing Director',
          childs: []
        },
        {
          name: 'Sudhakar',
          cssClass: 'ngx-org-ceo',
          title: 'Marketing Director',
          childs: []
        },
        {
          name: 'Vijaya Mohan',
          cssClass: 'ngx-org-ceo',
          title: 'Marketing Director',
          childs: []
        }
      ]
    }]
  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
