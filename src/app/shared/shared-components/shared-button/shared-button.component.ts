import { CommonModule} from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.scss',
})
export class SharedButtonComponent {
  @Input() buttonType: string = '';
  @Input() buttonColor: string = 'btn-primary';
  @Input() buttonName: string = '';
  @Input() iconName: string = '';
  @Input() styles={
    height:"",
    width:"",
    color:'',
    backgroundColor:"",
    borderRadius:"",
    border:'',
    margin:"",
    padding:""
  }
  @Output() buttonEmit = new EventEmitter<any>();
  onBtnClicked() {
    this.buttonEmit.emit();
  }
}
