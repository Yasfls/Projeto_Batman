# Batman Móveis
 
Site para gestão e venda de móveis temáticos do Batman. Este projeto é um módulo de software desenvolvido para a disciplina de Engenharia de Software.
 
## Como Rodar o Projeto
1. Clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge).
3. Não é necessário instalação de servidor, pois o sistema roda inteiramente no front-end com JavaScript.
 
## Tecnologias Utilizadas
- **HTML5:** Estrutura semântica das páginas.
- **CSS3:** Estilização responsiva e visual do tema.
- **JavaScript:** Lógica de manipulação do DOM e simulação de CRUD.
 
## Fluxo de Versionamento
O projeto segue um fluxo de versionamento baseado em *Git Flow* simplificado:
- **main:** Versão estável de produção (tags v1.0.0, v1.1.0).
- **develop:** Branch de integração para desenvolvimento.
- **feature/**: Para novas funcionalidades (ex: `feature/novo-contato`).
- **fix/**: Para correção de bugs (ex: `fix/validacao-preco`).
- **refactor/**: Para melhorias de código sem mudança de funcionalidade.
 
## Lista de Manutenções Realizadas
Conforme exigido na recuperação:
 
1. **Manutenção Corretiva:** - Correção da validação de entrada de números no campo "Preço".
2. **Manutenção Evolutiva:**
   - Implementação de feedback visual ao enviar o formulário de contato.
3. **Manutenção Perfectiva (Refatoração):**
   - Extração da função de validação de formulário do `app.js` para um módulo utilitário `utils.js`, melhorando a modularização do código.
 
## Como Contribuir
1. Faça um Fork do projeto.
2. Crie uma Branch para sua Feature (`git checkout -b feature/MinhaFeature`).
3. Faça o Commit de suas mudanças (`git commit -m 'feat: Adiciona MinhaFeature'`).
4. Faça o Push para a Branch (`git push origin feature/MinhaFeature`).
5. Abra um Pull Request.
 
## Histórico e Releases
- **v1.0.0:** Versão inicial com listagem estática.
- **v1.1.0:** Refatoração do código JS e melhorias visuais.
Consulte o arquivo [CHANGELOG.md](./CHANGELOG.md) para detalhes completos.
 
## Equipe
- Luciana
- Yasmin