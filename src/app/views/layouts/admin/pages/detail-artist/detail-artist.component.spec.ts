import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArtistComponent } from './detail-artist.component';

describe('DetailArtistComponent', () => {
  let component: DetailArtistComponent;
  let fixture: ComponentFixture<DetailArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArtistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
