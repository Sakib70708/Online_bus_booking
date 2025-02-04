import React from 'react'

export const Search = () => {
  return (
    <div  className='w-full  lg:px-28 sm:px-16 px-4 my-[8ch] '>
        <div className= "w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40 p-8" > 
<div className='grid grid-cols-3 gap-y-12 items-end'>
<div className="">
    <label htmlFor='from' className='block mb-2 font-semibold'>
        From

    </label>
    <select name = "from" id="from" className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900'>
    <option value="">Select Location </option>
    <option value="Netrakona">Netrakona </option>
    <option value="Mymenshing">Mymenshing </option>
    <option value="Dhaka">Dhaka</option>
    </select>
</div>


<div className="">
    <label htmlFor='to' className='block mb-2 font-semibold'>
        To

    </label>
    <select name = "to" id="to" className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900'>
    <option value="">Select Location </option>
    <option value="Dhaka">Dhaka </option>
    <option value="Mymenshing">Mymenshing </option>
    <option value="Netrakona">Netrakona </option>
    </select>
</div>


<div className=''>
<label htmlFor='date' className='block mb-2 font-semibold'>
        Choose Date

    </label>
    <input type='date' id='date' name='date' className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900' />
</div>

<div className=''>
<label htmlFor='time' className='block mb-2 font-semibold'>
        Choose Time

    </label>
    <input type='time' id='time' name='time' className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900' />
</div>

<div className=''>
<label htmlFor='seat' className='block mb-2 font-semibold'>
       Total Seat

    </label>
    <input type='number' id='seat' placeholder='Enter seat' name='seat' className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900' />
</div>

<div className=''>
    <button className="w-full px-4 h-12 bg-violet-600 text-neutral-50 text-base font-normal rounded-md">
        Check Availability 
    </button>
</div>
                 </div>
          </div>
    </div>
    
  )
}
