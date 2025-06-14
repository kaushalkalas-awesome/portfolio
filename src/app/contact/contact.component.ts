import { Component } from '@angular/core';
import { InterestCounterService } from '../services/interest-counter.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private counterService: InterestCounterService, private router: Router) {}

  onFormSubmit() {
    this.counterService.increment();
    sessionStorage.setItem('allowThankYou', 'true');
  }
}
