// Menu responsivo: abre e fecha o menu em telas menores.
const menuToggle = document.getElementById('menuToggle');
const menuPrincipal = document.getElementById('menuPrincipal');

menuToggle.addEventListener('click', () => {
  const aberto = menuPrincipal.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(aberto));
});

// Fecha o menu depois que o usuário escolhe uma seção.
document.querySelectorAll('#menuPrincipal a').forEach((link) => {
  link.addEventListener('click', () => {
    menuPrincipal.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Alternância entre tema escuro e claro.
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const claro = document.body.classList.contains('light-theme');
  themeToggle.textContent = claro ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', claro ? 'Ativar tema escuro' : 'Ativar tema claro');
});

// Validação e simulação de envio do formulário de contato.
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const mensagem = document.getElementById('mensagem');

  const nomeError = document.getElementById('nomeError');
  const emailError = document.getElementById('emailError');
  const mensagemError = document.getElementById('mensagemError');

  nomeError.textContent = '';
  emailError.textContent = '';
  mensagemError.textContent = '';
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  let valido = true;
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome.value.trim() === '') {
    nomeError.textContent = 'Informe seu nome.';
    valido = false;
  }

  if (email.value.trim() === '') {
    emailError.textContent = 'Informe seu e-mail.';
    valido = false;
  } else if (!emailValido.test(email.value.trim())) {
    emailError.textContent = 'Digite um e-mail válido.';
    valido = false;
  }

  if (mensagem.value.trim() === '') {
    mensagemError.textContent = 'Digite uma mensagem.';
    valido = false;
  }

  if (!valido) {
    formStatus.textContent = 'Revise os campos destacados.';
    formStatus.classList.add('fail');
    return;
  }

  // Simulação de envio exigida pela atividade: limpa o formulário e confirma a operação.
  contactForm.reset();
  formStatus.textContent = 'Mensagem enviada com sucesso! (simulação acadêmica)';
  formStatus.classList.add('success');
});
