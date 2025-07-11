document.addEventListener('DOMContentLoaded', () => {

  const formContainer = document.getElementById('form-container');    
    
  const mainTitle = document.createElement('h1');
    mainTitle.className = 'main-title';
    mainTitle.innerHTML = '<span>FORMULÁRIO</span> <span style="color: #004e92;">LOWCODE</span>';
    formContainer.appendChild(mainTitle);
    
const icon = document.createElement('i');
icon.className = 'fas fa-code'; 
icon.style.marginLeft = '10px';
mainTitle.appendChild(icon);

  const formFields = [
      {
        id: 'nome',
        label: 'Nome Completo',
        type: 'text',
        required: true
      },
      {
        id: 'email',
        label: 'E-mail',
        type: 'email',
        required: true
      },
      {
        id: 'produto',
        label: 'Produto',
        type: 'select',
        required: true,
        options: [
          { 
            group: 'Vestuário', 
            items: ['Camiseta', 'Moletom', 'Boné'] 
          },
          { 
            group: 'Acessórios', 
            items: ['Caneca', 'Agenda', 'Mochila'] 
          }
        ]
      }
    ];  
  
const form = document.createElement('form');
form.id = 'whatsapp-form';

const titleContainer = document.createElement('div');
titleContainer.style.display = 'flex';
titleContainer.style.alignItems = 'center';
titleContainer.style.gap = '15px';
titleContainer.style.marginBottom = '2rem';

const title = document.createElement('h2');
title.textContent = 'Faça seu pedido';

const robotGif = document.createElement('img');
robotGif.src = '/images/robot.gif'; 
robotGif.alt = 'Robo animado';
robotGif.classList.add('robot-gif');

titleContainer.appendChild(title);
titleContainer.appendChild(robotGif);

form.appendChild(titleContainer);

form.innerHTML += `
  ${formFields.map(field => `
    <div class="form-group">
      <label for="${field.id}">${field.label}</label>
      ${field.type === 'select' ? `
        <select id="${field.id}" name="${field.id}" ${field.required ? 'required' : ''}>
          ${field.options.map(opt => 
            opt.group ? `
              <optgroup label="${opt.group}">
                ${opt.items.map(item => `<option value="${item}">${item}</option>`).join('')}
              </optgroup>
            ` : `
              <option value="${opt}">${opt}</option>
            `
          ).join('')}
        </select>
      ` : `
        <input 
          type="${field.type}" 
          id="${field.id}" 
          name="${field.id}" 
          ${field.required ? 'required' : ''}
        >
      `}
    </div>
  `).join('')}
  <button type="submit">Enviar Pedido</button>
`;
    document.getElementById('form-container').appendChild(form);
  
        form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = form.querySelector('button[type="submit"]');
        const btnText = btn.innerHTML;
        
        btn.innerHTML = `
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWI0azVpZzY1YzJqMDlxNjFlZHNhNmE0aGQ3dnhic2h4eGY2dmdhdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bu3XilJ5BOiSGic/giphy.gif" 
             width="20" 
             style="vertical-align:middle; margin-right:8px;">
        ENVIANDO...
      `;
      btn.disabled = true;
        
        setTimeout(() => {
          const formData = new FormData(form);
          const data = Object.fromEntries(formData.entries());
          
          const mensagem = `📦 *NOVO PEDIDO*\n\n` +
            `👤 Nome: ${data.nome}\n` +
            `📧 E-mail: ${data.email}\n` +
            `🛒 Produto: ${data.produto}`;
          
          window.location.href = `https://wa.me/5547999327137?text=${encodeURIComponent(mensagem)}`;
          
       btn.classList.remove('button--loading');
          btn.disabled = false;
          btn.innerHTML = btnText;
        }, 1500);
      });

      
formContainer.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = formContainer.getBoundingClientRect();
  const x = (e.clientX - left) / width - 0.5;
  const y = (e.clientY - top) / height - 0.5;
  
  formContainer.style.transform = `
    perspective(1000px)
    rotateX(${y * 5}deg)
    rotateY(${x * 5}deg)
    translateZ(10px)
  `;
});

formContainer.addEventListener('mouseleave', () => {
  formContainer.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});
  });