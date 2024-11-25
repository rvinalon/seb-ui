import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SebComponentModule } from '../../modules/seb-components.module';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-voice-chat',
  imports: [SebComponentModule, CommonModule],
  templateUrl: './voice-chat.component.html',
  styleUrl: './voice-chat.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VoiceChatComponent {
  @ViewChild('promptInput') promptInput!: ElementRef;

  onKey(event: KeyboardEvent) {
    const promptValue = (this.promptInput?.nativeElement?.value ?? '')
    if (event.key === 'Enter' && promptValue?.length > 1) {
      console.log('Enter key pressed!', promptValue);
    }
  }

  get hasPrompt() {
    const value = this.promptInput?.nativeElement?.value?.length ?? 0;
    return value > 1;
  }
}
