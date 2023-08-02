import React,{useState} from "react";
// import styeld, {css} from 'styled-components';
import {IconMd} from 'react-icons/md';
import { useDispatch, useNextID } from "../Context";


function Create(){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const nextId = useNextID();

    const onToggle = () => setOpen(!open);
    const handleChage = e => setValue(e.target.value)
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: "CREATE",
            todo: {
                id: nextId.current, 
                text: value,
                done: false
            }
        });
        nextId.current += 1;
        setOpen(false);
        setValue('');
    };


    return(
        <>

            {open && (
            <div>
                <from onSubmit={handleSubmit}>
                <input 
                    value={value}
                    onChange={handleChage}
                    placeholder="앞으로 할 일을 작성해주세요."
                />

                </from>
            </div>
            )}
            <button onClick={onToggle} open={open}>
                <IconMd />
            </button>
        </>
    )

}

export default Create;