import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShroomLanePage } from './shroom-lane';

@NgModule({
  declarations: [
    ShroomLanePage,
  ],
  imports: [
    IonicPageModule.forChild(ShroomLanePage),
  ],
})
export class ShroomLanePageModule {}
