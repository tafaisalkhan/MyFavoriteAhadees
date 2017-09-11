import { Component } from '@angular/core';;
import { SideMenuComponent } from "../../components/side-menu/side-menu";
import { DuaListComponent } from "../../components/dua-list/dua-list";
import { NavController, Platform } from 'ionic-angular';
import { DuaServiceProvider } from '../../providers/dua-service/dua-service';
import { DuaConstantProvider } from '../../providers/dua-constant/dua-constant';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the MainMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'main-menu',
  templateUrl: 'main-menu.html'
})
export class MainMenuComponent {

  text: string;
  ahadeesListArray: any = [];
  
  platform: string;
  sizeStore: string;
  translationStore: string ="urdu";
  isFavorite: Boolean = false;
  translation: string;
   
  constructor(public navCtrl: NavController, private duaServiceProvider: DuaServiceProvider, private storage: Storage, public plt: Platform, private duaConstantProvider: DuaConstantProvider, private admobFree: AdMobFree, private socialSharing: SocialSharing ) {
    this.loadDua();  
  
  }

loadDua(){
  //check for local stor
  let   options = {
    //ios
    //adId: 'ca-app-pub-6025676747290907~5163018690',
    //android
    adId:'ca-app-pub-5732334124058455/7973166445',
    adSize: 'SMART_BANNER',
    autoShow: true
  };
    this.platform = this.duaConstantProvider.device;
 
    this.storage.get('sizeStore').then((val) => {
      if (val != null){
        this.sizeStore =  val;
      }
    });

    this.storage.get('translationStore').then((val) => {
      try{
      if (val != null){
         this.translationStore =  val;
        
      }
    }
    catch(e){

    }
    });
    
    this.admobFree.banner.config(options);
  
    this.admobFree.banner.prepare()
    .then(() => {
      this.admobFree.banner.show();
    })
    .catch(e => console.log(e));
    

  
    if (this.plt.is('iphone')) {
      // This will only print when on iOS
      console.log('I am an mobile device!');
      this.duaConstantProvider.device= "small";
      this.platform = "small";
    }
    else if (this.plt.is('ipad')) {
      // This will only print when on iOS
      console.log('I am an ipad device!');
      this.duaConstantProvider.device= "large";
      this.platform = "large";
    }

    else if (this.plt.is('tablet')) {
      // This will only print when on iOS
      console.log('I am an tablet device!');
      this.duaConstantProvider.device= "large";
      this.platform = "large";
    }
    else if (this.plt.is('mobile')) {
      // This will only print when on iOS
      console.log('I am an mobile device!');
      this.duaConstantProvider.device= "small";
      this.platform = "small";
    }
    else{
      console.log('I am an browser device!');
    }
 

  }

  duaNavigation(val){
    if (val == 'quran'){
      this.navCtrl.push(DuaListComponent, {
        type: val,
        title: 'Quran Dua'
      });
    }
    else{
      this.navCtrl.push(DuaListComponent, {
        type: val,
        title: 'Ahadees Dua'
      });
    }
   
  }



}
