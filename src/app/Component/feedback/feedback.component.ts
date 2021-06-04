import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators} from '@angular/forms';
import { Feedback } from 'src/app/Model/Feedback';
import { FeedbackService } from 'src/app/Services/feedbackService.Service';

@Component({
  selector: 'feedback-form',
  templateUrl: './feedback.component.html',
  styleUrls: []//,
  //providers:[EmployeeService]
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  feedbacks: Feedback[];
  ratings:Feedback[];
  feeds1:Feedback[];
  feeds2:Feedback[];
  ratingForm:FormGroup;
  customersearchForm:FormGroup;
  vegetablesearchForm:FormGroup;
  showMe:boolean=false
  showMe1:boolean=false
  showMe2:boolean=false

  //customers:Customer;

  constructor(private fb: FormBuilder, private service:FeedbackService) {
    this.feedbacks=new Array();
    this.ratings=new Array();
    this.feeds2=new Array();
    this.feeds1=new Array();
  }

  ngOnInit() {
    console.log("ng on init");
    this.feedbackForm = this.fb.group({
      feedbackId: ['', Validators.required],
      customerId: ['', Validators.required],
      vegetableId: ['', Validators.required],
      rating: ['', Validators.required],
      comments: ['', Validators.required]
    });
    this.ratingForm = new FormGroup({
      searchId: new FormControl()
    });
    this.customersearchForm = new FormGroup({
      searchId: new FormControl()
    });
    this.vegetablesearchForm = new FormGroup({
      searchId: new FormControl()
    });
  }
  toogleTag(){
    this.showMe=!this.showMe
  }
  toogleTag1(){
    this.showMe1=!this.showMe1
  }
  toogleTag2(){
    this.showMe2=!this.showMe2
  }
  getFeedbacks(){
  this.service.getFeeds().subscribe(data=>{
    alert("Data: ");
       this.feedbacks = data;
     });
    }

  addFeedback(): void {
    let feed: Feedback = new Feedback(this.feedbackForm.controls.feedbackId.value,
      this.feedbackForm.controls.customerId.value,
      this.feedbackForm.controls.vegetableId.value,
      this.feedbackForm.controls.rating.value,
      this.feedbackForm.controls.comments.value);
    //this.employees.push(emp);
    //this.employees = this.service.addEmployee(emp);
    this.service.addFeedback(feed).subscribe(data =>{
      alert("data: "+JSON.stringify(data));
      this.feedbacks.push(feed);
    },
    error => {
      alert('Entered Invalid / Duplicate values ');
    }
    );
  }
  findCID() {
    this.service
      .getfeedbackByCId(this.customersearchForm.controls.searchId.value)
      .subscribe((data: any) => {
        this.feeds1 = data;
      },
      error=>{
        alert('Invalid customer id, Search not found')
      });
  }
  findVID() {
    this.service
      .getFeedbackByVId(this.vegetablesearchForm.controls.searchId.value)
      .subscribe((data: any) => {
        this.feeds2 = data;
      },
      error=>{
        alert('Invalid vegetable id, Search not found')
      });
  }
  getRatings(){
    this.service.getRating(this.ratingForm.controls.searchId.value).subscribe((data: any)=>{
      this.ratings = data;
    },
    error=>{
      alert(' Ratings should be in range 1-5')
    });
  }
}


