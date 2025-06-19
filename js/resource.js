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
            "Com a força dos vikings transformando cliques em conquistas virtuais. A saga da sua presença online começa conosco.",
          hero_button: "Nossos serviços",
          hero_button_header: "Falar com especialistas",
          hero_sfcc: "Projetos SFCC",
          hero_lp: "Landing pages",

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
          hero_linkedin_followers: "LinkedIn followers",
          hero_button: "Our services",
          hero_button_header: "Talk to experts",

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
