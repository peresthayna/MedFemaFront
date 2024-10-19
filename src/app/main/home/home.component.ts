import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public isLoading: boolean = false;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {/*
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);*/
  }

  public navigate(path: string) {
    this.router.navigate([path]);
  }
}
