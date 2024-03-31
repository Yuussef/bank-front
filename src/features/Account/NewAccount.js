import {Button, FormControl, Grid, InputLabel, List, Paper, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {fetchAddAccount, fetchAllAccount, selectAllAccount} from "./accountSlice";

const NewAccount=()=>{
    const {  control, handleSubmit } = useForm({
        defaultValues: {
            initial: ""
        },
    });
    const dispatch = useDispatch();
    const [data,setData]=useState([]);
    const allAccount = useSelector(selectAllAccount);
    const onSubmit = () =>{
        console.log("dsqdq")
    dispatch(fetchAddAccount({
        "customerId":"dqdqd",
        "initialCredit":"10"
    }));
    }
useEffect(()=>{
   dispatch(fetchAllAccount())
},[])
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <br/>
            <Grid container spacing={2} direction={"column"}>
                <Grid item>
            <TextField
                control={control}
                id="type"
                label="Account type"
                onChange={(e) =>
                    setData((data) => ({
                        ...data,
                        type: e.target.value || null,
                    }))
                }
            />
                </Grid>
                <Grid item>
                    <TextField
                        control={control}
                        name="initialcredit"
                        id="initialcredit"
                        label="Initial Credit"
                        onChange={(e) =>
                            setData((data) => ({
                                ...data,
                                initialcredit: e.target.value || null,
                            }))
                        }
                    />
                </Grid>
                <Grid item>
            <Button type="submit" onClick={onSubmit}>
                Add Account
            </Button>
                </Grid>
            </Grid>
        </form>
<p> {allAccount.}</p>
        </>

    )
}
export default NewAccount;