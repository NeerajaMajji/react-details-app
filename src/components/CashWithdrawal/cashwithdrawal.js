import { useState } from "react"
const MoneyOptionList=[{
    withdrawmoney:50
},
{
    withdrawmoney:100
},
{
    withdrawmoney:200
},
{
    withdrawmoney:500
},
]
const CashWithdrawal=(props)=>{
    const {withdrawmoney,onWithDraw}=props
    const handleWithdrwalMoney = () => {
        onWithDraw(withdrawmoney);
      };
    return(
<div>
<button onClick={handleWithdrwalMoney}>{withdrawmoney}</button>
</div>
    )
}
const MoneyOption=(props)=>{
    
    const [currentBalance,setCurrentBalance]=useState(2000);
    const handleWithdraw=(amount)=>{
        setCurrentBalance(currentBalance-amount)
    }
    return(
    <div>
        <h1>Neeraja Majji</h1>
        <p>{currentBalance}</p>
       {MoneyOptionList.map((each)=>(<CashWithdrawal withdrawmoney={each.withdrawmoney} onWithDraw={handleWithdraw}/>))}

    </div>
    ) 
}
export default MoneyOption