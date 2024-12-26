import { Component, Input } from '@angular/core';
import { RightPartComponent } from "../right-part/right-part.component";
import { LeftPartComponent } from "../left-part/left-part.component";

@Component({
  selector: 'app-portfolio-info',
  standalone: true,
  imports: [RightPartComponent, LeftPartComponent],
  templateUrl: './portfolio-info.component.html',
  styleUrl: './portfolio-info.component.scss'
})
export class PortfolioInfoComponent {
selectedRoutePath:string="basic_Info"
  
getEmittedRoutePath(path: string) {
  switch (path) {
    case "tec_Tool":
      this.selectedRoutePath="tec_Tool"
      break;
    case "own_Proj_Details":
      this.selectedRoutePath="own_Proj_Details"
      break;
    case "basic_Info":
      this.selectedRoutePath="basic_Info"
      break;
    case "wrk_Exp":
      this.selectedRoutePath="wrk_Exp"
      break;
    case "proj_Details":
      this.selectedRoutePath="proj_Details"
      break;
    case "edu_Info":
      this.selectedRoutePath="edu_Info"
      break;
    case "obj_Details":
      this.selectedRoutePath="obj_Details"
      break;
  
    default:
      this.selectedRoutePath="basic_Info"
      break;
  }
}

}
