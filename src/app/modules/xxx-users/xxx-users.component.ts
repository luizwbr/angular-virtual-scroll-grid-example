import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

import {environment} from '@env/environment';
import {XxxAlertService, XxxAlertType, XxxDataService} from '@app/xxx-common';
import {Subscription} from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'xxx-users',
  templateUrl: './xxx-users.component.html',
  styleUrls: ['./xxx-users.component.scss']
})
export class XxxUsersComponent implements OnDestroy, OnInit {
  isLoading = false;
  isError = false;
  isResult = false;
  users = [];
  usersSubscription: Subscription;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private xxxAlertService: XxxAlertService,
              private xxxDataService: XxxDataService) {
  }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
    }
  }

  private loadData() {
    this.isLoading = true;
    this.isResult = false;
    this.isError = false;
    this.changeDetectorRef.detectChanges();
    const url = environment.url.api + environment.url.users;
    this.usersSubscription = this.xxxDataService.getData(url)
        .subscribe(result => this.onSuccessGetUsers(result),
            () => this.onErrorGetUsers());
  }

  private onSuccessGetUsers(result) {
    this.isLoading = false;
    if (typeof result === 'object'
        && (result.length > 0)) {
      this.users = result;
      this.isResult = true;
    } else {
      const warningMsg = 'No Results Found';
      this.xxxAlertService.openAlert(XxxAlertType.WARN, warningMsg);
    }
    this.changeDetectorRef.detectChanges();
  }

  // Errors are handled by global interceptor.
  private onErrorGetUsers() {
    this.isLoading = false;
    this.isError = true;
    this.changeDetectorRef.detectChanges();
  }

}
