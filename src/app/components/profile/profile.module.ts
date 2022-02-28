import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileResolver} from './profile-resolver.service';
import {SharedModule} from '../../shared';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileArticlesComponent} from './profile-articles.component';
import {ProfileComponent} from './profile.component';
import {ProfileFavoritesComponent} from './profile-favorites.component';



@NgModule({
  declarations: [ProfileArticlesComponent, ProfileComponent, ProfileFavoritesComponent],
  providers: [ProfileResolver],
  imports: [
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
