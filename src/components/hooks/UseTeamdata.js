import { useQuery, gql } from "@apollo/client";

var tournamentStageId = "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83";

const GET_TOURNAMENTSTAGE = gql`
  query table($tournamentStageId: ID!) {
    tournamentStage(id: $tournamentStageId) {
      name
      standings(type: LEAGUE_TABLE) {
        participants {
          participant {
            name
            id
            images{
              url
            }
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
`;

const useTeamdata = () => {
  const { error, data, loading } = useQuery(GET_TOURNAMENTSTAGE, {
    variables: { tournamentStageId },
  });

  return {
    error,
    data,
    loading,
  };
};
export default useTeamdata;
