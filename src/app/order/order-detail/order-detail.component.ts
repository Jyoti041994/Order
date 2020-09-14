import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import ORDER_LIST from '../../../assets/api_response/order-listing.json';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit ,OnDestroy {

 constructor(private activatedRoute: ActivatedRoute) { }
  itemData: boolean ;
  orderList = [];
  itemList = [];
  orderId;

  // To unsubscribe observable
  private unsubscribe : Subject <void> = new Subject();

  ngOnInit() {
    this.activatedRoute.params.pipe(takeUntil(this.unsubscribe)).subscribe(
      params => {
        this.orderId = params['id'];
      }
    );
    this.orderList = ORDER_LIST;
    this.itemList = this.orderList.filter(order => order.number === this.orderId);
    this.itemData = this.itemList && this.itemList.length ? true : false;
  }

  // At the time of component destruction observable will be unsubscribed
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
