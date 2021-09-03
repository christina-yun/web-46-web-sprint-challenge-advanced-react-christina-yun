// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    return [value, setValue];
}

export default useForm;