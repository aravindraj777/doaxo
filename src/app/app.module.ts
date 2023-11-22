import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './store/reducers/todo.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreDevtoolsModule.instrument({maxAge:25}),
    StoreModule.forRoot({todos:TodoReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
