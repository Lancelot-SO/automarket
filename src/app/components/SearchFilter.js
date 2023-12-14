import React from "react";
import { FaSearch } from "react-icons/fa";
function SearchFilter() {
  return (
    <fieldset className='flex flex-col space-x-5 space-y-3 bg-[#F2F2F2] rounded-sm max-w-[16.0rem]'>
      <div className='pt-2 px-5 text-[1rem]'>
        <strong>Search</strong> filters
      </div>
      <ul className='w-full space-y-3 text-xs'>
        <li className='space-y-1'>
          <label htmlFor='Manufacturer:'>Manufacturer:</label>
          <div>
            <select
              name='manufacturer'
              id='manufacturer'
              placeholder='Select'
              className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
            >
              <option value=''>Select</option>
              <option value=''>Option 1</option>
              <option value=''>Option 2</option>
              <option value=''>Option 3</option>
            </select>
          </div>
        </li>
        <li className='space-y-1'>
          <label htmlFor='Model'>Model:</label>
          <div>
            <select
              name='model'
              id='model'
              className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
            >
              <option value=''>Select</option>
              <option value=''>Option 1</option>
              <option value=''>Option 2</option>
              <option value=''>Option 3</option>
            </select>
          </div>
        </li>
        <li className='flex flex-row space-x-1'>
          <div className='space-y-1'>
            <label htmlFor='Min Price'>Min Price:</label>
            <div>
              <select
                name='min_price'
                id='min_price'
                className='h-[2.5rem] border border-[#D6D6D6] rounded-xs px-1 py-1 w-[85%]'
              >
                <option value=''>Select</option>
                <option value=''>Option 1</option>
                <option value=''>Option 2</option>
                <option value=''>Option 3</option>
              </select>
            </div>
          </div>
          <div className='space-y-1'>
            <label htmlFor='Max Price'>Max Price:</label>
            <div>
              <select
                name='max_price'
                id='max_price'
                className='h-[2.6rem] border border-[#D6D6D6] rounded-xs px-1 py-1 w-[85%]'
              >
                <option value=''>Select</option>
                <option value=''>Option 1</option>
                <option value=''>Option 2</option>
                <option value=''>Option 3</option>
              </select>
            </div>
          </div>
        </li>
        <li className='space-y-1'>
          <label htmlFor='Engine'>Engine:</label>
          <div>
            <select
              name='engine'
              id='engine'
              className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
            >
              <option value=''>Select</option>
              <option value=''>Option 1</option>
              <option value=''>Option 2</option>
              <option value=''>Option 3</option>
            </select>
          </div>
        </li>
        <li className='space-y-1'>
          <label htmlFor='Transmission'>Transmission:</label>
          <div>
            <select
              name='transmission'
              id='transmission'
              className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
            >
              <option value=''>Select</option>
              <option value=''>Option 1</option>
              <option value=''>Option 2</option>
              <option value=''>Option 3</option>
            </select>
          </div>
        </li>
        <li className='space-y-1'>
          <label htmlFor='Fuel type'>Fuel type:</label>
          <div>
            <select
              name='fuel_type'
              id='fuel_type'
              className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
            >
              <option value=''>Select</option>
              <option value=''>Option 1</option>
              <option value=''>Option 2</option>
              <option value=''>Option 3</option>
            </select>
          </div>
        </li>
        <li className='space-y-1'>
          <label htmlFor='Body Type'>Body Type:</label>
          <div>
            <select
              name='body_type'
              id='body_type'
              className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
            >
              <option value=''>Select</option>
              <option value=''>Option 1</option>
              <option value=''>Option 2</option>
              <option value=''>Option 3</option>
            </select>
          </div>
        </li>
        <li className='space-y-1'>
          <label htmlFor='Color'>Color:</label>
          <div>
            <select
              name='color'
              id='color'
              className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
            >
              <option value=''>Select</option>
              <option value=''>Option 1</option>
              <option value=''>Option 2</option>
              <option value=''>Option 3</option>
            </select>
          </div>
        </li>
        <li className='space-y-1'>
          <label htmlFor='Kilometers'>Kilometers:</label>
          <div>
            <select
              name='kilometers'
              id='kilometers'
              className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
            >
              <option value=''>Select</option>
              <option value=''>Option 1</option>
              <option value=''>Option 2</option>
              <option value=''>Option 3</option>
            </select>
          </div>
        </li>
        <li className='flex flex-row space-x-1'>
          <div className='space-y-1'>
            <label htmlFor='Min Year'>Min Year:</label>
            <div>
              <select
                name='min_year'
                id='min_year'
                className='h-[2.5rem] border border-[#D6D6D6] rounded-xs px-1 py-1 w-[85%]'
              >
                <option value=''>Select</option>
                <option value=''>Option 1</option>
                <option value=''>Option 2</option>
                <option value=''>Option 3</option>
              </select>
            </div>
          </div>
          <div className='space-y-1'>
            <label htmlFor='Max Year'>Max Year:</label>
            <div>
              <select
                name='max_year'
                id='max_year'
                className='h-[2.6rem] border border-[#D6D6D6] rounded-xs px-1 py-1 w-[85%]'
              >
                <option value=''>Select</option>
                <option value=''>Option 1</option>
                <option value=''>Option 2</option>
                <option value=''>Option 3</option>
              </select>
            </div>
          </div>
        </li>
        <li className='space-y-1'>
          <label htmlFor='Kilometers'>Kilometers:</label>
          <div>
            <select
              name='kilometers'
              id='kilometers'
              className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
            >
              <option value=''>Select</option>
              <option value=''>Option 1</option>
              <option value=''>Option 2</option>
              <option value=''>Option 3</option>
            </select>
          </div>
        </li>
        <div className='py-4'>
          <button
            type='submit'
            className='flex items-center w-24 mr-2 p-2 h-10 self-center bg-[#F88220] text-white rounded-md uppercase drop-shadow-md'
          >
            <FaSearch className='mr-1' /> Search
          </button>
        </div>
      </ul>
    </fieldset>
  );
}

export default SearchFilter;
