import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agendamento } from '../agendamento/agendamento';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private http: HttpClient) { }

  agendamentoUrl = 'http://api.encadeado.com/api/services/list';
  addAgendamentoUrl = 'http://api.encadeado.com/api/services/store';


  public getAgendamentos() {
    return this.http.get(this.agendamentoUrl);
  }

  public getAgendamentoResponse(): Observable<HttpResponse<Agendamento[]>> {
    return this.http.get<Agendamento[]>(
      this.agendamentoUrl, { observe: 'response' });
  }

  public addAgendamento (agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.addAgendamentoUrl, agendamento, httpOptions)
  }


}
