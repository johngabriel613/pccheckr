import React from 'react'
import { useState, useEffect } from 'react'
import { database } from '../constants/sample'

const Summary = () => {

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let sum = 0;
    database.forEach(list => {
      list.listOfComponent.forEach(item => {
        if(Object.keys(item).length){
          sum += parseFloat(item.price)
        }
      })
    })
    setTotalPrice(sum)
  },[])

  return (
    <div className='w-full lg:w-1/3 '>
      <table className='w-full'>
        <thead>
          <th className='bg-slate-800 text-white py-3 px-3' colSpan={2}>Summary</th>
        </thead>
        <tbody className='text-sm'>
          {database.map((list, index) => (
            list.listOfComponent.map(item => (
              Object.keys(item).length ? (
                <tr className={`${index%2 ? 'bg-slate-100' : null}`}>
                  <td className='py-6 px-3'>
                    <p className='line-clamp-2'>
                    {item.name}
                    </p>
                  </td>
                  <td className='py-6 px-3'>{item.price}</td>
                </tr>
              ) : (
                null
              )
            ))
          ))}
          <tr className='border-t-2'>
            <td className='py-6 px-3 '>Total:</td>
            <td className='py-6 px-3'>{totalPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Summary
