import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { News } from './components/News'
import { useApi } from './useApi'
import { useRecoilState } from 'recoil'
import { apiData } from './atoms'

function App() {
  const data = useRecoilState(apiData)
  const [category,setCategory] = useState("punjab")
  console.log(data)
  useApi(category)
  
  return (
    <>
    <Navbar category={category} setCategory={setCategory}/>
    <div className= "grid grid-cols-3 md:max-lg:grid-cols-2 w-9/12 mx-auto space-x-7 space-y-6 mt-8">
    {data && data[0].map((value)=>{
      if(value.urlToImage !=null)
      return <News title={value.title} url={value.url} description={value.description} urlToImage = {value.urlToImage} publishedAt={value.publishedAt} source={value.source.name} />
    })}
    </div>
    </>
  )
}

export default App
