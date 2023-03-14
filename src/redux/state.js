const state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hello, Who prefer React', likesCount: 12},
            {id: 2, message: 'I can try to search info', likesCount: 15 },
            {id: 3, message: 'Perhaps, but it need a time', likesCount: 29}
        ]
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

       dialogPostData : [
           {
               id: 3,
               message: 'Kabzda kak ne prosto',
               likesCount: 0
           }
       ],


        settingData : [
            {id: 1, message: 'Hello, Who prefer React', likesCount: 12},
        ],

        musicData : [
            {
                id:1,
                message: 'Music in not my life',
                likesCount: 200
            },
        ]
    }
}

export let addMusic = (postMusic) => {
    let musics  =
        {
            id:1,
            message: postMusic,
            likesCount: 200
        }
        state.messagesPage.musicData.push(musics);
}

export let postAdd = (postMessages) => {
   let dialogs =
        {
            id: 3,
            message: postMessages,
            likesCount: 0
        }

    state.messagesPage.dialogPostData.push(dialogs);

}

export let settingChange = (settingsPost) => {
    let setPost =
        {
            id: 1,
            message: settingsPost,
            likesCount: 12
        }
        state.messagesPage.settingData.push(setPost);
}


export default state;