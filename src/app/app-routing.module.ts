import { ProductTabComponent } from './our-products/product-tab/product-tab.component';
import { AiReviewTabComponent } from './our-products/product-tab/ai-review-tab/ai-review-tab.component';
import { AiGuideTabComponent } from './our-products/product-tab/ai-guide-tab/ai-guide-tab.component';
import { AiCodeTabComponent } from './our-products/product-tab/ai-code-tab/ai-code-tab.component';
import { AiClaimTabComponent } from './our-products/product-tab/ai-claim-tab/ai-claim-tab.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {
    path: 'Home',
    component: ProductTabComponent,
    children: [
      {
        path: 'AiClaimTab',
        component: AiClaimTabComponent,
      },
      {
        path: 'AiCodeTab',
        component: AiCodeTabComponent,
      },
      {
        path: 'AiGuideTab',
        component: AiGuideTabComponent,
      },
      {
        path: 'AiReviewTab',
        component: AiReviewTabComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
