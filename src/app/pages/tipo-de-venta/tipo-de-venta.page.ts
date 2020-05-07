import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-de-venta',
  templateUrl: './tipo-de-venta.page.html',
  styleUrls: ['./tipo-de-venta.page.scss'],
})
export class TipoDeVentaPage implements OnInit {
  constructor(private mys: MyserviceService, private router: Router) {}

  ngOnInit() {}

  btnVentaRural() {
    this.mys.tipoDeVenta = 'rural';
    this.router.navigateByUrl('/caratula');
  }
}
