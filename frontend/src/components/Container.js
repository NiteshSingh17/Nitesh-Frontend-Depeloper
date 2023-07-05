import React from 'react'

export default function Container(props) {
    return (
        <div style={(props.style ?? {}) } className='flex justify-center py-2 px-4 md:p-4 lg:p-6'>
            <div className='w-full max-w-6xl'>
                {
                    props.children
                }
            </div>
        </div>
    )
}
