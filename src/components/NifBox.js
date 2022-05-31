import { Grid, Typography } from "@mui/material";
import { Component } from "react";

class NifBox extends Component {

    render() {
        const { text } = this.props

        return (
            <Grid container
                style={{
                    height: '5vh',
                    width: '12vh',
                    paddingInline: '0.5vh',
                    borderRadius: '0.5vh',
                    borderWidth: '0.3vh',
                    borderColor: 'cornflowerblue',
                    borderStyle: 'solid',
                }}>
                    <Typography variant='p' fontWeight='bold'>
                        {text}
                    </Typography>
            </Grid>)
    }
}
export default NifBox;