import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  projects: number = 0;
  experience: number = 0;
  technologies: number = 0;

  ngOnInit(): void {
    this.animateCounter('projects', 5);
    this.animateCounter('experience', 1.5);
    this.animateCounter('technologies', 10);
  }

  animateCounter(field: 'projects' | 'experience' | 'technologies', target: number) {
    let count = 0;
    const speed = 100;
    const increment = () => {
      if (count < target) {
        count++;
        this[field] = count;
        setTimeout(increment, speed);
      } else {
        this[field] = target;
      }
    };
    increment();
  }
}
