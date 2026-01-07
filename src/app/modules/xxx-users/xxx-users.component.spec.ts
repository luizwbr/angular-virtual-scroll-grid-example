import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {of, throwError} from 'rxjs';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {XxxAlertService, XxxDataService, XxxMessage} from '@app/xxx-common';
import {MockXxxAlertService} from '@app/xxx-common/xxx-alert/mock-xxx-alert.service';
import {MockXxxDataService} from '@app/xxx-common/xxx-data/mock-xxx-data.service';
import {XxxUsersComponent} from './xxx-users.component';

describe('XxxUsersComponent', () => {
  let component: XxxUsersComponent;
  let fixture: ComponentFixture<XxxUsersComponent>;
  let spyAlertService: jasmine.Spy;
  let spyDataService: jasmine.Spy;
  let xxxAlertService: XxxAlertService;
  let xxxDataService: XxxDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [XxxUsersComponent],
      imports: [
        ScrollingModule
      ],
      providers: [
        {provide: XxxAlertService, useClass: MockXxxAlertService},
        {provide: XxxDataService, useClass: MockXxxDataService}
      ]
    })
        .compileComponents();
  }));

  const mockUsersData = [
    {
      id: 1,
      name: 'User One',
      email: 'user1@domain.com',
      address: {
        city: 'New York'
      }
    }
  ];

  beforeEach(() => {
    xxxAlertService = TestBed.get(XxxAlertService);
    spyAlertService = spyOn(xxxAlertService, 'openAlert');
    xxxDataService = TestBed.get(XxxDataService);
    spyDataService = spyOn(xxxDataService, 'getData').and.returnValue(of(mockUsersData));
  });

  function createComponent() {
    fixture = TestBed.createComponent(XxxUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  it('should create', () => {
    createComponent();
    expect(component).toBeDefined();
  });

  it('should run data service with success after create', fakeAsync(() => {
    createComponent();
    tick();
    expect(spyDataService).toHaveBeenCalled();
    expect(component.isLoading).toBeFalsy();
    expect(component.isResult).toBeTruthy();
    expect(component.isError).toBeFalsy();
  }));

  it('should run alert service when data is empty', fakeAsync(() => {
    spyDataService.and.returnValue(of([]));
    let alertType: string;
    let alertMessage: string;
    const mockMessage = new XxxMessage('data.responseError');
    mockMessage.payload = {
      alertType: 'warn',
      alertMessage: 'No Results Found'
    };
    spyAlertService.and.callFake((type: any, msg: any) => {
      alertMessage = msg;
      alertType = type;
    });
    createComponent();
    tick();
    expect(component.isLoading).toBeFalsy();
    expect(component.isResult).toBeFalsy();
    expect(component.isError).toBeFalsy();
    expect(spyAlertService).toHaveBeenCalled();
    expect(alertType).toBe(mockMessage.payload.alertType);
    expect(alertMessage).toBe(mockMessage.payload.alertMessage);
  }));

  it('should handle data service error', fakeAsync(() => {
    spyDataService.and.returnValue(throwError({status: 404}));
    createComponent();
    tick();
    expect(spyDataService).toHaveBeenCalled();
    expect(component.isError).toBeTruthy();
    expect(component.isLoading).toBeFalsy();
    expect(component.isResult).toBeFalsy();
  }));

});
