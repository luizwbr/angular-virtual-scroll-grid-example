import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {XxxAlertModule, XxxDataModule} from '@app/xxx-common';
import {XxxUsersComponent} from './xxx-users.component';

@NgModule({
  declarations: [XxxUsersComponent],
  exports: [XxxUsersComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    ScrollingModule,
    XxxAlertModule,
    XxxDataModule
  ]
})

export class XxxUsersModule {
}
