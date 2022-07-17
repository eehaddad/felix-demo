import { DOCUMENT } from "@angular/common";
import {
  Component,
  HostListener,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import {
  ActivatedRoute,
  NavigationStart,
  Router,
  Scroll,
} from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "wsn-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Input() public activeScrollId!: string | null;
  public mobileNavClosed = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe(() => {
      this.activeScrollId = this.activatedRoute.snapshot.fragment;
    });
  }

  public toggleMenu() {
    this.mobileNavClosed = !this.mobileNavClosed;
    this.document.body.classList.toggle("main-nav-open");
  }

  public activeHomepage(): boolean {
    return !this.activatedRoute.snapshot.fragment;
  }

  public activeFragment(fragment: string): boolean {
    return this.activeScrollId === fragment;
  }

  public scrollToTop() {
    window.scroll(0,0)
  }
}
