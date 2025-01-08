import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
=======
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
>>>>>>> 0c2e8b65230467605c382ff92210e811d3a717a1

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet],
=======
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
>>>>>>> 0c2e8b65230467605c382ff92210e811d3a717a1
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolioangular';
}
