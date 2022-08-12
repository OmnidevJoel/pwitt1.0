import React from 'react'
import { API} from 'aws-amplify';
import { useState, useEffect} from 'react';
import { createEmployee } from '../graphql/mutations'
import { listEmployees } from '../graphql/queries';
import { deleteEmployee } from '../graphql/mutations';
import  './CreateEmpPageStyle.css'



export function CreateEmpPage() {

  const [empData, setEmpData] = useState([])
  useEffect(() =>{
    const fetchEmps = async () => {
      const res = await API.graphql({query: listEmployees})
      return res.data.listEmployees.items
    }

    fetchEmps().then(emps => setEmpData(emps))
  }, [])
  
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const {target} = e
    try {
    const {data} = await API.graphql({
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


    setEmpData((currEmpList) => {
      return [...currEmpList, data.createEmployee]
    })
  }catch(e) {
    console.log(e)
  }
    }
    const handleEmpDelete = async (empId) => {
     const newEmpsList = empData.filter((emp) => emp.id !== empId)
      await API.graphql({
        query: deleteEmployee,
        variables: {
          input: {
            id: empId,
          },
        },
      })
      setEmpData(newEmpsList)
    }
    
  return (
    <div><form onSubmit={handleSubmit}>
    <input placeholder='first_name' name='empFName'/>
    <input placeholder='last_name' name='empLName'/>
    <input placeholder='id' name='empId' />
    <input placeholder='supervisor' name='empSup'/>
    <button>Create New Employee</button>
    </form>
      <main>
      <ul>
      {empData.map((emp) => (
        <li key={emp.id}>
        <article>
        <h3>{emp.first_name} {emp.last_name}</h3>
        <button className='DeleteEmpButton' onClick={() => handleEmpDelete(emp.id)}>Delete</button>
        </article>
        </li>
      ))}
      </ul></main>

    </div>
  )
  }

