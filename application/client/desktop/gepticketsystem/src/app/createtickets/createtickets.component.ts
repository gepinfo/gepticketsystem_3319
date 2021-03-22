import { Component, OnInit } from '@angular/core';
import { CreateticketsService } from './createtickets.service';

@Component({
  selector: 'app-createtickets',
  templateUrl: './createtickets.component.html',
  styleUrls: ['./createtickets.component.scss'],
})

export class CreateticketsComponent implements OnInit {
    servicetypesitemArray: any = [];
    severityitemArray: any = [];
    public ticktes = {
        name: '',
        description: '',
        types: '',
        severity: '',
        target: '',
    }

    constructor (
        private createticketsService: CreateticketsService,
    ) { }

    ngOnInit() {
    }
    servicetypesGpGetAllValues() {
        this.createticketsService.servicetypesGpGetAllValues().subscribe(data => {
            this.servicetypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.createticketsService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createticketsService.GpCreate(this.ticktes).subscribe(data => {
            this.ticktes.name = ''
 	 	this.ticktes.description = ''
 	 	this.ticktes.types = ''
 	 	this.ticktes.severity = ''
 	 	this.ticktes.target = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}