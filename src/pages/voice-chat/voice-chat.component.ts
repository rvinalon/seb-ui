import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SebComponentModule } from '../../modules/seb-components.module';


@Component({
  selector: 'app-voice-chat',
  imports: [ SebComponentModule ],
  templateUrl: './voice-chat.component.html',
  styleUrl: './voice-chat.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VoiceChatComponent {

}
