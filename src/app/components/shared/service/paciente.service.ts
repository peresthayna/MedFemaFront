import { PacienteConsulta } from './../model/PacienteConsulta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PacienteCadastro } from '../model/PacienteCadastro';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private readonly URL: string = 'http://127.0.0.1:8080/paciente';

  constructor(private http: HttpClient) { }

  public getPacientes(): Observable<PacienteConsulta[]> {
    return this.http.get<PacienteConsulta[]>(this.URL);
  }

  public getPacienteConsultaById(id: number): Observable<PacienteConsulta> {
    return this.http.get<PacienteConsulta>(this.URL+'/'+id);
  }

  public getPacientesBySearch(search: string): Observable<PacienteConsulta[]> {
    return this.http.get<PacienteConsulta[]>(this.URL+'/busca/'+search);
  }

  public cadastrarPaciente(paciente: PacienteCadastro): Observable<PacienteConsulta> {
    return this.http.post<PacienteConsulta>(this.URL, paciente);
  }

  public atualizarPaciente(id: number, paciente: PacienteConsulta): Observable<PacienteConsulta> {
    return this.http.put<PacienteConsulta>(this.URL+'/'+id, paciente);
  }

  public deletarPaciente(id: number): Observable<void> {
    return this.http.delete<void>(this.URL+'/deletar/'+id);
  }
}
