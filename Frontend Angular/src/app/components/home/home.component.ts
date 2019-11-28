import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chart: any = {
    title: "Productos disponibles",
    type: 'PieChart',
    columnNames: ['Producto', 'Quantity'],
    data: [["Producto A", 15], ["Producto B", 17], ["Producto C", 5], ["Producto D", 10], ["Producto E", 8], ["Producto G", 4]],
    options: {
      colors: ['#f59b2e', '#db9b4c', '#bd9566', '#ad9679', '#a2978b', '#ada79e'], is3D: true
    },
    width: 650,
    height: 450
  }

  chart2: any = {
    title: "Productos vendidos",
    type: 'ColumnChart',
    columnNames: ['Producto', 'Unidades vendidas'],
    data: [["Producto A", 11], ["Producto B", 17], ["Producto C", 19], ["Producto D", 54], ["Producto E", 18], ["Producto G", 13], ["Producto H", 64], ["Producto I", 25], ["Producto J", 4]],
    options: {
      colors: ['#f59b2e'], is3D: true
    },
    width: 550,
    height: 400
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
