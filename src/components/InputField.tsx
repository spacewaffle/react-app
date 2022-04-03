import React from 'react'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props> = ({todo, setTodo}) => {
  return (
      <form action="" className="input">
          <input type="input"
            value={todo}
            onChange={
                (e)=>setTodo(e.target.value)
            }
          />
          <button>Go</button>
      </form>
  )
}

export default InputField