import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular';

import { NativeScriptPickerModule } from '@nativescript/picker/angular';

const MODULES = [
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
  NativeScriptPickerModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
