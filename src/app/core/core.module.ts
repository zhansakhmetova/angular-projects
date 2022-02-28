import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApiService,
  ArticlesService,
  AuthGuardService,
  CommentsService,
  JwtService,
  ProfilesService,
  TagsService,
  UserService
} from './services';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    ArticlesService,
    AuthGuardService,
    TagsService,
    UserService,
    ProfilesService,
    JwtService,
    CommentsService
  ]
})
export class CoreModule { }
