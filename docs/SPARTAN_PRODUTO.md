# SPARTAN — Definição de produtos e operação

## 1. Visão geral da SPARTAN

### O que é a SPARTAN

A SPARTAN é uma operação de **estruturação digital com foco em conversão**: organiza presença online, páginas e captura de leads, e conecta isso a **WhatsApp**, **CRM** e **rastreamento** para que investimento em marketing tenha base mensurável e fluxo comercial claro.

### Para quem é (tipos de negócio)

- Negócios locais que precisam de demanda recorrente além de indicação.
- Prestadores de serviço com orçamento limitado e necessidade de priorização técnica.
- Empresas que já investem ou pretendem investir em tráfego e precisam de **estrutura** (site/LP, formulário, pixel, CRM) antes de escalar mídia.

### Problema que resolve

- Marketing digital sem **estrutura** (tráfego ou esforço que não vira contato ou não é rastreado).
- Ferramentas desconectadas (site, WhatsApp, planilha, anúncios sem conversão atribuída).
- Ausência de um **fluxo único** do primeiro clique ao atendimento comercial.

---

## 2. Produtos da SPARTAN

### 2.1 Estrutura Digital

**Descrição curta**  
Definição e implementação da **base digital do negócio**: arquitetura de páginas, site institucional ou conjunto de páginas alinhado ao que o cliente vende, com foco em clareza, velocidade e organização da informação.

**Entregáveis principais**

- Arquitetura da informação e mapa de páginas (o que existe e para que serve).
- Implementação de site/páginas estáticas (HTML/CSS/JS ou equivalente acordado), responsivas.
- Textos-base estruturados (headlines, seções, CTAs) a partir de briefing; revisão limitada conforme pacote.
- Publicação em hospedagem definida com o cliente (Netlify, Vercel, servidor do cliente, etc.).
- Configuração de domínio/DNS quando os acessos estiverem disponíveis.

**O que não entra**

- Produção contínua de conteúdo para blog ou redes sociais.
- Identidade visual nova (marca, logo, manual de marca), salvo contratação à parte.
- Gestão de campanhas de mídia paga e operação diária de anúncios.
- Desenvolvimento de sistemas sob medida (painel administrativo complexo, ERP, app nativo).

**Prazo médio de entrega**  
10 a 20 dias úteis para MVP institucional de uma página principal + páginas de apoio, dependendo de volume de texto e aprovações.

---

### 2.2 Conversão

**Descrição curta**  
Camada focada em **gerar contato qualificado**: landing pages, formulários, mensagens de confirmação e chamadas à ação alinhadas ao funil (pedido de diagnóstico, orçamento, demonstração, etc.).

**Entregáveis principais**

- Modelagem de 1 ou mais landing pages com objetivo de conversão definido por página.
- Formulário(s) com campos mínimos necessários; integração com abertura de WhatsApp com mensagem pré-formatada quando aplicável.
- Página de obrigado / próximo passo após envio (conteúdo de valor breve, se contratado).
- Orientação de copy e hierarquia visual para maximizar clareza (sem promessa de taxa de conversão).

**O que não entra**

- Testes A/B contínuos e otimização de mídia (isso é operação de tráfego ou projeto à parte).
- Design gráfico pesado (ilustrações exclusivas, vídeos, motion).
- Garantia de número mínimo de leads ou vendas.

**Prazo médio de entrega**  
5 a 12 dias úteis por LP no escopo fechado, após briefing e materiais aprovados.

---

### 2.3 Integração

**Descrição curta**  
Conectar site e landing pages ao **ecossistema comercial**: WhatsApp com mensagem padronizada, **CRM** (RD Station, HubSpot, planilha via webhook, etc.), **Google Tag Manager**, **Google Analytics 4** e **Meta Pixel**, conforme stack acordada.

**Entregáveis principais**

- Configuração de tags e variáveis no GTM (ou instruções equivalentes se o cliente já usa outra camada).
- Instalação de GA4 e Pixel com eventos básicos alinhados ao formulário e cliques em WhatsApp.
- Integração de formulário com destino de lead (e-mail, CRM, webhook) dentro do que a stack permitir sem backend proprietário.
- Documentação resumida: o que foi instalado, IDs, e checklist de validação.

**O que não entra**

