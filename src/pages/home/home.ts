import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hero } from '../../app/hero';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HeroProvider } from '../../providers/hero/hero';
import { HEROES } from '../../data/mock-heroes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  nav: NavController
  heroes: Hero[];
  constructor(
    public navCtrl: NavController,
    public heroProvider: HeroProvider
  ) {

  }

  ngOnInit(){ //put the initialization logic right here
    this.heroes = this.heroProvider.getHeroes();
  }

  viewDetail(){
    this.nav.push(heroDe tail);
  }

  getHeroes(){
    this.heroProvider.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroProvider.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroProvider.deleteHero(hero).subscribe();
  }
}
