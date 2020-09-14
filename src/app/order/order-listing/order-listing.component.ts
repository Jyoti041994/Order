import { Component, OnInit } from "@angular/core";
import { ConfirmComponent } from "../dialog-boxes/confirm/confirm.component";
import { MatDialog } from "@angular/material";
import ORDER_LIST from '../../../assets/api_response/order-listing.json';

@Component({
  selector: "app-order-listing",
  templateUrl: "./order-listing.component.html",
  styleUrls: ["./order-listing.component.scss"],
})
export class OrderListingComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  orderList = [];
  orderData: boolean ;
  orderStatus = [{id: 1 , status: 'RCV' , name: 'Received'},
                 {id: 2 , status: 'PREP' , name: 'Preparing'},
                 {id: 3 , status: 'RTS' , name: 'Ready To Serve'}]
             

  ngOnInit() {
    // Taking static response
    this.orderList = ORDER_LIST;
    this.orderData = this.orderList && this.orderList.length ? true : false;

    // calculation for total amount of order
    this.orderList.map((order) => {
      let total = 0;
      order.items.map((item) => {
        total += Number(item.price);
      });
      order["total"] = total;
    });

  }

  // Functionality to open confirmation dialog change status of order
  changeStatus(state,index){
    const id = this.orderStatus.filter(order => order.status === state)[0]['id']+1;
    if(id< this.orderStatus.length+1) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '350px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
    
      const status = this.orderStatus.filter(ord => ord.id === id)[0]['status'];
      this.orderList[index]['status'] = status;
      }
    });
  }
  }



}
