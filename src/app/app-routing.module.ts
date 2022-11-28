import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { SpaceBetweenComponent } from './space-between/space-between.component';
import { CardsOpacityComponent } from './cards-opacity/cards-opacity.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { DialogComponent } from './dialog/dialog.component';

export const routes: Routes = [
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'buttons', component: ButtonsComponent, data: { text: 'Buttons' } },
  { path: 'space-between', component: SpaceBetweenComponent, data: { text: 'Space Between' } },
  { path: 'cards-opacity', component: CardsOpacityComponent, data: { text: 'Cards Opacity' } },
  { path: 'card-actions', component: CardActionsComponent, data: { text: 'Card Actions' } },
  { path: 'dialog', component: DialogComponent, data: { text: 'Dialog' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
