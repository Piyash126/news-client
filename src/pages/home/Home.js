import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../shared/newssummarycard/NewsSummaryCard';

const Home = () => {
    const allNews=useLoaderData();
    return (
        <div>
           <h2>Dragon News: {allNews.length}</h2> 
           {
            allNews.map(news=><NewsSummaryCard news={news} key={news._id}>

            </NewsSummaryCard>)
           }
        </div>
    );
};

export default Home;