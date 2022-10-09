import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {
    public resumen = "Esto es el componente resumen"
    public pagina = 1
}