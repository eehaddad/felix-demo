import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wsn-psychological-group';
  public currentSection!: string | null;

  public onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
}

// TODO: make the scroll service global so that currentsection is identficied across components 