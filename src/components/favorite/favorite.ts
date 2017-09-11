import { Component, ViewChild, OnInit, Input, OnChanges } from '@angular/core';
import { Slides, NavController, NavParams, ActionSheetController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeAudio } from '@ionic-native/native-audio';
import { Media, MediaObject } from '@ionic-native/media';
import { Observable } from 'rxjs/Observable';
import { DuaServiceProvider } from '../../providers/dua-service/dua-service';
import { DuaConstantProvider } from '../../providers/dua-constant/dua-constant';


/**
 * Generated class for the FavoriteComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'favorite',
  templateUrl: 'favorite.html'
})
export class FavoriteComponent {
  
  text: string;
  ahadeesListArray: any = [];
  ahadeesListArrayAll: any = [];
  platform: string;
  sizeStore: string;
  translationStore: string = "urdu";
  isFavorite: Boolean = false;
  translation: string;
   
  constructor(public navCtrl: NavController, private duaServiceProvider: DuaServiceProvider, private storage: Storage, private duaConstantProvider: DuaConstantProvider, private socialSharing: SocialSharing ) {
    this.loadDua();
    
    
  
  }


loadDua(){
  //check for local storage

  
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
  
    this.storage.get('quranDua').then((val) => {
 
        this.ahadeesListArrayAll = val;
        //this.ahadeesListArray =  val.filter(item=> item.favorite == true);
        //console.log(this.ahadeesListArray);
        this.storage.get('ahadeesDua').then((val) => {
          try{
             this.ahadeesListArrayAll = this.ahadeesListArrayAll.concat(val);
          // this.ahadeesListArrayAll = val;
          
              this.ahadeesListArray =  this.ahadeesListArrayAll.filter(item=> item.favorite == true);
          }
          catch(e){

          }
           console.log(this.ahadeesListArray);
             
           });
      
    });

  }

  unFavorite(index, type){
    console.log(index);
    //this.isFavorite = false;
    //var item = this.ahadeesListArray.filter(item => item.index == index);
    
    if (type == "quran"){
      this.storage.get('quranDua').then((val) => {
        var item = val.filter(item => item.index == index);
        item[0].favorite = false;
        this.storage.set('quranDua', val);
         console.log(this.ahadeesListArray);
           
         });
      //this.storage.set('quranDua', this.ahadeesListArray);
    }
    else{
      //this.storage.set('ahadeesDua', this.ahadeesListArray);
      this.storage.get('ahadeesDua').then((val) => {
        var item = val.filter(item => item.index == index);
        item[0].favorite = false;
        this.storage.set('ahadeesDua', val);
         console.log(this.ahadeesListArray);
        });
    }
    
    console.log(this.ahadeesListArray)
  }

  favorite(index, type){
      
    if (type == "quran"){
      this.storage.get('quranDua').then((val) => {
        var item = val.filter(item => item.index == index);
        item[0].favorite = true;
        this.storage.set('quranDua', val);
         console.log(this.ahadeesListArray);
           
         });
      //this.storage.set('quranDua', this.ahadeesListArray);
    }
    else{
      //this.storage.set('ahadeesDua', this.ahadeesListArray);
      this.storage.get('ahadeesDua').then((val) => {
        var item = val.filter(item => item.index == index);
        item[0].favorite = true;
        this.storage.set('ahadeesDua', val);
         console.log(this.ahadeesListArray);
        });
    }
   
  }
  shareDUA(index){
    console.log(index);
    var item = this.ahadeesListArrayAll .filter(item => item.index == index);
    if(this.translationStore=="urdu"){
      this.socialSharing.share(  item[0].arabic + "  " + item[0].urdu, "Dua " + item[0].urdu  , null); 
    }
    else{
      this.socialSharing.share(  item[0].arabic + "  " + item[0].english, "Dua " + item[0].english  , null); 
    }
  }

}
