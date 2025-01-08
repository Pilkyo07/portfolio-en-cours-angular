import { Component } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  realisations: any[] = []; // Stocke les projets

  constructor(private portfolioService: PortfolioService) {}
  
  ngOnInit(): void {
    // Récupérer les projets via le service
    }
}
