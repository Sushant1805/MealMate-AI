import React from "react"

const ButtonBlue = ({title}) => {
  return (
    <button className="bg-[#0C0D4D] text-white w-35 h-10 rounded-2xl hover:bg-blue-500 transition delay-50 duration-300 ease-in-out hover:-translate-x-1 hover:scale-110 hover:bg-blue-500 font-semibold ">
          {title}
        </button>
  )
}

export default ButtonBlue
