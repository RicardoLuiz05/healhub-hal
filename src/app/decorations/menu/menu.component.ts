import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ConfiguracaoUsuarioComponent } from 'src/app/usuario/configuracao-usuario/configuracao-usuario.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    @ViewChild(ConfiguracaoUsuarioComponent, { static: false }) configuracaoUsuarioComponent: ConfiguracaoUsuarioComponent | undefined;

    constructor(private renderer: Renderer2, private el: ElementRef) {}

    toggleVisibility() {
        if (this.configuracaoUsuarioComponent) {
            this.configuracaoUsuarioComponent.toggleVisibility();
        }
    }
}
