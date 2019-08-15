
import key from 'keymaster';
export default {

  namespace: 'example',

  state: 0,

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(params => {
        dispatch({type:"save"})
      })
    },
    keyEvent({dispatch}) {
      key('⌘+up, ctrl+up', () => { dispatch({type:'save'}) });
    },
    onClick({dispatch}) {
      document.addEventListener('click', () => {
        dispatch({type:"save"})
      })
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      console.log(action)
      return { ...state, ...action.payload };
    },
  },

};
