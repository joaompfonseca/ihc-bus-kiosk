import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LargeActionButton, Progress, BackButton } from "../components";

export default function PassesPage(props) {
	const { t } = useTranslation('common');

	return (
		<Grid container alignItems='center'>
			<Grid item xs={12}>
				<Progress
					bigSteps={[]}
					smallSteps={[
						<Typography fontWeight='bold'>{t('progress.smallStep.operation')}</Typography>,
						<Typography fontWeight='bold' color='success.main'>{t('progress.smallStep.type')}</Typography>
					]}
				/>
			</Grid>
			<Grid item xs={12} align='center'>
				<h1>{t('passes.prompt.buy')}</h1>
				<hr />
			</Grid>
			<Grid item xs={4} align='left'>
				<LargeActionButton text={t('passes.button.monthlyNormal')} next={props.goto('monthlyNormal')} />
			</Grid>
			<Grid item xs={8}>
				<Typography variant='p'>
					{t('passes.description.monthlyNormal')}
				</Typography>
			</Grid>
			<Grid item xs={4} align='left'>
				<LargeActionButton text={t('passes.button.monthlyStudent')} next={props.goto('monthlyStudent')} />
			</Grid>
			<Grid item xs={8}>
				<Typography variant='p'>
					{t('passes.description.monthlyStudent')}
				</Typography>
			</Grid>
			<Grid item xs={12} align='center'>
				<h1>{t('passes.prompt.renew')}</h1>
				<hr />
			</Grid>
			<Grid item xs={4} align='left'>
				<LargeActionButton text={t('passes.button.renew')} next={props.goto('renew')} />
			</Grid>
			<Grid item xs={8}>
				<Typography variant='p'>
					{t('passes.description.renew')}
				</Typography>
			</Grid>
			<Grid item xs={12} position='fixed' bottom='2vh'>
				<BackButton text={t('button.back')} back={props.goto('operation')} />
			</Grid>
		</Grid>
	);
}