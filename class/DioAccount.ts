export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number, accountStatus: boolean){
    this.name = name
    this.accountNumber = accountNumber
    this.status = accountStatus

  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Voce depositou ${value} reais`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()) {
      if(this.enoughBalance(value)){
        this.balance -= value
        console.log(`Voce sacou ${value} reais`)
      }
    } 
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  private enoughBalance = (value: number): boolean => {
      if(this.balance < value){
        throw new Error('Saldo invalido')
      }
      return true
  }
}
