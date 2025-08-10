import "./App.css";
import React from "react";
import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";

export default function App(){
  // Create state for the expenses here
  const [expenses,setExpenses] = useState([]);


    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          {/* Render expense form here */}
          <div className="expenseContainer">
            {/* Render Expense Info here
            Render Expense List here */}
            <ExpenseForm expenses={expenses} setExpenses={setExpenses}/>
            <ExpenseInfo expenses={expenses}/>
            <ExpenseList expenses={expenses}/>
          </div>
        </div>
      </>
    );
  
}
