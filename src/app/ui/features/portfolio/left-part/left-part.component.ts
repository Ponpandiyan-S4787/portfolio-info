import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left-part',
  standalone: true,
  imports: [],
  templateUrl: './left-part.component.html',
  styleUrl: './left-part.component.scss',
})
export class LeftPartComponent {
  @Output() emitRoutePath = new EventEmitter<string>();
  onClickEduDetails() {
    this.emitRoutePath.emit('edu_Info');
  }
  onClickProjDetails() {
    this.emitRoutePath.emit('proj_Details');
  }
  onClickWrkExp() {
    this.emitRoutePath.emit('wrk_Exp');
  }
  onClickTechTool() {
    this.emitRoutePath.emit('tec_Tool');
  }
  onClickBasicInfo() {
    this.emitRoutePath.emit('basic_Info');
  }
  onClickObjective() {
    this.emitRoutePath.emit('obj_Details');
  }
  onClickOwnProjDetails(){
    this.emitRoutePath.emit('own_Proj_Details');
  }
}
