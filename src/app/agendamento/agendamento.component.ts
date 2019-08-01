import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  servico: string;
  dia: string;
  horario: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {servico: 'Depilação a Laser', nome: 'Maria Eduarda', dia: '10/09/2019', horario: '10:30'},
  {servico: 'Limpeza de Pele', nome: 'Fernanda Araujo', dia: '12/09/2019', horario: '13:00'},
  {servico: 'Drenagem', nome: 'Silvana Carvalho', dia: '18/09/2019', horario: '14:20'},
  {servico: 'Terapia Capilar', nome: 'Joana Silva', dia: '19/09/2019', horario: '17:00'},
  {servico: 'Depilação a Laser', nome: 'Cristina Dias', dia: '21/09/2019', horario: '9:30'},
  {servico: 'Limpeza de Pele', nome: 'Maria Souza', dia: '25/09/2019', horario: '10:50'},
  {servico: 'Massagem', nome: 'Daiana Macedo', dia: '25/09/2019', horario: '16:30'},

];

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'servico', 'dia', 'horario'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
