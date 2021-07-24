import React from 'react';
import { AppProvider } from '../context/AppContext';
import Budget from './Budget';
import ExpenseTotal from './ExpenseTotal';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';
import RemainingBudget from './Remaining';
import Form02 from './Form02';

const TransactionForm = () => {
	return (
		<AppProvider>
			<div style={{backgroundColor: "yellow"}}>
				<h1 style={{ fontSize: 34, color: "blue", fontFamily: "Cochin"}}>BUDGETO</h1>
				<div className='row mt-3'>
					<div className='row mt-3'>
						<Budget />
					</div>
					<div className='row mt-3'>
						<RemainingBudget />
					</div>
					<div className='row mt-3'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 style={{ fontSize: 20, color: "blue" }}>Expense List</h3>
				<div className='row '>
					<div className='row mt-3'>
						<ExpenseList />
					</div>
				</div>
				<h3 style={{ fontSize: 20, color: "blue" }}> Expense Addition Form </h3>
				<div className='row mt-3'>
					<div className='row mt-3'>
						<AddExpenseForm />
					</div>
				</div>
				<div>
				<div className='row mt-3'>
					<div className='row mt-3'>
						<Form02 />
					</div>
				</div>
			</div>
			</div>
		</AppProvider>
	);
};

export default TransactionForm;
