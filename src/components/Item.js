import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 545,
	},
});

export default function Item({ product }) {
	const classes = useStyles();

	return (
		<Card align='left' className={classes.root}>
			<CardActionArea>
				<CardMedia
					component='img'
					alt='Contemplative Reptile'
					height='500'
					image={product.img}
					title='Contemplative Reptile'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{product.title}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						Lizards are a widespread group of squamate reptiles, with over 6,000
						species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary' variant='contained'>
					Comprar
				</Button>
				<Button size='small' color='primary'>
					Informações
				</Button>
			</CardActions>
		</Card>
	);
}
