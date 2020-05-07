import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caratula',
  templateUrl: './caratula.page.html',
  styleUrls: ['./caratula.page.scss'],
})
export class CaratulaPage implements OnInit {
  constructor(private mys: MyserviceService, private router: Router) {}

  nCaratula = '';
  ngOnInit() {}

  btnIniciarSesion() {
    console.log('nCaratula', this.nCaratula);
    if (this.nCaratula.length !== 11) {
      alert(
        'Introduzca una caratula válida, de 11 dígitos. \nintente nuevamente..'
      );
    } else {
      this.mys.nCaratula = this.nCaratula;
      this.router.navigateByUrl('/pagina2');
    }
  }
}
