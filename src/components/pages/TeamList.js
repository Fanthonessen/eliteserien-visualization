import { React, useState, useRef } from "react";
import useTeamdata from "../hooks/UseTeamdata";
import "./TeamList.scss";
import GetMatches from "./GetMatches";

export default function TeamList() {
  const [openSection, setOpenSection] = useState(false);
  const [teamId, setTeamId] = useState("");
  const { error, loading, data } = useTeamdata();

  const scrollRef = useRef(null);

  function onOpen() {
    setOpenSection(!openSection);
    scrollRef.current?.scrollIntoView({behavior: 'smooth'});
  }
  function onTeamId(val) {
    setTeamId(val);
  }
  if (data) var participants = data.tournamentStage.standings[0].participants;
  if (data) var categories = participants[0].data.map((x) => x.code);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>error</div>}
      {data && <h1>{data.tournamentStage.name}</h1>}
      <table>
        <thead>
          <tr className="firstTableRow">
            <th></th>
            <th> Team </th>
            <th> Rank </th>

            {data &&
              participants[0].data.map((x, idx) => <th id={idx}>{x.code}</th>)}
          </tr>
        </thead>
        <tbody>
          {data &&
            participants.map((x) => (
              <tr
                className="pressed"
                onClick={() => {
                  onOpen();
                  onTeamId(x.participant.id);
                }}
              >
                <th>
                  <img
                    id={x.participant.id}
                    className="logo"
                    alt="Logo"
                    src={x.participant.images[0].url}
                  ></img>
                </th>
                <th>{x.participant.name}</th>
                <th>{x.rank}</th>

                {categories.map((c) =>
                  x.data.map((y, idY) => {
                    if (c === y.code) {
                      return <td>{y.value}</td>;
                    }
                  })
                )}
              </tr>
            ))}
        </tbody>
      </table>
      {openSection ? (
        <div className="menu">
          <GetMatches id={teamId} />
        </div>
      ) : (
        <>
        <div className="placeHolder">
          Trykk på tabellen for å få opp kommende kamper
        </div>
        <div ref={scrollRef} className="anchor"></div>
        </>
      )}
    </div>
  );
}
