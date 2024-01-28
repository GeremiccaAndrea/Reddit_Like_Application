import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stampante',
  templateUrl: './stampante.component.html',
  styleUrls: ['./stampante.component.css']
})
export class StampanteComponent implements OnInit {
  @Input() x : string;
  constructor(){
  
  }
  ngOnInit(): void {
    
  }
}
