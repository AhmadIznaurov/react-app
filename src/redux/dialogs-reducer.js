const BUTTON_DIALOG = 'BUTTON-DIALOG';
const ADD_DIALOG = 'ADD-DIALOG';

let initializeState = {
    dialogsData: [
        {id: 1, name: 'Ahmad'},
        {id: 2, name: 'Movsar'},
        {id: 3, name: 'Hakim'},
        {id: 4, name: 'Adam'},
        {id: 5, name: 'Aslan'},
        {id: 6, name: 'Sultan'},
        {id: 7, name: 'Muslim'}
    ],

    messagesData: [
        {id: 1, message: "Hello, i learn React"},
        {id: 2, message: "IT-Online Camp"},
        {id: 3, message: "Learning coding"},
        {id: 4, message: "Strange feeling"},
        {id: 5, message: "Haha, so funny"},
        {id: 6, message: "What?"},
        {id: 7, message: "Why?"},

    ],

    dialogPostData: [
        {
            id: 3,
            message: 'Kabzda kak ne prosto',
            likesCount: 0
        }
    ],

    dialogsPost: 'Ма бокх пал бу хьар',

};

const dialogsReducer = (state = initializeState, action) => {
    switch (action.type) {
        case BUTTON_DIALOG:
            let buttonDialog = {
                id: 1,
                message: state.dialogsPost,
                likesCount: 20
            }
            state.dialogPostData.push(buttonDialog);
            state.dialogsPost = '';
            return state;
        case ADD_DIALOG:
            state.dialogsPost = action.addPostDialog;
            return state;
        default:
            return state;
    }
}


export const addButtonDialogActionCreator = () => ({type: BUTTON_DIALOG})
export const addDialogActionCreator = (text) => ({type: ADD_DIALOG, addPostDialog: text})

export default dialogsReducer;
