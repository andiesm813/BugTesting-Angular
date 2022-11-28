import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxToggleModule, IgxDropDownModule, IgxCardModule, IgxListModule, IgxAvatarModule, IgxDialogModule, IgxInputGroupModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { SpaceBetweenComponent } from './space-between/space-between.component';
import { CardsOpacityComponent } from './cards-opacity/cards-opacity.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    SpaceBetweenComponent,
    CardsOpacityComponent,
    CardActionsComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxCardModule,
    IgxListModule,
    IgxAvatarModule,
    IgxDialogModule,
    FormsModule,
    IgxInputGroupModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
