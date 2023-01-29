import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "@Pages/Home";
import ProductDetails from "@Pages/ProductDetails";
import NotFound from "@Pages/NotFound";

// Layout
import Layout from "../Layout";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// ========================================================================================================

const App = () => (
	<Router>
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/product/:id" element={<ProductDetails />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	</Router>
);

export default App;
