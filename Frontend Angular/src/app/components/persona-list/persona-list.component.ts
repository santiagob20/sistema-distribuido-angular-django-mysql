import { Component, OnInit } from "@angular/core";

import { PersonasService } from "../../services/personas.service";
import { ProductosService } from "../../services/productos.service";
import { Persona } from "src/app/models/Persona";

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-persona-list",
  templateUrl: "./persona-list.component.html",
  styleUrls: ["./persona-list.component.css"]
})
export class PersonaListComponent implements OnInit {
  personas: any;

  allProductosPersona: any;
  allProductosDescipcion: any;
  arrayAllProductos: any;
  allProductosPorPersonaModal: any;
  productos: any;

  closeResult: string;

  constructor(
    private personasService: PersonasService,
    private productosService: ProductosService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.personasService.getAllPersonas().subscribe(
      res => {
        // console.log(res)
        this.personas = res;
      },
      err => console.log(err)
    );

    this.personasService.getAllProductos().subscribe(
      res => {
        console.log("personas_AllProductos()", res);
        this.allProductosPersona = res;
      },
      err => console.log(err)
    );

    this.productosService.getAllProducts().subscribe(
      res => {
        console.log("productos_AllProducts()", res);
        this.allProductosDescipcion = res;
      },
      err => console.log(err)
    );

    setTimeout(() => {
      this.cargarDataDetalleProducto(
        this.allProductosPersona,
        this.allProductosDescipcion
      );
    }, 1500);
  }

  cargarDataDetalleProducto(listaPersonasProductos, listaDetalleProductos) {
    //https://ng-bootstrap.github.io/#/components/modal/examples
    const allProductosPorPersona = [];
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < listaPersonasProductos.length; index++) {
      // tslint:disable-next-line:prefer-for-of
      for (let index2 = 0; index2 < listaDetalleProductos.length; index2++) {
        if (listaPersonasProductos[index].id_producto === listaDetalleProductos[index2].id_producto) {
          const dato = {
            idPersona: listaPersonasProductos[index].id_persona,
            descripcionProducto: listaDetalleProductos[index2].descripcion,
            idPersonaProducto: listaPersonasProductos[index].id_productoPersona
          };
          allProductosPorPersona.push(dato);
        }
      }
    }
    this.arrayAllProductos = allProductosPorPersona;
  }

  open(content) {
    console.log(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  cargarModalFiltro(idpersona) {
    // tslint:disable-next-line:only-arrow-functions
    const arrayFiltro = this.arrayAllProductos.filter(function(arrayAllProductos) {
      return arrayAllProductos.idPersona === idpersona;
    });
    this.allProductosPorPersonaModal = arrayFiltro;
  }


}
