import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Grid,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Header() {
	return (
		<div>
			<AppBar position='static'>
				<Toolbar styles={{ flex: 'start' }}>
					<Grid container>
						<Grid item sm={11}>
							<Typography variant='h5'>
								Loja de Violões - Do iniciante ao profissional
							</Typography>
						</Grid>
						<Grid item sm={1}>
							<IconButton color='inherit'>
								<ShoppingCartIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
}
