import { Breadcrumbs, ButtonGroup, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Arrow from '@mui/icons-material/KeyboardArrowRight'
import { useTranslation } from "react-i18next";

/**
 * props.words - Palavras
 * props.prev - Página anterior
 */
export default function Progress(props) {
    const { t, i18n } = useTranslation('common');
    const theme = useTheme();

    return (
        <ButtonGroup>
            <Button
                size='small'
                variant='contained'
                color='primary'
            >
                {t('back')} {/* TODO!!! */}
            </Button>
            <Breadcrumbs
                separator={<Arrow color='primary' />}
                style={{
                    height: '4vh',
                    width: '40vh',
                    fontSize: '2vh',
                    display: 'flex',
                    justifyContent: 'center',
                    borderWidth: '0.3vh',
                    borderColor: theme.palette.primary.main,
                    borderStyle: 'solid',
                    borderRadius: '0.5vh'
                }}
            >
                {props.words}
            </Breadcrumbs>
        </ButtonGroup>
    );
}