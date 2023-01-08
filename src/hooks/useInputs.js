import { useState, useCallback } from "react";

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    
    const onChnage = useCallback( e => {
        const {name, value} = e.target;
        setForm(form => ({
            ...form,
            [name]: value
        }))
    },[])

    const reset = useCallback(() => setForm(initialForm), [initialForm])
    
    return [form, onChnage, reset] 
    
}

export default useInputs;