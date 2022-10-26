import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkyStatusPageRoutingModule } from './sky-status-routing.module';

import { SkyStatusPage } from './sky-status.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkyStatusPageRoutingModule,
    TranslateModule
  ],
  declarations: [SkyStatusPage]
})
export class SkyStatusPageModule {}
