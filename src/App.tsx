import React, { FC, useEffect } from 'react';
import { Outlet, Route, Routes, useParams } from 'react-router-dom';
import Home from './components/Home';
import Teams1 from './components/Movies';
import Teams2 from './components/Teams2';
import Team from './components/cards/movieCard/Movie';
import NewTeamForm from './components/NewTeamForm';
import Header from './components/header/Header';
import NotFound from './components/NotFound';
import { AppController } from 'controllers/appController';
import Movie from './components/cards/movieCard/Movie';

const API_KEY = '6e0c7d49df5d9e98137d6e869e89d1ed';
const API_URL = 'https://api.themoviedb.org/3/';

interface IAppProps {
    appController: AppController;
}

const App: FC<IAppProps> = ({ appController }) => {
    // const getData = async () => {
    //     const url = `https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`;

    //     console.log(API_KEY);
    //     // const resp = await fetch(url)
    //     // const data = await resp.json()
    //     // console.log(resp);
    //     // console.log(data);
    // };

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='movies' element={<Teams1 />}>
                    {/* <Route path=':movieId' element={<Team />} /> */}
                    {/* <Route path=':teamId' element={<Team />} /> */}
                    {/* <Route path='newt' element={<NewTeamForm />} /> */}
                </Route>
                <Route path='movies/:movieId' element={<Movie appController={appController} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
