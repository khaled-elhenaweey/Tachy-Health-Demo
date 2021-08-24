import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { FooterComponent } from './footer/footer.component';
import { ProductTabComponent } from './our-products/product-tab/product-tab.component';
import { AiGuideTabComponent } from './our-products/product-tab/ai-guide-tab/ai-guide-tab.component';
import { AiCodeTabComponent } from './our-products/product-tab/ai-code-tab/ai-code-tab.component';
import { AiClaimTabComponent } from './our-products/product-tab/ai-claim-tab/ai-claim-tab.component';
import { AiReviewTabComponent } from './our-products/product-tab/ai-review-tab/ai-review-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    OurProductsComponent,
    RequestDemoComponent,
    FooterComponent,
    ProductTabComponent,
    AiGuideTabComponent,
    AiCodeTabComponent,
    AiClaimTabComponent,
    AiReviewTabComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
