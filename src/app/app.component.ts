import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { filter, map, mergeMap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map(route => {
            while (route.firstChild) route = route.firstChild;
            return route;
          }),
          mergeMap(route => route.data)
        )
        .subscribe(data => {
          // Apply SEO only if data exists
          const pageTitle = data['title'];
          const pageDescription = data['description'];
          const pageKeywords = data['keywords'];

          this.seoService.updateMeta(pageTitle, pageDescription, pageKeywords);

          // Scroll to top after navigation
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
  }
}
