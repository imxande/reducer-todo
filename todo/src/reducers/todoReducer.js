export const reducer = (state, action) => {
    console.log(state, action)
    switch(action.type){
        case 'ADD_A_TODO':
            return {
                ...state,
                items: [
                    {
                        item: action.text,
                        completed: false,
                        key: Date.now()
                      }
                ]
            }
        default:
            return state;
    }
}

export const initialState = 
    [
        {
            todo: 'Learn about reducers',
            completed: false,
            key:1
        }, 
        {
            todo: 'Study about reducers',
            completed: false,
            key:2
        },
        {
            todo: 'Eat dinner more reducers',
            completed: false,
            key:3
        },
        {
            todo: 'Workout',
            completed: false,
            key:4
        }
    ]  
