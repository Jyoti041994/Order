import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderListingComponent, OrderDetailComponent } from "./order";


const routes: Routes = [
  {
    path: "",
    children : [{
      path : '',
      component: OrderListingComponent,
    },
    {
      path: "order-listing",
      component: OrderListingComponent,
    },
    {
      path: 'order-listing/:id',
      component: OrderDetailComponent,
    }
    ]},
  { path: "**", pathMatch: "full", redirectTo: "order-listing" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
