import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  constructor(private mys: MyserviceService, private router: Router) {}

  ngOnInit() {
    console.log('tipoDeVenta', this.mys.tipoDeVenta);
  }

  btnVenderBoleto() {
    let destino = this.mys.tipoDeVenta;
    console.log('destino', destino);

    if (destino === 'rural') {
      this.router.navigateByUrl('/pagina2');
    }
  }
}
