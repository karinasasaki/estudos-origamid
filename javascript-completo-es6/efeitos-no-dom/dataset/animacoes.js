function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    const activeClass = "ativo";
    tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add(activeClass, direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      })
    })
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");

  if (accordionList.length) {
    const activeClass = "ativo";
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    })
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    //Forma alternativa
    /* const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth"
    }); */
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      })
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();