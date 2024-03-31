import {Chip, emphasize, List, styled} from "@mui/material";

export const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
});
export const StyledBreadcrumbs = styled("div")({
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
});

export const StyledList = styled(List)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];

    return {
        width: "50%",marginTop:"10%", marginLeft: "20%", backgroundColor:emphasize(backgroundColor, 0.12)
    }
});