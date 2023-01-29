import { UiType } from "./uiTypes";

// ========================================================================================================

interface UiState {
	isSideDrawerOpen: boolean;
	isDarkTheme: boolean;
}

interface Action {
	type: string;
	payload?: any;
}

const initialState = {
	isSideDrawerOpen: false,
	isDarkTheme: false,
};

// ========================================================================================================

export default (state: UiState = initialState, action: Action): UiState => {
	const { type, payload } = action;

	switch (type) {
		case UiType.TOGGLE_SIDE_DRAWER:
			return { ...state, isSideDrawerOpen: !state.isSideDrawerOpen };

		case UiType.TOGGLE_THEME:
			return { ...state, isDarkTheme: !state.isDarkTheme };

		default:
			return state;
	}
};
