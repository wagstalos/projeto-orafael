document.addEventListener("DOMContentLoaded", function () {
  i18next.init({
    lng: "pt-BR", // Idioma padrão
    resources: {
      "pt-BR": {
        translation: {
          quem_somos: "Quem somos",
          atuacao: "Serviços",
          servicos: "Projetos",
          contato: "Contato",
          address: "Endereço",
          empresa: "Empresa",
          licensing: "licenciamento",
          hour: "Segunda à sexta das 08:00h às 17:00h",
          close: "Fechar",
          email: "*E-mail",
          carreira: "Carreira",
          back_to_top: "Voltar ao topo",

          hero_subtitle: "Bem-vindo à Valhalla Digital",
          hero_title:
            "Consultoria especializada em ferramentas Atlassian e processos ágeis",
          hero_linkedin_followers: "seguidores no LinkedIn ",
          hero_description:
            "Atuamos como parceiros estratégicos no desenvolvimento e implementação de ferramentas como:",
          hero_button: "Nossos serviços",
          hero_button_header: "Falar com especialistas",

          about_subtitle: "Sobre",
          about_title: "Quem Sou",
          about_text1:
            "Especialista em ferramentas Atlassian, com ênfase em Jira, Confluence e Jira Service Management. Desenvolve conteúdos digitais voltados à gestão ágil e à automação de processos.",
          about_text2:
            "Fundou a consultoria ORafaelOficial em 2021 e, desde então, vem construindo uma sólida carteira de clientes atendidos com excelência.",
          about_text3:
            "Com mais de 10 anos de experiência em implantação, troubleshooting e capacitação, atuo no apoio a equipes na melhoria da eficiência operacional.",
          about_text4: "+ 6 mil",
          about_text5: "Usuário treinados",
          about_text6: "+ 4 países",
          about_text7: "Atuando em clientes",
          about_text8:
            "Convidado pela Atlassian para ser creator de conteúdo e instrutor na plataforma oficial da Atlassian.",
          about_text9:
            "Especialista Atlassian, com duas certificações internacionais: ACP-120 e ACP-620.",
          about_button: "Acesse meu portal",

          company_subtitle: "Nossa empresa",
          company_title: "Quem Somos",
          company_description:
            "Nosso foco é ajudar empresas a adotarem metodologias ágeis, transformando a forma como trabalham e colaboram.",
          company_btn: "Solicite uma consultoria gratuita",
          company_mission: "Nossa missão",
          company_mission_text:
            "Nossa missão é integrar a operação de TI, a gestão de produtos e o desenvolvimento de software, criando fluxos de trabalho ágeis e eficientes, que conectam equipes de forma colaborativa.",
          company_processes: "Processos",
          company_processes_text:
            "Nós automatizamos processos, centralizamos a comunicação e otimizamos a gestão do conhecimento, promovendo uma evolução contínua nos processos internos.",

          contact_title: "Fale conosco",
          contact_description: "Estamos ansiosos para atendê-lo.",
          contact_service: "Atendimento",
          contact_company: "Nosso escritório:",
          contact_msg: "Mensagem:",
          contact_send: "Enviar",
          contact_hour: "Segunda à sexta das 08:00h às 17:00h",

          footer_wps: "Desenvolvido por",
          footer_media: "Redes Sociais",
          footer_description:
            "Fundamentada em valores de integridade e excelência.",
        },
      },
      en: {
        translation: {
          quem_somos: "About Us",
          atuacao: "Services",
          servicos: "Projects",
          contato: "Contact",
          address: "Address",
          empresa: "Company",
          licensing: "Licensing",
          hour: "Monday to Friday from 8:00 am to 6:00 pm",
          close: "Close",
          email: "*Email",
          carreira: "Career",

          back_to_top: "Back to the top",
          hero_subtitle: "Welcome to Valhalla Digital",
          hero_title:
            "Specialized consultancy in Atlassian tools and processes.",
          hero_description:
            "We act as strategic partners in the development and implementation of solutions, such as:",
          hero_linkedin_followers: "LinkedIn followers",
          hero_button: "Our services",
          hero_button_header: "Talk to experts",

          about_subtitle: "About",
          about_title: "Who I Am",
          about_text1:
            "Specialist in Atlassian tools, with a focus on Jira, Confluence, and Jira Service Management.Develops digital content focused on agile management and process automation..",
          about_text2:
            "Founded the ORafaelOficial consultancy in 2021 and has since built a solid portfolio of clients served with excellence.",
          about_text3:
            "With over 10 years of experience in implementation, troubleshooting, and training, I support teams in improving operational efficiency.",
          about_text4: "+ 6K",
          about_text5: "Users trained",
          about_text6: "+ 4 countries",
          about_text7: "Serving clients",
          about_text8:
            "Invited by Atlassian to be a content creator and instructor on Atlassian's official platform.",
          about_text9:
            "Atlassian specialist with two international certifications: ACP-120 and ACP-620.",
          about_button: "Visit my portal",

          company_subtitle: "Our Company",
          company_title: "About Us",
          company_description:
            "Our focus is to help companies adopt agile methodologies, transforming the way they work and collaborate.",
          company_btn: "Request a free consultation",
          company_mission: "Our Mission",
          company_mission_text:
            "Our mission is to integrate IT operations, product management, and software development, creating agile and efficient workflows that connect teams collaboratively.",
          company_processes: "Processes",
          company_processes_text:
            "We automate processes, centralize communication, and optimize knowledge management, promoting continuous improvement in internal operations.",

          contact_title: "Contact us",
          contact_description: "We look forward to serving you.",
          contact_service: "Service",
          contact_company: "Our office",
          contact_msg: "Message:",
          contact_send: "To send",
          contact_hour: "Monday to Friday from 8:00 am to 5:00 pm",

          footer_wps: "Developed by:",
          footer_media: "Social media",
          footer_description: "Founded on values of integrity and excellence.",
        },
      },
    },
  });

  // Função para mudar o idioma quando o usuário selecionar um novo idioma
  document
    .getElementById("selectLanguage")
    .addEventListener("change", function () {
      const newLanguage = this.value;
      i18next.changeLanguage(newLanguage);
    });

  // Função para atualizar a tradução quando o idioma é alterado
  i18next.on("languageChanged", () => {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.textContent = i18next.t(key);
      // console.log(key, element.textContent);
    });
  });
});
