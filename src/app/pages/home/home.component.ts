import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgbCarouselModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    { id: 1, src: '../../../assets/image/c1.jpg', titulo: 'Explora Galaxias Lejanas',descripcion:'' },
    { id: 2, src: '../../../assets/image/c2.jpg', titulo: 'Nebulosas Asombrosas',descripcion:'' },
    { id: 3, src: '../../../assets/image/c3.jpg', titulo: 'Planetas Misteriosos',descripcion:'' },
    // Add more images as needed
  ];

  isLineExpanded = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isLineExpanded = scrollPosition > 200; // Adjust the scroll position as needed
  }

}
