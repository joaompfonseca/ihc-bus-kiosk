import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LargeActionButton, Progress } from "../components";
import '../assets/styles/OperationPage.css';

export default function OperationPage(props) {
	const { t, i18n } = useTranslation('common');

	return (
		<Grid container>
			<Grid item xs={12}>
				<Progress
					words={
						[<Typography>One</Typography>,
						<Typography>Two</Typography>,
						<Typography>Three</Typography>]
					}
					prev={props.goto('start')}
				/>
			</Grid>
			<Grid item xs={12} align='center' height='50vh'>
				<h1>{t('operation.prompt')}</h1>
			</Grid>
			<Grid item xs={6} align='center'>
				<LargeActionButton text={t('operation.button.tickets')} next={props.goto('tickets')} />
			</Grid>
			<Grid item xs={6} align='center'>
				<LargeActionButton text={t('operation.button.passes')} next={props.goto('passes')} />
			</Grid>
		</Grid>
	);
}