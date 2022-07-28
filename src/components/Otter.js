import React from 'react'
//import { listEmployees } from '../graphql/queries'
import { API} from 'aws-amplify';
import { useState, useEffect } from 'react';
import { createEmployee } from '../graphql/mutations'





export const Otter = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {target} = e
    try {
    await API.graphql({
        query: createEmployee,
        variables: {
            input: {
                first_name: target.empFName.value,
                last_name: target.empLName.value,
                id: target.empId.value,
                supervisor: target.empSup.value, 
            },
        },
    })
  }catch(e) {
    console.log(e)
  }
    }
    
  return (
    <div><form onSubmit={handleSubmit}>
    <input placeholder='first_name' name='empFName'/>
    <input placeholder='last_name' name='empLName'/>
    <input placeholder='id' name='empId' />
    <input placeholder='supervisor' name='empSup'/>
    <button>Create New Employee</button>
    </form>
    </div>
  )
  }
