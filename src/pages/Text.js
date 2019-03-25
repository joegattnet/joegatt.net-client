import { Link } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { UserContext } from '../helpers/UserContext';
import gql from 'graphql-tag';
import React, { useEffect } from 'react';

import Text from '../components/Text';

const TEXT_QUERY = gql`
  query TextsQuery($textId: Int) {
    text(uid: $textId) {
      id
      cachedBodyHtml
      title
    }
  }
`;

export default ({ match }) => {
  const { loading, error, data, } = useQuery(TEXT_QUERY, { variables: { textId: match.params.id } });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <article>
      <header>
        <h1>{ data.text.title }</h1>
      </header>
      <Text>
        <section dangerouslySetInnerHTML={{ __html: data.text.cachedBodyHtml }} />
      </Text>
    </article>
  );
}
