const getReactNotes = () => {
	let reactNotes = [];
	if (localStorage.getItem('react-notes')) {
		reactNotes = JSON.parse(localStorage.getItem('react-notes'));
	} else {
		localStorage.setItem('react-notes', JSON.stringify(reactNotes));
	}
	return reactNotes;
}

let reactNotes = getReactNotes();

export default reactNotes;