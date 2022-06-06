import { Component } from 'react';
import { Breadcrumbs, Grid, Button, Typography } from '@mui/material';
import { Edit } from '@mui/icons-material';

/**
 * props.bigSteps     - [0] Título da tarefa anterior
 *                      [1] Função para voltar ao início dessa tarefa
 * props.smallSteps   - Passos da tarefa atual
 */
class Progress extends Component {

    render = () => {
        const { bigSteps, smallSteps } = this.props;

        const primaryShades = ['#1976d2', '#42a5f5'];
        const warningShades = ['#ed6c02', '#ff9800'];
        let index = 0;

        return (
            <Grid container className='noDivPadding'>
                {bigSteps.map((bigStep) => (
                    <>
                        <Grid item xs={2}
                            style={{
                                padding: '0',
                                marginBottom: '-0.5vh',
                                zIndex: '1'
                            }}
                        >
                            <Button
                                style={{
                                    height: '4.5vh',
                                    width: '100%',
                                    borderRadius: '0',
                                    borderTopLeftRadius: '0.5vh',
                                    marginBottom: '-0.5vh',
                                    backgroundColor: warningShades[index % 2]
                                }}
                                variant='contained'
                                onClick={() => { bigStep[1](); }}
                                disableElevation
                            >
                                <Edit style={{ fontSize: '3vh' }} />
                            </Button>
                        </Grid>
                        <Grid item xs={10}
                            style={{
                                height: '4.5vh',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderWidth: '0.3vh',
                                borderBottomWidth: '0.5vh',
                                borderColor: primaryShades[index % 2],
                                borderStyle: 'solid',
                                borderTopRightRadius: '0.5vh',
                                marginBottom: '-0.5vh',
                                color: 'white',
                                backgroundColor: primaryShades[index++ % 2],
                                zIndex: '1'
                            }}
                        >
                            {bigStep[0]}
                        </Grid>
                    </>
                ))}
                <Breadcrumbs
                    separator={<Typography style={{ color: '#1976d2', marginInline: '-0.5vh'}}>{'>'}</Typography>}
                    style={{
                        height: '4vh',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        borderWidth: '0.3vh',
                        borderColor: '#1976d2',
                        borderStyle: 'solid',
                        borderRadius: '0.5vh',
                        backgroundColor: 'white',
                        zIndex: '1'
                    }}
                >
                    {smallSteps}
                </Breadcrumbs>
            </Grid>
        );
    }
}

export default Progress;