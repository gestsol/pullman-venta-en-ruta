import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  constructor(public mys: MyserviceService, private router: Router) { }

  ngOnInit() {
    console.log('this.mys.ventaRuta', this.mys.ventaRuta);
  }

  btnVenderBoleto() {


    switch (this.mys.ventaRuta.tipoVenta) {

      case 'aduana':
        this.router.navigateByUrl('/buy-your-ticket');
        break;

      case 'tierra':
        this.router.navigateByUrl('/buy-your-ticket');
        break;

      case 'terminal':
        this.router.navigateByUrl('/buy-your-ticket');
        break;

      case 'rural':
        this.router.navigateByUrl('/pagina2');
        break;

      default:
        break;
    }



  }
}
