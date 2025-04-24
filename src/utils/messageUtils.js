import { getCurrentTime } from './dateUtils';

/**
 * Cria uma nova mensagem do usuário
 * @param {string} content - Conteúdo da mensagem
 * @param {number} idCounter - Contador atual de IDs
 * @returns {Object} Objeto de mensagem formatado
 */
export const createUserMessage = (content, idCounter) => {
  return {
    id: idCounter,
    sender: 'user',
    content: content,
    time: getCurrentTime()
  };
};

/**
 * Cria uma nova mensagem do bot
 * @param {string} content - Conteúdo da mensagem
 * @param {number} idCounter - Contador atual de IDs
 * @returns {Object} Objeto de mensagem formatado
 */
export const createBotMessage = (content, idCounter) => {
  return {
    id: idCounter,
    sender: 'bot',
    content: content,
    time: getCurrentTime()
  };
};

/**
 * Formata links em texto para elementos clicáveis
 * @param {string} text - Texto com possíveis links
 * @returns {Array} Array com elementos de texto e links
 */
export const formatTextWithLinks = (text) => {
  // Regex para identificar URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  
  // Se não houver links, retornar texto normal
  if (!text.match(urlRegex)) {
    return text;
  }
  
  // Dividir o texto em partes (texto normal e links)
  const parts = text.split(urlRegex);
  const matches = text.match(urlRegex);
  
  // Combinar partes e links
  const result = [];
  
  parts.forEach((part, i) => {
    if (part) {
      result.push(part);
    }
    if (matches && matches[i]) {
      result.push(
        <a 
          key={i} 
          href={matches[i]} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 underline"
        >
          {matches[i]}
        </a>
      );
    }
  });
  
  return result;
};