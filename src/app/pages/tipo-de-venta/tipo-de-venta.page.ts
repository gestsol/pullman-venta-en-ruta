import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-de-venta',
  templateUrl: './tipo-de-venta.page.html',
  styleUrls: ['./tipo-de-venta.page.scss'],
})
export class TipoDeVentaPage implements OnInit {
  constructor(private mys: MyserviceService, private router: Router) { }

  ngOnInit() {
    console.log('this.mys.ventaRuta', this.mys.ventaRuta);
  }

  btnGeneral(eleccion) {
    console.log('eleccion', eleccion);
    switch (eleccion) {
      case 'aduana':
        this.mys.ventaRuta['tipoVenta'] = 'aduana';
        this.router.navigateByUrl('/caratula');
        break;

      case 'tierra':
        this.mys.ventaRuta['tipoVenta'] = 'tierra';
        this.router.navigateByUrl('/caratula');
        break;


      case 'terminal':
        this.mys.ventaRuta['tipoVenta'] = 'terminal';
        this.router.navigateByUrl('/caratula');
        break;

      case 'rural':
        this.mys.ventaRuta['tipoVenta'] = 'rural';
        this.router.navigateByUrl('/caratula');
        break;

      default:
        break;
    }
  }

}
