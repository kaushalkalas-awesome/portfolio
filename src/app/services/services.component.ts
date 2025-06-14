import { Component } from '@angular/core';
import { InterestCounterService } from '../services/interest-counter.service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(private counterService: InterestCounterService) {}

  handleServiceInterest() {
    this.counterService.increment();
  }
}
