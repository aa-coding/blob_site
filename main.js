
//TO DO: render func
// test comment
window.addEventListener("hashchange", (e) => {

    const urlHash = window.location.hash.substring(1);
    const urlHashSwitch = (Array.from((urlHash).matchAll("/")));
    switch (urlHashSwitch.length) {
        case 0 : 
            renderMainPage(urlHash); 
            break;
        case 1 : 
            renderBlogPage(window.location.hash.substring(6));
            break; 
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
                pageID: "post1",
                title: "this will be blog post 1",
                src: "/images/winebottle612x612.jpg",
            },
            {
                pageID: "post2",
                title: "this will be blog post 2",
                src: "/images/winebottle612x612.jpg",
            }
        ],
    },

    {
        id: "gifting",
        title: 'this is the gifting page',
        content: "Bodega boys forage edison bulb, pinterest venmo enamel pin viral portland tumblr four loko activated charcoal bushwick organic. Microdosing kogi small batch listicle marfa gorpcore, mlkshk fanny pack before they sold out mumblecore retro palo santo biodiesel air plant vibecession. Truffaut freegan adaptogen DIY. Fixie marxism vaporware, banjo unicorn listicle normcore actually hot chicken JOMO DIY. Butcher semiotics organic, succulents iceland pabst ramps. Mustache praxis 3 wolf moon af ethical copper mug."
    }
];

const blogPostsArray = [

    {
        pageID: "post1",
        title: "Blog Post 1",
        src: "/images/winebottle612x612.jpg",
        content: "Hammock godard stumptown keytar beard XOXO. Hell of portland authentic YOLO. Fingerstache hexagon gatekeep knausgaard, four dollar toast synth paleo plaid offal. Gatekeep artisan sustainable freegan etsy polaroid humblebrag. Marxism grailed kinfolk, activated charcoal butcher blue bottle bicycle rights vice williamsburg ethical yuccie. 90's retro echo park, live-edge flexitarian meggings cupping. Shoreditch plaid literally, pickled vice 90's banh mi offal PBR&B small batch roof party."
    },

    {
        pageID: "post2",
        title: "Blog Post 2",
        src: "/images/winebottle612x612.jpg",
        content: "Trust fund XOXO cardigan irony PBR&B. Vinyl cardigan kinfolk, etsy big mood raw denim vegan swag bicycle rights sustainable hexagon. Enamel pin lumbersexual DIY la croix knausgaard. Godard shabby chic paleo, readymade next level craft beer irony tbh kale chips drinking vinegar pitchfork tousled bicycle rights whatever austin."
    },
];

const section = document.querySelector("section");

const clearPage = () => {
    //best (fastest) method to clear DOM:
    while (section.firstChild) section.removeChild(section.firstChild);
}

const renderBlogPage = (pageID) => {
    
    clearPage();
    
    const blogPostTemplate = document.querySelector("#blog-post-template");
    const section = document.querySelector("section");
    section.appendChild(blogPostTemplate.content.cloneNode(true));
    const pageObj = blogPostsArray.find(item => item.pageID === pageID);
    const blogDiv = document.querySelector("#blog-post");
    blogDiv.querySelector("span").innerText = pageObj.title;
    blogDiv.querySelector("img").src = pageObj.src;
    blogDiv.querySelector("p").innerText = pageObj.content;

};

const renderMainPage = (pageID) => {
    
    clearPage();

    const mainTemplate = document.querySelector("#main-template");
    const section = document.querySelector("section");
    section.appendChild(mainTemplate.content.cloneNode(true));
    const contentDiv = document.querySelector("#content");

    const pageObj = pagesContentsArray.find(item => item.id === pageID);

    if (pageObj === undefined) {
       
        title.innerText = `error, page does not exist.`;  

    } else  {

           if (pageObj.title) {
            const title = document.querySelector("#title"); 
            title.innerText = pageObj.title;
           }; 
           if (pageObj.content) {
                const paragraph = document.createElement('p');
                paragraph.innerText = pageObj.content;
                section.appendChild(paragraph);
           };
           if (pageObj.links) {
            pageObj.links.forEach( (link) => {
                const linkDivTemplate = document.querySelector("#post-link-template");
                const blogPostlink = linkDivTemplate.content.cloneNode(true);
                const linkTitle = blogPostlink.querySelector("span");
                const linkImg = blogPostlink.querySelector("img");
                const postLinkDiv = blogPostlink.querySelector("div");
                linkTitle.innerText = link.title; 
                linkImg.src = link.src;
                postLinkDiv.classList.add(link.pageID);
                linkImg.classList.add(link.pageID);
                linkTitle.classList.add(link.pageID);
                contentDiv.appendChild(blogPostlink);
                //ADD EVENT LISTENER TO CHILD OF DOCUMENT FRAGMENT (linkDiv), because only its children are added, not its event handlers!
                postLinkDiv.addEventListener("click", (e) => {
                    renderBlogPage(e.target.attributes.class.value);
                    window.location.hash = `blog/${e.target.attributes.class.value}`;
                });
            } );
            
           };
    };
};

const pageLinks = document.querySelectorAll("a");
const pageLinksArray = Array.from(pageLinks);
pageLinksArray.forEach( (link) => link.addEventListener("click", (e) => {
    
    const pageID = e.target.attributes[0].value; 
    window.location.hash = `${pageID}`;
    renderMainPage(pageID);
})
);

renderMainPage("home");
window.location.hash = "home";