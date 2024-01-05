import{ Fragment } from 'react'

const ContactPage = ({keys,dalet}) => {
    
  return (
    <Fragment>
      <div className=' flex w-full   justify-between flex-wrap'>
      {
        keys.map((e)=>(
            <div key={e.id} className='add w-[300px] flex flex-col items-center justify-around gap-5 mb-10 mr-10'>
                <h2 className='w-full pl-4 pt-3'>
                    {e.name}
                </h2>
                <h1 className='w-full pl-4 pt-3'>
                    {e.lastname}
                </h1>
               <div className='w-full flex justify-around'>
               <button className='button-3'>edit</button>
                <button onClick={dalet(e.id)} className='button-42'>dalet</button>
               </div>
            </div>
        ))
       }
      </div>
    </Fragment>
  )
}

export default ContactPage
