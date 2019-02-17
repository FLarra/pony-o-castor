import React from 'react'
import Link from './Link'

const Filters = () => (
  <p className='filters'>
    <Link filter="SHOW_ALL">
      All
    </Link>
    <Link filter="SHOW_PONIES">
      Pony
    </Link>
    <Link filter="SHOW_CASTORS">
      Castor
    </Link>
  </p>
)

export default Filters
