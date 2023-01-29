import React, { useEffect, useState } from "react";

// Material UI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// Components
import ProductCard from "@Components/ProductCard";

// Http
import axios from "axios";

// Types
import { Product } from "@Types/index";

// ========================================================================================================

const initialState = {
	brand: "",
	description: "",
	id: 0,
	name: "",
	pictureUrl: "",
	price: 0,
	quantityStock: 0,
	type: "",
};

const Home = () => {
	const [products, setProducts] = useState<Product[]>([initialState]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/Products`);
		setProducts(data);
	};

	return (
		<Container maxWidth="xl">
			<Box style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridRowGap: "2rem" }}>
				{products.map((item, index) => {
					return (
						<ProductCard
							brand={item.brand}
							description={item.description}
							name={item.name}
							pictureUrl={item.pictureUrl}
							price={item.price}
							id={item.id}
							key={index}
						/>
					);
				})}
			</Box>
		</Container>
	);
};

export default Home;
