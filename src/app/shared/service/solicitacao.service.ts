import { Injectable } from '@angular/core';
import { Reembolso } from '../models/reembolso';
import { ToastController } from '@ionic/angular';
import { toast } from '../components/toast/toast';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoService {

  solicitacoes: Reembolso[] = [];

  constructor(private toastController: ToastController) { }

  save (solicitacao: Reembolso) {
    this.solicitacoes = this.getAll();
    this.solicitacoes.push(solicitacao);
    sessionStorage.setItem("solicitacoes", JSON.stringify(this.solicitacoes));
    toast("Salvo com sucesso!", this.toastController);
  }

  getAll() {
    let array = JSON.parse(sessionStorage.getItem("solicitacoes"));
    return array != null ? array : this.solicitacoes;
  }

  getById(id: number) {
    this.solicitacoes = this.getAll();
    this.solicitacoes.forEach(
      solicitacao => {
        if(solicitacao.id == id) {
          console.log('foi')
          return solicitacao;
        }
      })
    return null;
  }

  deleteAll() {
    sessionStorage.removeItem("solicitacoes");
    toast("Deletados com sucesso!", this.toastController);
  }

  delete(solicitacao: Reembolso) {
    if(solicitacao) {
      this.solicitacoes = this.getAll();
      let count = 0;
      this.solicitacoes.forEach( 
        value => {
          if(value.id == solicitacao.id) {
            this.solicitacoes.splice(count, 1);
            sessionStorage.setItem("solicitacoes", JSON.stringify(this.solicitacoes));
            toast("Deletado com sucesso!", this.toastController);
          }
          count++;
        })
    }
  }

  update(solicitacaoEdit: Reembolso) {
    this.solicitacoes = this.getAll();
    this.solicitacoes.forEach(
      solicitacao => { 
        if(solicitacao.id == solicitacaoEdit.id) {
          solicitacao.name = solicitacaoEdit.name;
          solicitacao.status = solicitacaoEdit.status;
          solicitacao.startTime = solicitacaoEdit.startTime;
          solicitacao.endTime = solicitacaoEdit.endTime;
          toast("Atualizado com sucesso!", this.toastController);
        }
      }
    )
    sessionStorage.setItem("solicitacoes", JSON.stringify(this.solicitacoes));
  }

}
