import { ReactNode } from 'react'

type FormLayoutProps = {
    title:string;
    children:ReactNode;
}
const FormLayout = ({title,children,...props}:FormLayoutProps) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 {...props} className="text-2xl font-semibold text-black text-center">
          {title}
        </h3>
      </div>
      {children}
    </div>
  )
}

export default FormLayout
