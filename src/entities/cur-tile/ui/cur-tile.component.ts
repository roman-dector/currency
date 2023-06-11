import { Component, Input } from '@angular/core';

@Component({
  selector: 'cur-tile',
  templateUrl: './cur-tile.component.html',
  styleUrls: ['./cur-tile.component.css'],
})
export class CurTile {
  @Input() curName: string;
  @Input() curValue: number;
  @Input() curGap: number;
}
