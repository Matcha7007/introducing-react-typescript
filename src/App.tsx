import React, { useCallback, useRef } from 'react';
import { useTodos } from './useTodos';
import './App.css';

const Heading = ({title}: { title: string }) => (
  <h2>{title}</h2>
)

const Box: React.FunctionComponent<{ children:string }> = ({children}) => (
  <div
    style={{ 
      padding: '1rem',
      fontWeight: 'bold'
     }}
  >
    {children}
  </div>
) 


const Button: React.FunctionComponent<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  title?: string
}> 
= ({ title, children, style, ...rest }) => (
  <button {...rest} style={{ 
    ...style,
    backgroundColor: 'steelblue',
    color: 'whitesmoke'
   }}>{title ?? children}</button>
)


function App() {
  const { todos, addTodo, removeTodo} = useTodos([
    { id: 0, text: 'Hello There', done: false}
  ])

  const newTodoRef = useRef<HTMLInputElement>(null)
  const onAddTodo = useCallback(() => {
    if(newTodoRef.current){
      addTodo(newTodoRef.current.value)
      newTodoRef.current.value = ''
    }
  }, [addTodo])

  return (
    <div>
      <Heading title='Introducing'/>
      <Box children='Hello There'/>

      <Heading title='Todos'/>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
      ))}
      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={onAddTodo}>Add Todo</Button>
      </div>
    </div>
  );
}

export default App;
