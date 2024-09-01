import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent {

  @Input() photoUrl!: string;
  @Input() name!: string;
  @Input() telegramUsername!: string;

}
