import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'


//! Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function TvPick() {
  const shows = useLoaderData()
  const { id, name, summary, language, runtime, genres, officialSite, rating: { average }, image: { original } } = shows
  // console.log(id, name, summary, original, language, runtime, average, genres)

  //! Functions
  function createSummaryMarkup() {
    return { __html: `${summary}` };
  }

  //!JSX
  return (
    <Container fluid className='shows-single'>
      < Row >
        {original && (
          <Col md={6} className='single-image' style={{ backgroundImage: `url("${original}")` }}></Col>
        )}
        <Col md={6} className='single-detail text-left' style={{ backgroundColor: "black" }}>
          <h1 className='bold display-3 mb-4'>{name}</h1>
          <div dangerouslySetInnerHTML={createSummaryMarkup()} />
          <Link to={`/shows/${id}/cast`} style={{ textDecoration: "none" }} className='castButton'><b>See Cast</b></Link>
          {language && (<div><b>Language:</b> {language}</div>)}
          {runtime && (<div><b>Runtime:</b> {runtime} minutes</div>)}
          {average && (<div><b>Rating:</b> {average}</div>)}
          {genres.length > 0 && (<div><b>Genres:</b> {genres.join(' | ')}</div>)}
          {officialSite && (<Link to={officialSite} style={{ textDecoration: "none", color: "white" }}><b style={{ textDecoration: "none", color: "white" }}>Official Site:</b> <span style={{ textDecoration: "underline" }}>{officialSite}</span></Link>)}
        </Col>
      </Row >
    </Container >
  )
}

