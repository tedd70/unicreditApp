import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

// Services
import { HomeService } from "./home.service";

@Injectable({ providedIn: "root" })
export class HomeResolver implements Resolve<any> {
  constructor(
    private homeService: HomeService,
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    const categoriesData = await this.getCategoiesDataResponse();

    return categoriesData;
  }

  private async getCategoiesDataResponse() {
    return this.homeService.getAllCategories().toPromise();
  }
}
