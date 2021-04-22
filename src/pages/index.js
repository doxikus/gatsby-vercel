import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import strapiconf from "../images/strapi-conf.jpeg"

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>#strapiconf - Strapi as a publishing platform for the largest local sports betting platform
</title>
      </Helmet>
      <h1>Strapi as a publishing platform for the largest local sports betting platform</h1>
      <h2>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <p>This is recap of 
        <a
          href="https://conf.strapi.io/stage/adopt"
          target="_blank"
          rel="noreferrer noopener"
        > my presentation</a>, thanks for image {' '}
          <a href="https://twitter.com/strapijs">Strapi</a> and 
         <a href="https://vercel.com/">Vercel</a> 
        
        .
      </p>
      <br />
      <img src={strapiconf} alt="strapi conf" />
      
      {/* <p>{date ? date : 'Loading date...'}</p> */}
    </main>
  );
}

export default Index;
