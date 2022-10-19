import React from "react";
import useMatches from "../hooks/UseMatches";
import "./GetMatches.scss";

export default function GetMatches(props) {
  const date = new Date();
  var year = date.toLocaleString("default", { year: "numeric" });
  var month = date.toLocaleString("default", { month: "2-digit" });
  var day = date.toLocaleString("default", { day: "2-digit" });
  var fromDate = year + "-" + month + "-" + day;
  const toDate = "2022-12-29";
  //   const [openSection, setOpenSection] = useState(false);
  const { data } = useMatches(props.id, fromDate, toDate);

  return (
    <>
      {data &&
        data.eventsByParticipantAndDateRange.map(
          (x) =>
            x.tournamentStage.name == "Eliteserien" && (
              <ul>
                <li>{x.startDate}</li>
                <li>{x.tournamentStage.name}</li>
                {x.participants.map((y) => (
                  <li>{y.participant.name}</li>
                ))}
              </ul>
            )
        )}
    </>
  );
}
