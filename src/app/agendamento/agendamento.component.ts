import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../service/agendamento.service';
import { HttpHeaders } from '@angular/common/http';
import { Agendamento } from './agendamento';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'servico', 'dia', 'horario'];
  constructor(private agendamentoService: AgendamentoService) { }

  ngOnInit() {
    this.showAgendamentosResponse();
  }
  ngAfterInit(){
    
  }
  registerForm: FormGroup;
  headers : string[];
  agendamento: Agendamento[];
  data: any = {}
  onSubmit(f: NgForm) {
    this.agendamentoService
    .addAgendamento(this.data)
    .subscribe(data => {this.agendamento.push(data);this.showAgendamentosResponse();});
    f.resetForm();

    
  }

  showAgendamentos() {
    this.agendamentoService.getAgendamentos()
    .subscribe((data: Agendamento[]) => this.agendamento = { ...data });

  }

  showAgendamentosResponse() {
    this.agendamentoService.getAgendamentoResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
  
        // access the body directly, which is typed as `Config`.
        this.agendamento = resp.body
        console.log(this.agendamento)

      });
  }

}
