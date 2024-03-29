const PROFILE_PAGE_ADD = 'PROFILE-PAGE-ADD';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initializeState = {
        postData: [
            {id: 1, message: 'Hello, Who prefer React', likesCount: 12},
            {id: 2, message: 'I can try to search info', likesCount: 15},
            {id: 3, message: 'Perhaps, but it need a time', likesCount: 29}
        ],
        onPostText: 'it-incubator.com'
};

const profileReducer = (state = initializeState, action) => {
    switch (action.type ) {
        case PROFILE_PAGE_ADD: {
            let setProfile =
                {
                    id: 1,
                    message: state.onPostText,
                    likesCount: 12
                }
                return  {
                    ...state,
                    postData: [...state.postData, setProfile],
                    onPostText : ''
                }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                onPostText : action.newText
            }
        }
        default:
            return state;

    }
}

export const profilePageAddActionCreator = () => ({type: PROFILE_PAGE_ADD});
export const onPostChangedActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;
