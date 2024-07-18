import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { SizeDirective } from './directives/size.directive';


@NgModule({
  declarations: [NombreCompletoPipe, SizeDirective],
  imports: [CommonModule],
  exports: [NombreCompletoPipe, SizeDirective],
})
export class SharedModule { }
