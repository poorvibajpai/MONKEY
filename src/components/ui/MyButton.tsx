import React from 'react'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children:React.ReactNode;

}
const MyButton = ({children,...props}:ButtonProps) => {
    return (
        <div>
            <button {...props} className="flex w-full justify-center rounded bg-blue-500 font-semibold p-3 hover:bg-blue-600/90 drop-shadow-lg text-gray text-white">
                {children}
            </button>
        </div>
    )
}

export default MyButton
