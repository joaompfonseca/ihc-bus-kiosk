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
					words={[
						<Typography fontWeight='bold' color='success.dark'>{t('progress.operation')}</Typography>,
						<Typography>{t('progress.type')}</Typography>,
						<Typography>...</Typography>,
						<Typography>{t('progress.payment')}</Typography>,
					]}
					back={props.goto('start')}
				/>
			</Grid>
			<Grid height='15vh'/>
			<Grid item xs={12} align='center'>
				<h1>{t('operation.prompt')}</h1>
				<hr />
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