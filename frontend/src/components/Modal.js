
import React from 'react'
import { ButtonSecondary } from './Buttons';

export default function Modal(props) {
    const { isOpen, onClose, size, showCloseBt } = props;

    
    return ( 
        <div onClick={onClose} className={ 'popupContianer ' + ( isOpen ? 'openPopup' : 'closePopup' ) }>
            <div onClick={ e => e.stopPropagation()  } className={'popupBox ' + ('modalSize-' + (size || 'md')) }>
                {
                    showCloseBt &&
                    <div className='flex justify-end'>

                    <ButtonSecondary onClick={onClose}>
                        <div className='text-slate-900'>X</div>
                    </ButtonSecondary>
                    </div>
                }
                {
                    props.children
                }
            </div>
        </div>
    )
}