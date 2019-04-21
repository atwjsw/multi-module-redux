import { BrowserModule } from '@angular/platform-browser';
import {isDevMode, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import {IAppState, INITIAL_STATE, rootReducer} from './store';
import {MessagingModule} from './messaging/messaging.module';
import {TaskingModule} from './tasking/tasking.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    MessagingModule,
    TaskingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>,
              devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
}
