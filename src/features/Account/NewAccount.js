import {Button, CircularProgress, FormControl, Grid, InputLabel, List, Paper, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {fetchAddAccount, fetchAllAccount, selectAllAccount, selectStatusAccount} from "./accountSlice";

const NewAccount=()=>{
    const {  control,  } = useForm({
        defaultValues: {
            initial: ""
        },
    });
    const dispatch = useDispatch();
    const [data,setData]=useState([]);
    const allAccount = useSelector(selectAllAccount);
    const statusAccount = useSelector(selectStatusAccount);
    const [open,setOpen]=useState(false)


    const onSubmitButton = () =>{
        setOpen(true)
    dispatch(fetchAddAccount({
        "customerId":data?.customerId,
        "initialCredit":data?.initialCredit
    }));
    }
useEffect(()=>{
    if(statusAccount=="succeeded" || statusAccount=="rejected" ){
        setOpen(false)
        dispatch(fetchAllAccount({customerId:data?.customerId}))
    }

},[statusAccount])

    return (
        <>
        <form >
            <br/>
            <Grid container spacing={2} direction={"column"}>
                <Grid item>
            <TextField
                control={control}
                id="type"
                label="Customer Id"
                onChange={(e) =>
                    setData((data) => ({
                        ...data,
                        customerId: e.target.value || null,
                    }))
                }
            />
                </Grid>
                <Grid item>
                    <TextField
                        control={control}
                        name="initialCredit"
                        id="initialCredit"
                        label="Initial Credit"
                        onChange={(e) =>
                            setData((data) => ({
                                ...data,
                                initialCredit: e.target.value || null,
                            }))
                        }
                    />
                </Grid>
                <Grid item>
                    {open ? <CircularProgress /> :(
            <Button onClick={onSubmitButton}>
                Add Account
            </Button>
                    )
                    }
                </Grid>
            </Grid>

        </form>

            <p key={"m2"} style={{ fontSize: 16, fontWeight: "bold"}}>
                accountId -- accountType -- account.balance -- account.customerId
            </p>
            {allAccount?.accountDTOS?.map(account => (
                <>
                <p key={account.accountId}>
                    {account.accountId} -- {account.accountType} -- {account.balance} -- {account.customerId}
                </p>
                </>
            ))}
        </>

    )
}
export default NewAccount;