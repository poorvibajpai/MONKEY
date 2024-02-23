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
          <div className="w-full flex justify-evenly">
            <div className="left w-[45%]">
              <MyInput label="Product Name" />
              <div className="flex w-full items-end gap-4">
                <MyInput label="Price" clasName="w-1/2" />
                <select name="sizes" id="" className="w-1/2 appearance-auto h-[50px] rounded-sm px-5 bg-slate-50 border bottom-1">
                  <option value="" >Select Size</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL" >XXL</option>
                </select>
              </div>

            </div>
            <div className="right w-[45%]">
              <MyInput label="Product Name" />
            </div>
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
