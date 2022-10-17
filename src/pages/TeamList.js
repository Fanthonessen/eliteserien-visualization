import React from "react";
import { useQuery, gql } from '@apollo/client'

var tournamentStageId = "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83";
const GET_TOURNAMENTSTAGE = gql`
query table($tournamentStageId: ID!) {
    tournamentStage(id: $tournamentStageId) {
      name
      standings(type: LEAGUE_TABLE) {
        participants {
          participant {
            name
          }
          rank
          data {
            code
            value
          }
        }
      }
    }
  }
`

export default function TeamList(){

    const {error, data, loading } = useQuery(GET_TOURNAMENTSTAGE, {
        variables: {tournamentStageId}
    });

    if(loading) return <div>Loading...</div>
    if(error) return <div>Something went wrong :(</div>
    console.log(data);

    return (
      <div> {data.tournamentStage.standings.map(x => {
        {x.participants.map(y => {
          <div>
            {y.rank}
          </div>
        })}
      })}
      </div>
    )
}