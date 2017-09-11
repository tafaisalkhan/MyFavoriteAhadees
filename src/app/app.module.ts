import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeAudio } from '@ionic-native/native-audio';
import { IonicStorageModule } from '@ionic/storage';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SideMenuComponent } from '../components/side-menu/side-menu'
import { DuaListComponent } from '../components/dua-list/dua-list'
import { MainMenuComponent } from '../components/main-menu/main-menu'
import { SettingComponent } from '../components/setting/setting'
import { FavoriteComponent } from '../components/favorite/favorite'
import { DuaConstantProvider } from '../providers/dua-constant/dua-constant';
import { DuaServiceProvider } from '../providers/dua-service/dua-service';
import { Media, MediaObject } from '@ionic-native/media';
import { DuaListDataProvider } from '../providers/dua-list-data/dua-list-data';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';


const firebaseConfig = {
  apiKey: "AIzaSyBw-H2j-MU1RqC4fO-XJgMmj3zRPo8xJiU",
  authDomain: "myfavoriteduas.firebaseapp.com",
  databaseURL: "https://myfavoriteduas.firebaseio.com",
  projectId: "myfavoriteduas",
  storageBucket: "myfavoriteduas.appspot.com",
  messagingSenderId: "932145254418"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SideMenuComponent,
    DuaListComponent,
    SettingComponent,
    FavoriteComponent,
    MainMenuComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SideMenuComponent,
    DuaListComponent,
    SettingComponent,
    FavoriteComponent,
    MainMenuComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    Media,
    AdMobFree,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DuaConstantProvider,
    DuaServiceProvider,
    DuaListDataProvider
  ]
})
export class AppModule {}
