import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private appRouter: Router, private authService: AuthService) {}

  ngOnInit() {}

  onLoadServer(id: number) {
    this.appRouter.navigate(["/servers", id, "edit"], {
      queryParams: { allowEdit: "1" },
      fragment: "dupa"
    });
  }

  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }
}
