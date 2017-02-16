import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crisis-list',
  template: `
    <p>
      crisis-list Works!
      <a routerLink ="/heroes" routerLinkActive="active">Heroes</a>
    </p>
  `,
  styles: []
})
export class CrisisListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
