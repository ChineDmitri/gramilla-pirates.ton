import { Component } from '@angular/core';
import { MainModule } from '../../main-module/main.module';
import { transition, trigger, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class MainComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToTeam(): void {
    this.router.navigate(['/team']);
  }
}
