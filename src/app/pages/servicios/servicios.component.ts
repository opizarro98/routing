import { Component } from '@angular/core';
import { NasaApiService } from '../../nasa-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  astronomyPicture: any;
  asteroidImages: any[] = [];
  planetImages: any[] = [];
  displayedPlanetImages: any[] = [];

  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit(): void {
    this.nasaApiService.getAstronomyPictureOfDay().subscribe(
      (data) => {
        this.astronomyPicture = data;
      },
      (error) => {
        console.error('Error fetching astronomy picture:', error);
      }
    );
    this.nasaApiService.getImagenes().subscribe(
      (data) => {
        this.planetImages = data.photos;
        this.displayedPlanetImages = this.planetImages.slice(0, 6);
      },
      (error) => {
        console.error('Error fetching planet images:', error);
      }
    );
  }

  loadMoreImages() {
    const startIndex = this.displayedPlanetImages.length;
    const endIndex = startIndex + 3;
    if (endIndex <= this.planetImages.length) {
      this.displayedPlanetImages = [
        ...this.displayedPlanetImages,
        ...this.planetImages.slice(startIndex, endIndex),
      ];
    }
  }
}
