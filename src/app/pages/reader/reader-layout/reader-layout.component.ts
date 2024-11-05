import { Component } from '@angular/core';
import { NavbarReaderComponent } from '../../../shared/components/navbar-reader/navbar-reader.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reader-layout',
  standalone: true,
  imports: [NavbarReaderComponent,FooterComponent,RouterOutlet],
  templateUrl: './reader-layout.component.html',
  styleUrl: './reader-layout.component.css'
})
export class ReaderLayoutComponent {

}
