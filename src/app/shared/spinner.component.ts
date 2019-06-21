import { Component } from '@angular/core';

@Component({
    selector: 'app-loading-spinner',
    template: '<div class="lds-circle"><div></div></div>',
    styleUrls: ['./spinner.component.css']
})
export class LoadingSpinnerComponent {}