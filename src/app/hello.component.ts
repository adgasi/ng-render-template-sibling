import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

let counter = 0;

@Component({
  selector: '[hello-tr]',
  template: `
    <td>hellotd1</td>
    <td>hellotd2</td>

    <ng-template #siblingRow>
      <tr>
        <button type="button" (click)="onClick()">click me!</button>
      </tr>
    </ng-template>
  `,
})
export class HelloComponent {
  @Input() name: string;
  @ViewChild('siblingRow') siblingRow: TemplateRef<any>;

  id = ++counter;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.viewContainerRef.createEmbeddedView(this.siblingRow);
  }

  onClick() {
    console.log('anotherRow clicked! id:', this.id);
  }
}
