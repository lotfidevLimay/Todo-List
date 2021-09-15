import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ADD_TODO, REMOVE_TODO, SET_TODOS, UPDATE_INPUT, UPDATE_TODO } from './actions'

import mySaga from './saga'

export interface ITodos {
  text: string,
  id: number
}
const initialState = {
  addInputText: '',
  todos: [] as ITodos[]
}

export type TStore = typeof initialState

const todosReducer = (state = initialState, action): TStore => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload
      }
    case UPDATE_INPUT:
      return {
        ...state,
        addInputText: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        addInputText: '',
        todos: [...state.todos, { text: action.payload, id: Date.now()}]
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(t => t.id !== action.payload)
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(t => t.id === action.payload.id ? { ...t, text: action.payload.text} : t )
      }
    default:
      return state
  }
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(todosReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

export default store