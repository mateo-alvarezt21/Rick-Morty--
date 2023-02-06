import React from 'react'
import ResidentCard from './residentCard'
import "./styles/ResidentList.css"

const ResidentList = ({pagination}) => {
  return (
    <div>
      <section className='residentList'>
        {
          pagination()?.map(residentUrl => <ResidentCard key={residentUrl} residentUrl={residentUrl} />)
        }
      </section>
    </div>
  )
}

export default ResidentList