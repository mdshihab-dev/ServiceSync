import RequestBar from './RequestBar'

const Request = () => {
  return (
    <div className=' max-w-1/2 grow font-arimo p-6 rounded-2xl bg-card-bg border border-borderColor'>
        <h3 className=" font-normal text-[20px] leading-7 text-white mb-4 cursor-pointer">
        Top Repair Requests
      </h3>
        <div className='mt-4 space-y-3'>
            <RequestBar/>
            <RequestBar value={39} requestName='Battery Replacement' requestNum={89}/>
            <RequestBar value={30} requestName='Back Glass Repair' requestNum={67}/>
            <RequestBar value={20} requestName='Software Issues' requestNum={45}/>
        </div>
    </div>
  )
}

export default Request