import React, { useEffect } from "react";
import {
  makeStyles, Button, TextField, Dialog, DialogActions, DialogContent,
  DialogContentText, DialogTitle, InputLabel, FormControl, Select,
  FormHelperText,
} from "@material-ui/core";
import {
  addTransaction,
  updateTransaction,
} from "../../actions/transactionAction";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

const ValidationSchema = yup.object({
  name: yup.string().when("type", {
    is: "expense",
    then: yup.string().required("Name is required"),
    otherwise: yup.string()
  }),
  note: yup.string(),
  amount: yup.number().required("Amount is required").positive("Amount is greater than 0").integer("Amount is an integer"),
  category: yup.string().when("type", {
    is: "expense",
    then: yup.string().required("Category is required"),
    otherwise: yup.string()
  }),
  spentAt: yup.string().required("Date is required"),
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 240,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 240,
  },
}));

export default function TransactionForm(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    auth: state.auth,
    errors: state.errors,
    data: state.data,
  }));

  const formik = useFormik({
    validationSchema: ValidationSchema,
    initialValues: {
      name: "",
      note: "",
      amount: "",
      category: "",
      spentAt: "",
      type: props.transactionType,
    },
    onSubmit: (values) => {
      props.handleClose();
      if (props.id) {
        dispatch(
          updateTransaction({
            ...values,
            owner: state.auth.user.id,
            _id: props.id,
          })
        );
      } else {
        dispatch(addTransaction({ ...values, owner: state.auth.user.id }));
      }
    },
  });
  
  formik.values.type = props.transactionType;

  useEffect(() => {
    formik.resetForm();
  }, [props.open]);

  // Heading text
  const formHeading = props.id
    ? "TRANSACTION UPDATE FORM"
    : "TRANSACTION ADDITION FORM";

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle id="form-dialog-title" align="center">
          <h3
            style={{
              color: "white",
              fontFamily: "Arial",
              backgroundColor: "deeppink",
              padding: 4,
            }}
          >
            {formHeading}
          </h3>
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: "navy", fontWeight: "bold" }}>
            Information
          </DialogContentText>
          {props.transactionType === "expense" ? (
            <>
              <TextField
                id="name"
                name="name"
                label="Name"
                type="text"
                className={classes.textField}
                variant="outlined"
                onChange={formik.handleChange}
                error={Boolean(formik.errors.name)}
                helperText={formik.errors.name}
              />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Category
                </InputLabel>
                <Select
                  native
                  id="category"
                  name="category"
                  label="Category"
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.category)}
                >
                  <option value=""></option>
                  <option value="entertainment">Entertainment</option>
                  <option value="education">Education</option>
                  <option value="shopping">Shopping</option>
                  <option value="insurance">Insurance</option>
                  <option value="meal">Meal</option>
                  <option value="emergency">Emergency</option>
                  <option value="other">Other</option>
                </Select>
                <FormHelperText style={{ color: "#ff0000" }}>
                  {formik.errors.category}
                </FormHelperText>
              </FormControl>
            </>
          ) : (
            <></>
          )}
        </DialogContent>

        <DialogContent>
          <TextField
            id="amount"
            label="Amount"
            name="amount"
            className={classes.textField}
            type="number"
            variant="outlined"
            onChange={formik.handleChange}
            error={Boolean(formik.errors.amount)}
            helperText={formik.errors.amount}
          />
          <TextField
            variant="outlined"
            id="spentAt"
            name="spentAt"
            label="Date"
            type="date"
            defaultValue=""
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.spentAt)}
            helperText={formik.errors.spentAt}
          />
        </DialogContent>

        <DialogContent>
          <DialogContentText style={{ color: "navy", fontWeight: "bold" }}>
            Additional Details
          </DialogContentText>
          <TextField
            id="note"
            name="note"
            label="Note"
            variant="outlined"
            multiline
            rows={5}
            fullWidth
            onChange={formik.handleChange}
            error={Boolean(formik.errors.note)}
            helperText={formik.errors.note}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Save
          </Button> 
        </DialogActions>
      </form>
    </Dialog>
  );
}
