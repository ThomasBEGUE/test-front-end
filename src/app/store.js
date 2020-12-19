import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../features/language/LanguageSlice';

export default configureStore({
    reducer: {
        language: languageReducer,
    },
});
