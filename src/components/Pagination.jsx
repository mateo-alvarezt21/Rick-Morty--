import React from 'react'
import "./styles/Pagination.css"

const Pagination = ({numbersPage, setPage, RESIDENTS_PERPAGE, location}) => {
  return (
    <div className='pagination-container'>
      <ul className='pagination'>
        {
          numbersPage(location,RESIDENTS_PERPAGE).map(numbersPage => <li className='pagination-item' onClick={() => setPage(numbersPage)} key={numbersPage}> <div className='caja-item'>{numbersPage}</div>  </li>)
        }
      </ul>
    </div>
  )
}

export default Pagination