- Implementação completa de CRM (campos customizados, automações complexas, scoring avançado), salvo escopo explícito.
- API proprietária ou servidor dedicado mantido pela SPARTAN.
- Suporte permanente 24/7 a ferramentas de terceiros.

**Prazo médio de entrega**  
3 a 8 dias úteis após acessos às contas (Meta Business, Google, CRM) e definição do destino dos leads.

---

## 3. Fluxo de atendimento via WhatsApp

**Passo 1 — Lead chega pelo site**  
Contato via botão flutuante, botões “Falar no WhatsApp” ou envio do formulário que **abre o WhatsApp** com mensagem já estruturada (nome, serviço de interesse, mensagem livre, origem UTM quando houver).

**Passo 2 — Qualificação inicial**  
No WhatsApp, confirmação de recebimento e até **cinco perguntas-chave** (ex.: segmento, cidade, faturamento aproximado ou ticket médio, urgência, já tem site/tráfego). Objetivo: encaixar no produto certo e evitar proposta genérica.

**Passo 3 — Definição do pacote**  
Encaixe em **Estrutura Digital**, **Conversão**, **Integração** ou **combinação** (ex.: Estrutura + Conversão; Conversão + Integração). Escopo fechado por escrito (mensagem ou PDF breve).

**Passo 4 — Proposta e confirmação**  
Envio de valor, prazo, entregáveis e exclusões. Confirmação por **whatsapp** (aceite explícito) e, quando aplicável, sinal/contrato conforme política comercial da SPARTAN.

**Passo 5 — Implantação (resumo)**  
Diagnóstico e coleta → wireframe ou lista de seções → implementação → integrações e testes de formulário/WhatsApp → publicação → validação conjunta (checklist) → handoff com orientações de uso.

Todo o fluxo comercial **prioriza WhatsApp** como canal principal de continuidade após o primeiro toque no site.

---

## 4. Requisitos do cliente

### O que o cliente precisa fornecer

- **Informações**: segmento, oferta principal, diferenciais, região de atuação, tom de voz desejado (objetivo).
- **Materiais**: logo e cores (se existirem), textos legais se necessários (privacidade), fotos ou mídia autorizada para uso.
- **Acessos**: domínio e DNS, hospedagem se aplicável, contas Google/Meta para pixel e analytics, acesso ao CRM ou e-mail de destino dos leads.
- **Pontos de contato**: um decisor disponível para aprovações em até **48 h úteis** por rodada, quando combinado.

### Responsabilidades do cliente durante e após o projeto

- Validar escopo e entregas em até duas rodadas de revisão por entrega principal (salvo contrato diferente).
- Manter domínio, hospedagem e ferramentas de terceiros ativas e pagas.
- Colocar em prática o follow-up comercial dos leads (SLA interno do cliente).
- Informar falhas de integração ou quebra de formulário para correção dentro da política de ajustes.

---

## 5. Limites e condições

### O que a SPARTAN não faz (fora de escopo padrão)

- Gestão de tráfego pago contínua e otimização semanal de campanhas.
- Produção ilimitada de criativos e posts para redes sociais.
- Suporte jurídico ou compliance formal além de orientação genérica sobre páginas legais.
- Garantia de posicionamento SEO específico ou ROAS mínimo.

### Política básica de ajustes

- Até **duas rodadas** de ajuste de texto/layout por entrega principal inclusas no pacote fechado.
- Prazo de retorno da SPARTAN para cada rodada: até **3 dias úteis**, salvo dependência de material do cliente.
- Escopo adicional ou nova funcionalidade após fechamento: orçamento à parte e novo prazo.

---

## 6. Métricas e resultados esperados

### O que a SPARTAN acompanha (com ferramentas configuradas)

- Envios de formulário e cliques para WhatsApp (eventos e UTMs quando aplicável).
- Origem aproximada da sessão (campanha/anúncio quando tags estiverem corretas).
- Volume de leads entregues ao CRM ou e-mail configurado (dependente da ferramenta).

### O que NÃO é garantido

- Volume mínimo de leads, vendas ou receita em qualquer período.
- Taxa de conversão específica da página ou do funil.
- Resultados de mídia paga não operada pela SPARTAN ou sem budget adequado.

---

*Documento interno/comercial SPARTAN — base para site, WhatsApp e automações futuras.*
