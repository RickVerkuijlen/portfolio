import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
