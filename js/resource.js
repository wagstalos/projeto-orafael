document.addEventListener("DOMContentLoaded", function () {
  i18next.init({
    lng: "pt-BR", // Idioma padrão
    resources: {
      "pt-BR": {
        translation: {
          quem_somos: "Quem somos",
          atuacao: "Atuação",
          servicos: "Projetos",
          contato: "Contato",
          address: "Endereço",
          empresa: "Empresa",
          hour: "Segunda à sexta das 08:00h às 18:00h",
          close: "Fechar",
          email: "*E-mail",
          carreira: "Carreira",
          footer_description:
            "Com a força dos vikings transformando cliques em conquistas.",
          back_to_top: "Voltar ao topo",

          hero_subtitle: "Bem-vindo à Valhalla Digital",
          hero_title:
            "Consultoria especializada em ferramentas Atlassian e processos.",
          hero_linkedin_followers: "seguidores no LinkedIn ",
          hero_description:
            "Atuamos como parceiros estratégicos no desenvolvimento e implementação de ferramentas como:",
          hero_button: "Nossos serviços",
          hero_button_header: "Falar com especialistas",

          about_subtitle: "Sobre",
          about_title: "Quem Sou",
          about_text1:
            "Especialista em ferramentas Atlassian, com foco em Jira, Confluence e Jira Service Management. Produzo conteúdos em português sobre gestão ágil e automação de processos.",
          about_text2:
            "Fundou a consultoria ORafaelOficial em 2021 e, desde então, vem construindo uma sólida carteira de clientes atendidos com excelência.",
          about_text3:
            "Com mais de 10 anos de experiência em implantação, troubleshooting e treinamento, ajudo equipes a melhorarem sua eficiência operacional.",
          about_text4: "+ 6 mil",
          about_text5: "Usuário treinados",
          about_text6: "+ 4 países",
          about_text7: "Atuando em clientes",
          about_text8:
            "Convidado pela Atlassian para ser creator de conteúdo e instrutor na plataforma oficial da Atlassian.",
          about_text9:
            "Especialista Atlassian, com duas certificações internacionais: ACP-120 e ACP-620.",
          about_button: "Acesse meu portal",

          contact_title:
            "Embarque nesta Jornada Épica com os Vikings Digitais!",
          contact_description:
            "Pronto para desbravar os mares digitais e conquistar territórios online? Estamos aqui para forjar estratégias digitais robustas e projetos incríveis. Entre em contato com os Vikings Digitais e prepare-se para uma aventura única na criação online!",
          contact_name: "*Nome:",
          contact_tel: "*Celular:",
          contact_company: "Empresa:",
          contact_msg: "Mensagem:",
          contact_send: "Enviar",
        },
      },
      en: {
        translation: {
          quem_somos: "About Us",
          atuacao: "Activities",
          servicos: "Projects",
          contato: "Contact",
          address: "Address",
          empresa: "Company",
          hour: "Monday to Friday from 8:00 am to 6:00 pm",
          close: "Close",
          email: "*Email",
          carreira: "Career",
          footer_description:
            "With the strength of the Vikings transforming clicks into achievements.",
          back_to_top: "Back to the top",
          hero_subtitle: "Welcome to Valhalla Digital",
          hero_title:
            "Specialized consultancy in Atlassian tools and processes.",
          hero_description:
            "We act as strategic partners in the development and implementation of tools such as:",
          hero_linkedin_followers: "LinkedIn followers",
          hero_button: "Our services",
          hero_button_header: "Talk to experts",

          about_subtitle: "About",
          about_title: "Who I Am",
          about_text1:
            "Specialist in Atlassian tools, with a focus on Jira, Confluence, and Jira Service Management. I create content in Portuguese about agile management and process automation.",
          about_text2:
            "Founded the ORafaelOficial consultancy in 2021 and has since built a solid portfolio of clients served with excellence.",
          about_text3:
            "With over 10 years of experience in implementation, troubleshooting, and training, I help teams improve their operational efficiency.",
          about_text4: "+ 6K",
          about_text5: "Users trained",
          about_text6: "+ 4 countries",
          about_text7: "Serving clients",
          about_text8:
            "Invited by Atlassian to be a content creator and instructor on Atlassian's official platform.",
          about_text9:
            "Atlassian specialist with two international certifications: ACP-120 and ACP-620.",
          about_button: "Visit my portal",

          contact_title: "Embark on this Epic Journey with Digital Vikings!",
          contact_description:
            "Ready to explore the digital seas and conquer territories online? We are here to forge robust digital strategies and incredible projects. Get in touch with Digital Vikings and get ready for a unique adventure in online creation!",
          contact_name: "*Name:",
          contact_tel: "*Phone:",
          contact_company: "Company:",
          contact_msg: "Message:",
          contact_send: "To send",
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
