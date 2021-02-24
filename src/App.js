import { Grid, AppBar } from '@material-ui/core';
import Item from './components/Item';

const products = [
	{
		id: 1,
		title: 'Violão Iniciante',
		price: 'R$ 299,99',
		brand: 'Giannini',
		img: 'https://www.musitechinstrumentos.com.br/files/pro_23001_e.jpg',
		available: true,
	},
	{
		id: 2,
		title: 'Violão Intermediario',
		price: 'R$ 2299,99',
		brand: 'Strinberg',
		img: 'https://www.musitechinstrumentos.com.br/files/pro_26992_e.jpg',
		available: true,
	},
	{
		id: 3,
		title: 'Violão Avançado',
		price: 'R$ 9299,99',
		brand: 'Memphis',
		img:
			'https://serenata.vteximg.com.br/arquivos/ids/163118-1000-1000/VIOLAO-MICHAEL-VMA320-NA_IMG2.jpg?v=637461624974830000',
		available: true,
	},
];

function App() {
	return (
		<div className='App'>
			<Grid container direction='column'>
				<Grid item>
					<AppBar>hey</AppBar>
				</Grid>
				<Grid item container>
					<Grid item xs={0} sm={2} />
					<Grid item container xs={12} sm={8} spacing={4} align='center'>
						<Grid xs={12} sm={4} item>
							<Item product={products[0]}> content </Item>
						</Grid>
						<Grid xs={12} sm={4} item>
							<Item product={products[1]}> content </Item>
						</Grid>
						<Grid xs={12} sm={4} item>
							<Item product={products[2]}> content </Item>
						</Grid>
					</Grid>
					<Grid item xs={0} sm={2} />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
