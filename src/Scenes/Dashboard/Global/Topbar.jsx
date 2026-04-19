import { Box, IconButton, useTheme,} from "@mui/material";
import { useContext,} from "react";
import { tokens } from "../../../theme";
import { ColorModeContext } from "../../../theme";
import  InputBase  from "@mui/material/InputBase";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () =>{
    const Theme = useTheme();
    const colors = tokens ( Theme.palette.mode);
    const colorMode = useContext (ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={1}>
            {/* Search */}
            <Box
             display="flex"
             backgroundColor={colors.primary[400]}
             borderRadius="3px">
                <InputBase sx={{ ml:2, flex: 1 }} placeholder="search" />
                <IconButton type="button" sx={{ p:  1}}>
                    <SearchIcon />
                </IconButton>
            </Box>
            {/* Icons */}
            <Box display="flex" alignItems="center" gap={1}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {Theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )

}

export default Topbar;