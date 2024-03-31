import {Breadcrumbs, Chip} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {StyledBreadcrumb, StyledBreadcrumbs} from "../../assets/styles/Styled";
import {useState} from "react";
import ListClient from "../Client/ListClient";
import NewAccount from "../Account/NewAccount";

const Home=()=>{
    const [isClient,setIsClient]=useState(true)
    const [bgColorClient,setBgColorClient]=useState("#3399FF");
    const [bgColorAccount,setBgColorAccount]=useState("#fff");
    function handleClickClient() {

        setIsClient(true)

    }
    function handleClickAccount() {

        setIsClient(false);

    }
    return(
        <>
            <StyledBreadcrumbs>
                <Breadcrumbs aria-label="breadcrumb">
                    <Chip
                        label="Client"
                        sx={{backgroundColor:isClient ?"#3399FF" :"fff"}}
                        variant="outlined"
                        onClick={handleClickClient}

                    />
                    <Chip  onClick={handleClickAccount}  label="Account" variant="outlined"  sx={{backgroundColor:!isClient ?"#3399FF" :"fff"}} />

                </Breadcrumbs>

            </StyledBreadcrumbs>
            {isClient && <ListClient/>}
            {!isClient && <NewAccount/>}
        </>
    )
}
export default Home;