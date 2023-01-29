// Material UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Types
import { Product } from "@Types/index";

// ========================================================================================================

const ProductCard: React.FC<Product> = ({ name, description, pictureUrl, price, brand, id }) => {
	return (
		<Card sx={{ maxWidth: 345, height: 650 }}>
			<Box style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
				<Box>
					<CardMedia sx={{ height: 350 }} image={`${pictureUrl}`} title="green iguana" />
					<CardContent>
						<Box style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gridGap: "2rem" }}>
							<Box style={{ display: "flex", flexDirection: "column" }}>
								<Typography gutterBottom variant="h5" component="div">
									{name}
								</Typography>
								<Typography gutterBottom variant="body1" component="div" style={{ margin: "0rem 0rem 0rem 0rem" }}>
									{brand}
								</Typography>
							</Box>
							<Typography gutterBottom variant="h6" component="div">
								{price}
							</Typography>
						</Box>
						<Typography variant="body2" color="text.secondary">
							{description}
						</Typography>
					</CardContent>
				</Box>
				<CardActions style={{ margin: "0rem 0rem 1rem 0rem" }}>
					<Button variant="contained" size="small" style={{ margin: "0rem 0.5rem 0rem 0rem" }}>
						Add to card
					</Button>
					<Button variant="outlined" size="small" href={`/product/${id}`}>
						View
					</Button>
				</CardActions>
			</Box>
		</Card>
	);
};

export default ProductCard;
