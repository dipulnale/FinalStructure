export class Billing {
    billingId: number;
    orderNo: number;
    transactionMode: string;
    transactionDate: Date;
    transactionStatus: string;
    billingAddress: Addressbill;
  
  constructor(billingId: number,
    orderNo: number,
    transactionMode: string,
    transactionDate: Date,
    transactionStatus: string,
    billingAddress: Addressbill){
      this.billingId=billingId;
      this.orderNo=orderNo;
      this.transactionMode=transactionMode;
      this.transactionDate=transactionDate;
      this.transactionStatus=transactionStatus;
      this.billingAddress=billingAddress;
  }
  
  toString() : String {
      return "Billing Details [Billing Id=" + this.billingId + ", Order No=" + this.orderNo + ", Transaction Mode="
                  + this.transactionMode + ",Transaction Date= " + this.transactionDate + ", Transaction status="
                  + this.transactionStatus + ", Billing Address= " + this.billingAddress + "]";
  }
}

export class Addressbill {
    addressId: number;
    flatNo: string;
    buildingName: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
  
    constructor(addressId: number,flatNo: string,buildingName: string,area: string,city: string,state: string,pincode: string){
      this.addressId = addressId;
      this.flatNo = flatNo;
      this.buildingName = buildingName;
      this.area = area;
      this.city = city;
      this.state = state;
      this.pincode = pincode;
      }
  
       toString(): String {
          return "Address [addressId=" + this.addressId + ", flatNo=" + this.flatNo + ", buildingName=" + this.buildingName + ", area="
                  + this.area + ", city=" + this.city + ", state=" + this.state + ", pincode=" + this.pincode + "]";
      }
  }