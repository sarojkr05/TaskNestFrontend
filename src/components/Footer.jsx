import React from 'react'

function Footer() {
  return (
    <footer className='bg-gradient-to-br from-emerald-50 to-teal-100 text-gray-700 py-6 mt-auto border-t border-teal-200 '>
        <div className='text-center text-sm text-gray-600'>
            {new Date().getFullYear()} <span className='font-semibold text-teal-600'>TaskNest</span>. All reserve right
        </div>
    </footer>
  )
}

export default Footer
