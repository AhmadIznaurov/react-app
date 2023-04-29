const SETTING_CHANGE = 'SETTING-CHANGE';
const SETTING_POST = 'SETTING-POST';

let initializeState = {
    settingData: [
        {id: 1, message: 'Hello, Who prefer React', likesCount: 12},
    ],
    settingPost: 'Setting some skills',
};

const settingsReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SETTING_CHANGE: {
            let setPost =
                {
                    id: 1,
                    message: state.settingPost,
                    likesCount: 12
                }
                return {
                ...state,
                    settingData: [...state.settingData, setPost],
                    settingPost: ''
                }
        }
   case SETTING_POST: {
       return {
           ...state,
           settingPost: action.post
       }
   }
        default:
            return state;
    }

}
export const settingChangeActionCreator = () => ({type: SETTING_CHANGE})
export const settingPostActionCreator = (setting) => ({type: SETTING_POST, post: setting})
export default settingsReducer;

