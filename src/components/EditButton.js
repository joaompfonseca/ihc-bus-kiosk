import { Button } from '@mui/material';
import { Edit } from '@mui/icons-material';

/**
 * props.action - Função que vai excutar a ação pretendida
 */
export default function EditButton(props) {
    return (
        <Button
            style={{
                height: '5vh',
                width: '5vh',
                fontSize: '4.5vh'
            }}
            variant='contained'
            color='info'
            onClick={() => {
                props.action();
            }}
        >
            <Edit />
        </Button>
    );
}