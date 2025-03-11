import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent implements OnInit {
  title = 'front-dash';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  sendRequest() {
    const payload = { param: 'valorDoParametro' };
    this.http.post('http://localhost:3000', payload).subscribe(response => {
      console.log('Resposta do back-end:', response);
    });
  }
}
