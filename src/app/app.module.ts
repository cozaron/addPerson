import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './component/form/form.component';
import { ProfilesComponent } from './component/profiles/profiles.component';
import {HttpClientModule} from '@angular/common/http';
import { DeleteComponent } from './component/delete/delete.component';
import { RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
const appRouter : Routes = [
  {path :'',
   component : ProfilesComponent
  },
  {path :'about',
  component : AboutComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProfilesComponent,
    DeleteComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouter)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
