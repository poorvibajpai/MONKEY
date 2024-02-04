// import React from 'react'

import FormLayout from "../../components/ui/FormLayout"
import MyButton from "../../components/ui/MyButton"
import MyInput from "../../components/ui/MyInput"

const CreateProduct = () => {
  return (
    <section>
      {/* <h1 className="text-3xl text-center">Create Products Here</h1> */}
      <FormLayout title="Crete Products">
        <form action="" className="flex flex-col items-center w-full">
          <div className="w-3/4 p-5">
            <MyInput label="name" />
          </div>
          <div className="w-3/4 p-5">
            <MyInput label="price" />
          </div>
          <div className="w-3/4 p-5">
            <MyInput label="size" />
          </div>
          <div className="w-3/4 p-5">
            <MyInput label="enter image url"/>
          </div>
          <div className="w-3/4 p-5">
            <MyButton>
              Submit
            </MyButton>
          </div>
        </form>
      </FormLayout>
    </section>
  )
}

export default CreateProduct
