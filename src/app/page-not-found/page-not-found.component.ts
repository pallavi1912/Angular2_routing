import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p class="danger">
      404 page-not-found!
    </p>
  `,
  styleUrls: ['./page-not-found.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
