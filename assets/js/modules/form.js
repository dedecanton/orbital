class Form {
    constructor(form, onvalidation) {
        this.form = form;
        this.context = new FormContext(form);
        this.validate = () => onvalidation.call(this, this.context)
        this.form.querySelector('button').addEventListener('click', (event) => {
            event.preventDefault();
            this.validate();
        });
    }
}

class FormContext {
    constructor(form) {
        this.form = form;
        this.getMessage = () => {
            let formMessage = this.form.querySelector('.form-message');
            if (formMessage == undefined) {
                formMessage = document.createElement('span');
                formMessage.classList.add('form-message');
            }
            return formMessage;
        }

        this.setMessage = (message, isSucessful) => {
            let formMessage = this.getMessage();
            if (isSucessful) {
                this.form.appendChild(formMessage);
                formMessage.classList.remove('invalid-message');
                formMessage.classList.add('successful-message');
            } else {
                this.form.insertBefore(formMessage, form.firstChild);
                formMessage.classList.remove('successful-message');
                formMessage.classList.add('invalid-message');
            }

            formMessage.innerText = message;
        }
    }
}

new Form(document.forms[0], (context) => {
    for (let element of context.form.elements) {
        switch (element.id) {
            case 'name':
                if (element.value.length < 5) {
                    context.setMessage('Você precisa preencher com o nome completo!', false);
                    return;
                }
                continue;
            case 'email':
                if (element.value.match(/\S+@\S+\.\S+/) == null) {
                    context.setMessage('Você precisa colocar um email valido!', false);
                    return;
                }
                continue;
            case 'message':
                if (element.value.length < 20) {
                    context.setMessage('Sua mensagem tem que conter mais caracteres', false);
                    return;
                }
                continue;
        }
    }
    context.setMessage('Sua mensagem foi enviada com sucesso!\n Em breve entraremos em contato!', true);
});
