import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as footerMockData from '../../assets/json/footer.json';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppContextService {
    constructor(
        private httpClient: HttpClient
    ) { }
    
    get(key: any): Observable<any> {
        if(key !== undefined && key !== '' ) {
            return this.httpClient.get('../../assets/json/' + `${key}.json`);
        } else {
            return this.httpClient.get('../../assets/json/footer.json');
        }
    }
}