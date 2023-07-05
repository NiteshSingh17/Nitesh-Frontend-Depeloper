import React from 'react'

export function LgHeading(props) {
    return (
        <h1 className={'font-bold text-4xl md:text-4xl lg:text-6xl ' +( props.className || '')}>
            {
                props.children
            }
        </h1>
    )
}

export function MdHeading(props) {
    return (
        <h2 className={'font-bold text-3xl md:text-3xl lg:text-5xl ' +( props.className || '')}>
            {
                props.children
            }
        </h2>
    )
}
