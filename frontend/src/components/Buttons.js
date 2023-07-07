import React from 'react'

export function ButtonPrimary(props) {
    return (
        <button
        data-testid="ButtonPrimary" 
        type={ props.type || "button"}
        onClick={ props.onClick ?? null }
        className={ "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " +  (props.className ?? '')}
      >
        { props.isLoading ? "Loading..." : props.children }
      </button>
    )
}

export function ButtonSecondary(props) {
    return (
        <button
        type="button"
        onClick={ props.onClick ?? null }
        className={" text-white border border-slate-400 focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-3 " + (props.className ?? '')}
      >
       { props.isLoading ? "Loading..." : props.children }
      </button>
    )
}


export function ButtonOrange(props) {
  return (
      <button
      type="button"
      onClick={ props.onClick ?? null }
      className={ "text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center " +  (props.className ?? '')}
      >
     { props.isLoading ? "Loading..." : props.children }
    </button>
  )
}
