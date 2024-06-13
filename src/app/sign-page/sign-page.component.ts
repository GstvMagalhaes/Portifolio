import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-page',
  standalone: true,
  imports: [],
  templateUrl: './sign-page.component.html',
  styleUrl: './sign-page.component.css'
})
export class SignPageComponent {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
   }
 
}
