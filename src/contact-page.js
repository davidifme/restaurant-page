export default function contactPage() {
    const mainContent = document.getElementById('content');
    mainContent.innerHTML = '';

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = 'Contact Us';

    const contactParagraph = document.createElement('p');
    contactParagraph.textContent = 'Feel free to reach out to us using the form below:';

    const contactForm = document.createElement('form');
    contactForm.action = '#';
    contactForm.method = 'post';

    const formNameLabel = document.createElement('label');
    formNameLabel.for = 'name';
    formNameLabel.textContent = 'Name:';
    const formNameInput = document.createElement('input');
    formNameInput.type = 'text';
    formNameInput.id = 'name';
    formNameInput.name = 'name';
    formNameInput.placeholder = 'Your Name';
    formNameInput.required = true;

    const formEmailLabel = document.createElement('label');
    formEmailLabel.for = 'email';
    formEmailLabel.textContent = 'Email:'
    const formEmailInput = document.createElement('input');
    formEmailInput.type = 'email';
    formEmailInput.id = 'email';
    formEmailInput.name = 'email';
    formEmailInput.placeholder = 'Your Email';
    formEmailInput.required = true;

    const formMessageLabel = document.createElement('label');
    formMessageLabel.for = 'message'
    formMessageLabel.textContent = 'Message:'
    const formMessageInput = document.createElement('textarea');
    formMessageInput.id = 'message';
    formMessageInput.name = 'message';
    formMessageInput.rows = '5';
    formMessageInput.placeholder = 'Your Message';
    formMessageInput.required = true;

    const formSubmitButton = document.createElement('button');
    formSubmitButton.type = 'submit';
    formSubmitButton.textContent = 'Send Message';

    contactForm.append(
        formNameLabel, formNameInput,
        formEmailLabel, formEmailInput,
        formMessageLabel, formMessageInput,
        formSubmitButton);
    mainContent.append(
        contactHeading, contactParagraph, contactForm);
}