import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
	const { dispatch } = useContext(AppContext);
	const [name, setName] = useState('');
	const [date, setDate] = useState('')
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: uuidv4(),
			name,
			date,
			cost: parseInt(cost),
		};

	console.log(expense)

	
		dispatch({
		type: 'ADD_EXPENSE',
		payload: expense,
		});

		setName('');
		setDate('');
		setCost('');
	};

	return (
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div>
					<label for='name'>Name  </label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>

				<div>
					<label for='date'>Date </label>
					<input
						required='required'
						type='text'
						class='form-control'
						placeholder = ' (format: DD-MM-YYYY)'
						id='date'
						value={date}
						onChange={(event) => setDate(event.target.value)}
					/>
				</div>

				<div>
					<label for='cost'>Cost  </label>
					<input
						required='required'
						type='number'
						class='form-control'
						placeholder = '(in US dollar)'
						id='cost'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					/>
				</div>
			</div>
			<div>
				<div>
					<button type='submit'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;