import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { BookCardsComponent } from './component/book-cards/book-cards.component';
import { AngularMaterialModule } from '../material.module';
import { BookMoveToBagComponent } from './component/book-move-to-bag/book-move-to-bag.component';
import { BookAddToFavComponent } from './component/book-add-to-fav/book-add-to-fav.component';
import { HeaderComponent } from './component/header/header.component';
import { ThemepickerComponent } from './component/themepicker/themepicker.component';
import { ShowSimilarItemsComponent } from './component/show-similar-items/show-similar-items.component';

@NgModule({
  declarations: [
    SharedComponent,
    BookCardsComponent,
    BookMoveToBagComponent,
    BookAddToFavComponent,
    HeaderComponent,
    ThemepickerComponent,
    ShowSimilarItemsComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, AngularMaterialModule],
  exports: [
    BookCardsComponent,
    BookMoveToBagComponent,
    BookAddToFavComponent,
    HeaderComponent,
    ShowSimilarItemsComponent
  ],
})
export class SharedModule {}
