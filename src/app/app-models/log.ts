import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

export class Log {
    
    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        this.timestamp = Date.now();
        this.sessionId = this.authService.getUser();
        this.url = this.router.url;
    }

    public set source(source: string){
        this.source = source;
    }

    public set productId(productId: number){
        this.productId = productId;
    }

    public set timestamp(millSec: number){
        this.timestamp = millSec;
    }

    public set sessionId(uuid: string){
        this.sessionId = uuid;
    }

    public set url(url: string){
        this.url = url;
    }
}
