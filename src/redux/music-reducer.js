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
      case ADD_MUSIC: {
          let musics =
              {
                  id: 1,
                  message: state.postMusic,
                  likesCount: 200
              }
          let stateCopy = {...state};
          stateCopy.postMusic = [...state.postMusic]
          stateCopy.musicData.push(musics);
          stateCopy.postMusic = '';
          return stateCopy;
      }
      case
          ADD_POST_MUSIC: {
          let stateCopy = {...state};
          stateCopy.postMusic = action.newMusic;
          return stateCopy;
      }
       default:
           return state;
    }
}
export const addMusicActionCreator = () => ({type: ADD_MUSIC})
export const addPostMusicActionCreator = (textMusic) => ({ type: ADD_POST_MUSIC, newMusic: textMusic})
export default newsReducer;
