const mapReducer = (state, action) => {
    switch(action.type) {
        case 'markerClick' : 
            return {...state, markers: [...state.markers, action.marker]}

        case 'delete' : 
            const markers = [...state.markers]
            markers.splice(action.i, 1)
            return { ...state, markers: [...( markers || [])] }

        case 'infos' : 
            return {...state, user: {...state.user, ...action.user}}

            
        default : return {...state} 
    }
}

export default mapReducer