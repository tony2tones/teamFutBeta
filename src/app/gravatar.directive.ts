import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Directive({
  selector: '[appGravatar]'
})
export class GravatarDirective implements OnInit {
  nameValue: string;

  @Input() set player(value: string) {
    // this.updateGravatar(value);
    this.nameValue = value;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.updateGravatar(this.nameValue);
  }

  updateGravatar(player: string): void {
    if (!player || !this.el.nativeElement) {
      return;
    }

    const playerHash = Md5.hashStr(player.trim().toLowerCase());
    
    this.renderer.setAttribute(this.el.nativeElement, 'src', `//www.gravatar.com/avatar/${playerHash}?s=32&d=identicon&r=PG`);    
  }
}
