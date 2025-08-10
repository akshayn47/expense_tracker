import React from "react";
import styles from "./ExpenseForm.module.css";
import { useState } from "react";

export default function ExpenseForm(props){
  // Create state or ref for the inputs here
const [transText,setTransText] = useState("");
const [transAmount,setTransAount] = useState(0);
const [id,setId] = useState(0);

function handleSubmit(e){
  e.preventDefault();
  console.log("transText: "+transText);
  console.log("transAmount: "+transAmount);
  props.setExpenses([...props.expenses,{id:setId(id+1),text:transText,amount:transAmount}]);
 setTransText("");
setTransAount(0);
}

    return (
      <form className={styles.form} onSubmit={(e) => {handleSubmit(e)}}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          className={styles.input}
          type="text"
          value={transText}
          onChange={(e)=>setTransText(e.target.value)}
          placeholder="Enter text..."
          required
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense,positive-income)</div>
        </div>
        <input
          className={styles.input}
          id="expenseAmount"
          type="number"
          value={transAmount}
          onChange={(e)=>setTransAount(e.target.value)}
          placeholder="Enter amount..."
          required
        />
        <button className={styles.submitBtn}>Add Transaction</button>
      </form>
    );

}


