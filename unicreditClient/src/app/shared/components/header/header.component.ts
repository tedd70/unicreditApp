import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public appLogo: string = 'ManagemantLibrary';

  constructor(
    private router: Router
  ) {}

  goToHomePage() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
  }

}
