import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output, output} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-shared-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SharedInputComponent),
      multi: true,
    },
  ],
  templateUrl: './shared-input.component.html',
  styleUrl: './shared-input.component.scss',
})
export class SharedInputComponent implements ControlValueAccessor{
   
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input() inputValue :string=""
  @Input() isValid : string=""
  @Input() isDisabled: boolean=false
  @Output() inputEmitValue=new EventEmitter<any>()
  @Output() charEmitValue=new EventEmitter<any>()
  disabled: boolean = false;

  private onChange: (val: any) => void = () => { };
  private onTouched: () => void = () => {};

  writeValue(val: any): void {
    if (val !== undefined) {
      this.inputValue = val;
    }
  }
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
      }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.onChange(inputElement.value); // Propagate the change
  }
  onTouch(): void {
    this.onTouched(); // Notify that the control was touched
    this.inputEmitValue.emit(this.inputValue)
  }
  onKeyDown(char: string){
   this.charEmitValue.emit(char)
  }

}
