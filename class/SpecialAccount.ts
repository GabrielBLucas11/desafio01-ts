import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {

    constructor(name: string, accountNumber: number, accountStatus: boolean) {
        super(name, accountNumber, accountStatus)
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            this.balance += (value + 10)
            console.log(`Voce depositou ${value + 10} reais`)
          }
    }
}