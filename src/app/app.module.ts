import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CometChatConversationListScreenPageComponent } from './pages/Pages/comet-chat-conversation-list-screen-page/comet-chat-conversation-list-screen-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CometChatUI } from './components/CometChatUI/CometChat-Ui/cometchat-ui.module';
import { CometChatUserListWithMessages } from './components/Users/CometChat-user-list-with-messages/cometchat-user-list-with-messages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CometChatAvatar } from './components/Shared/CometChat-avatar/cometchat-avatar.module';
import { CometChatUserList } from './components/Users/CometChat-user-list/cometchat-user-list.module';
import { CometChatConversationList } from './components/Chats/CometChat-conversation-list/cometchat-conversation-list.module';
import { CometChatGroupListWithMessages } from './components/Groups/CometChat-group-list-with-messages/cometchat-group-list-with-messages.module';
import { CometChatConversationListWithMessages } from './components/Chats/CometChat-conversation-list-with-messages/cometchat-conversation-list-with-messages.module';
import { CometChatGroupList } from './components/Groups/CometChat-group-list/cometchat-group-list.module';
import { KitchenSinkAppComponent } from './pages/kitchen-sink-app/kitchen-sink-app.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { CometChatConversationListPageComponent } from './pages/Pages/comet-chat-conversation-list-page/comet-chat-conversation-list-page.component';
import { UserListScreenPageComponent } from './pages/user-list-screen-page/user-list-screen-page.component';
import { CometChatMessageComposerPageComponent } from './pages/Pages/comet-chat-message-composer-page/comet-chat-message-composer-page.component';
import { CometChatGroupListScreenPageComponent } from './pages/Pages/comet-chat-group-list-screen-page/comet-chat-group-list-screen-page.component';
import { GroupListComponent } from './pages/Pages/group-list/group-list.component';
import { CometChatUnifiedPageComponent } from './pages/Pages/comet-chat-unified-page/comet-chat-unified-page.component';
import { GroupListScreenPageComponent } from './pages/Pages/group-list-screen-page/group-list-screen-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    KitchenSinkAppComponent,
    HomePageComponent,
    UserListPageComponent,
    CometChatConversationListPageComponent,
    UserListScreenPageComponent,
    CometChatMessageComposerPageComponent,
    CometChatGroupListScreenPageComponent,
    CometChatConversationListScreenPageComponent,
    GroupListComponent,
    GroupListScreenPageComponent,
    CometChatUnifiedPageComponent,

  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    //

    CometChatUI,
    CometChatConversationListWithMessages,
    CometChatGroupListWithMessages,
    CometChatUserListWithMessages,
    CometChatConversationList,
    CometChatGroupList,
    CometChatUserList,
    CometChatAvatar,
    FormsModule,
    ReactiveFormsModule,
    //
    // CometChatAvatar
    BrowserAnimationsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
