import React, { useEffect, useState } from "react";

// Router
import { useParams } from "react-router-dom";

// Material UI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

// Material Styles
import { makeStyles } from "@mui/styles";

// HTTP
import axios from "axios";
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

const ProductDetails = () => {
	// Router
	const { id } = useParams();

	// ==============================
	//           State
	// ==============================
	const [dataResult, setDataResult] = useState<Product>(initialState);

	// ==============================
	//          Events
	// ==============================

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/Products/${id}`, {
			params: {
				id,
			},
		});
		console.log("data", data);
		setDataResult(data);
	};

	return (
		<Container maxWidth="xl">
			<Box style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
				<img src={`${dataResult?.pictureUrl}`} alt={`${dataResult?.name} image`} />
				<Box>
					<Typography variant="h2" component="h1" color="text.secondary">
						{dataResult?.name}
					</Typography>

					<Divider />
					<TableContainer>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>{dataResult?.name}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Price</TableCell>
									<TableCell>{dataResult?.price}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Description</TableCell>
									<TableCell>{dataResult?.description}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Type</TableCell>
									<TableCell>{dataResult?.type}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Brand</TableCell>
									<TableCell>{dataResult?.brand}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Quantity in stock</TableCell>
									<TableCell>{dataResult?.quantityStock}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			</Box>
		</Container>
	);
};

export default ProductDetails;
