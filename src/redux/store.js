import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import newsReducer from "./news-reducer";
import musicReducer from "./music-reducer";
import settingsReducer from "./settings-reducer";

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
        },
            settingPage: {
                settingData: [
                    {id: 1, message: 'Hello, Who prefer React', likesCount: 12},
                ],
                settingPost: 'Setting some skills',
            },

            musicPage: {
                musicData: [
                    {
                        id: 1,
                        message: 'Music in not my life',
                        likesCount: 200
                    },
                ],
                postMusic: 'music',
            },

        newsPage: {
            newsData: [
                {id: 1, message: 'Hello, i prefer to get fresh news', likesCount: 52},
            ],
            addPostNews: 'this is news',
        },

    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.messagesPage = newsReducer(this._state.messagesPage, action);
        this._state.messagesPage = musicReducer(this._state.messagesPage, action);
        this._state.messagesPage = settingsReducer(this._state.messagesPage, action);
        this._rerenderEntireTree(this._state);
    },
    _rerenderEntireTree() {
        console.log('Element must changed')
    },
}

window.state = store._state


export default store;