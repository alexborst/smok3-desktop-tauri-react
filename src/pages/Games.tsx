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

export default function Games () {
    const {error, loading, data} = useQuery(gamesQuery)
    console.log({error, loading, data})

    if (loading) return <p>loading data...</p>
    if (error) return <p>error fetching data...</p>

    return (
        <>
        <h1>Games</h1>
        <div>
        {data.game.map(theGame => {
                    return (
                    <>
                        <p>{theGame.title}</p>
                        <p>{theGame.release_date}</p>
                        <p>{theGame.gameid}</p>
                    </>
                    )
                })}
        </div>
        </>
    )
}