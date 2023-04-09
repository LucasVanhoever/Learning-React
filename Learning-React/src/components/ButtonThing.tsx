import React from 'react'
interface Props
{
    type?: string;
    children: string;
    onClick: (type: string, children: string) => void;
}

const ButtonThing = ({type = 'primary', children, onClick}: Props) => {
  return (
    <>
        <div id = "AlertMaker"></div>
        <button className={"btn btn-" + type}
        onClick={() => onClick(type,children)}
        >
            {children}
        </button>
    </>
  )
}

export default ButtonThing