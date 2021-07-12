import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { LinesService } from 'src/app/core/services/lines.service';
@Component({
  selector: 'app-kpis',
  templateUrl: './kpis-content.component.html',
  styleUrls: ['./kpis-content.component.scss']
})
export class KpisContentComponent implements OnInit {
line:any = {};
public bar:any= document.getElementById('lineData');
size:string='33'
constructor( private route: ActivatedRoute, private linesService: LinesService) // inyeccion de dependencias activatedroute) { }
{}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id; // guardo el id que pasamos como param para usarlo en el metodo
      this.line = this.linesService.getLine(id); // as product x indicar el tipo de resp que espero al llamar al service
      // llamo al metodo get product del service
    }); //
  }
}
