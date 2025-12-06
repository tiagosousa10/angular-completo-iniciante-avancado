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

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe((categorias) => {
      console.log('🚀 ~ GaleriaComponent ~ ngOnInit ~ categorias:', categorias);
      return (this.categoriasFiltro = categorias);
    });

    this.lugarService.obterTodos().subscribe((lugaresResposta) => {
      console.log(
        '🚀 ~ GaleriaComponent ~ ngOnInit ~ lugaresResposta:',
        lugaresResposta
      );
      return (this.lugares = lugaresResposta);
    });
  }
}
