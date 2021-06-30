import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  public video: string;
  public slides: any[];
  constructor() {
    this.slides = [];
  }

  ngOnInit(): void {
    this.video = '../../../assets/video.mp4';
    this.cargarSlide();
    this.cerrarResponsivo();
  }

  cargarSlide() {
    const objSlide = [
      {
        img: '../../../assets/slide1.png',
        txt: 'Transporte: aereo, maritimo, terrestre',
        active: 'active',
        desc: 'Garantizamos la entrega de mercancías de forma segura, puntual y económica',
      },
      {
        img: '../../../assets/slide2.png',
        txt: 'Consolidados',
        active: '',
        desc: ' Una empresa puede obtener una reducción de costes en el transporte de sus mercancías. ',
      },
      {
        img: '../../../assets/slide3.png',
        txt: 'Almacenaje y distribución',
        active: '',
        desc: 'Manejamos mercancías, manteniéndolos bajo control en un determinado espacio para evitar su deterioro.',
      },
      {
        img: '../../../assets/slide4.png',
        txt: 'Tramites aduanales',
        active: '',
        desc: ' Certificados, solicitudes y documentos administrativos  ',
      },
      {
        img: '../../../assets/slide5.png',
        txt: 'Seguros',
        active: '',
        desc: 'Los seguros para exportaciones e importaciones permiten cubrir los daños en caso de accidente, pérdida o retrasos.',
      },
    ];

    this.slides.push(...objSlide);
    console.log(this.slides);
  }

  cerrarResponsivo(): void {
    const cerrarRes = document.getElementById('cerrarRes');
    const menuResponsivo = document.getElementById('menu-responsivo');
    const barra = document.getElementById('barra');

    cerrarRes.addEventListener('click', () => {
      menuResponsivo.classList.remove('animate__slideInLeft');

      menuResponsivo.classList.add('animate__slideOutLeft');
      // menuResponsivo.style.display = 'none';
      console.log(menuResponsivo);
    });

    barra.addEventListener('click', () => {
      menuResponsivo.style.display = 'flex';
      menuResponsivo.classList.remove('animate__slideOutLeft');
      menuResponsivo.classList.add('animate__slideInLeft');
    });

    const li = document.getElementsByClassName('res');
    const arrayli = Array.from(li);

    arrayli.forEach((element) => {
      element.addEventListener('click', () => {
        menuResponsivo.style.display = 'none';
        
      });
    });
  }
}
