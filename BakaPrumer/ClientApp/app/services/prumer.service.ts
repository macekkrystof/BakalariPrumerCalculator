import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PrumerService {
    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
        console.log("Post service intialized"); 
    }

    getPrumery(udaje: LoginUdaje) {
        return this.http
            .post(this.baseUrl + 'api/PrumerBaka/GetPrumery', udaje)
            .map(res => res.json());
    }
}

interface LoginUdaje {
    username: string;
    password: string;
}