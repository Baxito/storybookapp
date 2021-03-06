import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListenPage } from '../pages/listen/listen';
import { BookPage } from '../pages/book/book';
import { ImagePage } from '../pages/image/image';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
// sub
import { ToreadPage } from '../pages/book/toread/toread';
import { ReadPage } from '../pages/book/read/read';

@NgModule({
  declarations: [
    MyApp,
    ListenPage,
    ImagePage,
    BookPage,
    ToreadPage,
    ReadPage,
    HomePage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListenPage,
    ImagePage,
    BookPage,
    ToreadPage,
    ReadPage,
    HomePage,
    ProfilePage,
    TabsPage
  ],
  providers: []
})
export class AppModule { }
