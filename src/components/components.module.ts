import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu';
import { DuaListComponent } from './dua-list/dua-list';
import { SettingComponent } from './setting/setting';

import { FavoriteComponent } from './favorite/favorite';
import { MainMenuComponent } from './main-menu/main-menu';
@NgModule({
	declarations: [SideMenuComponent,
    DuaListComponent,
    SettingComponent,
    FavoriteComponent,
    MainMenuComponent],
	imports: [],
	exports: [SideMenuComponent,
    DuaListComponent,
    SettingComponent,
    FavoriteComponent,
    MainMenuComponent]
})
export class ComponentsModule {}
