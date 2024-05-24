import React from 'react'

interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label:string
    clasName?:string
    error?:string 

}
const fileClassName = "w-full cursor-pointer rounded-lg border-[1.5px] bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-white file:py-3 file:px-5 file:hover:bg-blue-400 file:hover:bg-opacity-10 focus:border-bg-blue-400 active:border-blue-400  disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-bg-blue-400"
const defaultInputClassName = "w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-bg-blue-400 active:border-bg-blue-400 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-bg-blue-400"

const MyInput = ({label,error,clasName="mb-4.5" , ...props}:MyInputProps) => {
    return (
        <div className={clasName}>
            <label className="mb-2.5 block text-black">
                {label}
            </label>
            <input
                {...props}
                style={error ?{border:"1px solid red"}:undefined}
                className={props.type === "file" ? fileClassName :defaultInputClassName}
            />
           {error && <p className='text-danger'>{error}</p>}
        </div>
    )
}

export default MyInput
