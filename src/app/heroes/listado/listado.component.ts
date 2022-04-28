import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass'],
})
export class ListadoComponent {
  heroes: string[] = ['Ironman', 'Spiderman', 'Hulk', 'Thor'];

  heroeBorrados: string[] = [];

  verificacion: boolean = this.heroeBorrados.length > 0;

  borrarHeroe = (heroe: string): void => {
    this.heroeBorrados.push(heroe);
    this.heroes = this.heroes.filter((el) => el !== heroe);
    if (this.heroeBorrados.length > 0) {
      this.verificacion = true;
    } else {
      this.verificacion = false;
    }
  };

  regresarHeroe = (heroe: string): void => {
    this.heroes.push(heroe);
    this.heroeBorrados = this.heroeBorrados.filter((el) => el !== heroe);
    if (this.heroeBorrados.length === 0) {
      this.verificacion = false;
    } else {
      this.verificacion = true;
    }
  };

  /* ngOnInit(): void {
    if (this.heroeBorrados.length > 0) {
      this.verificacion = true;
    } else {
      this.verificacion = false;
    }
  } */
}
