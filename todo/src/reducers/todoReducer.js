export const reducer = (state, action) => {
    console.log(state, action)
    switch(action.type){
        case 'ADD_A_TODO':
        default:
            return state;
    }
}

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}