import React from "react";

export default function SearchForm({value,onSearch}){
    const aaa = ({target:{value}}) => {
        onSearch[0](value);
    }
    const bbb = ({target:{value},keyCode}) => {
        if(keyCode == 13){
            onSearch[1](value);
        }
    }
    return (
        <>
            <input type={"text"} value={value} onChange={aaa} onKeyUp={bbb}/>
        </>
    )
}