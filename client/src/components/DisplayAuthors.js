import { useQuery } from '@apollo/client';

import { getAuthorsQuery } from '../queries/queries';


function DisplayAuthors() {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    return data.authors.map(({ name, id }) => (
        <option key={id} value={id}>{name}</option>
    ));
}

export default DisplayAuthors;