import React from "react";
import Card from "../../components/card/Card";
import TeamList from "../../components/joinComponents/TeamList";

function ChooseTeam() {
    return (
        <Card title="Team deathmatch">
            <TeamList role="player" />
        </Card>
    );
}

export default ChooseTeam;
