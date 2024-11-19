async function submitForm() {

    const inputs = document.querySelectorAll('input');
    const message = document.querySelector('textarea');
    const names = Array.from(inputs).map(input => input.value);

    const payload = {
        names: names,
        message: message.value
    };

    try {
        const response = await fetch('https://fsdt-contact.onrender.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        if (response.ok) {
            alert('Formulário enviado com sucesso');
        } else {
            throw new Error('Erro ao enviar o formulário');
        }
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}