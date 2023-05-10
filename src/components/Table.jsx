import React from 'react'
import { database } from '../constants/sample'
import { ChooseBtn, DeleteBtn, ViewBtn } from './Buttons'

const ListHeader = ({component}) => {
  return <div className='flex items-center gap-6'>
    <h2 className='text-2xl font-bold'>{component}</h2>
    <div className='w-full border-t-[1px] border-gray-500'></div>
  </div>
}

const ListItem = ({item, component}) => {
  return <>
      {Object.keys(item).length ? (
        <div className='flex items-center'>
        <img className='w-20' src={item.image} alt={item.image} />
        <p className='line-clamp-2 text-sm'>{item.name}</p>
        </div>
      ) : (
        <div className='w-full flex justify-center'>
          <ChooseBtn component={component}/>
        </div>
      )}
  </>
}

const ListAction = ({item}) => {
  return <>
    {
      Object.keys(item).length ? (
        <div className='flex gap-2 self-end xl:self-center'>
          <ViewBtn/>
          <DeleteBtn/>
        </div>
      ) : null
    }
    </>
  }

const List = ({list}) => {
  return <div>
    <ListHeader component={list.component}/> 
    {list.listOfComponent.map((item => (
      <div className='flex flex-col xl:flex-row xl:items-center xl:justify-between py-3'>
        <ListItem item={item} component={list.component}/>
        <ListAction item={item}/>
      </div>
    )))}
  </div>
}

const Table = () => {
  return (
    <div className='w-full lg:w-2/3'>
      {database.map(list => (
        <List key={list.component} list={list} />
      ))}
    </div>
  )
}

export default Table
