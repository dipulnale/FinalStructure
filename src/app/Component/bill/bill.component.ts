import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Addressbill, Billing, } from 'src/app/Model/Billing';
import { billingService } from 'src/app/Services/billingService.Service';

@Component({
  selector: 'billing-form',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  billingForm: FormGroup;
  billingSearchForm: FormGroup;

  billings: Billing[] = new Array();

  billing1: Billing;
  //isUpdate: boolean = false;

  ngOnInit() {
    this.billingForm = this.fb.group({
      billingId: ['', Validators.required],
      orderNo: ['', Validators.required],
      transactionMode: ['', Validators.required],
      transactionDate: ['', Validators.required],
      transactionStatus: ['', Validators.required],
      addressId: ['', Validators.required],
      flatNo: ['', Validators.required],
      buildingName: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required]
    });
    this.billingSearchForm = new FormGroup({
      searchId: new FormControl(),
    });
  }

  constructor(private fb: FormBuilder, private service: billingService) { }

  addBill(): void {
    let address: Addressbill = new Addressbill(
      this.billingForm.controls.addressId.value,
      this.billingForm.controls.flatNo.value,
      this.billingForm.controls.buildingName.value,
      this.billingForm.controls.area.value,
      this.billingForm.controls.city.value,
      this.billingForm.controls.state.value,
      this.billingForm.controls.pincode.value
    );

    let bill: Billing = new Billing(
      this.billingForm.controls.billingId.value,
      this.billingForm.controls.orderNo.value,
      this.billingForm.controls.transactionMode.value,
      this.billingForm.controls.transactionDate.value,
      this.billingForm.controls.transactionStatus.value,
      address
    );

    this.service.addBill(bill).subscribe((data) => {
      alert('data: ' + JSON.stringify(data));
      this.billings.push(bill);
    },
      error => {
        alert('Entered Invalid / Duplicate values ');
      });
  }

  findBilling() {
    this.service
      .getBillingById(this.billingSearchForm.controls.searchId.value)
      .subscribe((data: any) => {
        this.billing1 = data;
      },
        error => {
          alert('Billing Id not found ');
        });
  }
  /*updateBilling(bid: number) {
    let upbill = this.billings.find(b => b.billingId == bid)
    this.billingForm = this.fb.group({
      billingId: [upbill.billingId, Validators.required],
      orderNo: [upbill.orderNo, Validators.required],
      transactionMode: [upbill.transactionStatus, Validators.required],
      transactionDate: [upbill.transactionDate, Validators.required],
      transactionStatus: [upbill.transactionStatus, Validators.required],
      addressId: [upbill.billingAddress.addressId, Validators.required],
      flatNo: [upbill.billingAddress.flatNo, Validators.required],
      buildingName: [upbill.billingAddress.buildingName, Validators.required],
      area: [upbill.billingAddress.area, Validators.required],
      city: [upbill.billingAddress.city, Validators.required],
      state: [upbill.billingAddress.state, Validators.required],
      pincode: [upbill.billingAddress.pincode, Validators.required]
    });
    // alert(`Vegetable Updated Successfully! ${vegId}`)
    this.isUpdate = true;
  }
  saveBill() {
    let bid: Billing = this.billingForm.value;
    //logic for saving the vegetable
    if (!this.isUpdate) {
      this.service.addBill(bid)
        .subscribe(data => {
          alert("Vegetable with " + bid.billingId + "Id  is created");
          this.service.getBills().subscribe(bid => {
            this.billings = bid;
          });
        });
    }
    //updating the vegetable
    else {
      this.service.updateBilling(bid).subscribe(data => {
        //alert("Vegetable  is Updated");
        this.service.getBills().subscribe(bid => {
          this.billings = bid;
        });
      });
      this.isUpdate = false;
    }
    this.billingForm.reset();
  }*/
}