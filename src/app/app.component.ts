import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'app-frontend';
  value = ''
  nome : string

  onEnter(value: string) {
    this.httpClient.get('http://app-backend-svc'+ '/ola/'+value).subscribe((res: any)=>{
      console.log(res);
      this.nome= res.message
  });
   }
  constructor(private httpClient: HttpClient){}
}
