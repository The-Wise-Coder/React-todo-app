import {
  useState,
  useEffect,
  useRef
} from 'react';

function Form( {
  input, setInput, todos, setTodos, status, setStatus
}) {
  const [info,
    setInfo] = useState(false);
    
  const inputRef = useRef(null);
  
  useEffect(() => {
    if(inputRef.current) {
    inputRef.current.focus();
    }
  }, []);

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (input !== '') {
      const randNum = Math.floor(Math.random() * 10000);
      setTodos([...todos, {
        text: input, id: randNum, completed: false, deleted: false
      }]);
      setInput('');
      return;
    }
    setInfo(true);
    setTimeout(() => {
      setInfo(false);
    }, 2000);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <input
            type="text"
            name="input"
            value={input}
            onChange={handleChange}
            placeholder='Add a task'
            ref={inputRef}/>
          <button className='btn'>Add</button>
        </div>
        <div className='select-wrapper'>
          <select
            value={status}
            onChange={e => setStatus(e.target.value)}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      { info && <p className='info'>Input field can't be empty</p> }
    </>
  )
}

export default Form;