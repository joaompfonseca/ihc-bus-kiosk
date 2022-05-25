import { Breadcrumbs, Grid, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Edit, KeyboardArrowRight } from '@mui/icons-material';

/**
 * props.bigSteps     - [0] Título da tarefa anterior
 *                      [1] Função para voltar ao início dessa tarefa
 * props.smallSteps   - Passos da tarefa atual
 */
export default function Progress(props) {
    const theme = useTheme();

    const primaryShades = [theme.palette.primary.light, theme.palette.primary.dark];
    const warningShades = [theme.palette.warning.light, theme.palette.warning.dark];
    let index = 0;

    return (
        <Grid container>
            {props.bigSteps.map((bigStep) => (
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
                                backgroundColor: warningShades[index%2]
                            }}
                            variant='contained'
                            onClick={() => {
                                bigStep[1]();
                            }}
                            disableElevation
                        >
                            <Edit style={{ fontSize: '2.5vh' }} />
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
                            borderColor: primaryShades[index%2],
                            borderStyle: 'solid',
                            borderTopRightRadius: '0.5vh',
                            marginBottom: '-0.5vh',
                            backgroundColor: primaryShades[index++%2],
                            zIndex: '1'
                        }}
                    >
                        {bigStep[0]}
                    </Grid>
                </>
            ))}
            <Breadcrumbs
                separator={<KeyboardArrowRight
                    style={{
                        marginInline: '-1vh'
                    }}
                    color='primary'
                />}
                style={{
                    height: '4vh',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    borderWidth: '0.3vh',
                    borderColor: theme.palette.primary.main,
                    borderStyle: 'solid',
                    borderRadius: '0.5vh',
                    backgroundColor: 'white',
                    zIndex: '1'
                }}
            >
                {props.smallSteps}
            </Breadcrumbs>
        </Grid>
    );
}