import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Settingsservice } from '../services/settingsservice';

@Component({
  selector: 'app-settings',
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings implements OnInit {

  settings:any[] = [];

  setting:any = {
    hospitalName:'',
    hospitalAddress:'',
    hospitalPhone:'',
    hospitalEmail:'',
    hospitalLogo:'',
    currency:'',
    timezone:''
  };

  isEdit = false;

  constructor(
    private settingService: Settingsservice
  ) {}

  ngOnInit(): void {
    this.loadSettings();
  }

  loadSettings() {

    this.settingService
      .getAllSettings()
      .subscribe((res:any) => {

        this.settings = res;

      });

  }

  saveSetting() {

    if(this.isEdit) {

      this.settingService
        .updateSetting(
          this.setting.id,
          this.setting
        )
        .subscribe(() => {

          this.loadSettings();
          this.resetForm();

        });

    } else {

      this.settingService
        .createSetting(
          this.setting
        )
        .subscribe(() => {

          this.loadSettings();
          this.resetForm();

        });

    }

  }

  editSetting(setting:any) {

    this.isEdit = true;
    this.setting = { ...setting };

  }

  deleteSetting(id:number) {

    if(confirm('Delete Setting?')) {

      this.settingService
        .deleteSetting(id)
        .subscribe(() => {

          this.loadSettings();

        });

    }

  }

  resetForm() {

    this.isEdit = false;

    this.setting = {
      hospitalName:'',
      hospitalAddress:'',
      hospitalPhone:'',
      hospitalEmail:'',
      hospitalLogo:'',
      currency:'',
      timezone:''
    };

  }

}
