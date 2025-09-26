import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: true,
  templateUrl: './boton.html',
  styleUrl: './boton.css'
})
export class Boton {
  @Input() texto: string = 'Iniciar'; 
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() click = new EventEmitter<Event>(); // emite el click hacia el padre
}
