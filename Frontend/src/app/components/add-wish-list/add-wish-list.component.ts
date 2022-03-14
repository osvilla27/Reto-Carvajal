import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth/auth.model';
import { AuthService } from 'src/app/auth/auth.service';
import { WishList } from 'src/app/wish-list/wish-list.model';
import { WishListService } from 'src/app/wish-list/wish-list.service';

@Component({
  selector: 'app-add-wish-list',
  templateUrl: './add-wish-list.component.html',
  styleUrls: ['./add-wish-list.component.css']
})
export class AddWishListComponent implements OnInit {
  isAuthenticated:boolean = false;
  user: User;
  userSub: Subscription;
  @Input() product: string;
  color: string = 'Verde';
  size: string = 'S';
  quantity: number = 1;
  published: boolean = true;
  wishList: WishList = {
    user: '',
    product: '',
    color: '',
    size: '',
    quantity: 0,
    published: false,
   };
  submitted = false;
  message: boolean = false;

  constructor(
    private wishListService: WishListService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (data: User) => {
        this.user = data
      }
    )
    this.isAuthenticated =!this.user? false: true;
  }
  
  saveWishList(): void {
    const data = {
      user: this.wishList.user,
      product: this.wishList.product,
      color: this.wishList.color,
      size: this.wishList.size,
      quantity: this.wishList.quantity,
      published: this.wishList.published
    };
    this.wishListService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newWishList(): void {
    this.submitted = false;
    this.wishList = {
      user: '',
      product: '',
      color: '',
      size: '',
      quantity: 0,
      published: false
    };
  }

  addWishList(){
    const data = {
      user: this.user.email,
      product: this.product,
      color: this.color,
      size: this.size,
      quantity: this.quantity,
      published: this.published
    };
    console.log(data);
    this.wishListService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  goLogin(){
    this.message = true
  }
  
}