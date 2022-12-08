import React, { useState } from 'react';
import './App.css';
import './Navbar.css';
import './Form.css';
import Navbar from './Navbar';
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";
import FormCard from './FormCard';
import Data from "./database.json"

function App() {
  const [data, setdata] = useState(Data)
  function addPost(e) {
    var temp = Data;
    for (var i = 0; i < e.length; i++) {
      if (e[i] !== e[i]) {
        return
      }
      temp[i].Cosine = Number(e[i]);
    }
    setdata([...temp]);
  }
  return (
    <>
      <div className="App">
        <Particles options={particlesOptions} />
        <header>
          <Navbar />
        </header>
        <FormCard addPost={addPost} />
        <div className="post card">
          {
            data.sort((a, b) => a.Cosine < b.Cosine ? 1 : -1).map(post => {
              return (
                <div key={post.id} className="result-box">
                  <table>
                    <tr>
                      <td className="result-table">
                        {post.SkillName}
                      </td>
                      <td className="result-table">
                        Cosine similarity: {post.Cosine}
                      </td>
                    </tr>
                  </table>
                </div>
              )
            }
            )
          }
        </div>

      </div>
    </>
  );
}

export default App;


/* <div key={post.id} className="result-box">
                  {post.SkillName} ,   Cosine : {post.Cosine}
                  <br />
                  <br />
                </div> */