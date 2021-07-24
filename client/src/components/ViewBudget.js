import React from 'react';
import Button from '@material-ui/core/Button';


const ViewBudget = (props) => {
	return (
		<>
			<span>BUDGET: £{props.budget}  </span>
			<Button variant="contained" color="secondary" size = "small" onClick={props.handleEditClick}>
				<h1 style={{ fontSize: 8, color: "mintcream "}}>EDIT</h1>
	  		</Button>
		</>
	);
};

export default ViewBudget;