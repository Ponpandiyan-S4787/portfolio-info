import { Component, Input } from '@angular/core';
import { HomeHeaderComponent } from '../../features/home-header/home-header.component';
import { HomeBodyComponent } from '../../features/home-body/home-body.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ HomeHeaderComponent, HomeBodyComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  @Input() bodyMock!:any
}
