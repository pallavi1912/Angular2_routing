import { Component, OnInit } from '@angular/core';
import { HeroRoutingModule } from './heroes-routing.module';

@Component({
  selector: 'app-hero-list',
  template: `
    <p>
      hero-list Works!
      <ul>
        <li *ngFor="let hero of heroes | async" (click)=onSelect(hero)>
          <span>{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <button routerLink ="/sidekicks">Sidekicks</button>
    </p>
  `,
  styles: []
})
export class HeroListComponent implements OnInit {
  onSelect(hero: Hero){
   this.router.navigate(['/hero', hero.id]);
  }
  constructor(
  private router: Router,
  private service: HeroService
  ) { }

  ngOnInit() {
  }

}
