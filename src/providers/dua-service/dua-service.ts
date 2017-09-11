/* * * ./app/comments/components/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DuaServiceProvider {
      constructor (private http: Http, public afd: AngularFireDatabase) {}

      getAhadeesDuaList() : Observable<any>{
        return this.http.get("assets/json/favoriteAhadeesDua.json")
                        .map((res:Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    getQuranDuaList() : Observable<any>{
      return this.http.get("assets/json/favoriteQuranicDua.json")
                      .map((res:Response) => res.json())
                      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  getAhadeesDuaListURL() : Observable<any>{
    return this.http.get("https://raw.githubusercontent.com/tafaisalkhan/duaApp/master/favoriteAhadeesDua.json")
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

  getQuranDuaListURL() : Observable<any>{
    return this.http.get("https://raw.githubusercontent.com/tafaisalkhan/duaApp/master/favoriteQuranicDua.json")
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

}

getQuranDuaListFirebase(){
  return this.afd.list('quranic')
}

getAhadeesDuaListFirebase(){
  return this.afd.list('ahadees')
}

}
