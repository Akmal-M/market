import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'


function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }

    return (
        <div className="mt-20 lg:flex justify-between lg:mx-10  mx-5 items-center lg:text-2xl text-lg">
            <div className="row">
                <span>Filters: </span>
                <select name="category" value={category} onChange={handleCategory} className='my-3 outline-none'>
                    <option value=''>All Products</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <input type="text" value={search} placeholder="Search"
                   onChange={e => setSearch(e.target.value.toLowerCase())} className='my-3 outline-none border-gray-200 border-2 p-1 lg:w-96 w-full'/>

            <div className="my-3">
                <span>Sort By: </span>
                <select value={sort} onChange={e => setSort(e.target.value)}  className='outline-none'>
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best sales</option>
                    <option value='sort=-price'>Price: High-Low</option>
                    <option value='sort=price'>Price: Low-High</option>
                </select>
            </div>
        </div>
    )
}

export default Filters