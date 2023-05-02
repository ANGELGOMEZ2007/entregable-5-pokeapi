import React, { useRef } from 'react'

const FormPoke = () => {

    const inputPoke = useRef()

    const handleSumit = e => {
        e.preventDefault()

    }

    return (
        <div>
            <form onSubmit={handleSumit}>
                <input ref={inputPoke} type="text" />
                <button>search</button>
            </form>
            <select name="" id="">
                <option value="allPokemons">AllPokemosns</option>
            </select>
        </div>
    )
}

export default FormPoke