export const privacyTranslations = {
  en: {
    pageTitle: "Privacy Policy for Moora",
    lastUpdated: "Last Updated:",
    effectiveDate: "Effective Date:",
    date: "January 2, 2026",
    content: `
# 1. Introduction

Welcome to Moora ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our iOS mobile application.

# 2. Information We Collect

## 2.1 Information You Provide Directly
- **Account Information:** Email address, name, and password (encrypted)
- **Profile Data:** Personal goals and preferences
- **Journal Entries:** Text notes, photos, and audio recordings you create
- **User Content:** Any other content you voluntarily provide within the app

## 2.2 Automatically Collected Information
- **Device Information:** Device type, operating system version, app version
- **Usage Data:** Features used, timestamps of entries
- **File Metadata:** Creation dates, file sizes for photos and audio

# 3. How We Use Your Information

We use your information to:
- **Provide Core Functionality:** Enable journaling, goal tracking, and personal reflection features
- **AI Analysis:** Process your journal entries with OpenAI's GPT-4 to provide personalized insights and reflections
- **Audio Transcription:** Convert voice recordings to text using OpenAI's Whisper API
- **Sync Across Devices:** Store your data securely in our cloud database (Supabase)
- **App Improvement:** Analyze usage patterns to improve features (anonymized data only)
- **Account Management:** Authenticate your account and maintain your profile

# 4. Data Storage and Security

## 4.1 Where Your Data is Stored
- **Primary Storage:** Your data is stored securely using Supabase (hosted on AWS infrastructure)
- **Location:** Data centers in the United States
- **Encryption:** All data is encrypted in transit (TLS/SSL) and at rest (AES-256)

## 4.2 Security Measures
- Industry-standard encryption protocols
- Secure authentication with password hashing
- Regular security audits and updates
- Access controls and user authentication

# 5. Third-Party Services

We use the following third-party services that may process your data:

## 5.1 Supabase (Database & Storage)
- **Purpose:** Cloud database and file storage
- **Data Shared:** All your journal entries, photos, audio files, and profile information
- **Privacy Policy:** [https://supabase.com/privacy](https://supabase.com/privacy)

## 5.2 OpenAI (AI Analysis)
- **Purpose:** AI-powered insights and audio transcription
- **Data Shared:** Text from your journal entries and audio recordings
- **Privacy Policy:** [https://openai.com/policies/privacy-policy](https://openai.com/policies/privacy-policy)
- **Note:** OpenAI does not use your data to train their models

# 6. Data Sharing and Disclosure

We **DO NOT** sell, rent, or trade your personal information to third parties.

We may share your information only in these limited circumstances:
- **Service Providers:** With trusted partners (Supabase, OpenAI) solely to provide app functionality
- **Legal Compliance:** If required by law, court order, or government request
- **Protection of Rights:** To protect our rights, privacy, safety, or property
- **With Your Consent:** When you explicitly authorize us to share specific information

# 7. Your Privacy Rights

You have the right to:
- **Access:** Request a copy of all personal data we hold about you
- **Correction:** Update or correct inaccurate information
- **Deletion:** Request deletion of your account and all associated data
- **Data Portability:** Export your data in a structured format
- **Withdraw Consent:** Stop using the app at any time

To exercise these rights, contact us at: **hello@getmoora.app**

# 8. Data Retention

- **Active Accounts:** We retain your data as long as your account is active
- **Deleted Accounts:** Data is permanently deleted within 30 days of account deletion
- **Backups:** Deleted data may persist in backups for up to 90 days

# 9. Children's Privacy

Moora is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected data from a child under 13, please contact us immediately.

# 10. International Data Transfers

If you access Moora from outside the United States, your data will be transferred to and processed in the United States. By using the app, you consent to this transfer.

# 11. Do Not Track

Moora does **not** track users across third-party websites or apps. We do not respond to Do Not Track (DNT) signals.

# 12. Changes to This Privacy Policy

We may update this privacy policy from time to time. We will notify you of significant changes by:
- Updating the "Last Updated" date at the top of this policy
- Sending an in-app notification or email

Continued use of the app after changes constitutes acceptance of the updated policy.

# 13. Contact Us

If you have questions, concerns, or requests regarding this privacy policy:

**Email:** hello@getmoora.app  
**App Name:** Moora  
**Developer:** Gil Veloza

---

## Legal Compliance

This privacy policy complies with:
- Apple App Store Review Guidelines (Section 5.1.1)
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)
- Children's Online Privacy Protection Act (COPPA)

---

**Important:** This privacy policy must be accessible at a publicly available URL before submitting to App Store Connect.
`
  },
  es: {
    pageTitle: "Política de Privacidad para Moora",
    lastUpdated: "Última Actualización:",
    effectiveDate: "Fecha Efectiva:",
    date: "2 de enero de 2026",
    content: `
# 1. Introducción

Bienvenido a Moora ("nosotros" o "nuestro"). Respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad explica cómo recopilamos, usamos y protegemos tu información cuando usas nuestra aplicación móvil iOS.

# 2. Información que Recopilamos

## 2.1 Información que Proporcionas Directamente
- **Información de Cuenta:** Correo electrónico, nombre y contraseña (encriptada)
- **Datos de Perfil:** Metas personales y preferencias
- **Entradas de Diario:** Notas de texto, fotos y grabaciones de audio que creas
- **Contenido del Usuario:** Cualquier otro contenido que proporciones voluntariamente

## 2.2 Información Recopilada Automáticamente
- **Información del Dispositivo:** Tipo de dispositivo, versión del sistema operativo
- **Datos de Uso:** Funciones utilizadas, marcas de tiempo de las entradas
- **Metadatos de Archivos:** Fechas de creación, tamaños de fotos y audio

# 3. Cómo Usamos tu Información

Usamos tu información para:
- **Proporcionar Funcionalidad Principal:** Permitir diario, seguimiento de metas y reflexión personal
- **Análisis de IA:** Procesar tus entradas con GPT-4 de OpenAI para proporcionar insights personalizados
- **Transcripción de Audio:** Convertir grabaciones de voz a texto usando Whisper de OpenAI
- **Sincronización:** Almacenar tus datos de forma segura en nuestra base de datos en la nube
- **Mejora de la App:** Analizar patrones de uso para mejorar funciones (solo datos anonimizados)
- **Gestión de Cuenta:** Autenticar tu cuenta y mantener tu perfil

# 4. Almacenamiento y Seguridad de Datos

## 4.1 Dónde se Almacenan tus Datos
- **Almacenamiento Principal:** Tus datos se almacenan de forma segura usando Supabase (infraestructura AWS)
- **Ubicación:** Centros de datos en Estados Unidos
- **Encriptación:** Todos los datos están encriptados en tránsito (TLS/SSL) y en reposo (AES-256)

## 4.2 Medidas de Seguridad
- Protocolos de encriptación estándar de la industria
- Autenticación segura con hash de contraseñas
- Auditorías y actualizaciones de seguridad regulares
- Controles de acceso y autenticación de usuarios

# 5. Servicios de Terceros

Utilizamos los siguientes servicios de terceros que pueden procesar tus datos:

## 5.1 Supabase (Base de Datos y Almacenamiento)
- **Propósito:** Base de datos en la nube y almacenamiento de archivos
- **Datos Compartidos:** Todas tus entradas de diario, fotos, archivos de audio e información de perfil
- **Política de Privacidad:** [https://supabase.com/privacy](https://supabase.com/privacy)

## 5.2 OpenAI (Análisis de IA)
- **Propósito:** Insights con IA y transcripción de audio
- **Datos Compartidos:** Texto de tus entradas de diario y grabaciones de audio
- **Política de Privacidad:** [https://openai.com/policies/privacy-policy](https://openai.com/policies/privacy-policy)
- **Nota:** OpenAI no usa tus datos para entrenar sus modelos

# 6. Compartir y Divulgación de Datos

**NO vendemos, alquilamos ni intercambiamos** tu información personal con terceros.

Solo podemos compartir tu información en estas circunstancias limitadas:
- **Proveedores de Servicios:** Con socios de confianza (Supabase, OpenAI) únicamente para proporcionar funcionalidad
- **Cumplimiento Legal:** Si lo requiere la ley, orden judicial o solicitud gubernamental
- **Protección de Derechos:** Para proteger nuestros derechos, privacidad, seguridad o propiedad
- **Con tu Consentimiento:** Cuando autorizas explícitamente que compartamos información específica

# 7. Tus Derechos de Privacidad

Tienes derecho a:
- **Acceso:** Solicitar una copia de todos los datos personales que tenemos sobre ti
- **Corrección:** Actualizar o corregir información inexacta
- **Eliminación:** Solicitar la eliminación de tu cuenta y todos los datos asociados
- **Portabilidad de Datos:** Exportar tus datos en formato estructurado
- **Retirar Consentimiento:** Dejar de usar la app en cualquier momento

Para ejercer estos derechos, contáctanos en: **hello@getmoora.app**

# 8. Retención de Datos

- **Cuentas Activas:** Retenemos tus datos mientras tu cuenta esté activa
- **Cuentas Eliminadas:** Los datos se eliminan permanentemente dentro de 30 días
- **Copias de Seguridad:** Los datos eliminados pueden persistir en backups hasta 90 días

# 9. Privacidad de Menores

Moora no está destinada a usuarios menores de 13 años. No recopilamos intencionalmente información de menores de 13 años. Si crees que hemos recopilado datos de un menor de 13 años, contáctanos inmediatamente.

# 10. Transferencias Internacionales de Datos

Si accedes a Moora desde fuera de Estados Unidos, tus datos serán transferidos y procesados en Estados Unidos. Al usar la app, consientes esta transferencia.

# 11. No Rastreo

Moora **no rastrea** a los usuarios en sitios web o apps de terceros. No respondemos a señales Do Not Track (DNT).

# 12. Cambios a esta Política de Privacidad

Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos de cambios significativos mediante:
- Actualización de la fecha "Última Actualización" en la parte superior
- Envío de una notificación en la app o correo electrónico

El uso continuado de la app después de los cambios constituye la aceptación de la política actualizada.

# 13. Contáctanos

Si tienes preguntas, inquietudes o solicitudes sobre esta política de privacidad:

**Correo:** hello@getmoora.app  
**Nombre de la App:** Moora  
**Desarrollador:** Gil Veloza

---

## Cumplimiento Legal

Esta política de privacidad cumple con:
- Directrices de Revisión de la App Store de Apple (Sección 5.1.1)
- Reglamento General de Protección de Datos (GDPR)
- Ley de Privacidad del Consumidor de California (CCPA)
- Ley de Protección de la Privacidad en Línea de los Niños (COPPA)

---

**Importante:** Esta política de privacidad debe estar accesible en una URL pública antes de enviar a App Store Connect.
`
  },
  pt: {
    pageTitle: "Política de Privacidade para Moora",
    lastUpdated: "Última Atualização:",
    effectiveDate: "Data Efetiva:",
    date: "2 de janeiro de 2026",
    content: `
# 1. Introdução

Bem-vindo ao Moora ("nós" ou "nosso"). Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Esta política de privacidade explica como coletamos, usamos e protegemos suas informações quando você usa nosso aplicativo móvel iOS.

# 2. Informações que Coletamos

## 2.1 Informações que Você Fornece Diretamente
- **Informações da Conta:** E-mail, nome e senha (criptografada)
- **Dados do Perfil:** Metas pessoais e preferências
- **Entradas do Diário:** Notas de texto, fotos e gravações de áudio que você cria
- **Conteúdo do Usuário:** Qualquer outro conteúdo que você forneça voluntariamente

## 2.2 Informações Coletadas Automaticamente
- **Informações do Dispositivo:** Tipo de dispositivo, versão do sistema operacional
- **Dados de Uso:** Recursos usados, carimbos de data/hora das entradas
- **Metadados de Arquivos:** Datas de criação, tamanhos de fotos e áudio

# 3. Como Usamos Suas Informações

Usamos suas informações para:
- **Fornecer Funcionalidade Principal:** Permitir diário, acompanhamento de metas e reflexão pessoal
- **Análise de IA:** Processar suas entradas com GPT-4 da OpenAI para fornecer insights personalizados
- **Transcrição de Áudio:** Converter gravações de voz em texto usando Whisper da OpenAI
- **Sincronização:** Armazenar seus dados com segurança em nosso banco de dados na nuvem
- **Melhoria do App:** Analisar padrões de uso para melhorar recursos (apenas dados anonimizados)
- **Gerenciamento de Conta:** Autenticar sua conta e manter seu perfil

# 4. Armazenamento e Segurança de Dados

## 4.1 Onde Seus Dados são Armazenados
- **Armazenamento Principal:** Seus dados são armazenados com segurança usando Supabase (infraestrutura AWS)
- **Localização:** Centros de dados nos Estados Unidos
- **Criptografia:** Todos os dados são criptografados em trânsito (TLS/SSL) e em repouso (AES-256)

## 4.2 Medidas de Segurança
- Protocolos de criptografia padrão da indústria
- Autenticação segura com hash de senhas
- Auditorias e atualizações de segurança regulares
- Controles de acesso e autenticação de usuários

# 5. Serviços de Terceiros

Usamos os seguintes serviços de terceiros que podem processar seus dados:

## 5.1 Supabase (Banco de Dados e Armazenamento)
- **Propósito:** Banco de dados na nuvem e armazenamento de arquivos
- **Dados Compartilhados:** Todas as suas entradas de diário, fotos, arquivos de áudio e informações de perfil
- **Política de Privacidade:** [https://supabase.com/privacy](https://supabase.com/privacy)

## 5.2 OpenAI (Análise de IA)
- **Propósito:** Insights com IA e transcrição de áudio
- **Dados Compartilhados:** Texto de suas entradas de diário e gravações de áudio
- **Política de Privacidade:** [https://openai.com/policies/privacy-policy](https://openai.com/policies/privacy-policy)
- **Nota:** OpenAI não usa seus dados para treinar seus modelos

# 6. Compartilhamento e Divulgação de Dados

**NÃO vendemos, alugamos ou trocamos** suas informações pessoais com terceiros.

Só podemos compartilhar suas informações nestas circunstâncias limitadas:
- **Provedores de Serviços:** Com parceiros confiáveis (Supabase, OpenAI) apenas para fornecer funcionalidade
- **Conformidade Legal:** Se exigido por lei, ordem judicial ou solicitação governamental
- **Proteção de Direitos:** Para proteger nossos direitos, privacidade, segurança ou propriedade
- **Com Seu Consentimento:** Quando você autoriza explicitamente que compartilhemos informações específicas

# 7. Seus Direitos de Privacidade

Você tem direito a:
- **Acesso:** Solicitar uma cópia de todos os dados pessoais que temos sobre você
- **Correção:** Atualizar ou corrigir informações imprecisas
- **Exclusão:** Solicitar a exclusão de sua conta e todos os dados associados
- **Portabilidade de Dados:** Exportar seus dados em formato estruturado
- **Retirar Consentimento:** Parar de usar o app a qualquer momento

Para exercer esses direitos, entre em contato conosco em: **hello@getmoora.app**

# 8. Retenção de Dados

- **Contas Ativas:** Retemos seus dados enquanto sua conta estiver ativa
- **Contas Excluídas:** Os dados são excluídos permanentemente dentro de 30 dias
- **Backups:** Dados excluídos podem persistir em backups por até 90 dias

# 9. Privacidade de Menores

Moora não é destinado a usuários menores de 13 anos. Não coletamos intencionalmente informações de menores de 13 anos. Se você acredita que coletamos dados de um menor de 13 anos, entre em contato conosco imediatamente.

# 10. Transferências Internacionais de Dados

Se você acessar o Moora de fora dos Estados Unidos, seus dados serão transferidos e processados nos Estados Unidos. Ao usar o app, você consente com esta transferência.

# 11. Não Rastreamento

Moora **não rastreia** usuários em sites ou apps de terceiros. Não respondemos a sinais Do Not Track (DNT).

# 12. Alterações a Esta Política de Privacidade

Podemos atualizar esta política de privacidade ocasionalmente. Notificaremos você de mudanças significativas através de:
- Atualização da data "Última Atualização" no topo
- Envio de uma notificação no app ou e-mail

O uso continuado do app após as mudanças constitui aceitação da política atualizada.

# 13. Entre em Contato

Se você tiver perguntas, preocupações ou solicitações sobre esta política de privacidade:

**E-mail:** hello@getmoora.app  
**Nome do App:** Moora  
**Desenvolvedor:** Gil Veloza

---

## Conformidade Legal

Esta política de privacidade está em conformidade com:
- Diretrizes de Revisão da App Store da Apple (Seção 5.1.1)
- Regulamento Geral de Proteção de Dados (GDPR)
- Lei de Privacidade do Consumidor da Califórnia (CCPA)
- Lei de Proteção da Privacidade Online de Crianças (COPPA)

---

**Importante:** Esta política de privacidade deve estar acessível em uma URL pública antes de enviar para o App Store Connect.
`
  }
};
