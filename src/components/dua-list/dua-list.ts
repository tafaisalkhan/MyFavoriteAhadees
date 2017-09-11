import { Component } from '@angular/core';
import { NavController, Platform, NavParams} from 'ionic-angular';
import { DuaServiceProvider } from '../../providers/dua-service/dua-service';
import { DuaConstantProvider } from '../../providers/dua-constant/dua-constant';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the DuaListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
const  options = {
  //ios
  //adId: 'ca-app-pub-6025676747290907~5163018690',
  //android
  adId:'ca-app-pub-6025676747290907/3957478739',
  adSize: 'SMART_BANNER',
  isTesting: false,
  autoShow: true
};
@Component({
  selector: 'dua-list',
  templateUrl: 'dua-list.html'
})


export class DuaListComponent {

  text: string;
  ahadeesListArray: any = [];
  
  platform: string;
  sizeStore: string;
  translationStore: string ="urdu";
  isFavorite: Boolean = false;
  translation: string;
  title: String = ""; 
  type: String = "";
  favoriteArray: any = [];
  constructor(public navCtrl: NavController, private duaServiceProvider: DuaServiceProvider, private storage: Storage, public plt: Platform, private duaConstantProvider: DuaConstantProvider, private admobFree: AdMobFree, private socialSharing: SocialSharing, public navParams: NavParams ) {
    this.title = this.navParams.get('title');
    this.type = this.navParams.get('type');
    this.loadDua();
    
    
  
  }

loadDua(){
  //check for local stor
 
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

    //this.storage.set('ahadeesDua', null);
    //this.storage.set('quranDua', null);

    /*this.duaServiceProvider.getAhadeesDuaListFirebase()
    .subscribe(data => {
       console.log('firebase data');
       console.log(data[0][0].no);
       console.log(data[0]);

      },
    (err) => {console.log(err);


      }
    );*/

    if(this.type == 'quran'){
      this.storage.get('quranDua').then((val) => {
        if (val == null)
          {
            this.duaServiceProvider.getQuranDuaListFirebase()
            .subscribe(data => {
                this.ahadeesListArray = data[0][0].no;
                this.storage.set('quranDua', this.ahadeesListArray);
                debugger;
        
              },
            (err) => {console.log(err);
        
        
              }
            );
          }
          else
          {
            this.ahadeesListArray =  val;
            this.duaServiceProvider.getQuranDuaListFirebase()
            .subscribe(data => {
                var list = data[0][0].no;
                if(this.ahadeesListArray.length <  list.length || this.ahadeesListArray.length >  list.length){
                  this.ahadeesListArray.push(list[list.length-1])
                  this.storage.set('quranDua', this.ahadeesListArray);
                }
              
                debugger;
        
              },
            (err) => {console.log(err);
        
        
              }
            );
          }
        });
    }
    else{
        this.storage.get('ahadeesDua').then((val) => {
        if (val == null)
          {
            this.duaServiceProvider.getAhadeesDuaListFirebase()
            .subscribe(data => {
                this.ahadeesListArray = data[0][0].no;
                this.storage.set('ahadeesDua', this.ahadeesListArray);
                debugger;
        
              },
            (err) => {console.log(err);
        
        
              }
            );
          }
          else
          {
            this.ahadeesListArray =  val;
            this.duaServiceProvider.getAhadeesDuaListFirebase()
            .subscribe(data => {
                var list = data[0][0].no;;
                if(this.ahadeesListArray.length < list.length || this.ahadeesListArray.length > list.length){
                  this.ahadeesListArray.push(list[list.length-1])
                  this.storage.set('ahadeesDua', this.ahadeesListArray);
                }
                debugger;
        
              },
            (err) => {console.log(err);
        
        
              }
            );
          }
        });
    }
   
  }

  unFavorite(index){
    console.log(index);
    //this.isFavorite = false;
    var item = this.ahadeesListArray.filter(item => item.index == index);
    item[0].favorite = false;
    if (this.type == "quran"){
      this.storage.set('quranDua', this.ahadeesListArray);
    }
    else{
      this.storage.set('ahadeesDua', this.ahadeesListArray);
    }
    
    console.log(this.ahadeesListArray)
  }

  favorite(index){
    console.log(index);
    //this.isFavorite = true;
    var item = this.ahadeesListArray.filter(item => item.index == index);
    item[0].favorite = true;
    if (this.type == "quran"){
      this.storage.set('quranDua', this.ahadeesListArray);
    }
    else{
      this.storage.set('ahadeesDua', this.ahadeesListArray);
    }   
   
  }

  /*unFavorite(index){
    debugger;
    this.isFavorite = false;
    //this.favoriteArray.slice(this.duaIndex);
    var i = this.favoriteArray.indexOf(index);
    //this.favoriteArray = this.favoriteArray.splice(this.duaIndex, 1)
    if(i != -1) {
      this.favoriteArray.splice(i, 1);
    }
    this.storage.set('favoriteArrayStore', this.favoriteArray);
  }

  favorite(index){
    debugger;;
    this.favoriteArray.push(index);
    this.storage.set('favoriteArrayStore', this.favoriteArray);
    this.isFavorite = true;
   
  }*/
  shareDUA(index){
    console.log(index);
    var item = this.ahadeesListArray.filter(item => item.index == index);
    item[0].favorite = true;
    if(this.translationStore=="urdu"){
      this.socialSharing.share(  item[0].arabic + "  " + item[0].urdu, "Dua " + item[0].urdu  , null); 
    }
    else{
      this.socialSharing.share(  item[0].arabic + "  " + item[0].english, "Dua " + item[0].english  , null); 
    }
   
  }

}

