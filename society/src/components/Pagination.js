import React from 'react'

const Pagination = ({flatsPerPage, totalFlat, paginate }) => {
    const pageNumber = []

    for(let i=1;i<=Math.ceil(totalFlat/flatsPerPage);i++){
        pageNumber.push(i)
    }

  return (
    <nav>
        <ul className='pagination'>
            {pageNumber.map(number => (
                <li key={number} className="page_item">
                    <p onClick={()=>paginate(number)} className='page-link'>
                        {number}
                    </p>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination
