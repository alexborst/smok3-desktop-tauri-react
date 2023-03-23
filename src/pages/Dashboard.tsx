import { invoke } from "@tauri-apps/api"
import { useQuery, gql } from "@apollo/client";

const gamesQuery = gql`
query MyQuery {
  game {
    title
    release_date
    gameid
  }
}
`

export default function Dashboard () {
    //const invoke = window.__TAURI__.invoke
    let result = "Howdy";
    let something = invoke('my_custom_command', { invokeMessage: 'Hello!' }).then((message) => result += message)

    invoke('greet', { invokeMessage: 'Hello!' }).then((message) => result += message)

    return (
        <>
            <h1> Dashboard
            </h1>
            <p>{result}</p>
        </>
    )
}