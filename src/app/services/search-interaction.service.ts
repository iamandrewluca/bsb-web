import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Rx";
import {SearchProduct} from "../models/search-product";

@Injectable()
export class SearchInteractionService {

  constructor() {}

  // Observable string sources
  private searchAnnouncedSource = new Subject<SearchProduct>();

  // Observable string streams
  searchAnnounced$ = this.searchAnnouncedSource.asObservable();

  // Service message commands
  announceSearch(searchProduct: SearchProduct) {
    this.searchAnnouncedSource.next(searchProduct);
  }

  getSearchObserversCount() {
    return this.searchAnnouncedSource.observers.length;
  }

}
