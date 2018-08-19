
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
// import { DownloadResumeComponent } from './../components/download-resume/download-resume.component';
// import { QuoteService } from './quote.service';

// import { FlipCardComponent } from './../components/flip-card/flip-card.component';
// import { ProjectListComponent } from './../components/flip-card/projects/project-list.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    ResumeRoutingModule,
  ],
  declarations: [
    ResumeComponent,
    // DownloadResumeComponent,
    // FlipCardComponent,
    // ProjectListComponent
  ],
  providers: [
    // QuoteService
  ]
})
export class ResumeModule { }
