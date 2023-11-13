import { Component } from '@angular/core';

interface Img {
  id: number;
  src: string;
  title: string;
}
interface SelectedImg {
  id: number;
  src: string;
  title: string;
  width: number;
  height: number;
}
const imgArray: Img[] = [
  {
    id: 1,
    src: 'assets/img/1.jpg',
    title: 'gatito durmiendo boca arriba, con las patitas estiradas',
  },
  {
    id: 2,
    src: 'assets/img/2.jpg',
    title: 'gatito atigrado naranja durmiendo en el suelo',
  },
  {
    id: 3,
    src: 'assets/img/3.jpg',
    title: 'gatito tumbado bocaarriba, la imagen está del revés',
  },
  {
    id: 4,
    src: 'assets/img/4.jpg',
    title: 'gatito atigrado mirando a cámara',
  },
  {
    id: 5,
    src: 'assets/img/5.jpg',
    title:
      'gatito blanco con rayas marrones con los ojos azules tumbado de lado como jugando',
  },
  {
    id: 6,
    src: 'assets/img/6.jpg',
    title:
      'gato escondido en el sofá sólo se le ven las patas de alante y la cabeza',
  },
  {
    id: 7,
    src: 'assets/img/7.jpg',
    title:
      'gata tricolor a la que sólo se le ve la cara está de tumbada de lado',
  },
  {
    id: 8,
    src: 'assets/img/8.jpg',
    title: 'gato de pello largo tumbado mirando a la cámara ',
  },
  {
    id: 9,
    src: 'assets/img/9.jpg',
    title: 'gatito de pelo largo atigrado ris y marrón en la naturaleza',
  },
];
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.sass'],
})
export class GaleriaComponent {
  imgArray = imgArray;

  selectedImg: SelectedImg = {
    id: imgArray[0].id,
    src: imgArray[0].src,
    title: imgArray[0].title,
    width: 600,
    height: 400,
  };

  numero = 0;
  numeromas = 3;

  sliderActivated = false;
  //?no se tiparlo
  nIntervId: any;

  updateSelected(index: number) {
    this.selectedImg.id = imgArray[index].id;
    this.selectedImg.src = imgArray[index].src;
    this.selectedImg.title = imgArray[index].title;
  }
  calcNumber() {
    const calc = Math.floor((this.selectedImg.id - 1) / 3);
    if (this.numero !== calc * 3) {
      this.numero = calc * 3;
      this.numeromas = this.numero + 3;
    }
  }
  next() {
    this.updateSelected(this.selectedImg.id);

    // if (this.selectedImg.id - 1 === this.numeromas) {
    //   this.numero = this.numeromas;
    //   this.numeromas = this.numero + 3;
    // }
    this.calcNumber();
  }

  prev() {
    this.updateSelected(this.selectedImg.id - 2);

    this.calcNumber();
  }

  play() {
    this.sliderActivated = true;
    this.nIntervId = setInterval(() => {
      if (this.selectedImg.id === imgArray.length) {
        this.updateSelected(0);
        this.calcNumber();
      } else {
        this.next();
      }
    }, 2000);
  }

  stop() {
    this.sliderActivated = false;
    clearInterval(this.nIntervId);
  }

  expand() {
    this.selectedImg.width = this.selectedImg.width + 100;
    this.selectedImg.height = this.selectedImg.height + 30;
  }
  reduce() {
    this.selectedImg.width = this.selectedImg.width - 100;
    this.selectedImg.height = this.selectedImg.height - 30;
  }
  nextPage() {
    this.numero = this.numeromas;
    this.numeromas = this.numero + 3;
  }
  prevPage() {
    this.numeromas = this.numero;
    this.numero = this.numero - 3;
  }
}
