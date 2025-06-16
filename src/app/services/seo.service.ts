import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private titleService: Title, private metaService: Meta) {}

  updateMeta(title: string, description: string, keywords: string) {
    // Update Title
    this.titleService.setTitle(title);

    // Update Meta Description
    this.metaService.updateTag({ name: 'description', content: description });

    // Update Meta Keywords
    this.metaService.updateTag({ name: 'keywords', content: keywords });

    // Open Graph (optional but highly recommended for SEO)
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card (optional)
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
  }
}
