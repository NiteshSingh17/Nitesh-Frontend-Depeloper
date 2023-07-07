import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { LgHeading, MdHeading } from './Headings'
import Container from './Container'
import { ButtonOrange, ButtonPrimary, ButtonSecondary } from './Buttons'
import Modal from './Modal'
import FilterModal from './FilterModal'
import useAppContext from '../providers/AppContext'
import { Loader } from './Loader'

// spacex api not returning max page count so paging on forntend 
const PAGE_LIMIT = 5;

export default function Capsules() {
    const [ showFilterModal, setShowFilterModal ] = useState(false);
   
    const [ curPage, setCurPage ] = useState(1);
    const { getCapsules, capsules, isCapsuleLoading } = useAppContext()
    // console.log("capsules",capsules)
    const pages = useMemo( () => Math.ceil(capsules?.length / PAGE_LIMIT),[capsules]);

    const filterCapsules = useMemo( () => {return capsules && capsules.slice((curPage - 1) * PAGE_LIMIT, ((curPage -1) * PAGE_LIMIT) +  PAGE_LIMIT)},[curPage, capsules])
    
    const showModal = useCallback( () => {
        setShowFilterModal(true)
    })
    const closeModal = useCallback( () => {
        setShowFilterModal(false)
    })

    useEffect(  () => {
        getCapsules();
    },[]);

    useEffect( () => {
        setCurPage(1);
    },[capsules])

    if(isCapsuleLoading ) return <Loader />
    console.log("showFilterModal",showFilterModal)
    return (
        <Container>
        <div className="flex justify-between mt-6 lg:mt-10">
            <div className=''>
                <MdHeading>Capsules</MdHeading>
                <div className='text-slate-300 mt-2'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            </div>
            <div>
                <ButtonSecondary onClick={ showModal }>Filters</ButtonSecondary>
            </div>
        </div>
        <div className='flex flex-wrap mt-8'>
            {
                filterCapsules?.map( c => <CapsuleCard key={c.capsule_serial} data={c}/> )
            }
        </div>
        <PreAndNextBt pages={pages} curPage={curPage} setCurPage={setCurPage}/>
        {
            showFilterModal && 
            <FilterModal isOpen={showFilterModal} onClose={ closeModal }/>
        }
        </Container>
    )
}

const PreAndNextBt = ({ pages,curPage, setCurPage }) => {
    const isPrevDisabled = useMemo( () => curPage === 1,[curPage]);
    const isNextDisabled = useMemo( () => pages && curPage === pages,[curPage, pages]);

    const handleNext = useCallback(() => {
        setCurPage(  p => p + 1 )
    },[])

    const handlePre = useCallback(() => {
        setCurPage(  p => p - 1 )
    },[])
    return (
        <div >
            <div className='flex justify-end'>
                {
                    !isPrevDisabled &&
                    <div>
                        <ButtonOrange onClick={handlePre}>Pre</ButtonOrange>
                    </div>
                }{
                    !isNextDisabled && 
                    <div className='ml-2'>
                        <ButtonOrange onClick={handleNext}>Next</ButtonOrange>
                    </div>
                }
            </div>
        </div>
    )
}

const CapsuleCard = ({ data }) => {

    const [ openDetailModal, setOpenDetailModal ] = useState(false);

    const toggleModal = useCallback(() => {
        setOpenDetailModal( p => !p );
    },[setOpenDetailModal])

    return <div className='min-h-[300px] lg:min-h-[380px] p-2 w-full md:w-1/2 lg:w-1/3'>
        <div className='group  w-full h-full cursor-pointer bg-orange-100  rounded-xl p-2 lg:p-8  relative overflow-hidden'>
            <div className='group-hover:bottom-[-80px] group-hover:right-[-80px] transition-all absolute bottom-[-100px] right-[-100px] rounded-[50%] w-[200px] h-[200px] bg-orange-400'>

            </div>
            <div className='z-20 relative flex flex-col justify-between h-full'>
                <div>
                    <div>
                        <h2 className='text-4xl text-slate-800 font-bold'>{data.capsule_serial}</h2>
                        <div className='text-md text-slate-700'>capsule serial</div>
                    </div>
                    <div className='mt-8'>
                    <div className='mb-6 text-slate-900 text-xl font-bold'>{data.details}</div>
                        {
                            data.status &&
                            <div className='flex'>
                                <div className='mt-1'><CheckSvg /></div>
                                <div className='text-slate-700 ml-2 font-bold'>{data.status}</div>
                            </div>
                        }
                        {
                            data.original_launch &&
                            <div className='mt-2 flex'>
                                <div className='mt-1'><TimeSvg /></div>
                                <div className='text-slate-700 ml-2 font-bold'>{data.original_launch}</div>
                            </div>
                        }
                        </div>
                    
                </div>
                    <div className='flex justify-end'>
                        <ButtonPrimary onClick={ toggleModal }>More Info</ButtonPrimary>
                    </div>
            </div>
            <CapsuleModalDetail data={data} isOpen={openDetailModal} onClose={toggleModal}/>
        </div>
    </div>
}

const CapsuleModalDetail = ({ isOpen, onClose, data }) => {
    const totalFlights = data?.missions?.reduce( (pre,next) => { pre += next.flight; return pre; },0)
    return (
        <>
            {
                isOpen &&
                <Modal onClose={onClose} isOpen={isOpen}>
                    <div className="flex justify-between">
                        <div>
                            <h2 className='text-4xl text-slate-800 font-bold'>{data.capsule_serial}</h2>
                            <div className='text-md text-slate-700'>capsule serial</div>
                        </div>
                        <div>
                            <LgHeading className='text-blue-400'>#{totalFlights}</LgHeading>
                            <div className='text-slate-400'>Flights</div>
                        </div>
                    </div>
                    <div className='mt-8'>
                    <div className='mb-6 text-slate-900 text-xl font-bold'>{data.details}</div>
                        {
                            data.status &&
                            <div className='flex'>
                                <div className='mt-1'><CheckSvg /></div>
                                <div className='text-slate-700 ml-2 font-bold'>retired</div>
                            </div>
                        }
                        {
                            data.original_launch &&
                            <div className='mt-2 flex'>
                                <div className='mt-1'><TimeSvg /></div>
                                <div className='text-slate-700 ml-2 font-bold'>{data.original_launch}</div>
                            </div>
                        }
                        </div>
                        <ButtonPrimary onClick={onClose} className='w-full mt-8'>Close</ButtonPrimary>
                </Modal>
            }
        </>
    )
}

const CheckSvg = () => {
    return <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z"/></svg>
}

const TimeSvg = () => {
    return <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24.984375 6.9863281 A 1.0001 1.0001 0 0 0 24 8 L 24 22.173828 A 3 3 0 0 0 22 25 A 3 3 0 0 0 22.294922 26.291016 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 23.708984 27.705078 A 3 3 0 0 0 25 28 A 3 3 0 0 0 28 25 A 3 3 0 0 0 26 22.175781 L 26 8 A 1.0001 1.0001 0 0 0 24.984375 6.9863281 z"/></svg>
} 