import { useQuery, gql } from "@apollo/client";

const GET_MATCHES = gql`
  query teamMatches(
    $participantId: ID!
    $fromDate: LocalDate!
    $toDate: LocalDate!
  ) {
    eventsByParticipantAndDateRange(
      participantId: $participantId
      fromDate: $fromDate
      toDate: $toDate
    ) {
      startDate
      tournamentStage {
        name
      }
      participants {
        participant {
          name
        }
      }
    }
  }
`;

function useMatches(participantId, fromDate, toDate){
  const { error, data, loading } = useQuery(GET_MATCHES, {
    variables: { participantId, fromDate, toDate },
  });

  return {
    error,
    data,
    loading,
  };
};
export default useMatches;
