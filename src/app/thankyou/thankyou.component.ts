import { Component } from '@angular/core';
import { InterestCounterService } from '../services/interest-counter.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent {
  constructor(public counterService: InterestCounterService) {}
}
