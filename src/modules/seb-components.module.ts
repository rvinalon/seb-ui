import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NggCoreWrapperModule } from '@sebgroup/green-angular';
import { FormsModule } from '@angular/forms';

//Components
import '@sebgroup/green-core/components/button/button.js';
import '@sebgroup/green-core/components/input/input.js';
import '@sebgroup/green-core/components/link/link.js';
import '@sebgroup/green-core/components/card/card.js';
import '@sebgroup/green-core/components/rich-text/rich-text.js';
import '@sebgroup/green-core/components/theme/theme.js';
import '@sebgroup/green-core/components/fab/fab.js';
import '@sebgroup/green-core/components/signal/signal.js';

//Layout
import '@sebgroup/green-core/components/flex/flex.js';
import '@sebgroup/green-core/components/grid/grid.js';

//Icons
import '@sebgroup/green-core/components/icon/icon.js';
import '@sebgroup/green-core/components/icon/icons/people-profile.js';
import '@sebgroup/green-core/components/icon/icons/robot.js';
import '@sebgroup/green-core/components/icon/icons/brand-seb.js';
import '@sebgroup/green-core/components/icon/icons/play.js';



@NgModule({
    imports: [
        FormsModule,
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