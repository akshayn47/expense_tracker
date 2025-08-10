import React, { useState } from "react";
import styles from "./ExpenseInfo.module.css";

export default function ExpenseInfo(props) {

  let {expenses} = props;
 let sum = 0;
let income = 0;
let loss = 0;

for (let exp of expenses) {
  sum += Number(exp.amount);
  if (exp.amount >= 0) {
    income += Number(exp.amount);
  } else {
    loss += Number(exp.amount);
  }
}


    return (
      <div className={styles.expenseInfoContainer}>
        <div className={styles.balance}>
          <h4>YOUR BALANCE</h4>
          <h1>${/* Grand total should be displayed here */}{sum}</h1>
        </div>
        <div className={styles.incomeExpenseContainer}>
          <div>
            <h4>Income</h4>
            <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
              +${/*Total Profit Amount should be displayed here */}{income}
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
              -${/* Total expense amount should be displayed here */}{Math.abs(loss)}
            </p>
          </div>
        </div>
      </div>
    );
  
}
