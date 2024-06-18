export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_CHARACTERS':   
            return {...state, list: action.payload} 
        case 'ADD_FAV':     
            return {...state, favs: [...state.favs, action.payload]}
        case 'CHANGE_THEME': 
            return { ...state, theme: action.payload };
        //OPCIONALES:    
        case 'GET_CHARACTER': 
            return {...state, dentistDetail: action.payload, currentDentistIndex: state.list.findIndex(dentist => dentist.id === action.payload.id) };
        case 'DELETE_FAV': 
            return {...state, favs: state.favs.filter(fav => fav.id !== action.payload)};
        case 'DELETE_ALL_FAVS':
            return {...state, favs: state.favs = []}
    }
}