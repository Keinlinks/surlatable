import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { HeaderServiceService } from 'src/app/services/header-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private servicioHeader: HeaderServiceService
  ) {}
  placeholderText!: string;
  resizeListener!: () => void;
  toggle_menu!: boolean;
  ngOnInit(): void {
    this.setPlaceholderText();
    this.resizeListener = this.renderer.listen('window', 'resize', () => {
      this.setPlaceholderText(); // Actualizar el texto cuando se cambie el tamaño de la ventana
    });
  }
  setPlaceholderText() {
    const width = window.innerWidth;

    if (width <= 1024) {
      this.placeholderText = 'Search'; // Cambiar el texto cuando la pantalla sea pequeña
    } else {
      this.placeholderText = 'What are you looking for?'; // Cambiar el texto cuando la pantalla sea grande
    }
  }
  showMenu() {
    this.servicioHeader.toggle_show();
  }
}
