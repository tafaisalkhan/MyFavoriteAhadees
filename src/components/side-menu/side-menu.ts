import { Component, ViewChild } from '@angular/core';
import { NavController, Nav} from 'ionic-angular';
import { DuaListComponent } from "../dua-list/dua-list";
import { MainMenuComponent } from "../main-menu/main-menu";
import { SettingComponent } from "../setting/setting";
import { FavoriteComponent } from "../favorite/favorite";
/**
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuComponent {
  @ViewChild(Nav) nav: Nav;
  text: string;
  rootPage: any = MainMenuComponent;

  constructor(navCtrl: NavController) {
    console.log('Hello SideMenuComponent Component');
    this.text = 'Hello World';
    //this.nav.setRoot(DuaListComponent);
  }

openPage(page) {
  if(page == 'mainMenu'){
      this.nav.setRoot(MainMenuComponent);
  }
  else if (page == 'setting'){
    this.nav.setRoot(SettingComponent);
  }
  else if (page == 'favorite'){
    this.nav.setRoot(FavoriteComponent);
  }


}


}
