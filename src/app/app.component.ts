import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterDegreeModule } from './module/master-degree.module';
import { Navbar } from './components/navbar/navbar.component';
import { Dialog } from './components/dialog/dialog.component';
import { Sidebar } from './components/sidebar/sidebar.component';
import { Footer } from './components/footer/footer.component';
import { ProfileService } from './service/profile.service';
import { DataService } from './service/data.service';
import ApiResponse from './model/dto/api-response';
import UserDto from './model/dto/userDto';

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
export class AppComponent implements OnInit {
  title = 'master-degree-angular';

  constructor(public profileService: ProfileService, public dataService: DataService) { }

  ngOnInit(): void {
    this.profileService.authorize().subscribe((response: ApiResponse<UserDto>) => {
      if(!response.success) {
        this.dataService.setIsLogged(false);
      }
    })
  }
}
