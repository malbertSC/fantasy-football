import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation, Query } from "react-apollo";

// const SIGNIN_MUTATION = gql`
//     mutation SIGNIN_MUTATION($email: String!, $password: String!) {
//         signin(email: $email, password: $password) {
//             id
//             email
//         }
//     }
// `;

// interface Data {
//     allPeople: {
//         people: Array<{ name: string }>;
//     };
// };

// interface Variables {
//     first: number;
// };

// class AllPeopleQuery extends Query<Data, Variables> { }

// export class Signin extends Component {

//     state = {
//         password: "",
//         email: "",
//     };
//     public render() {
//         return (
//             <AllPeopleQuery
//                 variables={SIGNIN_MUTATION}
//             >
//                 {(addTodo, { data }) => (
//                     <form
//                         method="post"
//                         onSubmit={async e => {
//                             e.preventDefault();
//                             // await signup();
//                             this.setState({ email: "", password: "" });
//                         }}
//                     >
//                         <fieldset disabled={false} aria-busy={false}>
//                             <h2>Sign into your account</h2>
//                             {/* <Error error={error} /> */}
//                             <label htmlFor="email">
//                                 Email
//                 <input
//                                     type="email"
//                                     name="email"
//                                     placeholder="email"
//                                     value={this.state.email}
//                                 // onChange={console.log("changed")}
//                                 />
//                             </label>
//                             <label htmlFor="password">
//                                 Password
//                 <input
//                                     type="password"
//                                     name="password"
//                                     placeholder="password"
//                                     value={this.state.password}
//                                 // onChange={this.saveToState}
//                                 />
//                             </label>

//                             <button type="submit">Sign In!</button>
//                         </fieldset>
//                     </form>
//                 )}
//             </Mutation>
//         )
//     }
// }
