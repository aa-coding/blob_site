
//TO DO: render func

window.addEventListener("hashchange", (e) => {

    const urlHash = window.location.hash.substring(1);
    renderPage(urlHash);

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

const clearPage = () => {
    //best (fastest) method to clear DOM:
    while (section.firstChild) section.removeChild(section.firstChild);
}

const renderPage = (pageID) => {

    clearPage();

    const pageTemplate = document.querySelector("#page-template");
    document.body.appendChild(pageTemplate.content.cloneNode(true));
    
    const title = document.querySelector("#title"); 

    const pageObj = pagesContentsArray.find(item => item.id === pageID);

    if (pageObj === undefined) {
       
        title.innerText = `error, page does not exist.`;  

    } else if (pageObj.links) {

        title.innerText = pageObj.title;

        pageObj.links.forEach( (link) => {
            
            
        });
    }

    else {

        title.innerText = pageObj.title;
    };

};

const pageLinks = document.querySelectorAll("a");
const pageLinksArray = Array.from(pageLinks);
pageLinksArray.forEach( (link) => link.addEventListener("click", (e) => {

    const pageID = e.target.id; 
    window.location.hash = `${pageID}`;
    renderPage(pageID);
})
);

renderPage("home");
