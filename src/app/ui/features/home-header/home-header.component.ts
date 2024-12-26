import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {
//   @ViewChild('sliderTemp') sliderTemp!:ElementRef
//   currentIntervalVal=0
//   sliderInterval!:any
//   images= [
// 'https://logowik.com/content/uploads/images/todo-group3144.logowik.com.webp',
// 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwO4ay2G6qoFf5uFwTeRlTpg6JtNPlT38QrA&s'
// ];

//   ngAfterViewInit() {
//     this.startAutoScroll();
//   }
//   startAutoScroll() {
//     this.sliderInterval = setInterval(() => {
//       this.currentIntervalVal = (this.currentIntervalVal + 1) % this.images.length;
//       this.sliderTemp.nativeElement.style.transform = `translateX(-${
//         this.currentIntervalVal * 100
//       }%)`;
//     }, 3000); // Change slide every 3 seconds
//   }
//   ngOnDestroy() {
//     if (this.sliderInterval) {
//       clearInterval(this.sliderInterval);
//     }
//   }
}
