import React from 'react';
import { Layout } from '../components';
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";

// constant query
// this can be abstracted away
const TRACKS = gql`
  query getTracks {
    tracksForHomePage {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  // executes Tracks query
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`;

  return <Layout grid>{
    data?.tracksForHomePage?.map((track) => (
      <TrackCard key={track.id} track={track} />
    ))
  }</Layout>;
};

export default Tracks;
