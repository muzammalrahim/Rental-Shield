import React, { Component } from 'react'

export default class FaqSearchBox extends Component {
    render() {
        return (
  
            <div class="flex rounded-full border-grey-light border mx-4">
	<button>
	  <span class="w-auto flex justify-end items-center text-grey p-2">
		  <i class="material-icons text-sm">search</i>
	  </span>
	    </button>
	    <input class="w-full rounded mr-4" type="text" placeholder="Search..."/>
        </div>
        )
    }
}
