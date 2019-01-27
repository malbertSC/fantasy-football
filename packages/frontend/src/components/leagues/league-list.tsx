import React from "react";
interface Props {
    leagues: Array<{
        id: number;
        name: string;
    }>;
    onClick?: (leagueID: number) => void;
    actionButtonText?: string;
}
export const LeagueList: React.SFC<Props> = (props) => {
    if (!props.leagues) return (<div>no leagues yet</div>)
    return (
        <ul>
            {/* https://github.com/prisma/prisma/issues/2999 */}
            {props.leagues.map(league => (
                <li key={(league).id} onClick={(e) => {
                    e.preventDefault();
                    if (!props.actionButtonText && props.onClick) {
                        props.onClick(league.id);
                    }
                }}>
                    {(league).name}
                    {(props.actionButtonText && props.onClick) && (
                        <button onClick={e => {
                            e.preventDefault();
                            props.onClick && props.onClick(league.id);
                        }}>{props.actionButtonText}</button>
                    )}
                </li>
            ))}
        </ul>
    )
}
