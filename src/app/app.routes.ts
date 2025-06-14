import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: '', component: HomeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'thankyou', component: ThankyouComponent}
];
