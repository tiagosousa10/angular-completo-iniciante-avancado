import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Produto {
  nome: string;
  valor: number;
  imagem: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  produtos: Produto[] = [
    {
      nome: 'Camiseta Angular',
      valor: 49.99,
      imagem: 'https://picsum.photos/id/1/200/150',
    },
    {
      nome: 'Caneca Programador',
      valor: 79.99,
      imagem: 'https://picsum.photos/id/10/200/150',
    },
    {
      nome: 'Rato Gamer',
      valor: 45.37,
      imagem: 'https://picsum.photos/id/25/200/150',
    },
    {
      nome: 'Teclado',
      valor: 23.99,
      imagem: 'https://picsum.photos/id/30/200/150',
    },
    {
      nome: 'Headset',
      valor: 12.99,
      imagem: 'https://picsum.photos/id/40/200/150',
    },
  ];
}
