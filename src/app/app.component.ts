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
  isSidebarOpen = false;
  isMobile = false;

  toggleSidebar(): void{
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  menuAbierto = false;

  toggleDarkMode() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  }


//   const jobSection = document.querySelector(#jobSection)
// const articles = document.querySelectorAll('#jovSection article')

//   jobSection.addEventListener('click', (e)=>{
//     const id = e.target.dataset.id
//     if(id){
//       articles.forEach((article)=>{
//         article.classList.add('hidden')
//       });

//       const element = document.getElementById(id);
//       element?.classList.remove('hidden')
//     }

//   });



articles = [
  {id: 'job1' , title: 'Menu 1',  content: [{
    content1: 'contenido del trabajo menu', content2: 'contenido del trabajo 2', content3: 'contenido del trabajo 3'}
  ]},
  {id: 'job2' , title: 'Menu 2',  content: [{
    content1: 'contenido del trabajo menu 2', content2: 'contenido del trabajo 2', content3: 'contenido del trabajo 3'}
  ]},
  {id: 'job3' , title: 'Menu 3',  content: [{
    content1: 'contenido del trabajo menu 3', content2: 'contenido del trabajo 2', content3: 'contenido del trabajo 3'}
  ]},
  {id: 'job4' , title: 'Menu 4',  content: [{
    content1: 'contenido del trabajo menu 4xxx', content2: 'contenido del trabajo 2', content3: 'contenido del trabajo 3'}
  ]},
]

//articulo activo por defect
activeArticle: string | null = 'job1'
selectedId: string = '';


showArticle(id:string){
  this.activeArticle = id;
}

  ngOnInit() {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
    if (this.articles.length > 0) {
    this.selectedId = this.articles[0].id;
  }

  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }


}

