import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishList } from './wish-list.model';
import { WishListService } from './wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  wishLists?: WishList[];
  wishListUser: WishList[] = [];
  wishListUserTrue: WishList[] = [];
  currentWishList: WishList = {};
  currentIndex = -1;
  record: boolean;
  @Input() email: string;
  @Input() user_i: number;
  constructor(private wishListService: WishListService,
    private router: Router) { }
  ngOnInit(): void {
    this.retrieveWishLists();
  }
  retrieveWishLists(): void {
    this.wishListService.getAll()
    .subscribe({
        next: (data) => {
          this.wishLists = data;
          for(let j in this.wishLists){
            if(this.wishLists[j].user==this.email){
                this.recordList(this.wishLists[j]);
                this.wishListUser.push(this.wishLists[j]);
            }
          }
        },
        error: (e) => console.error(e)
     });
  }
  // retrieveWishLists( ): void {
    
  //   this.wishListService.getUser(this.user_i)
  //     .subscribe({
  //       next: (data) => {
  //         //this.wishListUser = data;
  //         console.log("DATA::::: ", data);
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
  refreshList(): void {
    this.retrieveWishLists();
    this.currentWishList = {};
    this.wishListUser = [];
    this.wishListUserTrue = [];
    this.currentIndex = -1;
  }
  setActiveWishList(wishList: WishList, index: number): void {
    this.currentWishList = wishList;
    this.currentIndex = index;
  }
  removeAllWishLists(): void {
    this.wishListService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
  recordList(wishList: WishList){
      if(!this.record){
          if(wishList.published){
            this.wishListUserTrue.push(wishList);
      }
    }
  }
  recordValue(){
    console.log(this.record);
    !this.record ? this.record=true:this.record=false;
    console.log(this.record);
  }
  removeWishList(index: number){

    this.wishListUserTrue[index].published = false;
    console.log( this.wishListUserTrue[index], index)
    this.wishListService.update(this.wishListUserTrue[index].id,  this.wishListUserTrue[index])
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }
}
