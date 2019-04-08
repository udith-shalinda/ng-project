import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sub-server',
  templateUrl: './sub-server.component.html',
  styleUrls: ['./sub-server.component.css']
})
export class SubServerComponent implements OnInit {
  paramsSubscription: Subscription;
  getElement= {name:'halo',age:17}

  constructor(private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getElement.age = +this.route.snapshot.params['id'];
    this.getElement.name = this.route.snapshot.params['name'];

    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.getElement.age = params['id'];
          this.getElement.name = params['name'];
        }
      );
  }
  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
