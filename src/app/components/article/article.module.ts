import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownPipe } from './markdown.pipe';
import {ArticleResolver} from './article-resolver.service';
import {SharedModule} from '../../shared';
import {ArticleRoutingModule} from './article-routing.module';
import {ArticleComponent} from './article.component';
import {ArticleCommentComponent} from './article-comment.component';



@NgModule({
  declarations: [
    ArticleComponent,
    ArticleCommentComponent,
    MarkdownPipe
  ],
  imports: [
    SharedModule,
    ArticleRoutingModule
  ],
  providers: [
    ArticleResolver
  ]
})
export class ArticleModule { }
