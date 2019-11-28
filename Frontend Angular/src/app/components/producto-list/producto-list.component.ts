import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productsList:Array<Producto>=[];
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getAllProducts().subscribe(
      res => {
            console.log(res)
            this.productsList = res;
          },
          err => console.log(err)
    );
  }

}
