
//TO DO: render func

window.addEventListener("hashchange", (e) => {

    const urlHash = window.location.hash.substring(1);
    const urlHashSwitch = (Array.from((urlHash).matchAll("/")));
    switch (urlHashSwitch.length) {
        case 0 : renderPage(urlHash, mainTemplate, pagesContentsArray); 
    };
    }
);

const pagesContentsArray = [

    {
        id : "home",
        title: "welcome to the home page.",
        content: "I'm baby tattooed pitchfork kombucha, air plant craft beer direct trade chambray yr roof party organic street art vibecession. Knausgaard humblebrag trust fund gorpcore. Shabby chic direct trade photo booth truffaut, shoreditch portland coloring book etsy small batch asymmetrical. Literally poutine taxidermy vice.."
    },

    {
        id: "blog",
        title: "this will be the blog page.",
        links: [
            {   
                title: "this will be blog post 1",
                src: "/images/winebottle612x612.jpg",
            },
        ],
    },

    {
        id: "gifting",
        title: 'this is the gifting page',
        content: "Bodega boys forage edison bulb, pinterest venmo enamel pin viral portland tumblr four loko activated charcoal bushwick organic. Microdosing kogi small batch listicle marfa gorpcore, mlkshk fanny pack before they sold out mumblecore retro palo santo biodiesel air plant vibecession. Truffaut freegan adaptogen DIY. Fixie marxism vaporware, banjo unicorn listicle normcore actually hot chicken JOMO DIY. Butcher semiotics organic, succulents iceland pabst ramps. Mustache praxis 3 wolf moon af ethical copper mug."
    }
];

const section = document.querySelector("section");

const mainTemplate = document.querySelector("#main-template");

const clearPage = () => {
    //best (fastest) method to clear DOM:
    while (section.firstChild) section.removeChild(section.firstChild);
}

const renderPage = (pageID, template, array) => {
    clearPage();
    const section = document.querySelector("section");
    section.appendChild(template.content.cloneNode(true));

    const pageObj = array.find(item => item.id === pageID);

    if (pageObj === undefined) {
       
        title.innerText = `error, page does not exist.`;  

    } else  {

           if (pageObj.title) {
            const title = document.querySelector("#title"); 
            title.innerText = pageObj.title;
           }; 
    };
};

const pageLinks = document.querySelectorAll("a");
const pageLinksArray = Array.from(pageLinks);
pageLinksArray.forEach( (link) => link.addEventListener("click", (e) => {
    
    const pageID = e.target.attributes[0].value; 
    window.location.hash = `${pageID}`;
    renderPage(pageID, mainTemplate, pagesContentsArray);
})
);

renderPage("home", mainTemplate, pagesContentsArray);
window.location.hash = "home";