import { Injectable } from '@angular/core';

@Injectable()

export class HeroesService{
	heroes:Array<any>

	constructor(){
	this.heroes = [
    { id: 40, name: 'Jordan Houston' },
    { id: 23, name: 'Josh Beh' },
    { id: 23, name: 'Joseph Canina' }
    ];
}

 getheroes(){
	return this.heroes;
 }
}

