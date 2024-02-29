import { createTheme } from '@mui/material/styles'
import WebApp from '@twa-dev/sdk'

const Theme = (theme: any) => createTheme({
    ...theme,
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: WebApp.themeParams.text_color
                }
            }
        }
    },
    palette: {
        primary: {
            light: WebApp.themeParams.button_color,
            main: WebApp.themeParams.button_color,
            dark: WebApp.themeParams.button_color,
            contrastText: WebApp.themeParams.button_text_color,
        },
        secondary: {
            light: WebApp.themeParams.secondary_bg_color,
            main: WebApp.themeParams.secondary_bg_color,
            dark: WebApp.themeParams.secondary_bg_color,
            contrastText: WebApp.themeParams.accent_text_color,
        },
        text: {
            primary: WebApp.themeParams.text_color,
            secondary: WebApp.themeParams.text_color,
            disabled: WebApp.themeParams.text_color,
        },
        background: {
            default: WebApp.themeParams.bg_color,
            paper: WebApp.themeParams.secondary_bg_color,
        },
        action: {
            active: WebApp.themeParams.text_color,
            hover: WebApp.themeParams.text_color,
            hoverOpacity: 0.8,
            selected: WebApp.themeParams.text_color,
            selectedOpacity: 0.8,
            disabled: WebApp.themeParams.text_color,
            disabledOpacity: 0.8,
            disabledBackground: WebApp.themeParams.text_color,
            focus: WebApp.themeParams.accent_text_color,
            focusOpacity: 0.8,
            activatedOpacity: 0.8,
        },
        divider: WebApp.themeParams.section_bg_color,
        common: {
            black: WebApp.themeParams.text_color,
            white: WebApp.themeParams.bg_color,
        }
    }
});

export default Theme;