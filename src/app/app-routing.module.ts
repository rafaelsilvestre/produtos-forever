import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home/home';
import { AboutPageComponent } from '../pages/about/about';
import { WantToBePartnerPageComponent } from '../pages/want-to-be-partner/want-to-be-partner';
import { ContactPageComponent } from '../pages/contact/contact';

const appRoutes: Routes = [
    { path: '',   component: HomePageComponent},
    { path: 'quem-somos',   component: AboutPageComponent},
    { path: 'quero-ser-parceiro',   component: WantToBePartnerPageComponent},
    { path: 'fale-conosco',   component: ContactPageComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
