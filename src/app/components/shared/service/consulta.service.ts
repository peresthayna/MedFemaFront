import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultaConsulta } from '../model/ConsultaConsulta';
import { ConsultaCadastro } from '../model/ConsultaCadastro';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private readonly URL: string = 'http://127.0.0.1:8080/agendamento';

  constructor(private http: HttpClient) { }

  public getConsultas(): Observable<ConsultaConsulta[]> {
    return this.http.get<ConsultaConsulta[]>(this.URL);
  }

  public getConsultaById(id: number): Observable<ConsultaConsulta> {
    return this.http.get<ConsultaConsulta>(this.URL+'/'+id);
  }

  public getConsultasBySearch(search: string): Observable<ConsultaConsulta[]> {
    return this.http.get<ConsultaConsulta[]>(this.URL+'/busca/'+search);
  }

  public cadastrarConsulta(consulta: ConsultaCadastro): Observable<ConsultaConsulta> {
    return this.http.post<ConsultaConsulta>(this.URL, consulta);
  }

  public atualizarConsulta(id: number, consulta: ConsultaConsulta): Observable<ConsultaConsulta> {
    return this.http.put<ConsultaConsulta>(this.URL+'/'+id, consulta);
  }

  public deletarConsulta(id: number): Observable<void> {
    return this.http.delete<void>(this.URL+'/deletar/'+id);
  }
}
