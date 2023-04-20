const ADD_MUSIC = 'ADD-MUSIC';
const ADD_POST_MUSIC = 'ADD-POST-MUSIC';

let initializeState = {
    musicData: [
        {
            id: 1,
            message: 'Music in not my life',
            likesCount: 200
        },
    ],
    postMusic: 'music',
};

const newsReducer = (state = initializeState, action) => {
   switch (action.type) {
      case ADD_MUSIC:
           let musics =
               {
                   id: 1,
                   message: state.postMusic,
                   likesCount: 200
               }
           state.musicData.push(musics);
           state.postMusic= '';
           return state;
       case ADD_POST_MUSIC:
        state.postMusic = action.newMusic;
        return state;
       default:
           return state;
    }
}
export const addMusicActionCreator = () => ({type: ADD_MUSIC})
export const addPostMusicActionCreator = (textMusic) => ({ type: ADD_POST_MUSIC, newMusic: textMusic})
export default newsReducer;
