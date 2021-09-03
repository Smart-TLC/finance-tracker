import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import "../../index.css";
import CategoryItem from "../../components/CategoryList/CategoryItem";
import { Scrollbars } from "react-custom-scrollbars";
import { Svg } from "../../types/categoriesSvg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    marginLeft: 75,
  },
  notrans: {
    textAlign: "center",
    fontSize: "2em",
    color: "#aeaeae",
    marginTop: "5%"
  }
}));

export default function CategoryDetailsPage() {
  const { cate } = useParams();
  const classes = useStyles();
  const state = useSelector((state) => ({
    auth: state.auth,
    errors: state.errors,
    data: state.data,
  }));

  // Filter transactions based on each category
  const cateData = state.data.transactions.filter(
    (transaction) => transaction.category === cate
  );

  return (
    <div className={classes.root}>
      <Sidebar />
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <Grid item lg={8} xs={12}>
          {cateData.length > 0 ? (
            <Scrollbars
              style={{ height: 380 }}
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={200}
            >
              <Grid container spacing={1}>
                {cateData.map((item) => {
                  return <CategoryItem item={item} key={item._id} />;
                })}
              </Grid>
            </Scrollbars>
          ) : (
            <Typography className={classes.notrans}>
              Add more plans for this category!
            </Typography>
          )}
        </Grid>
        <Grid item>{Svg[cate]}</Grid>
      </Grid>
    </div>
  );
}
