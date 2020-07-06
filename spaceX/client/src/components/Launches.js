import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Container } from "react-bootstrap";
import LaunchItem from "./LaunchItem";

const launches_query = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

class Launches extends Component {
  render() {
    return (
      <Container>
        <h1>Launches</h1>
        <Query query={launches_query}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            return (
              <>
                {data.launches.map((launch) => (
                  <LaunchItem key={launch.flight_number} item={launch} />
                ))}
              </>
            );
          }}
        </Query>
      </Container>
    );
  }
}

export default Launches;
