FURIA Connect
Uma aplicação de chatbot para torcedores da FURIA Esports se manterem atualizados sobre jogos, resultados, lineup e muito mais.

Visão Geral
O FURIA Connect é uma aplicação React que funciona como um chatbot para os fãs da equipe de CS da FURIA. O projeto foi desenvolvido com foco em:

Interface amigável e responsiva
Interações personalizadas com os torcedores
Informações atualizadas sobre a equipe
Integração com recursos da FURIA (site, loja, partidas)
Estrutura do Projeto
O projeto está organizado da seguinte forma:

furia-connect/
├── public/               # Arquivos públicos e estáticos
├── src/                  # Código-fonte da aplicação
│   ├── components/       # Componentes React reutilizáveis
│   ├── contexts/         # Contextos React para gerenciamento de estado
│   ├── hooks/            # Custom hooks
│   ├── services/         # Serviços para interação com APIs
│   ├── utils/            # Funções utilitárias
│   ├── data/             # Dados estáticos
│   ├── App.jsx           # Componente principal
│   └── index.js          # Ponto de entrada da aplicação
└── package.json          # Dependências e scripts
Tecnologias Utilizadas
React 18
TailwindCSS para estilização
Lucide React para ícones
Contexto React para gerenciamento de estado
Instalação e Execução
Clone o repositório:
git clone https://github.com/WallisonR/furia-connect.git
cd furia-connect
Instale as dependências:
npm install
Execute o projeto em modo de desenvolvimento:
npm start
Para gerar a build de produção:
npm run build
Recursos e Funcionalidades
💬 Chat interativo com respostas personalizadas
📅 Informações sobre próximos jogos
🏆 Resultados de partidas recentes
👥 Detalhes sobre a lineup atual
🛒 Links para compra de ingressos e produtos
📱 Design responsivo para mobile e desktop
Próximos Passos
Integração com API real da FURIA para informações em tempo real
Sistema de notificações para jogos e eventos
Autenticação de usuários para recursos personalizados
Expansão para outras modalidades além do CS
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar o projeto.

Licença
MIT License

