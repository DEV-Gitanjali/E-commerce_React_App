import React from 'react'

const App = () => {
  return (
    <div className='  h-screen w-screen' >

        <nav className="w-[15%]   h-full bg-zinc-50 flex-col items-center pt-5">
            <a  className = "py-2 px-5 border rounded border-blue-200  text-blue-300"href="/create">Add New Product</a>

            <hr className=' my-3 w-[80%]'/>
            <h1>Category</h1>
            <ul>
                <li>cat 1</li>
            </ul>
        </nav>
      
    </div>
  );
};

export default App
