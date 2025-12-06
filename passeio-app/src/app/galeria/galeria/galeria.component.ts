import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../categorias/categoria';
import { Lugar } from '../../lugares/lugar';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent implements OnInit {
  lugares: Lugar[] = [];
  categoriasFiltro: Categoria[] = [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe((categorias) => {
      return (this.categoriasFiltro = categorias);
    });

    this.lugarService.obterTodos().subscribe((lugaresResposta) => {
      console.log(lugaresResposta);
      return (this.lugares = lugaresResposta);
    });
  }

  getTotalEstrelas(lugar: Lugar): string {
    return (
      '&#9733;'.repeat(lugar.avaliacao || 0) +
      '&#9734;'.repeat(5 - (lugar.avaliacao || 0))
    );
  }

  filtrar() {
    console.log(this.categoriaFiltro, this.nomeFiltro);
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro).subscribe({
      next: (resultado) => (this.lugares = resultado),
      error: (erro) => console.log(erro),
    });
  }
}
