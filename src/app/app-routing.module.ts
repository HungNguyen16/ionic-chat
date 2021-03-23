import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { KitchenSinkAppComponent } from './pages/kitchen-sink-app/kitchen-sink-app.component';
import { CometChatConversationListPageComponent } from './pages/Pages/comet-chat-conversation-list-page/comet-chat-conversation-list-page.component';
import { CometChatConversationListScreenPageComponent } from './pages/Pages/comet-chat-conversation-list-screen-page/comet-chat-conversation-list-screen-page.component';
import { CometChatUnifiedPageComponent } from './pages/Pages/comet-chat-unified-page/comet-chat-unified-page.component';
import { GroupListScreenPageComponent } from './pages/Pages/group-list-screen-page/group-list-screen-page.component';
import { GroupListComponent } from './pages/Pages/group-list/group-list.component';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { UserListScreenPageComponent } from './pages/user-list-screen-page/user-list-screen-page.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    component: KitchenSinkAppComponent,
  },
  {
    path: "Home",
    component: HomePageComponent,
  },
  {
    path: "contact-list",
    component: UserListPageComponent,
  },
  {
    path: "conversations-list",
    component: CometChatConversationListPageComponent,
  },
  {
    path: "userListScreen",
    component: UserListScreenPageComponent,
  },
  {
    path: "contact-screen",
    component: UserListScreenPageComponent,
  },
  {
    path: "conversation-screen",
    component: CometChatConversationListScreenPageComponent,
  },
  {
    path: "group-list",
    component: GroupListComponent,
  },
  {
    path: "group-screen",
    component: GroupListScreenPageComponent,
  },
  {
    path: "embedded-app",
    component: CometChatUnifiedPageComponent,
  },
]

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full'
//   },
//   {
//     path: 'login',
//     loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
//   },
//   {
//     path: 'list-user',
//     loadChildren: () => import('./pages/list-user/list-user.module').then( m => m.ListUserPageModule)
//   },
//   {
//     path: 'register',
//     loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
//   },
//   // {
//   //   path: 'tabs-group',
//   //   loadChildren: () => import('./pages/tabs-group/tabs-group.module').then( m => m.TabsGroupModule)
//   // }
// ];




@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
