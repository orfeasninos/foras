const RECIPIENT = 'orfeasninos5@gmail.com';

function doGet(e) {
  const p = (e && e.parameter) ? e.parameter : {};
  const name    = p.name    || '';
  const phone   = p.phone   || '';
  const email   = p.email   || '';
  const message = p.message || '';

  // Αγνόησε κλήσεις χωρίς δεδομένα (π.χ. direct browser test)
  if (!name && !phone && !message) {
    return ContentService.createTextOutput('ok');
  }

  const subject = 'Νέο αίτημα προσφοράς — ' + name;

  const body =
    'Νέο αίτημα από τη φόρμα επικοινωνίας:\n\n' +
    'Όνομα:    ' + (name    || '—') + '\n' +
    'Τηλέφωνο: ' + (phone   || '—') + '\n' +
    'Email:    ' + (email   || 'δεν δόθηκε') + '\n\n' +
    'Μήνυμα:\n' + (message  || '—');

  const options = { name: 'Μάντρα Φορας — Website' };
  if (email) options.replyTo = email;

  MailApp.sendEmail(RECIPIENT, subject, body, options);

  return ContentService.createTextOutput('ok');
}
