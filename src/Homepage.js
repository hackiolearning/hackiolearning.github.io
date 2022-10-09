import React from "react";

function Homepage(props){
    return <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="box homepage-box is-flex is-align-items-center is-flex-direction-column container is-max-desktop">
        <p className="title is-1 has-text-centered">
          Welcome!
        </p>
        <p className="subtitle has-text-centered">
        Square One is a hub of computer science learning sources designed to help you effectively learn new languages, get used to new services, and get started on new projects
        </p>
        <button className="button is-large is-danger" onClick={props.continue}>Get started</button>
      </div>
    </div>
  </section>
}
export default Homepage;