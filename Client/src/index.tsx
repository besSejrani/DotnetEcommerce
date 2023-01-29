import React from "react";
import ReactDOM from "react-dom/client";

// Redux
import { Provider } from "react-redux";
import { store, persistor } from "@Redux/store";
import { PersistGate } from "redux-persist/integration/react";

// Routes
import App from "./Routes/App";
import "./App/index.css";

// SEO
import reportWebVitals from "./reportWebVitals";

// ========================================================================================================

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
