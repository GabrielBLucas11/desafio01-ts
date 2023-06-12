import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Gabriel', 10, true)
const companyAccount: CompanyAccount = new CompanyAccount('Gears', 20, true)
const specialAccount: SpecialAccount = new SpecialAccount('Gabriel', 30, true)

const inactivePeopleAccount: PeopleAccount = new PeopleAccount(1, 'Gabriel', 15, false)
const inactiveCompanyAccount: CompanyAccount = new CompanyAccount('Gears', 25, false)
const inactiveSpecialAccount: SpecialAccount = new SpecialAccount('Gabriel', 35, false)

peopleAccount.deposit(100)
peopleAccount.getBalance()

companyAccount.deposit(1000)
companyAccount.getBalance()

specialAccount.deposit(500)
specialAccount.getBalance()

//Withdraw

peopleAccount.withdraw(150) //Must fail
peopleAccount.getBalance()
peopleAccount.withdraw(80)  //Must success 
peopleAccount.getBalance()

//getLoan

companyAccount.getLoan(1000)
companyAccount.getBalance()

//Inactive Accounts 

inactivePeopleAccount.deposit(100)
inactiveSpecialAccount.deposit(100)
inactiveCompanyAccount.getLoan(100)
inactiveCompanyAccount.withdraw(15)