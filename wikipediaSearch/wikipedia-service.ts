import { Injectable } from '@angular/core';
import { UrlSearchParams, Jsonp } from '@angular/http'

@Injectable
export class WikipediaService {
  constructor(private jsonp: Jsonp) {}

  search(term: string) {
    var search = new UrlSearchParams()
    search.set('action', 'opensearch')
    search.set('search', term)
    search.set('format', 'json')
    return this.jsonp
               .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
               .map((response) => response.json()[1])
  }
}
