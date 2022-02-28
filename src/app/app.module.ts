import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleCommentComponent } from './components/article/article-comment.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthComponent } from './components/auth/auth.component';
import { ProfileArticlesComponent } from './components/profile/profile-articles.component';
import { ProfileFavoritesComponent } from './components/profile/profile-favorites.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleCommentComponent,
    SettingsComponent,
    AuthComponent,
    ProfileArticlesComponent,
    ProfileFavoritesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
