// Check to see if the userID owns the document specified
ownsDocument = function(userID, doc) {
	return doc && doc.userID === userID;
}