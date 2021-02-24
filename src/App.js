import { Grid } from '@material-ui/core';
import Header from './components/Header';
import ItemListing from './components/ItemListing';

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
	{
		id: 4,
		title: 'Violão Avançado',
		price: 'R$ 9299,99',
		brand: 'Memphis',
		img:
			'https://serenata.vteximg.com.br/arquivos/ids/163118-1000-1000/VIOLAO-MICHAEL-VMA320-NA_IMG2.jpg?v=637461624974830000',
		available: true,
	},
	{
		id: 5,
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
			<Grid container direction='column' spacing={4}>
				<Grid item>
					<Header />
				</Grid>
				<Grid item container>
					<Grid item xs={0} sm={2} />
					<ItemListing products={products} />
					<Grid item xs={0} sm={2} />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
