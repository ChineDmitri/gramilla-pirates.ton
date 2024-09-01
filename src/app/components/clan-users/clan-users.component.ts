import { MemberComponent } from './../member/member.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-clan-users',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, MemberComponent],
  templateUrl: './clan-users.component.html',
  styleUrl: './clan-users.component.scss',
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
export class ClanUsersComponent {
  chiefsMembers = [
    {
      photoUrl: 'assets/yoda.jpeg',
      telegramUsername: 'kanisteryoda'
    },
  ]

  teamMembers = [
    {
      photoUrl: 'assets/forum4anin.jpeg',
      telegramUsername: 'Forum4anin'
    },
    {
      photoUrl: 'assets/ye-long-ma.jpg',
      telegramUsername: 'danis11'
    },  
    {
      photoUrl: 'assets/TripExplorer.jpeg',
      telegramUsername: 'TripExplorer'
    }
  ];
  

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToMain(): void {
    this.router.navigate(['/']);
  }
}
