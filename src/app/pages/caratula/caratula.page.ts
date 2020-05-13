import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';
import { Router } from '@angular/router';
import { IntegradorService } from 'src/app/service/integrador.service';

@Component({
  selector: 'app-caratula',
  templateUrl: './caratula.page.html',
  styleUrls: ['./caratula.page.scss'],
})
export class CaratulaPage implements OnInit {
  constructor(
    private mys: MyserviceService,
    private router: Router,
    private integrador: IntegradorService
  ) { }

  nCaratula = '';
  rut = '';
  loading = false;
  ngOnInit() { }

  btnIniciarSesion() {

    if (this.nCaratula.length >= 12 || this.nCaratula.length <= 10) {
      alert('Verifique la carátula,\nIntente nuevamente');
    } else if (this.rut.length >= 11 || this.rut.length <= 8) {
      alert('Verifique RUT,\nIntente nuevamente');
    } else {
      // caso todo validado
      this.loading = true
      this.integrador.VRvalidaUsuario({ caratula: this.nCaratula, rut: this.rut }).subscribe((resp: any) => {
        if (resp.codigo === '01') {
          this.mys.ventaRuta.rut = this.rut;
          this.mys.ventaRuta.caratula = this.nCaratula;
          this.loading = false;
          this.router.navigateByUrl('/inicio');
        } else {
          alert(resp.cadena + ' \nVerifique e intente nuevamente..\nejemplo de RUT: 12345678-9..');
        }
      });



    }







    // console.log('nCaratula', this.nCaratula);
    // if (this.nCaratula.length !== 11) {
    //   alert('Introduzca una caratula válida, de 11 dígitos. \nintente nuevamente..');
    // } else {
    //   this.mys.nCaratula = this.nCaratula;
    //   this.router.navigateByUrl('/pagina2');
    // }
  }
}
