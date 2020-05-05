import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

//pake class component
// class BookList extends Component {
// 	static contextType = ThemeContext;
// 	render() {
// 		const { isLightTheme, light, dark } = this.context;
// 		const theme = isLightTheme ? light : dark;
// 		return (
// 			<div
// 				className="book-list"
// 				style={{ background: theme.bg, color: theme.syntax }}
// 			>
// 				<ul>
// 					<li style={{ background: theme.ui }}>the way of king</li>
// 					<li style={{ background: theme.ui }}>the name of the wind</li>
// 					<li style={{ background: theme.ui }}>the final empire</li>
// 				</ul>
// 			</div>
// 		);
// 	}
// }

//pake fungsional dan useContext hooks
const BookList = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div
			className="book-list"
			style={{ background: theme.bg, color: theme.syntax }}
		>
			<ul>
				<li style={{ background: theme.ui }}>the way of king</li>
				<li style={{ background: theme.ui }}>the name of the wind</li>
				<li style={{ background: theme.ui }}>the final empire</li>
			</ul>
		</div>
	);
};

export default BookList;

// export default BookList;
