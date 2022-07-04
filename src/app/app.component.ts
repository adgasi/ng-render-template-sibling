import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = [1, 2];

  constructor(private viewContainerRef: ViewContainerRef) {}

  // renderAnotherRow(templateRef: TemplateRef) {
  //   this.viewContainerRef.inse
  // }
}
