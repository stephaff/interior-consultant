import { Component } from '@angular/core';
import { navlink } from './navlinks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks: navlink[] = [
    {
      label: 'Home',
      link: '#'
    },
    {
      label: 'Collection',
      link: '#'
    },
    {
      label: 'About',
      link: '#'
    },
    {
      label: 'Contact',
      link: '#'
    },
  ]
}
