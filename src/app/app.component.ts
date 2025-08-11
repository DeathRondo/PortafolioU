import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolioU';
  isSidebarOpen = true;

  menuButton = document.querySelector('#menu-button')

  toggleSidebar(): void{
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
