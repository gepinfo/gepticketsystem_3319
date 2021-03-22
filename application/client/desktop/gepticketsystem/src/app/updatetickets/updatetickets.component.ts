import { Component, OnInit } from '@angular/core';
import { UpdateticketsService } from './updatetickets.service';

@Component({
  selector: 'app-updatetickets',
  templateUrl: './updatetickets.component.html',
  styleUrls: ['./updatetickets.component.scss'],
})

export class UpdateticketsComponent implements OnInit {
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
        private updateticketsService: UpdateticketsService,
    ) { }

    ngOnInit() {
    }
    servicetypesGpGetAllValues() {
        this.updateticketsService.servicetypesGpGetAllValues().subscribe(data => {
            this.servicetypesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.updateticketsService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updateticketsService.GpUpdate(this.ticktes).subscribe(data => {
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