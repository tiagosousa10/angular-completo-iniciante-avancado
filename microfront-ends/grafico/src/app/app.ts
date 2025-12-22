import { Component, OnInit, signal } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  ngOnInit(): void {
    const dados = [
      { categoria: 'Eletronicos', valor: 10 },
      { categoria: 'Roupas', valor: 15 },
      { categoria: 'Decoração', valor: 5 },
      { categoria: 'Ferramentas', valor: 13 },
      { categoria: 'Ferramentas', valor: 24 },
    ];

    const labels = dados.map((valor) => valor.categoria);
    const valores = dados.map((valor) => valor.valor);

    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Categorias Mais Vendidas',
            data: valores,
            backgroundColor: 'rgba(31,82,146,0.6',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
