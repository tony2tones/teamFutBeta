import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(private toastr: ToastrService) { }
    showSuccess() {
        this.toastr.success('Has been successfully created', 'Footy game');
    }

}