import { Component } from '@angular/core';
import { Skill } from '../models/skill.model';
import { ApiService } from '../api.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'] // Corrigé ici : "styleUrls" au lieu de "styleUrl"
})
export class SkillsComponent {
  competences: Skill[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Charger les compétences depuis l'API
    this.apiService.getSkills().subscribe({
      next: (response) => {
        this.competences = response.body || [];
      },
      error: (err) => console.error('Erreur:', err),
    });
  }
}
