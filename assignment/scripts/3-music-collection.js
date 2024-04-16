console.log('***** Music Collection *****');
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
	let newAlbum = {
		title: title,
		artist: artist,
		yearPublished: yearPublished,
	};

	collection.push(newAlbum);

	return collection;
}

addToCollection(myCollection, 'Never Wanted to Dance', 'Mindless Self Indulgence', 2008);
console.log('OH yeah forgot this album! ', myCollection);
addToCollection(myCollection, 'Meteora', 'Linkin Park', 2003);
console.log('Adding a second album! ', myCollection);
addToCollection(myCollection, 'Beautiful People', 'Marilyn Manson', 2002);
console.log('Now there is 3! ', myCollection);
addToCollection(myCollection, 'Best of Queen', 'Queen', 1985);
console.log('Make that 4!', myCollection);
addToCollection(myCollection, 'Toxic', 'Britney Spears', 2000);
console.log('5!', myCollection);
addToCollection(myCollection, 'Hybrid Theory', 'Linkin Park', 2000);
console.log('And this makes 6!!', myCollection);

function showCollection(collection) {
	for (let i = 0; i < collection.length; i++) { //looping through the collection
		const album = collection[i]; // album is the collection array at i
		const albumInfo = `${album.title} by ${album.artist}, published in ${album.yearPublished}`; //defining the title, artist, and yearPublished
		console.log(albumInfo);
	}
}
showCollection(myCollection);

function findByArtist(collection, artist) { 
  let results = []; //initialized array for results
  for (let i = 0; i < collection.length; i++) { //set up for loop
    const album = collection[i]; //album is collection array at i
    if (artist === album.artist) { //if artist matches album artist
      results.push(album); //pushing the album to the results array
    }
  }

  return results;
}
findByArtist(myCollection, 'Linkin Park');

console.log('Looking through the collection: ' ,findByArtist( myCollection, 'Linkin Park'));
console.log('What about this one? ', findByArtist(myCollection, 'Godsmack'));
// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
	module.exports = {
		myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
		addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
		showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
		findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
		search: typeof search !== 'undefined' ? search : undefined,
	};
} catch (e) {
	// Do nothing
}
