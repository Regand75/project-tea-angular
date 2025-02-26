import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchQuery: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getSearchQuery().subscribe(query => {
      this.searchQuery = query;
    });
  }

  onSearch(): void {
    this.productService.setSearchQuery(this.searchQuery);
    this.router.navigate(['/products']);
  }

  onReset(): void {
    this.searchQuery = '';
    this.productService.setSearchQuery('');
  }

}
