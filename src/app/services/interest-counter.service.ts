import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class InterestCounterService {
  private count = 0;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      const storedCount = localStorage.getItem('interestCount');
      this.count = storedCount ? parseInt(storedCount, 10) : 0;
    }
  }

  increment(): void {
    this.count++;
    if (this.isBrowser) {
      localStorage.setItem('interestCount', this.count.toString());
    }
  }

  getCount(): number {
    return this.count;
  }
}
