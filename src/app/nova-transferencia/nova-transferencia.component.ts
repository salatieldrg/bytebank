import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

  constructor(private service: TransferenciaService){}

    @Output() aoTransferir = new EventEmitter<any>();

    valor : number;
    destino : number;

    transferir(){
      const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino};
      this.service.adicionar(valorEmitir).subscribe(
        resultado => {
        console.log(resultado);
        this.limpar();
      },
      (error) => console.error(error)

      );
    }

    limpar(){
      this.valor = 0;
      this.destino = 0;
    }

}
