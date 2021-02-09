import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faHome, faTasks, faBriefcase, faEnvelope, faUser, faArrowCircleLeft, faArrowCircleRight, faBars} from '@fortawesome/free-solid-svg-icons'
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
  faCircleLeft = faArrowCircleLeft;
  faCircleRight = faArrowCircleRight;
  faBars = faBars;

  navBar;
  menu;
  menuItems;
  mainContent;

  isExtended = true;
  arrow;
  
  constructor() {
    
  }

  ngOnInit(): void {
    this.navBar = document.getElementById("desktop-nav");
    this.menu = document.getElementById("menu-item");
    this.menuItems = this.navBar.getElementsByTagName("span");
    this.mainContent = document.getElementById("main-content");
    this.arrow = document.getElementById("arrow");
    this.setNav();
  }

  toggleNav(): void {
    this.isExtended = !this.isExtended;

    localStorage.setItem("isExtended", JSON.stringify(this.isExtended));
    this.setNav();
  }

  setNav(): void {
    this.isExtended = JSON.parse(localStorage.getItem("isExtended"))
    if(this.isExtended) {
      this.navBar.style.width = "200px";
      this.mainContent.style.marginLeft = "200px";
      
      for (let item of this.menuItems) {
        item.style.position = "relative";
        item.style.left = "0";
      }

      for (let item of this.navBar.getElementsByTagName("li")) {
        item.style.textAlign = "left";
      }
    } else {
      this.navBar.style.width = "60px";
      this.mainContent.style.marginLeft = "60px";
      for (let item of this.menuItems) {
        item.style.position = "absolute";
        item.style.left = "-999px";
      }

      for (let item of this.navBar.getElementsByTagName("li")) {
        item.style.textAlign = "center";
      }
    }
  }

  openMobileNav(): void {
    if(this.menu.style.visibility === "visible") {
      this.menu.style.visibility = "hidden";
      this.menu.style.opacity = 0;
    } else {
      this.menu.style.visibility = "visible";
      this.menu.style.opacity = 1;
    }
    
  }
}
