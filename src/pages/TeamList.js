import React from "react";
import useTeamdata from "../hooks/UseTeamdata";
import "./TeamList.css";

export default function TeamList() {
  const { error, data, loading } = useTeamdata();

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>error</div>}

      <table>
        <thead>
          <tr>
            <th></th>
            <th> Team </th>
            <th> Rank </th>

            {data &&
              data.tournamentStage.standings.map((x) =>
                x.participants[0].data.map((z, idz) => (
                  <th id={idz}>{z.code}</th>
                ))
              )}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.tournamentStage.standings.map((x) =>
              x.participants.map((y, idy) => (
                <tr id={idy}>
                  <th>
                    <img src={y.participant.images[0].url}></img>
                  </th>
                  <th>{y.participant.name}</th>
                  <th>{y.rank}</th>

                  {y.data.map((z, idz) => (
                    <th>{z.value}</th>
                  ))}
                </tr>
              ))
            )}
        </tbody>
      </table>
    </div>
  );
}
