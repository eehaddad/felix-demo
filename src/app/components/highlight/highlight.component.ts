import { Component, ElementRef, Input, OnInit } from "@angular/core";

@Component({
  selector: "wsn-highlight",
  templateUrl: "./highlight.component.html",
  styleUrls: ["./highlight.component.scss"],
})
export class HighlightComponent {
  @Input() public text!: string;
  @Input() public bgColor!: "blue" | "gold";
  @Input() public textColor!: "blue" | "gold";
  @Input() public highlightId!: string;

  constructor(private element: ElementRef) {}

  public setColor(property: string){
    //blue $primary-color: #005978;
    //gold $secondary-color: #fed13f;
    return property === 'blue' ?  '#005978' : '#fed13f';
  }
  public revealHighlight(elementId: string | "") {
    let scrollPositionY = window.scrollY;
    let elementOffsetTop = this.element.nativeElement.offsetTop;
    let elementClientHeight = document.getElementById(elementId)?.clientHeight;
    if (elementClientHeight) {
      return (
        scrollPositionY >=
        elementOffsetTop - (elementClientHeight + elementClientHeight / 2)
      );
    } else {
      return scrollPositionY >= elementOffsetTop;
    }
  }
}
