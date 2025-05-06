import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterDegreeModule } from './module/master-degree.module';
import { Navbar } from './components/navbar/navbar.component';
import { Dialog } from './components/dialog/dialog.component';
import { Sidebar } from './components/sidebar/sidebar.component';
import { Footer } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MasterDegreeModule,
    Navbar, 
    Dialog,
    Sidebar,
    Footer
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'master-degree-angular';
}
