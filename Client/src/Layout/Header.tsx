import React from "react";

// Router
import { Link } from "react-router-dom";

// Material UI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Material Styles
import { ZIndex } from "@mui/material/styles/zIndex";
import { Spacing } from "@mui/system";
import { makeStyles } from "@mui/styles";

// Icon
import { IoMoonOutline } from "react-icons/io5";
import { BsSun } from "react-icons/bs";

// Components
import ButtonHeaderAction from "@Components/Buttons/ButtonHeaderAction";
import SkipContent from "@Components/Accessibility/SkipContent";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSideDrawer, toggleTheme } from "@Redux/ui/uiAction";
import { IAppState } from "@Redux/rootReducer";

// ========================================================================================================

const Header = () => {
	const classes = useStyles();

	// Redux
	const dispatch = useDispatch();
	const isDarkTheme = useSelector((state: IAppState) => state.ui.isDarkTheme);

	// ==============================
	//            Events
	// ==============================

	const changeDarkMode = () => {
		dispatch(toggleTheme());
	};

	return (
		<div className={classes.root}>
			<AppBar position="fixed">
				<Toolbar>
					<Box className={classes.visibleHeaderContent}>
						<Box style={{ display: "flex", alignItems: "center" }}>
							<Link to="/">
								<Typography variant="h5" color="white">
									ReStore
								</Typography>
							</Link>
							<SkipContent />
						</Box>

						<Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
							<Box
								style={{
									display: "flex",
									justifyContent: "space-between",
									width: "230px",
									margin: "0rem 1rem 0rem 0rem",
								}}
							>
								<Link to="/">
									<Typography variant="body1" color="white">
										Home
									</Typography>
								</Link>
								<Link to="/catalog">
									<Typography variant="body1" color="white">
										Catalog
									</Typography>
								</Link>
								<Link to="/contact">
									<Typography variant="body1" color="white">
										Contact
									</Typography>
								</Link>
								<Link to="/login">
									<Typography variant="body1" color="white">
										Login
									</Typography>
								</Link>
							</Box>

							<ButtonHeaderAction action={changeDarkMode}>
								{isDarkTheme ? <IoMoonOutline style={{ fontSize: "18px" }} /> : <BsSun style={{ fontSize: "18px" }} />}
							</ButtonHeaderAction>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;

// ========================================================================================================

interface MyTheme {
	zIndex: ZIndex;
	spacing: Spacing;
}

const useStyles = makeStyles((theme: MyTheme) => ({
	root: {
		flexGrow: 1,
		height: "64px",
		position: "relative",
		zIndex: theme.zIndex.drawer + 1,
	},

	visibleHeaderContent: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 0,
	},

	menuButton: {
		marginRight: theme.spacing(2),
	},

	title: {
		flexGrow: 1,
	},
}));
