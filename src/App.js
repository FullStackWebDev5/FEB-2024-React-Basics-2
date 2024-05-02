import './App.css';
import Count from './components/Count'

function App() {
  return (
    <div className="App">
      <Count />
    </div>
  );
}

export default App;


/*
  # Any react component, can have 2 types of data:
  - PROPS
    - Data sent from parent component to the child component
    - This can be used to make dynamic components
  - STATES
    - Data which belongs/ owned by the component
    - To create state in functional components, we will use 'Hooks'
      - useState hook
      - Earlier versions of react: Class components were used majory. If states were required, class components were the only way to create components
      - After 2018: React hooks, now states could also be created in functional components
      - Syntax: const [state, stateHandler] = useState(defaultValue)
        - stateHandler: Function responsibe to change the value of state

  # (Future) Any change to state/props of a component -> component will re-render with new values of states and props
*/

/* 
  const users = [
    {
      fullName: 'Akash Kumar',
      email: 'akash@gmail.com',
      batchNo: '11'
    },
    {
      fullName: 'Nisha Kumari',
      email: 'nisha@gmail.com',
      batchNo: '10'
    },
    {
      fullName: 'Akash Kumar',
      email: 'akash@gmail.com',
      batchNo: '11'
    },
    {
      fullName: 'Nisha Kumari',
      email: 'nisha@gmail.com',
      batchNo: '10'
    },{
      fullName: 'Akash Kumar',
      email: 'akash@gmail.com',
      batchNo: '11'
    },
    {
      fullName: 'Nisha Kumari',
      email: 'nisha@gmail.com',
      batchNo: '10'
    },{
      fullName: 'Akash Kumar',
      email: 'akash@gmail.com',
      batchNo: '11'
    },
    {
      fullName: 'Nisha Kumari',
      email: 'nisha@gmail.com',
      batchNo: '10'
    },
  ]

  {users.map((user, index) => (
    <Student key={index} fullName={user.fullName} email={user.email} batchNo={user.batchNo} />
  ))} 
*/