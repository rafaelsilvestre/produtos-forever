import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header';
import { CarouselComponent } from '../components/carousel/carousel';
import { ReceiveCallsComponent } from '../components/receive-calls/receive-calls';
import { FooterComponent } from '../components/footer/footer';
import { AboutUsComponent } from '../components/about-us/about-us';
import { BestSellersComponent } from '../components/best-sellers/best-sellers';
import { ProductItemComponent } from '../components/product-item/product-item';
import { BuyNowComponent } from '../components/buy-now/buy-now';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb';
import { PotentialClientModalComponent } from '../components/potential-client-modal/potential-client-modal';

import { HomePageComponent } from '../pages/home/home';
import { AboutPageComponent } from '../pages/about/about';
import { WantToBePartnerPageComponent } from '../pages/want-to-be-partner/want-to-be-partner';
import { ContactPageComponent } from '../pages/contact/contact';
import { BuyNowPageComponent } from '../pages/buy-now/buy-now';
import { ProductDetailsPageComponent } from '../pages/product-details/product-details';
import { CategoryPageComponent } from '../pages/category/category';

import { InputMaskDirective } from '../directives/input-mask/input-mask';

import { PhoneNumberPipe } from '../pipes/phone-number/phone-number';
import { Excerpt } from '../pipes/excerpt/excerpt';

import { ProductServiceProvider } from '../providers/services/product-service';

@NgModule({
    declarations: [
        // Components
        AppComponent,
        HeaderComponent,
        ReceiveCallsComponent,
        CarouselComponent,
        FooterComponent,
        AboutUsComponent,
        BestSellersComponent,
        ProductItemComponent,
        BuyNowComponent,
        BreadcrumbComponent,
        PotentialClientModalComponent,
        CategoryPageComponent,
        // Pages
        HomePageComponent,
        AboutPageComponent,
        WantToBePartnerPageComponent,
        ContactPageComponent,
        BuyNowPageComponent,
        ProductDetailsPageComponent,
        // Directives
        InputMaskDirective,
        // Pipes
        PhoneNumberPipe,
        Excerpt
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        ProductServiceProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
