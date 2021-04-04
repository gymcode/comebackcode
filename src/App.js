import { getDefaultNormalizer } from "@testing-library/dom";
import { React, Fragment } from "react";

const name = "Kenneth"
const math = "yes"

function App () {
    return (
      <Fragment>
        <h1>hello this is me </h1>
        <div>{name}</div>
        <p>performing calculations = { !math ? "2" : "3" }</p>
      </Fragment>
    )
}

export default App 