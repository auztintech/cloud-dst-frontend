import React from 'react';
import { Link } from 'react-router-dom';


export default function Home(){
  return (
    <div>
      <div className="card">
        <h1>Cloud adoption decision-support (prototype)</h1>
        <p className="small">A frontend prototype that helps SMEs assess cloud readiness, estimate simple costs, and get tailored recommendations — all in the browser.</p>
        <div style={{marginTop:12}}>
          <Link to="/assessment"><button className="button">Start assessment</button></Link>
        </div>
      </div>

      <div className="card">
        <h2>Why this prototype?</h2>
        <p className="small">It’s quick to show value: short questionnaire, a scoring engine, and clear next steps (SaaS, serverless, backups, cost optimization).</p>
      </div>
    </div>
  );
}


