import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  selectedPath = '';
  pages = [
    {
      title: 'Home',
      url: '/menu/(menuContent:home)'
    },
    {
      title: 'Houses',
      url: '/menu/(menuContent:houses)'
    },
    {
      title: 'Inbox',
      url: '/menu/(menuContent:inbox)'
    }
  ]
  constructor(private router: Router, private authService: AuthenticationService) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    })
  }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
