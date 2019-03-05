import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { PostComponentComponent } from './post-component/post-component.component';
import { PostServiceService } from './post-service.service';

@NgModule({
  declarations: [AppComponent, PostComponentComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApiService,PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
