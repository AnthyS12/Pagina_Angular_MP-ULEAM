import { Component, HostListener } from '@angular/core';
// import { GrafanaURLService } from '../grafana-url.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent {
  
  isDesktopView: boolean = window.innerWidth > 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isDesktopView = window.innerWidth > 768;
  }
  
}
