import React from 'react'
import Image from 'next/image'

const Weather = ({data}) => {
  console.log(data)
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4'>
      <div>
        <div>
          <Image 
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
            alt='/' 
            width='100'
            height='100'
          />
          <p>{data.main.temp.toFixed(0)}& #176;</p>
        </div>
      </div>
    </div>
  )
}

export default Weather