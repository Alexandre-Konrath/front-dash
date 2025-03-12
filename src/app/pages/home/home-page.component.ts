import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IfoodService } from '../../services/ifood.service';

@Component({
  selector: 'home-page',
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true
})
export class HomePage implements OnInit {

  private ifoodService = inject(IfoodService)

  userCode: string | null = null;
  accessToken: string | null = null;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Obtém o userCode
  getUserCode() {
    this.ifoodService.getUserCode().subscribe((response) => {
      this.userCode = response.userCode;
      console.log('userCode obtido:', this.userCode);
    });
  }

  // Obtém o accessToken com o userCode
  getAccessToken() {
    if (this.userCode) {
      this.ifoodService.getToken(this.userCode).subscribe((response) => {
        this.accessToken = response.accessToken;
        console.log('Access Token:', this.accessToken);
      });
    }
  }

}
