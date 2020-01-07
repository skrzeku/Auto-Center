import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-imgdialog',
  templateUrl: './imgdialog.component.html',
  styleUrls: ['./imgdialog.component.less']
})
export class ImgdialogComponent implements OnInit {
  images = [];
  zoomImg = false;
  clickedimg;

  constructor(private dialogref: MatDialogRef<ImgdialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data) {
      this.images = this.data;
  }

  ngOnInit() {
  }
  close() {
    this.dialogref.close();
  }
  doanything(src) {
    this.clickedimg = src;
    this.zoomImg = true;
  }
  closeZoom() {
    this.zoomImg = false;
  }


}
