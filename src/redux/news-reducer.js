const ADD_BUTTON_CLICK = 'ADD-BUTTON-CLICK';
const ADD_NEWS = 'ADD-NEWS';

let initializeState = {
        newsData: [
            {id: 1, message: 'Hello, i prefer to get fresh news', likesCount: 52},
        ],
        addPostNews: 'this is news',
};

const newsReducer = (state = initializeState, action) => {
    switch (action.type) {
        case ADD_BUTTON_CLICK:
            let addClickNews =
                {
                    id: 3,
                    message: state.addPostNews,
                    likesCount: 14
                }
            state.newsData.push(addClickNews);
            state.addPostNews = '';
            return state;
        case ADD_NEWS:
            state.addPostNews = action.newPost;
            return state;
        default:
            return state;

    }
}

export const addNewsActionCreator = (news) => ({type: ADD_NEWS, newPost: news})
export const addButtonClickActionCreator = () => ({type: ADD_BUTTON_CLICK})
export default newsReducer;
