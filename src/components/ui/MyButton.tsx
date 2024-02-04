import React from 'react'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children:React.ReactNode;

}
const MyButton = ({children,...props}:ButtonProps) => {
    return (
        <div>
            <button {...props} className="flex w-full justify-center rounded bg-indigo-500 p-3 font-medium text-gray text-white">
                {children}
            </button>
        </div>
    )
}

export default MyButton
