import React from "react";
import { useTeams } from "../hooks/UseTeamdata";

export default function Matches(){

    const {data, loading, error} = useTeams(3);
    return (
        <div></div>
    )
}