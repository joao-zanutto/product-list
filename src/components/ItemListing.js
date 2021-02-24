import { Grid } from '@material-ui/core';
import React from 'react';
import Item from './Item';

const ItemListing = ({ products }) => {
	return (
		<Grid item container xs={12} sm={8} spacing={4} align='center'>
			{products.map((product) => {
				return (
					<Grid xs={12} sm={4} item>
						<Item product={product} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default ItemListing;
