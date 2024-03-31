import {StyledList} from "../../assets/styles/Styled";
import {ListItemButton, ListItemText} from "@mui/material";

const ListClient=()=>{
    return(
        <StyledList>

            <ListItemButton key={0}>
                <ListItemText primary={"Name"} secondary={"Balance"} />
            </ListItemButton>

        </StyledList>
    )
}
export default ListClient;