module.exports = {
    host: 'smtp.ethereal.email', // SMTP-Server-Host
    port: 587, // SMTP-Server-Port
    secure: false, // true für 465, false für andere Ports
    auth: {
        user: 'your_email@example.com', // SMTP-Account-Benutzername
        pass: 'your_password' // SMTP-Account-Passwort
    },
    from: 'Your Name <your_email@example.com>', // Standard-Absenderadresse
    testEmail: {
        to: 'test@example.com',
        subject: 'Test Email',
        text: 'This is a test email'
    }
};
