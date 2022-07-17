import React from 'react'

const SignFild = (props) => {
  return (
    <div className="flex flex-col p-2 m-2 h-24 w-fit">
      <label className="text-left from-neutral-700">{props.name}</label>
      <input
        className={
          props.touch[props.name] == true && props.errors[props.name]
            ? `border border-red-500 px-1 focus:outline-none focus:border-2 focus:border-[#1a73e8] rounded-md w-[300px] h-[30px] transition-timing-function: cubic-bezier(0.4, 0, 1, 1) duration-200`
            : `border border-gray-300 px-1 focus:outline-none focus:border-2 focus:border-[#1a73e8] rounded-md w-[300px] h-[30px] transition-timing-function: cubic-bezier(0.4, 0, 1, 1) duration-200`
        }
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onchange}
        onFocus={props.onFocus}
      />
      {props.errors[props.name] && props.touch[props.name] && (
        <span className="text-left text-red-600 mt-2 px-1 text-sm bg-red-200 w-fit h-fit rounded-md">
          {props.errors[props.name]}
        </span>
      )}
    </div>
  )
}

export default SignFild
