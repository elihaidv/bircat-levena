import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    constructor(private platform: Platform) {
    }


    public isMobile() {
        return this.platform.is('cordova');
    }
}
