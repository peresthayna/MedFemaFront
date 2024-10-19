import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elipsis',
  templateUrl: './elipsis.component.html',
  styleUrl: './elipsis.component.css'
})
export class ElipsisComponent {

  constructor(private router: Router) {}

  public navigate(path: string): void {
    this.router.navigate([path]);
  }
}
