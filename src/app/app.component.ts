import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SectionContainerComponent } from './example/section-container/section-container.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionContainerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My-Ng3-632110149-Doolyawit';
}
