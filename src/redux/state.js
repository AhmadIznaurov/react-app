import {rerenderEntireTree} from "../render";

const state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hello, Who prefer React', likesCount: 12},
            {id: 2, message: 'I can try to search info', likesCount: 15 },
            {id: 3, message: 'Perhaps, but it need a time', likesCount: 29}
        ],
        newPostText: 'it-incubator.com'
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

        ]
    }
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}





export default state;