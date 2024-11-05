import { Component } from '@angular/core';
import { NavbarWriterComponent } from "../../../shared/components/navbar-writer/navbar-writer.component";
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-writer-layout',
  standalone: true,
  imports: [NavbarWriterComponent,FooterComponent,RouterOutlet],
  templateUrl: './writer-layout.component.html',
  styleUrl: './writer-layout.component.css'
})
export class WriterLayoutComponent {

}
