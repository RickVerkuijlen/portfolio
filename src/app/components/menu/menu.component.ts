import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faHome, faTasks, faBriefcase, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faHome = faHome;
  faTasks = faTasks;
  faBriefcase = faBriefcase;
  faEnvelope = faEnvelope;
  faUser = faUser;
  faGithub = faGithub;
  faLinkedin = faLinkedinIn;

  navBar;
  menu;
  menuItems;
  mainContent;

  isExtended = true;
  
  constructor() {
    
  }

  ngOnInit(): void {
    this.navBar = document.getElementById("nav");
    this.menu = document.getElementById("menu-item");
    this.menuItems = this.navBar.getElementsByTagName("span");
    this.mainContent = document.getElementById("main-content");
  }

  toggleNav(): void {
    this.isExtended = !this.isExtended;

    console.log(this.menuItems)

    if(this.isExtended) {
      this.navBar.style.width = "200px";
      this.mainContent.style.marginLeft = "200px";
      for (let item of this.menuItems) {
        item.style.opacity = "1";
        item.style.display = "inline-block";
      }
    } else {
      this.navBar.style.width = "60px";
      this.mainContent.style.marginLeft = "60px";
      for (let item of this.menuItems) {
        item.style.opacity = "0";
        item.style.display = "none";
      }
    }
  }


}