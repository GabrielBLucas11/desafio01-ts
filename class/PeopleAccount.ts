import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number, accountStatus: boolean){
    super(name, accountNumber, accountStatus)
    this.doc_id = doc_id
  }
}