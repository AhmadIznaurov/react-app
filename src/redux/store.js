import profileReducer from "./profile-reducer";


const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const PROFILE_PAGE_ADD ='PROFILE-PAGE-ADD';

const ADD_MUSIC = 'ADD-MUSIC';
const ADD_POST_MUSIC ='ADD-POST-MUSIC';

const SETTING_CHANGE = 'SETTING_CHANGE';
const SETTING_POST ='SETTING-POST';

const ADD_NEWS = 'ADD-NEWS';
const ADD_BUTTON_CLICK ='ADD-BUTTON-CLICK';

const BUTTON_DIALOG = 'BUTTON-DIALOG';
const ADD_DIALOG ='ADD-DIALOG';


let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hello, Who prefer React', likesCount: 12},
                {id: 2, message: 'I can try to search info', likesCount: 15},
                {id: 3, message: 'Perhaps, but it need a time', likesCount: 29}
            ],
            onPostText: 'it-incubator.com'
        },

        messagesPage: {
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

            settingData: [
                {id: 1, message: 'Hello, Who prefer React', likesCount: 12},
            ],
            settingPost: 'Setting some skills',

            musicData: [
                {
                    id: 1,
                    message: 'Music in not my life',
                    likesCount: 200
                },
            ],
            postMusic: 'music',

            newsData: [
                {id: 1, message: 'Hello, i prefer to get fresh news', likesCount: 52},
            ],
            addPostNews: 'this is news',
        },

    },
    _rerenderEntireTree() {
        console.log('Element must changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._rerenderEntireTree(this._state);
        if (action.type === ADD_MUSIC) {
            let musics =
                {
                    id: 1,
                    message: this._state.messagesPage.postMusic,
                    likesCount: 200
                }
            this._state.messagesPage.musicData.push(musics);
            this._state.messagesPage.postMusic= '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === ADD_POST_MUSIC) {
            this._state.messagesPage.postMusic = action.newMusic;
            this._rerenderEntireTree(this._state);
        }

        if (action.type === SETTING_CHANGE) {
            let setPost =
                {
                    id: 1,
                    message: this._state.messagesPage.settingPost,
                    likesCount: 12
                }
            this._state.messagesPage.settingData.push(setPost)
            this._state.messagesPage.settingPost = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === SETTING_POST) {
            this._state.messagesPage.settingPost = action.post;
            this._rerenderEntireTree(this._state);
        }
        if (action.type === ADD_BUTTON_CLICK) {
            let addClickNews =
                {
                    id: 3,
                    message: this._state.messagesPage.addPostNews,
                    likesCount: 14
                }
            this._state.messagesPage.newsData.push(addClickNews);
            this._state.messagesPage.addPostNews = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === ADD_NEWS) {
            this._state.messagesPage.addPostNews = action.newPost;
            this._rerenderEntireTree(this._state);
        }

        if(action.type === BUTTON_DIALOG) {
            let buttonDialog = {
                id: 1,
                message: this._state.messagesPage.dialogsPost,
                likesCount: 20
            }
            this._state.messagesPage.dialogPostData.push(buttonDialog);
            this._state.messagesPage.dialogsPost = '';
            this._rerenderEntireTree(this._state)
        } else if (action.type === ADD_DIALOG) {
            this._state.messagesPage.dialogsPost = action.addPostDialog;
            this._rerenderEntireTree(this._state)
        }
    }

}

export const addMusicActionCreator = () => ({type: ADD_MUSIC})
export const addPostMusicActionCreator = (textMusic) => ({ type: ADD_POST_MUSIC, newMusic: textMusic})

export const profilePageAddActionCreator = () => ({type: PROFILE_PAGE_ADD});
export const onPostChangedActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const settingChangeActionCreator = () => ({type: SETTING_CHANGE})
export const settingPostActionCreator = (setting) => ({type: SETTING_POST, post: setting})

export const addNewsActionCreator = (news) => ({type: ADD_NEWS, newPost: news})
export const addButtonClickActionCreator = () => ({type: ADD_BUTTON_CLICK})


export const addButtonDialogActionCreator = () => ({type: BUTTON_DIALOG})
export const addDialogActionCreator = (text) => ({type: ADD_DIALOG, addPostDialog: text})

window.store = store;
export default store;