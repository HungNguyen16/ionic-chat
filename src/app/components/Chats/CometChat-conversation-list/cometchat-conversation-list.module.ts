import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometChatConversationListComponent } from "./cometchat-conversation-list/cometchat-conversation-list.component";
import { CometChatConversationListItem } from "../CometChat-conversation-list-item/cometchat-conversation-list-item.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [CometChatConversationListComponent],
  imports: [CommonModule,
     CometChatConversationListItem,
     BrowserAnimationsModule
    ],
  exports: [CometChatConversationListComponent],
})
export class CometChatConversationList {}
