import React from 'react'
import Modal from './Modal'
import { CAPSULE_STATUS } from '../utils/constants';
import { ButtonPrimary } from './Buttons';
import useAppContext from '../providers/AppContext';

export default function FilterModal(props) {
    const { getCapsules, isCapsuleLoading } = useAppContext()
    const { isOpen, onClose } = props;
    const handleSubmit = e => {
        e.preventDefault();
        const filters = {
            "status" : e.target.capsule_status.value,
            "original_launch" : e.target.original_launch.value,
            "type" : e.target.capsule_type.value,
        }
        onClose();
        getCapsules(filters, onClose);
    }
    console.log("isOpen", isOpen);
    return (
        <Modal showCloseBt={true} isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <FormInput title='Capsule Type' name='capsule_type'>
                            <input type={'text'} id={'capsule_type'} name={'capsule_type'} className="border text-sm rounded-l block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder={'Capsule Type'} />
                        </FormInput>
                        <div className='mt-4'>
                            <FormInput title='Capsule Status' name='capsule_status' placeholder='Capsule Status'>
                                <select name='capsule_status' className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                                    <option>--Select--</option>
                                    {
                                        CAPSULE_STATUS.map( s => <option key={s.value} value={s.value}>{s.title}</option> )
                                    }
                                </select>
                            </FormInput>
                        </div>
                        <div className='mt-4'>
                            <FormInput title='Original Launch' name='original_launch'>
                                <input type={'date'} id={'original_launch'} name={'capsule_type'} className="border text-sm rounded-l block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder={'Capsule Type'} />
                            </FormInput>
                        </div>
                        <div className='mt-10'>
                                <ButtonPrimary isLoading={isCapsuleLoading} type='submit' className='w-full'>Apply Filters</ButtonPrimary>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    )
}

const FormInput = ({ title, name, children }) => {
    return <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 ">
                {title}
            </label>
            <div>
                {children}    
            </div>
        </div>
}
