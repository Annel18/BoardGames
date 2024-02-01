import { useLoaderData } from "react-router-dom"
import { Link } from 'react-router-dom'

//! Bootstrap components
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import family from '../images/familymovienight1.png';


export default function Home() {
  const shows = useLoaderData()

  const showList = [...new Set(shows)].filter(show => {
    return show.genres.includes("Family")
  }
  )

  const index = Math.floor(Math.random() * showList.length)
  const randomPick = showList[index]
  const image = randomPick.image.original
  const id = randomPick.id

  //!JSX
  return (
    <>
    <div className="movieimg">
      <img className="topimg" src={family} />
      <h1 className='text-center bold display-3 mb-4'></h1>
        <Link
          src={image}
          key={id}
          to={`/shows/${id}`}
          >
            <img  className='homeimg' src={image}/>
        </Link>
      </div>
    </>
  )
}



