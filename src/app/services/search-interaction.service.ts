import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Rx";

@Injectable()
export class SearchInteractionService {

  constructor() {}

  // Observable string sources
  private searchAnnouncedSource = new Subject<string>();

  // Observable string streams
  searchAnnounced$ = this.searchAnnouncedSource.asObservable();

  // Service message commands
  announceSearch(text: string) {
    this.searchAnnouncedSource.next(text);
  }

}
