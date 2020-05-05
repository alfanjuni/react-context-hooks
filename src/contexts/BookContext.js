import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: 'the name of the wind', id: 1 },
		{ title: 'the way of king', id: 2 },
		{ title: 'the final empire', id: 3 },
		{ title: 'final fantasi', id: 4 },
		{ title: 'marmut merah jambu', id: 5 },
	]);
	return (
		<BookContext.Provider value={{ books }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
