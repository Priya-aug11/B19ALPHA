import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WhishlistService } from 'src/app/service/whishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count$: Observable<number> | undefined;
  constructor(private whislistService: WhishlistService) { }

  ngOnInit(): void {
    this.count$ = this.whislistService.wishlistItemcount$
  }

}
