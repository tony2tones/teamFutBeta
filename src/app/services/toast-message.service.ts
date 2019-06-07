import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(private toastr: ToastrService) { }
    showSuccess(text: string, title: string) {
        this.toastr.success(text, title);
    }

    showFail(text: string, title: string) {
      this.toastr.error(text, title);
  }

}