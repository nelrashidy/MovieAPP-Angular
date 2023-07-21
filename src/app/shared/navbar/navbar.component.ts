import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {
    console.log("navbar");
   }

  logOut() {
    const confirmation = confirm("Do you want to log out?");
    if (confirmation){
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }

}
