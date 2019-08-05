import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home/home';
import { AboutPageComponent } from '../pages/about/about';
import { WantToBePartnerPageComponent } from '../pages/want-to-be-partner/want-to-be-partner';
import { ContactPageComponent } from '../pages/contact/contact';
import { BuyNowPageComponent } from '../pages/buy-now/buy-now';
import { ProductDetailsPageComponent } from '../pages/product-details/product-details';
import {CategoryPageComponent} from '../pages/category/category';

export const appRoutes: Routes = [
    { path: '', component: HomePageComponent, data: {title: 'Produtos Forever'} },
    { path: 'quem-somos', component: AboutPageComponent, data: {title: 'Quem Somos - Produtos Forever'} },
    { path: 'quero-ser-parceiro', component: WantToBePartnerPageComponent, data: {title: 'Quero ser parceiro - Produtos Forever'} },
    { path: 'quero-comprar-agora', component: BuyNowPageComponent, data: {title: 'Quero comprar - Produtos Forever'} },
    { path: 'fale-conosco', component: ContactPageComponent, data: {title: 'Fale Conosco - Produtos Forever'} },
    { path: 'produto/:slug', component: ProductDetailsPageComponent, data: {title: '%s - Produtos Forever'} }
];

export const appRoutesCategories: Routes = [
    { path: 'bebidas', component: CategoryPageComponent, data: {title: 'Bebidas'} },
    { path: 'nutricao', component: CategoryPageComponent, data: {title: 'Nutrição'} },
    { path: 'gerenciamento-de-peso', component: CategoryPageComponent, data: {title: 'Gerenciamento de Peso'} },
    { path: 'cuidados-pessoais', component: CategoryPageComponent, data: {title: 'Cuidados Pessoais'} },
    { path: 'hidratantes', component: CategoryPageComponent, data: {title: 'Hidratantes'} }
];

const routes: Routes = appRoutes.concat(appRoutesCategories);

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: false }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
