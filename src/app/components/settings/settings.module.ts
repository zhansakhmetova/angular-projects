import { NgModule } from '@angular/core';
import {SettingsComponent} from './settings.component';
import {SharedModule} from '../../shared';
import {SettingsRouting} from './settings-routing.module';



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    SharedModule,
    SettingsRouting
  ]
})
export class SettingsModule { }
