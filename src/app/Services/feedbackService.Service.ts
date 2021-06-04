import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from 'src/app/Model/Feedback';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
    providedIn: 'root',
})
export class FeedbackService {

  //private _url: string = "/assets/data/employees.json";

  constructor(private http:HttpClient) { }
  addFeedback(feed:Feedback):Observable<Feedback[]>{
    alert(JSON.stringify(feed));
    return this.http.post<Feedback[]>(`http://localhost:8990/RestVegetables/rest/feedback/addfeedback`,feed);
  }

  getFeeds(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>("http://localhost:8990/RestVegetables/rest/feedback/viewAll");
  }
  getfeedbackByCId(feed1: any): Observable<Object> {
    alert(feed1);
    return this.http.get(`http://localhost:8990/RestVegetables/rest/feedback/custfeed/${feed1}`);
  }
  getFeedbackByVId(feed2: any): Observable<Object> {
    alert(feed2);
    return this.http.get(`http://localhost:8990/RestVegetables/rest/feedback/feeds/${feed2}`);
  }
  getRating(rate:any): Observable<Object>{
    alert(rate);
    return this.http.get(`http://localhost:8990/RestVegetables/rest/feedback/ratefeed/${rate}`);
  }

}
