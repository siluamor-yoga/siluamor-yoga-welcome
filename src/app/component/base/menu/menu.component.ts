import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  redirectTo(redirect: string) {
    this.route.navigate([redirect]);
  }

  onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
