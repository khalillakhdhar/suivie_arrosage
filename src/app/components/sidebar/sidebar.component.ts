import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/accueil', title: 'Accueil',  icon: 'dashboard', class: '' },
    { path: '/profile', title: 'Profile',  icon:'person', class: '' },
    { path: '/utilisateur', title: 'utilisateur',  icon:'persons', class: '' },
    { path: '/parametres', title: 'parametres',  icon:'library_books', class: '' },
    { path: '/supervision', title: 'supervision',  icon:'notifications', class: '' },
    { path: '/', title: 'Déconnexion',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    if(localStorage.length==0)
    window.location.replace("");
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
