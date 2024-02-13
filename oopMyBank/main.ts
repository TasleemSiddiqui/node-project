 import inquirer from "inquirer";
class account {
    ownerName:string ;
    accounttNo:number;
    password:number;
    balance:number;
    constructor(oN:string,aN:number,p:number,b:number) {
      this.ownerName=oN;
      this.accounttNo=aN;
      this.password=p;
      this.balance=b;
      
    }
  
    withdraw(amount:number){
        if (this.balance>=0) {
            console.log(`your Enter Amount is ${amount}`);
    console.log(`your previous balance is ${this.balance}`);
     let currentBalance =this.balance-amount;
      console.log(`your current balance is ${currentBalance}`);
            
           } else {
            console.error("insufficiat balance");
            
            
           }
    
  
    }
    viewBalance(){
        console.log(`\nTitle name : ${this.ownerName}\nAccount number:${this.accounttNo}\nBalance : ${this.balance} `)
    }
    fundTransfer(accountNo:number,amount:number){
        let value =person.find((person)=>person.accounttNo==accountNo)
       if (value?.accounttNo==accountNo) {
        if (this.balance>= amount) {
            let currentBalance= this.balance-amount;
            console.log(`\n From ${this.ownerName}\n to :${value?.ownerName}\n Amount:${amount}\n your Current balance is ${currentBalance}`)
    
        }else{
            console.error("You have insufficiat balance");
            
        }
        
       } else {
        console.error("Wrong Crediantials");
        
        
       }
       

    }

  
   }
  
   

   
   let person:account[] =[] ;
   person.push(new account("Admin",1000,1000,10000));
  person.push(new account("Kashan",322,1211,10000));
  person.push(new account("jamal",322,1211,10000));
  person.push(new account("jamal",322,1211,10000));
  person.push(new account("jamal",321,1211,10000));
  
  console.log("Welcome to MyOOPBank");
 
    
  
  let res =await inquirer.prompt([{
    type:"input",
    name:"accountno",
    message:"please enter your account no#"
  },{
    type:"input",
    name:"accountPwd",
    message:"please enter your Password"
  }])
  const Accounts = person.find((person)=>{return person.accounttNo == res.accountno})
 if ( res.accountno == Accounts?.accounttNo && res.accountPwd ==Accounts?.password ) {
    console.log("hello",Accounts?.ownerName)
    while (true) {
    
    let operation = await inquirer.prompt({
        type:"list",
        name:"op",
        message:"choose Operations",
        choices:['viewDetails','withdraw','fund transfer','create new account','Exit']

    })
   switch (operation.op) {
    case "viewDetails" :
        Accounts?.viewBalance();
   
        break;
    case "withdraw" :
        let am=await inquirer.prompt({
            type:"number",
            message:"Enter the Amount",
            name:"a",

        })
        Accounts?.withdraw(am.a);
   
        break;
    case "fund transfer" :
        
        let res=await inquirer.prompt([{
            type:"number",
            message:"Enter the Amount",
            name:"a",

        },
        {
            type:"number",
            message:"Enter the Account no#",
            name:"n",

        }])
        
            Accounts?.fundTransfer(res.n,res.a)
        
        
   
        break;


        case "create new account" :
            if (Accounts?.accounttNo==1000 && Accounts.password===1000) {

      
                let res =await inquirer.prompt([{
                    type:"input",
                    message:"Enter Name:",
                    name:"name"
                },{
                    type:"number",
                    message:"Enter new Account no#:",
                    name:"accNO"
                },{
                    type:"password",
                    message:"Enter Password",
                    name:"pwd"
                },{
                    type:"number",
                    message:"Enter The amount For Balance",
                    name:"blnc"
                },])
               
                let newMember=person.push(new account( res.name,res.accNO,res.pwd,res.blnc));
                console.log(person.filter((newMember)=>newMember.accounttNo==res.accNO));
            
            
                
             }else{
                console.log("Only admin Can make new account");
             }

        break;
   case"Exit":
   process.exit();
   break
    default:
        break;
   } 
  } 


  }else {
    console.error("invalid crediantials");
    
    
  }