import React from 'react'
import { useLoaderData} from 'react-router-dom'

export default function CareerDetails() {

    //const { id } = useParams()
    const career = useLoaderData()

  return (
    <div className='career-details'>
        <h2>Career details for {career.title}</h2>
        <p>Starting Salary: {career.salary}</p>
        <p>Location Details: {career.location}</p>
    </div>
  )
}

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params 
    const res = await fetch('http://localhost:3001/careers/' + id)

    return res.json()
}
