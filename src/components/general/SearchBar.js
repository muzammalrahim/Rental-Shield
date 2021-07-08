import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                 <div class="flex rounded-full border-gray-500 border-2 mx-4">
                    <button>
                    <span class="w-auto flex justify-end items-center text-grey-500  py-2 px-4">
                
                        <svg class="w-6 h-6" 
                        fill="none" stroke="currentColor" 
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                            <path
                                stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                            </path>
                        </svg>
                    </span>
                    </button>
                    <input
                    class="w-full rounded mr-4 focus:ring-blue-600"
                    type="text"
                    placeholder="Search..."
                    />
                </div>
            </div>
        )
    }
}

