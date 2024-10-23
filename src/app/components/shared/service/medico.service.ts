import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicoConsulta } from '../model/MedicoConsulta';
import { MedicoCadastro } from '../model/MedicoCadastro';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private readonly URL: string = 'http://127.0.0.1:8080/medico';

  constructor(private http: HttpClient) { }

  public getMedicos(): Observable<MedicoConsulta[]> {
    return this.http.get<MedicoConsulta[]>(this.URL);
  }

  public getMedicoById(id: number): Observable<MedicoConsulta> {
    return this.http.get<MedicoConsulta>(this.URL+'/'+id);
  }

  public getMedicosBySearch(search: string): Observable<MedicoConsulta[]> {
    return this.http.get<MedicoConsulta[]>(this.URL+'/busca/'+search);
  }

  public cadastrarMedico(medico: MedicoCadastro): Observable<MedicoConsulta> {
    return this.http.post<MedicoConsulta>(this.URL, medico);
  }

  public atualizarMedico(id: number, medico: MedicoConsulta): Observable<MedicoConsulta> {
    return this.http.put<MedicoConsulta>(this.URL+'/'+id, medico);
  }

  public deletarMedico(id: number): Observable<void> {
    return this.http.delete<void>(this.URL+'/deletar/'+id);
  }
}
