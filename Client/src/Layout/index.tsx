import React from "react";

// Layout
import Header from "./Header";

// Theme
import { withTheme as WithTheme } from "./Theme";

// ========================================================================================================

interface ILayout {
	children: JSX.Element[] | JSX.Element;
}

const Layout: React.FC<ILayout> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default WithTheme(Layout);
