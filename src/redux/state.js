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
        }
    },
    _rerenderEntireTree() {
        console.log('Element must changed')
    },

export default state;

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        if (action.type === 'PROFILE-PAGE-ADD') {
        let setProfile =
                {
                    id: 1,
                    message: this._state.profilePage.onPostText,
                    likesCount: 12
                }
            this._state.profilePage.postData.push(setProfile);
            this._state.profilePage.onPostText = '';
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.onPostText = action.newText;
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'POST-ADD') {
            let dialogs =
                {
                    id: 3,
                    message: action.messagesData,
                    likesCount: 0
                }
            this._state.messagesPage.dialogPostData.push(dialogs);
            this._rerenderEntireTree(this._state);
        }

    }

}

window.store = store;
export default store;
