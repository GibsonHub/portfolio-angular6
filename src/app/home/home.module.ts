

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';

import { FlipCardComponent } from './../components/flip-card/flip-card.component';
import { ProjectListComponent } from './../components/flip-card/projects/project-list.component';
// import { DownloadResumeComponent } from './../components/download-resume/download-resume.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    // ProjectListModule,
  ],
  exports: [],
  declarations: [
    HomeComponent,
    FlipCardComponent,
    ProjectListComponent,
    // DownloadResumeComponent,
  ],
  providers: [
    QuoteService
  ]
})
export class HomeModule { }
