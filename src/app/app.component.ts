import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { slideInAnimation } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'portfolio';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'nl']);
    translate.setDefaultLang('nl');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|nl/) ? browserLang : 'en');
  }
}
