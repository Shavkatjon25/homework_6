import React from 'react'

function Params() {
  return (
    <div>
        <table className='border ml-auto mr-auto mt-10'>

          <tr>
            <td className='border w-20'>
              <input type="checkbox" className='ml-auto block mr-2' />
            </td>
            <td className='border w-[400px]'>Key</td>
            <td className='border w-80'>value</td>
          </tr>
          <tr>
            <td className='border'>
            <input type="checkbox" className='ml-auto block mr-2' />
            </td>
            <td className='border'>id</td>
            <td className='border'>1</td>
          </tr>
        </table>
    </div>
  )
}

export default Params