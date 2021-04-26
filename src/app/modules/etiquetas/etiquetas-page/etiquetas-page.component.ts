import { Component, OnInit } from '@angular/core';
import { Etiqueta } from 'src/app/models/etiqueta';
import { EtiquetaService } from 'src/app/services/etiqueta.service';

@Component({
  selector: 'app-etiquetas-page',
  templateUrl: './etiquetas-page.component.html',
  styleUrls: ['./etiquetas-page.component.scss']
})
export class EtiquetasPageComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'creador', 'fecha_creacion'];
  dataSource: Etiqueta[];
  constructor(private etiquetaService: EtiquetaService) { }

  ngOnInit(): void {
    this.etiquetaService.getEtiquetas().subscribe(dataSource => this.dataSource = dataSource)

  }

}
