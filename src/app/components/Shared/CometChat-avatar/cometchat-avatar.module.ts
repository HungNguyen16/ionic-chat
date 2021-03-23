import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometChatAvatarComponent } from "./cometchat-avatar/cometchat-avatar.component";
import { CometChatImageComponent } from "./comet-chat-image/comet-chat-image.component";

@NgModule({
  declarations: [CometChatAvatarComponent, CometChatImageComponent],
  imports: [CommonModule],
  exports: [CometChatAvatarComponent, CometChatImageComponent],
})
export class CometChatAvatar {}
