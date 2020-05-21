import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

@Injectable()

export class productService{
    constructor (private http : Http){}

    getProduct():any{
        return this.http.get('https://api.ipify.org/?format=json')
        .toPromise()
        .then(res=>res.json())
        .then(resJson=>resJson.ip)
        .catch(res=>console.log(res));
    }
}