import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Formulário de Cadastro</h2>

      <InputField
        label='Nome'
        name='nome'
        type='text'
      />

      <InputField
        label='Email'
        name='email'
        type='email'
      />

      <InputField
        label='Idade'
        name='idade'
        type='number'
      />

      <InputField
        label='Gênero'
        name='genero'
        type='text'
      />

      <select class="form-select" aria-label="Default select example">
        <option selected>Selecione o Gênero</option>
        <option value="1">Feminino</option>
        <option value="2">Masculino</option>
        <option value="3">Three</option>
      </select>

      {/* <label htmlFor="nome" className='form-label'>Nome:</label>
      <input type="text" name="nome" id='nome' className='form-control' />

      <label htmlFor="email" className='form-label'>E-mail:</label>
      <input type="email" name="email" id='nome' className='form-control' /> */}

    </>
  )
}

export default App
