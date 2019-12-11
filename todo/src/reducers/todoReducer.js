export const reducer = (state, action) => {
    console.log(state, action)
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

export const initialState = [
        {
            todo: 'Learn about reducers',
            completed: false,
            id:1
        }, 
        {
            todo: 'Study about reducers',
            completed: false,
            id:2
        },
        {
            todo: 'Eat dinner more reducers',
            completed: false,
            id:3
        },
        {
            todo: 'Workout',
            completed: false,
            id:4
        }
    ]  
