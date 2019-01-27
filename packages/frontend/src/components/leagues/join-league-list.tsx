import React from "react";
import { LeagueList } from "./league-list";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

interface Props {
    onJoin: () => void;
    leagues: Array<{
        id: number,
        name: string
    }>;
    userID: number;
}
const JOIN_LEAGUE = gql`
    mutation JoinLeague($userID: Int!, $leagueID: Int!){
        createLeagueMember(data:{
            userID: $userID,
        }, where:{id: $leagueID}) {
            id,
        }
    }
`;
export const JoinLeagueList: React.SFC<Props> = (props) => {
    return (
        <Mutation mutation={JOIN_LEAGUE} update={(cache, {data}) => {
            props.onJoin && props.onJoin();
        }}>{(joinLeague, { data, loading, error }) => {
            return (
                <LeagueList leagues={props.leagues}
                    onClick={(leagueID: number) => {
                        // mutation stuff here
                        joinLeague({variables: {
                            userID: props.userID,
                            leagueID
                        }})
                        props.onJoin();
                    }}
                    actionButtonText="Join"
                ></LeagueList>
            )
        }}</Mutation>
    )
}
