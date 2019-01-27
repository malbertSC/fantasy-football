import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const CREATE_LEAGUE = gql`
    mutation CreateLeague($name:String!) {
        createLeague(name: $name) {
            id,
    	    name
        }
    }
`
interface State {
    name: string;
}
interface NewLeague {
    id: string;
    name: string;
}
interface Props {
    onCreate?: (newLeague: NewLeague) => void;
    onCancel?: () => void;
}
export class CreateLeague extends React.Component<Props, State> {
    state = {
        name: ""
    }
    public render() {
        return <div>
            <Mutation mutation={CREATE_LEAGUE} update={(cache, { data: { createLeague } }) => {
                if (this.props.onCreate) {
                    this.props.onCreate(createLeague);
                }
                // const cachedResponse = cache.readQuery<{leagues: GetLeaguesForUser_leagues[]}, GetLeaguesForUserVariables>({
                //     query: GetLeaguesForUser,
                //     variables: {userID: 2}
                // });
                // if (!cachedResponse) return;
                // cache.writeQuery({
                //     query: GetLeaguesForUser,
                //     data: {
                //         leagues: [...cachedResponse.leagues, createLeague],
                //     },
                // });
            }}>{(createLeague, { data, loading, error }) => {
                // if (!loading && !error && data && this.props.onCreate) {
                //     // this.props.onCreate(data);
                //     return <div></div>;
                // }
                return (
                    <div>
                        <form onSubmit={async (e) => {
                            e.preventDefault();
                            createLeague({ variables: { name: this.state.name } });
                        }}>
                            <fieldset>
                                <label htmlFor="name">
                                    Name
                                    <input
                                        type="name"
                                        name="name"
                                        placeholder="name"
                                        defaultValue={this.state.name}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            this.setState({ name: e.target.value });
                                        }}
                                    />
                                </label>
                                <button type="submit">Create League!</button>
                            </fieldset>
                        </form>
                        <button onClick={(e) => {
                            e.preventDefault();
                            this.props.onCancel && this.props.onCancel();
                        }}>Cancel</button>
                    </div>
                )
            }}</Mutation>
        </div>
    }
}
