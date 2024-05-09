import React from 'react'

export default function SearchTask({setSearchByCategory}) {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
      <br/>
      <label htmlFor="itemSearchByCategory">
        Search By Category: 
        <input  
          type="text" 
          id="itemSearchByCategory" 
          name="itemSearchByCategory" 
          placeholder="Enter Item Category"
          role="searchbox"
          onChange={(e)=>{setSearchByCategory(e.target.value)}}
        />
      </label>
      </form>
    </div>
  )
}
