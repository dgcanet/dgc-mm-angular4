import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SharedModule } from './@shared/shared.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MenuModule } from './menu/menu.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    MenuModule,
    ShoppingCartModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
