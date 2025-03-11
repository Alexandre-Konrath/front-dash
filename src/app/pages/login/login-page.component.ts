import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  imports: [CommonModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true
})
export class LoginPage implements OnInit {
  private router = inject(Router)

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigate(['/home']);
  }
}
