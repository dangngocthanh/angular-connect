import {Component, OnInit} from '@angular/core';
import {CategoryServiceService} from "../category-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  categories?: any;
  message?: any;
  style?: any;

  constructor(private service: CategoryServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.service.index().subscribe(res => {
      this.categories = res.data;
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe(res => {
      this.message = res.message
    })
    this.service.index().subscribe(res => {
      this.categories = res.data;
    });
  }

}
