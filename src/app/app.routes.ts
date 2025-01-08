import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"contact", component:ContactComponent},
    {path:"about", component:AboutComponent},
    {path:"skills", component:SkillsComponent},
    {path:"portfolio", component:PortfolioComponent}
];
