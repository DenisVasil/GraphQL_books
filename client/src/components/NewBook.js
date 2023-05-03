import DisplayAuthors from "./DisplayAuthors";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { addBookMutation, getBooksQuery } from '../queries/queries';
// https://www.apollographql.com/docs/react/data/mutations 



function NewBook() {

    const [name, setName] = useState("");
    const [genre, setGenre] = useState("");
    const [authorId, setAuthorId] = useState("");
    const [addBook, { loading, error }] = useMutation(addBookMutation, {
        refetchQueries: [
            { query: getBooksQuery }, // DocumentNode object parsed with gqlr
        ],
    });

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, genre, authorId)
        addBook({ variables: { name: name, genre: genre, authorId: authorId } });
    }

    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e) => setGenre(e.target.value)} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => setAuthorId(e.target.value)}>
                    <option>Select author</option>
                    <DisplayAuthors />
                </select>
            </div>
            {/* <button onClick={() => { AddBook({ input: { variables: { name, genre, authorId } } }) }}>+</button> */}
            <button>+</button>

        </form>
    );
}

export default NewBook;