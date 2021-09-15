
export const GET_LOCAL_TODOS = "GET_LOCAL_TODOS"
export const getLocalTodosAction = () => ({
  type: GET_LOCAL_TODOS
})

export const SET_TODOS = "SET_TODOS"
export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos
})

export const UPDATE_INPUT = "UPDATE_INPUT"
export const updateInput = (text: string) => ({
  type: UPDATE_INPUT,
  payload: text
})

export const ADD_TODO = "ADD_TODO"
export const addTodo = (todo: string) => ({
  type: ADD_TODO,
  payload: todo
})

export const REMOVE_TODO = "REMOVE_TODO"
export const removeTodo = (id: string | number) => ({
  type: REMOVE_TODO,
  payload: id
})

export const UPDATE_TODO = "UPDATE_TODO"
export const updateTodo = (text: string, id: string | number) => ({
  type: UPDATE_TODO,
  payload: { text, id }
})