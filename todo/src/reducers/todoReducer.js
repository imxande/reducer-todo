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

export const initialState = {
    items: [
        {
            item: 'Learn about reducers',
            completed: false,
            key: Date.now()
          }
    ]
}
