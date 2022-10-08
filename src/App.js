import './css/style.css';

function App() {
  return (
    <>
      <div className="container">
        <h1 className="title">
          Bulma
        </h1>

        <p className="subtitle">
          Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
        </p>

        <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Input"/>
          </div>
        </div>

        <div className="field">
          <p className="control">
            <span className="select">
              <select>
                <option>Select dropdown</option>
              </select>
            </span>
          </p>
        </div>

        <div className="buttons">
          <button className="button is-primary">Primary</button>
          <button className="button is-link">Link</button>
        </div>
      </div>
      <div className="hero">
        <div className="hero-body">
          <p className="title has-text-centered">What</p>
          <nav className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Balls</p>
                <p className="title">3</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Overwatch</p>
                <p className="title">1</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Blowing</p>
                <p className="title">Green</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Taco</p>
                <p className="title">Bell</p>
              </div>
            </div>
        </nav>
        </div>
      </div>
    </>
  );
}

export default App;
