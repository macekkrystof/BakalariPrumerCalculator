import { Component, Inject, OnInit } from '@angular/core';
import { PrumerService } from "../../services/prumer.service";


@Component({
    selector: "prumer",
    templateUrl: "prumer.component.html",
    providers: [PrumerService],
    styleUrls: ['prumer.component.css']
})
export class PrumerComponent implements OnInit {
    public loading = false;
    ngOnInit() {
    }
    udaje: LoginUdaje;
    prumery: Prumer[];
    showPrumery: boolean;
    showLogin: boolean;
    result: string;
    errorMessage: string;

    constructor(private prumerService: PrumerService) {
        this.showPrumery = false;
        this.showLogin = true;

        this.udaje = {
            password: "",
            username: "",
            bakalariUrl: "https://bakaweb.cichnovabrno.cz/login.aspx"
        };
    }
    getPrumery()
    {
        var stringConstructor = "test".constructor;
        var arrayConstructor = [].constructor;
        this.loading = true;
        this.prumerService.getPrumery(this.udaje)
            .subscribe(data => {
                if (data.constructor === arrayConstructor) {
                    this.prumery = data;
                    this.showLogin = false;
                    this.showPrumery = true;
                    this.loading = false;
                }
                else
                {
                    this.loading = false;
                    this.errorMessage = data;
                }
            });
    }

    toLogin()
    {
        this.udaje = {
            password: "",
            username: "",
            bakalariUrl: "https://bakaweb.cichnovabrno.cz/login.aspx"
        };
        this.showPrumery = false;
        this.showLogin = true;
    }
}

interface LoginUdaje {
    bakalariUrl: string;
    username: string;
    password: string;
}
interface Prumer {
    predmet: string;
    prumer: number;
}
