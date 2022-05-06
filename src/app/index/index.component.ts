import { Component, OnInit } from '@angular/core';
declare  var gramatica:  any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public descripcion='';
  public resultado='';
  
  constructor(){}


  ngOnInit(): void {
  }


  
  Compilar(){
    this.resultado=gramatica.parse(this.descripcion);
  }

  Limpiar(){
    this.resultado='';
  }

}
