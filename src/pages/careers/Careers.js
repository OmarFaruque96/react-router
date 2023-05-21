import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {

  const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map( career => (
        <Link to={career.id.toString()} key={career.id}>
          <h3>{career.title}</h3>
          <p>Based on {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

export const careerLoader = async () => {
    const res = await fetch('http://localhost:3001/careers')

    return res.json()
}
