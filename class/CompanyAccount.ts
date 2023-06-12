import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, accountStatus:boolean){
    super(name, accountNumber, accountStatus)
  }

  getLoan = (value: number): void => {
    if(this.validateStatus()) {
      this.balance += value
      console.log(`Voce pegou um empréstimo de ${value} reais`)
    } 
    
  }
}
