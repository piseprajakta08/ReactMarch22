import { useState ,useCallback, useEffect, useRef} from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [NAllow,setNA]=useState(false);
  const [CAllow,setCA]=useState(false);
  const [password,setpassword]=useState("");
  const passref=useRef(null)
  const passwordGen=useCallback(()=>{
    let pass=""
    let str="ABCDEFDGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (NAllow) str += "0123456789";
    if(CAllow) str += "@#*";
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()* str.length +1)
      pass +=str.charAt(char)
      
    }
    setpassword(pass)
  } ,[length,NAllow,CAllow,setpassword])
  const copyPass=useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
useEffect (()=>{passwordGen()},[NAllow,CAllow,passwordGen,length])

  return (
    <>
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 '>
 <h1 className='text-white text-center my-3'>Password Generator APP</h1>
 <div className='flex shadow rounded-lg overflow-hidden mb-4'>
  <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder="Password" ref={passref} readOnly />
  <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0' onClick={copyPass}>Copy</button></div>
  <div className='flex text-sm gap-x-1 '>
    <div className='flex items-center gap-x-1'>
      <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}} /><label >Length:{length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
    <input type="checkbox" defaultChecked={NAllow} id="numInput" onChange={()=>{setNA((prev)=>!prev)}} /><label htmlFor='numInput'>Number</label>
</div>
<div className='flex items-center gap-x-1'>
    <input type="checkbox" defaultChecked={CAllow} id="numInput" onChange={()=>{setCA((prev)=>!prev)}} /><label htmlFor='numInput'>Charecter</label>
</div>
    </div></div>    </ >
  )
}

export default App
