import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState (initialState)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.targert.name]: e.targert.value
        })
    }

    const reset = () => {
        setValues(initialState)
    }
    return [values,handleInputChange,reset]
}