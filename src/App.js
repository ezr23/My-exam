import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Features from './Components/Features';

function App() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);


    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',
          prompt: prompt,
          temperature: 0.5,
          max_tokens: 100,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      setResult(response.data.choices[0].text);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
    <Header/>
    <Features/>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              {result.length > 0 && (
                <div
                  id="resultados"
                  className="alert alert-success"
                  role="alert"
                >
                  {result}
                </div>
              )}
              <div className="mb-3">
                <textarea
                  type="text"
                  className="form-control"
                  rows="5"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Escribe tu Consulta"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </main>
      <button
        type="button"
        className="btn btn-primary btn-black"
        onClick={handleClick}
        disabled={loading || prompt.length === 0}
      >
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
      <Footer/>
    </div>
  );
}

export default App;
