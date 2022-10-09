import React from 'react'
import Banner from '../Banner'
import "./HomeScreen.css"
import Nav from '../Nav'
import requests from '../Requests'
import Row from '../Row'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        
        <Nav/>
        
        <Banner/>

        <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow ></Row>
        <Row title='Trending Now' fetchUrl={requests.fetchTrending}></Row>
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated}></Row>
        <Row title='Action' fetchUrl={requests.fetchActionMovies}></Row>
        <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}></Row>
        <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}></Row>
        <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}></Row>
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  )
}

export default HomeScreen