import React, { useCallback } from 'react';
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

const List: React.FunctionComponent<{ 
  items:string[],
  onClick?: (item: string) => void
}> = ({items, onClick}) => (
  <ul>
    {items.map((item, index) => (
      <li key={[index, item].join(';')} onClick={() => onClick?.(item)}>{item}</li>
    ))}
  </ul>
) 

function App() {
  const onListClick = useCallback((item: string) => {
    alert(item)
  }, [])
  return (
    <div>
      <Heading title='Introducing'/>
      <Box children='Hello There'/>
      <List items={['one', 'two', 'three']} onClick={onListClick}/>
    </div>
  );
}

export default App;
