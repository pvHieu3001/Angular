import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

@Injectable()

export class productService{
    constructor (private http : Http){}

    getProduct():any{
        return this.http.get('http://localhost:8888/BanhMyThuHa_war/product/1/10')
        .toPromise()
        .then(res=>res.json())
        .then(resJson=>resJson.data)
        .catch(res=>console.log(res));
    }
}