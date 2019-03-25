import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { UserContext } from '../helpers/UserContext';
import gql from 'graphql-tag';
import React from 'react';

const TEXTS_QUERY = gql`
  query TextsQuery {
    texts {
      nodes {
        id
        cachedUrl
        cachedBlurbHtml
      }
    }
  }
`;

export default () => {
  const { loading, error, data, } = useQuery(TEXTS_QUERY);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <ul>
      {data.texts.nodes.map((text, index) => (
        <li key={text.id}>
          <Link to={text.cachedUrl} dangerouslySetInnerHTML={{ __html: text.cachedBlurbHtml }} />
        </li>
      ))}
    </ul>
  );
}
