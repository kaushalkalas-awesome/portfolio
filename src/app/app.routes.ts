import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home - Kaushal',
      description: 'Welcome to Kaushal Kalas portfolio website. Full-stack developer passionate about creating modern and scalable web applications.',
      keywords: 'Kaushal, Portfolio, Full Stack Developer, Angular, Web Developer, Software Engineer, Creative Designer'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About - Kaushal',
      description: 'Learn more about Kaushal Kalas, his skills, background, and journey as a web developer and designer.',
      keywords: 'About Kaushal, Web Developer, Software Engineer, Developer Background, Skills, Career'
    }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {
      title: 'Services - Kaushal',
      description: 'Explore services offered by Kaushal including web development, app design, UI/UX, and branding solutions.',
      keywords: 'Services, Web Development, UI/UX Design, Android Development, Graphic Design, Kaushal'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Projects - Kaushal',
      description: 'View projects completed by Kaushal Kalas using technologies like Angular, Firebase, Node.js and more.',
      keywords: 'Projects, Angular Projects, Firebase Apps, Web Development Portfolio, Full Stack Work'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Contact - Kaushal',
      description: 'Get in touch with Kaushal Kalas for collaborations, freelance projects, or business inquiries.',
      keywords: 'Contact, Hire Developer, Freelance Web Developer, Work With Kaushal, Collaboration'
    }
  },
  {
    path: 'thankyou',
    component: ThankyouComponent,
    data: {
      title: 'Thank You - Kaushal',
      description: 'Thank you for contacting Kaushal Kalas. Your message has been received and I will get back to you shortly.',
      keywords: 'Thank You, Contact Confirmation, Message Sent, Kaushal Kalas, Portfolio'
    }
  },
  {path: '**', redirectTo: '' }
];
