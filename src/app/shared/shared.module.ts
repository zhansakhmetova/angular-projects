import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowAuthedDirective} from './show-authed.directive';
import { ListErrorsComponent } from './list-errors.component';
import { FavoriteButtonComponent } from './buttons';
import { FollowButtonComponent } from './buttons';
import { ArticlePreviewComponent } from './article-helpers';
import { ArticleListComponent } from './article-helpers';
import { ArticleMetaComponent } from './article-helpers';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    FavoriteButtonComponent,
    FollowButtonComponent,
    ListErrorsComponent,
    ShowAuthedDirective
  ],
  exports: [
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    CommonModule,
    FavoriteButtonComponent,
    FollowButtonComponent,
    ListErrorsComponent,
    ShowAuthedDirective
  ],
})

export class SharedModule {}
