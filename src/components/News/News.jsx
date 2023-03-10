import  React from 'react'
import  News from './News.module.css';

const news = () => {
    return (
        <div className={News.news}>
            <h1>News JavaScript</h1>
            <article>
                <pre className={News.pre}>
                Latest JavaScript News and Updates of 2020<br/>
                # javascript
                # webdev
                # html
                # news
                    <br/> There is not much time left in this rough year of 2020 and I want to finish it on a positive note. <br/>
                   <br/> That is why I’ve decided to collect the latest interesting pieces of news from the JavaScript world and share them with you. <br/>

            <br/>    In this news digest, you will learn about a new significant feature for React framework, big improvements in the API
                   t, <br/> of Google Apps Scrip
                    changes in licensing of Mapbox library, a new approach for building modern web apps without utilizing <br/> much JavaScript,
                    <br/> and become familiar with the major
                    update of DHTMLX Suite - a highly customizable JavaScript UI library that I really like as <br/> well as other DHTMLX products.
   <br/><img src='https://res.cloudinary.com/practicaldev/image/fetch/s--8bpMmA-F--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/gy6e9bffcyyxp2cnaprg.png' />
             <br/>   As a bonus, I've also found some useful tutorials and valuable tips that will help to enrich your JavaScript knowledge.

                       <br/>
                  <pre> New Tools and Updates
                       DHTMLX Suite 7.0 is Here</pre>
                    </pre>
            </article>
        </div>
    );
}

export  default news;