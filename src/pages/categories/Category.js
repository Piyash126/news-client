import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../shared/newssummarycard/NewsSummaryCard';

const Category = () => {
    const categoryNews=useLoaderData();
    return (
        <div>
            Category: {categoryNews.length}

            {
                categoryNews.map(news=><NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;