import { Breadcrumbs, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { KeyboardArrowRight } from '@mui/icons-material';
import { useTranslation } from "react-i18next";
import { BackButton } from "../components";

/**
 * props.words - Palavras
 * props.back - Página anterior
 */
export default function Progress(props) {
    const { t, i18n } = useTranslation('common');
    const theme = useTheme();

    return (
        <Grid container height='15vh'>
            <Grid item xs={12}>
                <Breadcrumbs
                    separator={<KeyboardArrowRight
                        style={{
                            marginInline: '-1vh'
                        }}
                        color='primary'
                    />}
                    style={{
                        height: '4.5vh',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        borderWidth: '0.3vh',
                        borderColor: theme.palette.primary.main,
                        borderStyle: 'solid',
                        borderRadius: '0.5vh',
                        paddingLeft: '1vh'
                    }}
                >
                    {props.words}
                </Breadcrumbs>
            </Grid>
            <Grid item xs={12}>
                <BackButton text={t('back')} back={props.back} />
            </Grid>
        </Grid>
    );
}