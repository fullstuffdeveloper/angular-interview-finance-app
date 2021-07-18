import { TestBed } from '@angular/core/testing';
import { SpendViewTableComponent } from './spend-view-table.component';
import {SpendViewModule} from './spend-view-table.module';

describe('Spend View Table component', () => {
    let spendComponent: SpendViewTableComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SpendViewTableComponent
      ],
      imports: [SpendViewModule]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(SpendViewTableComponent);
    spendComponent = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(spendComponent).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    spendComponent.ngOnInit();
  });
});
