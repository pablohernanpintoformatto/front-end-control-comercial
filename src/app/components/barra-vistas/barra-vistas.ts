import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-barra-vistas',
  imports: [MatSidenavModule,MatDividerModule,MatListModule],
  templateUrl: './barra-vistas.html',
  styleUrl: './barra-vistas.css'
})
export class BarraVistas {

}
