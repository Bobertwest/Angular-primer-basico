import { Component } from '@angular/core';

@Component({
  selector: 'contador-component',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>
    <div>
      <button (click)="operar(base)">+ {{ base }}</button>
      <h3>{{ numero }}</h3>
      <button (click)="operar(-base)">- {{ base }}</button>
    </div>
  `,
})
export class ContadorComponent {
  public title: string = 'Contador';
  public numero: number = 10;
  public base: number = 5;
  /* sumar = (): number => (this.numero = this.numero + 1);
  restar = (): number => (this.numero = this.numero - 1); */
  public operar = (valor: number): void => {
    this.numero += valor;
  };
}
