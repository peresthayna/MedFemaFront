import { Injectable } from '@angular/core';
import { ConsultaConsulta } from '../model/ConsultaConsulta';

@Injectable({
  providedIn: 'root'
})
export class SetMapService {

  constructor() { }

  public setMap(list: any[]): { [key: string]: any[] } {
    let returnObjects = {};
    for (const obj of list) {
      const firstLetter = obj.nome.charAt(0).toUpperCase();
      if (returnObjects[firstLetter]) {
        returnObjects[firstLetter].push(obj);
      } else {
        returnObjects[firstLetter] = [obj];
      }
    }
    return returnObjects;
  }

  public setConsultasMap(list: ConsultaConsulta[]): { [key: string]: ConsultaConsulta[] } {
    let consultas = {};
    for (const obj of list) {
      const date = obj.dataHora;
      if (consultas[date]) {
        consultas[date].push(obj);
      } else {
        consultas[date] = [obj];
      }
    }
    return consultas;
  }
}
