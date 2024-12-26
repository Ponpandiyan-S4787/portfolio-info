import { Component, Input } from '@angular/core';
import { TechToolsComponent } from '../tech-tools/tech-tools.component';
import { WorkExpComponent } from '../work-exp/work-exp.component';
import { ProjDetailsComponent } from '../proj-details/proj-details.component';
import { EducationComponent } from '../education/education.component';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
import { ObjectiveComponent } from "../objective/objective.component";
import { OwnProjComponent } from "../own-proj/own-proj.component";

@Component({
  selector: 'app-right-part',
  standalone: true,
  imports: [
    TechToolsComponent,
    WorkExpComponent,
    ProjDetailsComponent,
    EducationComponent,
    BasicInfoComponent,
    ObjectiveComponent,
    OwnProjComponent
],
  templateUrl: './right-part.component.html',
  styleUrl: './right-part.component.scss',
})
export class RightPartComponent {
  @Input() selectedRoutePath: string = 'basic_Info';

  // isBasicInfo:boolean=true
  //   isTechTool:boolean=false
  //   isWrkExp:boolean=false
  //   isProjDetails:boolean=false
  //   isEduInfo:boolean=false
}

// obj_Details
// portfolio-info.component.ts:15 tec_Tool
// portfolio-info.component.ts:15 wrk_Exp
// portfolio-info.component.ts:15 proj_Details
// portfolio-info.component.ts:15 edu_Info
// portfolio-info.component.ts:15 basic_Info
