import { Component, OnInit } from '@angular/core';
import {AppContextService} from '../../services/app-context.service';


@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})

export class FooterComponent implements OnInit {
    footerText: any;
    constructor(
        private _appContext: AppContextService
    ) { }

    ngOnInit() {
        // console.log('FooterContent', footerMockData);
        this._appContext.get('footer').subscribe((data) => {
            this.footerText  = data;
            console.log('data from footer', data);
        })
     }
}