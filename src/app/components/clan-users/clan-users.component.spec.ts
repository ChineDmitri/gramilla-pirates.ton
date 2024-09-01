import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanUsersComponent } from './clan-users.component';

describe('ClanUsersComponent', () => {
  let component: ClanUsersComponent;
  let fixture: ComponentFixture<ClanUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClanUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClanUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
