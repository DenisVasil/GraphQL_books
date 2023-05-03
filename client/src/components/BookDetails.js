import { useLazyQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

function BookDetails({ id }) {
    const [loadBook, { called, loading, data, error }] = useLazyQuery(getBookQuery, {
        variables: {
            id
        }
    });
    if (called && loading) return <p>Loading ...</p>
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div id='book-details'>
            {data && (<div>
                <p>{data.book.name}</p>
                <p>{data.book.genre}</p>
                <p>{data.book.author.name}</p>
                <p>{data.book.author.age}</p>
                <p>Other Books:</p>
                <ul>
                    {data.book.author.books.map(({ id, name }) => {
                        return <div key={id}>
                            <li>{name}</li>
                        </div>
                    })}
                </ul>
            </div>
            )}
            <button onClick={loadBook}>FetchBook</button>
        </div>
    )
}

export default BookDetails;