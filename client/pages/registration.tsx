import { useState } from 'react';
import axios from 'axios';

const Hello = () => {
  const [ name, setName ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ line, setLine ] = useState('');
  const [ fullname, setFullname ] = useState('');
  const [ position, setPosition ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ mobile, setMobile ] = useState('');

  const changeName = (e: any) => {
    setName(e.target.value)
  }

  const changeAddress = (e: any) => {
    setAddress(e.target.value)
  }

  const changeLine = (e: any) => {
    setLine(e.target.value)
  }

  const changeFullname = (e: any) => {
    setFullname(e.target.value)
  }

  const changePosition = (e: any) => {
    setPosition(e.target.value)
  }

  const changeEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const changeMobile = (e: any) => {
    setMobile(e.target.value)
  }

  const handlerRegister = () => {
    axios.get('http://localhost:5000/')
      .then(res => {
        setName(res.data.name);
        setAddress(res.data.address);
        setLine(res.data.line);
        setFullname(res.data.fullname);
        setPosition(res.data.position);
        setEmail(res.data.email);
        setMobile(res.data.mobile);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="grid justify-center" style={{ fontFamily: "Gilroy" }}>
      <form className="bg-[#2E4F70] w-[770px] rounded-[20px] z-40">
        <div className="text-white text-[30px] font-bold px-6 py-2 rounded-full">Registration</div>
        <div className="bg-white text-[18px] px-6 py-8 grid justify-items-center">
          <div>
            <h1 className="mb-3 font-semibold">Name of the organisation legal services:*</h1>
            
            <div className="mb-6">
              <input type="input" value={name} onChange={changeName} id="helper-text" aria-describedby="helper-text-explanation" className="px-0 border-b-2 border-gray-300 text-gray-900 text-sm focus:border-blue-500 focus:outline-none w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company name*" />
              <p id="helper-text-explanation" className="mt-2 text-sm text-gray-400 dark:text-white">Recommended length is up to 30 symbols</p>
            </div>
            
            <div className="flex gap-6 mb-6">
              <input type="input" value={address} onChange={changeAddress} className="px-0 border-b-2 border-gray-300 text-gray-900 text-sm focus:border-blue-500 focus:outline-none w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Organisations location / address *" />
              <input type="input" value={line} onChange={changeLine} className="px-0 border-b-2 border-gray-300 text-gray-900 text-sm focus:border-blue-500 focus:outline-none w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Line of business " />
            </div>
            
            <div className="flex gap-6 mb-6">
              <input type="input" value={fullname} onChange={changeFullname} className="px-0 border-b-2 border-gray-300 text-gray-900 text-sm focus:border-blue-500 focus:outline-none w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your full name *" />
              <input type="input" value={position} onChange={changePosition} className="px-0 border-b-2 border-gray-300 text-gray-900 text-sm focus:border-blue-500 focus:outline-none w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your position in the organisation" />
            </div>
            
            <div className="flex gap-6 mb-6">
              <input type="input" value={email} onChange={changeEmail} className="px-0 border-b-2 border-gray-300 text-gray-900 text-sm focus:border-blue-500 focus:outline-none w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email address for receiving a confirmation *" />
              <input type="input" value={mobile} onChange={changeMobile} className="px-0 border-b-2 border-gray-300 text-gray-900 text-sm focus:border-blue-500 focus:outline-none w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile number for verification *" />
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-3">
              <p className="text-[11px] font-semibold">By submitting this request I confirm that I have read, understood and accepted the terms of using this service *</p>
            </div>

            <div className="flex mb-6">
              <input type="checkbox" className="accent-[#2E4F70] w-[20px] h-[20px] mr-2" />
              <span className="text-[14px]">I accept the <a href="#" className="underline text-blue-600">Terms of Service</a></span>
            </div>
          </div>
          <button onClick={handlerRegister} className="bg-[#2E4F70] text-[14px] text-white py-2 w-52 rounded-full">REGISTER</button>
        </div>
      </form>
      <div className="absolute w-screen h-screen" style={{ background: "linear-gradient(190.01deg, #2E4F70 7.5%, #C9D1D5 58.81%)", transform: "matrix(1, 0, 0, -1, 0, 0)" }}></div>
    </div>
  )
}

export default Hello;