/**
 * Formata a data atual no formato de hora:minuto
 * @returns {string} Hora formatada (HH:MM)
 */
export const getCurrentTime = () => {
    return new Date().toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };
  
  /**
   * Formata a data completa no formato DD/MM/YYYY
   * @param {Date} date - Data a ser formatada
   * @returns {string} Data formatada (DD/MM/YYYY)
   */
  export const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };
  
  /**
   * Formata a data no formato dia da semana
   * @param {Date} date - Data a ser formatada
   * @returns {string} Dia da semana (ex: "segunda-feira")
   */
  export const formatDayOfWeek = (date) => {
    return date.toLocaleDateString('pt-BR', { weekday: 'long' });
  };