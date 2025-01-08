import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from './models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi = "http://localhost:3214/admin.php";

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json', // Indique que le contenu est en JSON
    'Accept': 'application/json', // Accepte une réponse en JSON
  });

  constructor(private http: HttpClient) { }

  getSkills(): Observable<HttpResponse<Skill[]>> {
    return this.http.get<Skill[]>(`${this.urlApi}?table=competences`, { headers: this.httpHeaders, observe: 'response' });
  }

  getCompetences() {
    // Méthode vide pour l'instant
  }
}
