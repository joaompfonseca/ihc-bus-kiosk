import { Button } from '@mui/material';
import { ArrowLeft } from '@mui/icons-material';
import { useTranslation } from "react-i18next";

/**
 * props.text - Texto do botão
 * props.back - Página anterior
 */
export default function BackButton(props) {
    const { t, i18n } = useTranslation('common');

    return (
        <Button
            style={{
                height: '5vh',
                justifyContent: 'flex-start',
                fontSize: '1.5vh'
            }}
            size='small'
            variant='contained'
            color='primary'
            startIcon={<ArrowLeft style={{
                marginLeft: '-1vh',
                marginRight: '-2vh',
                fontSize: '4vh'
            }}
            />}
            onClick={() => {
                props.back();
            }}
        >
            {props.text}
        </Button>
    );
}