import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  coverImage: string = '../../../assets/image/fondo.jpg';
  misionDescription: string = 'Nuestra misión es proporcionar información educativa y fascinante sobre el cosmos, explorando los planetas y desentrañando los secretos del universo.';
  visionDescription: string = 'Nuestra visión es inspirar la curiosidad y el amor por la astronomía, promoviendo la comprensión de nuestro lugar en el espacio.';

  ngOnInit(): void {
    // Puedes realizar lógica adicional aquí si es necesario
  }
}
