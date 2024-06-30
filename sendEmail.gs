function myFunction() {
  var doc = DocumentApp.create('New Test Doc'); // Create a new document and save in your google drive
  var body = doc.getBody();
  body.appendParagraph('This is a test paragraph'); // Add some custom text to the document created
  var email = Session.getActiveUser().getEmail();
  var subject = doc.getName();
  var bodyEmail = 'This is the new doc = '+doc.getUrl();
  GmailApp.sendEmail(email, subject, bodyEmail); // email the document to any selected email
}
