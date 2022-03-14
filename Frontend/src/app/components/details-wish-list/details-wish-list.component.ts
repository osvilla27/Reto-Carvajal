import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { WishList } from 'src/app/wish-list/wish-list.model';
import { WishListService } from 'src/app/wish-list/wish-list.service';

@Component({
  selector: 'app-details-wish-list',
  templateUrl: './details-wish-list.component.html',
  styleUrls: ['./details-wish-list.component.css']
})
export class DetailsWishListComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentWishList: WishList = {
    user: '',
    product: '',
    color: '',
    size: '',
    quantity: 0,
    published: false,
  };

  message = '';
  constructor(
    private wishListService: WishListService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getWishList(this.route.snapshot.params["id"]);
    }
  }
  getWishList(id: number): void {
    this.wishListService.get(id)
      .subscribe({
        next: (data) => {
          this.currentWishList = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updatePublished(status: boolean): void {
    const data = {
      user: this.currentWishList.user,
      product: this.currentWishList.product,
      color: this.currentWishList.color,
      size: this.currentWishList.size,
      quantity: this.currentWishList.quantity,
      published: status
    };
    this.message = '';
    this.wishListService.update(this.currentWishList.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentWishList.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  updateWishList(): void {
    this.message = '';
    this.wishListService.update(this.currentWishList.id, this.currentWishList)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This wishList was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteWishList(): void {
    this.wishListService.delete(this.currentWishList.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/wishlist']);
        },
        error: (e) => console.error(e)
      });
  }
}