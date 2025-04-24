import { responses } from '../data/responses';

export const generateBotResponse = (userInput) => {
  const input = userInput.toLowerCase();
  
  // Check for keywords in user input and return appropriate response
  if (input.includes('próximo jogo') || input.includes('partida')) {
    return responses.nextMatch;
  } else if (input.includes('lineup') || input.includes('jogadores')) {
    return responses.lineup;
  } else if (input.includes('resultado') || input.includes('último jogo')) {
    return responses.lastResult;
  } else if (input.includes('ingressos') || input.includes('comprar')) {
    return responses.tickets;
  } else if (input.includes('calendário') || input.includes('agenda')) {
    return responses.schedule;
  } else if (input.includes('redes sociais') || input.includes('seguir')) {
    return responses.socialMedia;
  } else if (input.includes('notícias') || input.includes('novidades')) {
    return responses.news;
  } else if (input.includes('merchandise') || input.includes('produtos')) {
    return responses.merchandise;
  } else if (input.includes('olá') || input.includes('oi') || input.includes('e aí')) {
    return responses.greeting;
  } else {
    return responses.default;
  }
};