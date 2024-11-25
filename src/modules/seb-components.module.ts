import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NggCoreWrapperModule } from '@sebgroup/green-angular';
import '@sebgroup/green-core/components/button/button.js';
import '@sebgroup/green-core/components/input/input.js';
import '@sebgroup/green-core/components/icon/icon.js';
import '@sebgroup/green-core/components/link/link.js';
import '@sebgroup/green-core/components/card/card.js';
import '@sebgroup/green-core/components/rich-text/rich-text.js';
import '@sebgroup/green-core/components/theme/theme.js';
import '@sebgroup/green-core/components/fab/fab.js';
import '@sebgroup/green-core/components/fab/fab.js';
import '@sebgroup/green-core/components/signal/signal.js';






@NgModule({
    imports: [
        NggCoreWrapperModule
    ],
    exports: [
        NggCoreWrapperModule,
   ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SebComponentModule {
    
}