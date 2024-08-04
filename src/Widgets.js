import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => {
        return (
            <div className="widgets_article">
                <div className="article_left">
                    <FiberManualRecordIcon />
                </div>
                <div className="article_right">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        );
    }

    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {console.log("Helloo")}
            {newsArticle("Corona Virus PK updates", "Most affected areas - 2.4k readers")}
            {newsArticle("Tesla hits new highs", "Cars & Auto - 3k readers")}
            {newsArticle("Bitcoin Breaks $60,000", "Crypto - 8k readers")}
            {newsArticle("JavaScript remains popular", "Programming - 12k readers")}
            {newsArticle("Stock Market Today", "Economy - 5k readers")}
        </div>
    );
}

export default Widgets;
