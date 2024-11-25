import { Component } from '@angular/core';
import { VoiceChatComponent } from '../pages/voice-chat/voice-chat.component';

@Component({
  selector: 'app-root',
  imports: [VoiceChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'seb-ai';
}
