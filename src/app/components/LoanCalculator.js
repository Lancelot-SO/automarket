import React from "react";

function LoanCalculator() {
  return (
    <fieldset className='flex flex-col w-full space-x-5 space-y-3 bg-[#F2F2F2] rounded-sm max-w-[16rem]'>
      <div className='pt-2 px-5 text-[1rem]'>
        <strong>Loan </strong>calulator
      </div>
      <ul className='w-full space-y-3 text-xs'>
        <li className='space-y-1'>
          <label htmlFor='loan_amount'>Loan Amount</label>
          <div>
            <select
              name='loan_amount'
              id='loan_amount'
              className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
            >
              <option value=''>0.00 GHS</option>
              <option value=''>1000.00 GHS</option>
              <option value=''>5000.00 GHS</option>
              <option value=''>10000.00 GHS</option>
            </select>
          </div>
        </li>
        <li className='space-y-1'>
          <label htmlFor='down_payment'>Down Payment</label>
          <div>
            <select
              name='down_payment'
              id='down_payment'
              className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
            >
              <option value=''>0.00 GHS</option>
              <option value=''>1000.00 GHS</option>
              <option value=''>5000.00 GHS</option>
              <option value=''>10000.00 GHS</option>
            </select>
          </div>
        </li>
        <li className='space-y-1'>
          <label htmlFor='annual_rate'>Annual Rate</label>
          <div>
            <select
              name='annual_rate'
              id='annual_rate'
              className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
            >
              <option value=''>0.00 %</option>
              <option value=''>10.00 %</option>
              <option value=''>20.00 %</option>
              <option value=''>30.00 %</option>
            </select>
          </div>
        </li>
        <li className='space-y-1'>
          <label htmlFor='loan_period'>Loan Period</label>
          <div>
            <select
              name='loan_period'
              id='loan_period'
              className='w-4/5 h-[2.5rem] border border-[#D6D6D6] rounded-xs px-2 py-1'
            >
              <option value=''>3 Years</option>
              <option value=''>1 year</option>
              <option value=''>2 Years</option>
              <option value=''>4 years</option>
            </select>
          </div>
        </li>

        <div className='py-4'>
          <button
            type='submit'
            className='flex items-center w-24 mr-2 p-2 h-10 self-center bg-[#F88220] text-white rounded-md uppercase drop-shadow-md'
          >
            calcualte
          </button>
        </div>

        <div className='pb-6 text-xl font-semibold'>
          <p>Rate value: 0.00</p>
        </div>
      </ul>
    </fieldset>
  );
}

export default LoanCalculator;
