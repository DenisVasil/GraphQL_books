import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

function BookList() {
    const [selected, setSelected] = useState("");
    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.books.map(({ name, id }) => (
        <div key={id}>
            <ul id="book-list">
                <li onClick={(e) => {
                    setSelected(id)
                }}> {name} </li>
            </ul>
            <BookDetails id={selected} />
        </div>
    ));
}

export default BookList;