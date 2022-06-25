 model = {
    profile: {},
    details: {},
    buttonLang:{},
    lang:"",
    tabs:{},
    tabsContent: {}
}

controller = {
    init: function(){
        if(model.lang == ""){model.lang = "PL";}
        this.setProfile("Adam Ślęczkowski", "files/profilePicture.png", "files/tonp.png", "Salesforce CRM Developer", "https://www.linkedin.com/in/adam-%C5%9Bl%C4%99czkowski-389361209/");
        this.setDetails("San Escobar", "RR-OO-DDOO", "dużo przeróżnych", " a lot of various", "kilka", "several", "brak", "none", "owszem", "yes indeed", "bardzo!", "very!");
        this.setLangButton();
        this.setTabs();
        this.setTabsContent("Szkoła Podstawowa nr. 113 we Wrocławiu", "Gimnazjum w Józefosławiu", "LO im. Marii Konopnickiej w Warszawie", "Wojskowa Akademia Techniczna", "SGGW", "files/education.png",
        "Firma: Transition Technologies Science", "Stanowisko: Analityk Danych", "Lata: 2019-2021", "Company: Transition Technologies Science", "Role: Data Analyst", "(2019-2021)",
        "Firma: Cloobees", "Stanowisko: Salesforce/Vlocity Developer", "Lata: 2021-obecnie", "Company: Cloobees", "Role: Salesforce/Vlocity Developer", "(2021-currently)", "files/experience.png");
        view.render();
    },

    clearAll:function(){
        model = {
            profile: {},
            details: {},
            buttonLang:{},
            lang:model.lang,
            tabs:{},
            tabsContent: {}
        }
        document.getElementById("profile").innerHTML = "";
        document.getElementById("details").innerHTML = "";
        document.getElementById("lang-button").innerHTML = "";
        document.getElementById("tab").innerHTML = "";
    },

    ////////////////////////////////////////////////////////////////
    setLangButton: function(){
        var buttonLang = document.createElement("button");
        buttonLang.textContent = model.lang === "PL" ? "Switch to ENG" : "Switch to PL";
        buttonLang.style = "float:right";
        buttonLang.onclick = function(){
            model.lang = model.lang == "PL" ? "ENG" : "PL";
            controller.clearAll();
            controller.init();
        }
        model.buttonLang = buttonLang;
    },

    getLangButton:function(){
        return model.buttonLang;
    },

    ////////////////////////////////////////////////////////////////
    setProfile: function(profileName, picPath, cvPath, title, linkedin){

        var picture = document.createElement("img");
        picture.setAttribute("src", picPath);
        picture.className += " picture";

        var cv = document.createElement("a");
        cv.className = "button text";
        cv.setAttribute("href", cvPath);
        cv.setAttribute("download", "");
        cv.textContent = model.lang === "PL" ? "Pobierz CV" : "Download CV";
        var iconcv = document.createElement("i");
        iconcv.className = "ri-download-line";
        cv.appendChild(iconcv);

        var cvContainer = document.createElement("div");
        cvContainer.className = "middle";
        cvContainer.appendChild(cv);

        var pictureContainer = document.createElement("div");
        pictureContainer.className = "container";
        pictureContainer.appendChild(picture)
        pictureContainer.appendChild(cvContainer);
        model.profile.picture = pictureContainer;

        var profilLink = document.createElement("a");
        profilLink.setAttribute("href", linkedin);
        profilLink.setAttribute("target", "_blank");
        var iconLink = document.createElement("i");
        iconLink.className = "ri-linkedin-box-line";
        profilLink.appendChild(iconLink);


        var name1 = document.createElement("h2");
        name1.textContent = profileName;
        name1.className += " name";
        name1.appendChild(profilLink);

        var name2 = document.createElement("h3");
        name2.textContent = title;
        name2.className += " name";
        name2.setAttribute("style", "font-style: italic;")
        
        var name = document.createElement("div");
        name.appendChild(name1);
        name.appendChild(name2);
        model.profile.name = name;

    },

    getProfile: function(){
        return model.profile;
    },

    ////////////////////////////////////////////////////////////////
    setDetails: function(bPlace, bDate, thPL, thENG, psPL, psENG, frontPL, frontENG, backPL, backENG, happyPL, happyENG){
        var br = document.createElement("br");
        model.details.br1 = br;
        
        var birthPlace = document.createElement("p"); 
        birthPlace.textContent = model.lang === "PL" ? "Miejce urodzenia: " + bPlace : "Place of birth: " + bPlace;
        birthPlace.className = "details-text";
        model.details.birthPlace = birthPlace;

        var birthDate = document.createElement("p"); 
        birthDate.textContent = model.lang === "PL" ? "Data urodzenia: " + bDate : "Date of birth: " + bDate;
        birthDate.className = "details-text";
        model.details.birthDate = birthDate;

        var frontEndSkills = document.createElement("p");
        frontEndSkills.textContent = model.lang === "PL" ? "Talent do frontendu: " + frontPL : "Talent for frontend: " + frontENG;
        frontEndSkills.className = "details-text";
        model.details.frontEndSkills = frontEndSkills;

        var backEndSkills = document.createElement("p");
        backEndSkills.textContent = model.lang === "PL" ? "Talent do backendu: " + backPL : "Talent for backend: " + backENG;
        backEndSkills.className = "details-text";
        model.details.backEndSkills = backEndSkills;

        var thoughts = document.createElement("p"); 
        thoughts.textContent= model.lang === "PL" ? "Myśli: " + thPL : "Thoughts: " + thENG;
        thoughts.className = "details-text";
        model.details.thoughts = thoughts;

        var paranormalSkills = document.createElement("p");
        paranormalSkills.textContent = model.lang === "PL" ? "Zdolności paranormalne: " + psPL : "Paranormal skills: " + psENG;
        paranormalSkills.className = "details-text";
        model.details.paranormalSkills = paranormalSkills;

        var happy = document.createElement("p")
        happy.textContent = model.lang === "PL" ? "Szczęśliwy w życiu: " + happyPL : "Happy in life: " + happyENG;
        happy.className = "details-text";
        model.details.happy = happy;

    },

    getDetails: function(){
        return model.details;
    },

    ////////////////////////////////////////////////////////////////

    setTabs: function(){
        educationTab = document.createElement("button");
        educationTab.className = "tabbutton";
        educationTab.setAttribute("id", "educationTab");
        educationTab.textContent = model.lang === "PL" ? "Edukacja" : "Education";
        educationTab.onclick = function(){
            openTab('education')
        };
        model.tabs.educationTab = educationTab;

        experienceTab = document.createElement("button");
        experienceTab.className = "tabbutton";
        experienceTab.setAttribute("id", "experienceTab");
        experienceTab.textContent = model.lang === "PL" ? "Doświadczenie" : "Experience";
        experienceTab.onclick = function(){
            openTab('experience');
        };
        model.tabs.experienceTab = experienceTab;
    },

    getTabs: function(){
        return model.tabs;
    },
    //////////////////////////////////////////////////////

    setTabsContent: function(primarySchool, secondarySchool, highSchool, university1, university2, educationPic, ex1, ex2, ex3, ex1ENG, ex2ENG, ex3ENG, ex4,ex5, ex6, ex4ENG, ex5ENG, ex6ENG, exPic){
        var educationContent = document.createElement("div");
        educationContent.className = "tabcontent";
        educationContent.setAttribute("id", "education");

        educationContent.appendChild(document.createElement("br"));
        educationContent.appendChild(document.createElement("br"));

        var pSchool = document.createElement("p");
        pSchool.textContent = model.lang === "PL" ? "Szkoła podstawowa: " + primarySchool : "Primary school: " + primarySchool;
        educationContent.appendChild(pSchool);
        educationContent.appendChild(document.createElement("br"));

        var sSchool = document.createElement("p");
        sSchool.textContent = model.lang === "PL" ? "Gimnazjum: " + secondarySchool : "Secondary school: " + secondarySchool;
        educationContent.appendChild(sSchool);
        educationContent.appendChild(document.createElement("br"));

        var hSchool = document.createElement("p");
        hSchool.textContent = model.lang === "PL" ? "Liceum: " + highSchool : "High school: " + highSchool;
        educationContent.appendChild(hSchool);
        educationContent.appendChild(document.createElement("br"));

        var uni1 = document.createElement("p");
        uni1.textContent = model.lang === "PL" ? "Szkoła wyższa (2018-2019): " + university1 : "University (2019-2020): " + university1;
        educationContent.appendChild(uni1);
        educationContent.appendChild(document.createElement("br"));

        var uni2 = document.createElement("p");
        uni2.textContent = model.lang === "PL" ? "Szkoła wyższa (2019-obecnie): " + university2 : "University (2020-currently): " + university2;
        educationContent.appendChild(uni2);

        var eduPic = document.createElement("img");
        eduPic.setAttribute("src", educationPic);
        eduPic.className += " picture";
        educationContent.appendChild(eduPic);

        model.tabsContent.educationContent = educationContent;

        var experienceContent = document.createElement("div");
        experienceContent.className = "tabcontent";
        experienceContent.setAttribute("id", "experience");

        experienceContent.appendChild(document.createElement("br"));
        experienceContent.appendChild(document.createElement("br"));

        if(model.lang === "PL"){
            var experience1 = document.createElement("p");
            experience1.textContent = ex1;
            experienceContent.appendChild(experience1);

            var experience2 = document.createElement("p");
            experience2.textContent = ex2;
            experienceContent.appendChild(experience2);

            var experience3 = document.createElement("p");
            experience3.textContent = ex3;
            experienceContent.appendChild(experience3);

            experienceContent.appendChild(document.createElement("br"));
            experienceContent.appendChild(document.createElement("br"));

            var experience4 = document.createElement("p");
            experience4.textContent = ex4;
            experienceContent.appendChild(experience4);

            var experience5 = document.createElement("p");
            experience5.textContent = ex5;
            experienceContent.appendChild(experience5);

            var experience6 = document.createElement("p");
            experience6.textContent = ex6;
            experienceContent.appendChild(experience6);
        }
        else if(model.lang === "ENG"){
            var experience1 = document.createElement("p");
            experience1.textContent = ex1ENG;
            experienceContent.appendChild(experience1);

            var experience2 = document.createElement("p");
            experience2.textContent = ex2ENG;
            experienceContent.appendChild(experience2);

            var experience3 = document.createElement("p");
            experience3.textContent = ex3ENG;
            experienceContent.appendChild(experience3);

            experienceContent.appendChild(document.createElement("br"));
            experienceContent.appendChild(document.createElement("br"));

            var experience4 = document.createElement("p");
            experience4.textContent = ex4ENG;
            experienceContent.appendChild(experience4);

            var experience5 = document.createElement("p");
            experience5.textContent = ex5ENG;
            experienceContent.appendChild(experience5);

            var experience6 = document.createElement("p");
            experience6.textContent = ex6ENG;
            experienceContent.appendChild(experience6);
        }

        var expPic = document.createElement("img");
        expPic.setAttribute("src", exPic);
        expPic.className += " picture";
        experienceContent.appendChild(expPic);


        model.tabsContent.experienceContent = experienceContent;
        
    },

    getTabsContent: function(){
        return model.tabsContent;
    }
}

function openTab(tab){
    var i, tabsContent, tabButtons;
    
    tabsContent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabsContent.length; i++){
        tabsContent[i].style = "display : none";
    }

    tabButtons = document.getElementsByClassName("tabbutton");
    for(i = 0; i < tabButtons.length; i++){
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }
    
    console.log(tab+"Tab");
    document.getElementById(tab).style = "display : block";
    document.getElementById(tab+"Tab").className += " active";

}

view = {
    render: function() {
        document.getElementById("lang-button").append(controller.getLangButton());

        profileElements = controller.getProfile();
        for(let element in profileElements){
            document.getElementById("profile").append(profileElements[element]);
        }

        detailsElements = controller.getDetails();
        for(let element in detailsElements){
            document.getElementById("details").append(detailsElements[element]);
        }

        tabs = controller.getTabs();
        for(let tab in tabs){
            document.getElementById("tab").append(tabs[tab]);
        }

        tabsContent = controller.getTabsContent();
        for(let content in tabsContent){
            document.getElementById("tab").append(tabsContent[content]);
        }
    }
}

controller.init();