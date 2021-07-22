import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li>
			{props.name}  ---
			<span>  {props.date}  ---</span>
			<span> £{props.cost}</span>
			<DeleteForeverSharpIcon size='0.7em' onClick={handleDeleteExpense} />
			
		</li>
	);
};

export default ExpenseItem;