
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';

import { DownloadResumeComponent } from './../components/download-resume/download-resume.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    DownloadResumeComponent,
  ],
  exports: [
    LoaderComponent,
    DownloadResumeComponent,
  ]
})
export class SharedModule { }
