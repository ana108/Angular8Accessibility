import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent  } from './app.component';
import { TestAnaComponent } from './test-ana/test-ana.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { A11yModule, ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { ListKeySpecialComponent } from './list-key-special/list-key-special.component';
import { ListNewComponent } from './list-new/list-new.component';

@NgModule({
  declarations: [
    ListItemComponent,
    AppComponent,
    TestAnaComponent,
    FilterByNamePipe,
    ListKeySpecialComponent,
    ListNewComponent
  ],
  imports: [
    A11yModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FilterByNamePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
