export const projectsList = [
    {
        id: 0,
        title: 'BE SMART BUY ART',
        screenshot: '/images/artshop.png',
        icons: '/images/allicons.png',
        languages: ['HTML5', 'CSS3', 'Javascript (ES6)', 'React', 'REST-api', 'MongoDB'],
        mockups: '/mockups/bsbaResp.png',
        screens: [
            { screenSmall: '/screens/bsba.png', screenBig: '/screens/bsbaBig.png' },
            { screenSmall: '/screens/bsba1.png', screenBig: '/screens/bsba1Big.png' },
            { screenSmall: '/screens/bsba2.png', screenBig: '/screens/bsba2Big.png' }
        ],
        github: 'https://github.com/Noud63/besmartbuyart-react',
        github2: '',
        description: `<p>
                      Be Smart Buy Art is an art webshop with the basic features of an e-commerce webshop.<br />
                      There is an introduction page and a page that lists all the products. You can add products to a shopping cart, you can like certains items,
                      and eventually purchase an item on the checkout page. You can register and/or login as a regular customer.<br /><br />

                      The application is built with React (create-react-app) and using react-hooks wich makes it possible to manage state within functional components.<br />
                      Unlike many other projects this application has a backend aswell. The backend part is responsible for connecting and fetching data from a MongoDB database collection,
                      and taking care of user registration and user login with validation. The user information is stored in a MongoDb database collection. For the backend I used MongoDB, Express, Node.js and Mongoose.
                      The application is responsive.
                      </p>`
    },
    {
        id: 1,
        title: 'COUNTRIES OF EUROPE',
        screenshot: '/images/europa.png',
        icons: '/images/allicons.png',
        languages: ['HTML5', 'CSS3', 'Javascript (ES6)', 'React', 'REST-api', 'MongoDB'],
        mockups: '/mockups/europeResp.png',
        screens: [
            { screenSmall: '/screens/europe.png', screenBig: '/screens/europeBig.png' },
            { screenSmall: '/screens/europe1.png', screenBig: '/screens/europe1Big.png' },
            { screenSmall: '/screens/europe2.png', screenBig: '/screens/europe2Big.png' }
        ],
        github: 'https://github.com/Noud63/countriesineurope',
        github2: 'https://noud63.github.io/europe/',
        description: `<p>Countries of Europe introduces you to all the countries in Europe.
                      There is some brief information about all the 46 countries. The capital city, number of inhabitants, language,  currency and more.<br />
                      There is a search function to find a specific country and the current weather report of the capitals.
                      A map of europe so you can see where a specific country is located.<br /><br />
                      There are three versions of this app.
                      The first is written in Vanilla Javascript, the second version is built with React and the third version
                      is built in React with a backend. The data in the latter version is fetched from a MongoDB database collection.
                      For the backend I used MongoDB, Express, Node.js and Mongoose.
                      The weather forcast data is fetched from the Openweathermap api. The application is responsive.</p>`
    },
    {
        id: 2,
        title: 'QUIZ',
        screenshot: '/images/quiz.png',
        icons: '/images/basicicons.png',
        languages: ['HTML5', 'CSS3', 'Javascript (ES6)'],
        mockups: '/mockups/quizResp.png',
        screens: [
            { screenSmall: '/screens/quiz.png', screenBig: '/screens/quizBig.png' },
            { screenSmall: '/screens/quiz1.png', screenBig: '/screens/quiz1Big.png' },
            { screenSmall: '/screens/quiz2.png', screenBig: '/screens/quiz2Big.png' }
        ],
        github: 'https://github.com/Noud63/Quiz',
        github2: 'https://noud63.github.io/Quiz/',
        description: `Vanilla Javascript Quiz App<br />
                      Test your general knowledge by answering 30 multiple choice questions.`
    },
    {
        id: 3,
        title: 'TAKE A BREAK',
        screenshot: '/images/relax.png',
        icons: '/images/basicicons.png',
        languages: ['HTML5', 'CSS3', 'Javascript(ES6)'],
        mockups: '/mockups/takeabreakResp.png',
        screens: [
            { screenSmall: '/screens/relaxe.png', screenBig: '/screens/relaxeBig.png' },
            { screenSmall: '/screens/relaxe2.png', screenBig: '/screens/relaxe2Big.png' },
            { screenSmall: '/screens/relaxe1.png', screenBig: '/screens/relaxe1Big.png' }
        ],
        github: 'https://github.com/Noud63/Relax',
        github2: 'https://noud63.github.io/Relax/',
        description: `Relax App build with Vanilla Javascript<br />
                    The circle grows and shrinks with every breath you take.<br/>
                    The white dot orbits the circle in a time span of fifteen seconds.<br />
                    The animation is a javascript/css combination.<br />
                    You can choose between two themes and three different background ambient sounds.<br />
                    The application is responsive.`
    },
    {
        id: 4,
        title: 'BUDGET CONTROLLER',
        screenshot: '/images/budgetapp.png',
        icons: '/images/basicicons.png',
        languages: ['HTML5', 'CSS3', 'Javascript(ES6)'],
        mockups: '/mockups/budgetapp2Resp.png',
        screens: [{ screenSmall: '/screens/budgetapp.png', screenBig: '/screens/budgetappBig.png' },
        { screenSmall: '/screens/budgetapp1.png', screenBig: '/screens/budgetapp1Big.png' },
        { screenSmall: '/screens/budgetapp2.png', screenBig: '/screens/budgetapp2Big.png' }
        ],
        github: 'https://github.com/Noud63/income-and-expenses',
        github2: 'https://incomeandexpences.netlify.app/',
        description: `<p>Budgetapp in vanilla Javascript.<br />
                      Using the MVC design pattern ensuring data privacy through encapsulation and separation of concerns.`
    },
    {
        id: 5,
        title: 'SEARCH RECIPE',
        screenshot: '/images/food.png',
        icons: '/images/basicresticons.png',
        languages: ['HTML5', 'CSS3', 'Javascript (ES6)', 'REST-api'],
        mockups: '/mockups/forkifyResp.png',
        screens: [{ screenSmall: '/screens/foodapi.png', screenBig: '/screens/foodapiBig.png' },
        { screenSmall: '/screens/foodapi2.png', screenBig: '/screens/foodapi2Big.png' },
        { screenSmall: '/screens/foodapi3.png', screenBig: '/screens/foodapi3Big.png' }],
        github: 'https://github.com/Noud63/forkify',
        github2: 'https://what-do-we-eat2.netlify.app/',
        description: `Recipe Search Desktop App build with javascript ES6 modules, Webpack and Babel.<br />
                      Simple Food Api with a limited number of search terms.<br />
                      Allowed methods are GET and POST.<br />
                      Great for practice purposes.`

    },
    {
        id: 6,
        title: 'DUTCH FOOTBALL LEAGUE',
        screenshot: '/images/eredivisie.png',
        icons: '/images/basicreactresticons.png',
        languages: ['HTML5', 'CSS3', 'Javascript (ES6)', 'React', 'REST-api'],
        mockups: '/mockups/eredivisieResp.png',
        screens: [{ screenSmall: '/screens/eredivisie.png', screenBig: '/screens/eredivisieBig.png' },
        { screenSmall: '/screens/eredivisie1.png', screenBig: '/screens/eredivisie1Big.png' },
        { screenSmall: '/screens/eredivisie2.png', screenBig: '/screens/eredivisie2Big.png' }],
        github: 'https://github.com/Noud63/eredivisie',
        github2: 'https://noud63.github.io/eredivisie/',
        description: `Dutch Football League App build with React and Football Api(https://api.football-data.org)<br />
                      `
    },
    {
        id: 7,
        title: 'ART IN AMSTERDAM',
        screenshot: '/images/artinamsterdam.png',
        icons: '/images/basicresticons.png',
        languages: ['HTML5', 'CSS3', 'Javascript( ES6)', 'REST-api'],
        mockups: '/mockups/artinamsterdamResp.png',
        screens: [{ screenSmall: '/screens/artinamsterdam.png', screenBig: '/screens/artinamsterdamBig.png' },
        { screenSmall: '/screens/artinamsterdam1.png', screenBig: '/screens/artinamsterdam1Big.png' },
        { screenSmall: '/screens/artinamsterdam2.png', screenBig: '/screens/artinamsterdam2Big.png' }],
        github: 'https://github.com/Noud63/Art-in-Amsterdam',
        github2: 'https://noud63.github.io/Art-in-Amsterdam/',
        description: `Art in Amsterdam App built with Javascript and Leaflet OpenStreetMap.<br />
                      Find your art hotspots in Amsterdam<br />
                      Museums, art galleries, public art <br />
                      The app is responsive`
    },
    {
        id: 8,
        title: 'PIG GAME',
        screenshot: '/images/piggame.png',
        icons: '/images/basicicons.png',
        languages: ['HTML5', 'CSS3', 'Javascript (ES6)'],
        mockups: '/mockups/piggameResp.png',
        screens: [{ screenSmall: '/screens/piggame.png', screenBig: '/screens/piggameBig.png' },
            { screenSmall: '/screens/piggame1.png', screenBig: '/screens/piggame1Big.png' },
            { screenSmall: '/screens/piggame2.png', screenBig: '/screens/piggame2Big.png' }],
        github: 'https://github.com/Noud63/Pig-game',
        github2: '',
        description: `Vanilla Javascript Pig Game Desktop App.`
    },
    {
        id: 9,
        title: 'NOUD VAN DUN',
        screenshot: '/images/noudvandun.png',
        icons: '/images/basicicons.png',
        languages: ['HTML5', 'CSS3', 'Javascript (ES6)'],
        mockups: '/mockups/noudvandunResp.png',
        screens: [{ screenSmall: '/screens/noudvandun.png', screenBig: '/screens/noudvandunBig.png' },
            { screenSmall: '/screens/noudvandun1.png', screenBig: '/screens/noudvandun1Big.png' },
            { screenSmall: '/screens/noudvandun2.png', screenBig: '/screens/noudvandun2Big.png' }],
        github: 'https://github.com/Noud63/noudvandun',
        github2: 'http://www.noudvandun.com',
        description: `My own personal Web App is all about contemporary art and more.`
    },
    {
        id: 10,
        title: 'GOTHIC TAC TOE',
        screenshot: '/images/gothictactoe.png',
        icons: '/images/basicicons.png',
        languages: ['HTML5', 'CSS3', 'Javascript (ES6)'],
        mockups: '/mockups/gothictactoeResp.png',
        screens: [{ screenSmall: '/screens/gothictactoe.png', screenBig: '/screens/gothictactoeBig.png' },
        { screenSmall: '/screens/gothictactoe1.png', screenBig: '/screens/gothictactoe1Big.png' },
        { screenSmall: '/screens/gothictactoe2.png', screenBig: '/screens/gothictactoe2Big.png' }],
        github: 'https://github.com/Noud63/Gothic-Tac-Toe',
        github2: 'https://gothic-tac-toe.netlify.app/',
        description: `Gothic-Tac-Toe desktop game built with Javascript.<br />
                      When clicking the view code button you'll see the web-app version.<br />
                      I also converted this web-app to a desktop-app with electron.<br />
                      One of the drawbacks was that the converted file is rather large.<br/>
                      The thumbs below show the app in it's own browserwindow created by Electron.`
    },
    {
        id: 11,
        title: 'WEATHER FORECAST',
        screenshot: '/images/weatherapp.png',
        icons: '/images/basicresticons.png',
        languages: ['HTML5', 'CSS3', 'Javascript (ES6)', 'REST-api'],
        mockups: '/mockups/weatherappResp.png',
        screens: [{ screenSmall: '/screens/weatherapp.png', screenBig: '/screens/weatherappBig.png' },
            { screenSmall: '/screens/weatherapp1.png', screenBig: '/screens/weatherapp1Big.png' },
            { screenSmall: '/screens/weatherapp2.png', screenBig: '/screens/weatherapp2Big.png' }],
        github: 'https://github.com/Noud63/weather-app',
        github2: 'https://noud63.github.io/weather-app/',
        description: `Weather app built with Javascript ES6 modules, webpack and babel<br />
                       Openweathermap REST-api. (https://openweathermap.org/)<br />
                       With Search bar to search for weather conditions world wide.
                       Showing Current weather, tomorrows forecast and the sunrise and sunset (CEST).
                       Toggle Celsius and Fahrenheit.<br />
                       Default input parameter set to Amsterdam.`
    },
    {
        id: 12,
        title: 'PERSONAL DATABASE',
        screenshot: '/images/personaldatabase.png',
        icons: '/images/basicicons.png',
        languages: ['HTML5', 'CSS3', 'Javascript (ES6)'],
        mockups: '/mockups/databaseResp.png',
        screens: [{ screenSmall: '/screens/database.png', screenBig: '/screens/databaseBig.png' },
        { screenSmall: '/screens/database1.png', screenBig: '/screens/database1Big.png' },
        { screenSmall: '/screens/database2.png', screenBig: '/screens/database2Big.png' }],
        github: 'https://github.com/Noud63/contactlist',
        github2: '',
        description: `Persons database desktop app.<br />
                      Vanilla Javascript ES6 modules`
    },
    {
        id: 13,
        title: 'WHAT\'S ON YOUR MIND',
        screenshot: '/images/whatsonyourmind.png',
        icons: '/images/basicicons.png',
        languages: ['HTML5', 'CSS3', 'Javascript (ES6)'],
        mockups: [],
        screens: [],
        github: 'https://github.com/Noud63/MessageBox',
        github2: 'https://noud63.github.io/MessageBox/',
        description: `Vanilla javascript Message Box<br />`
    },
    {
        id: 14,
        title: 'REGISTRATION',
        screenshot: '/images/register.png',
        icons: '/images/basicicons.png',
        languages: ['HTML5', 'CSS3', 'Javascript (ES6)'],
        mockups: '/mockups/registerformResp.png',
        screens: [{ screenSmall: '/screens/register.png', screenBig: '/screens/registerBig.png' },
        { screenSmall: '/screens/register1.png', screenBig: '/screens/register1Big.png' },
        { screenSmall: '/screens/register2.png', screenBig: '/screens/register2Big.png' }],
        github: 'https://github.com/Noud63/Register-form',
        github2: 'https://signupandvalidate.netlify.app/',
        description: `Vanilla javascript registration form with validation.`
    },
    {
        id: 15,
        title: 'TO-DO',
        screenshot: '/images/todo.png',
        icons: '/images/basicicons.png',
        languages: ['HTML5', 'CSS3', 'Javascript (ES6)'],
        mockups: '/mockups/todoResp.png',
        screens: [{ screenSmall: '/screens/todo.png', screenBig: '/screens/todoBig.png' },
        { screenSmall: '/screens/todo1.png', screenBig: '/screens/todo1Big.png' },
        { screenSmall: '/screens/todo2.png', screenBig: '/screens/todo2Big.png' }],
        github: 'https://github.com/Noud63/ToDoApp',
        github2: 'https://todo-do-do.netlify.app/',
        description: `Yeah, yeah, a  ToDo app<br/>
                      In my oppinion a little underestimated as a, for beginners, 
                      valuable inroduction to CRUD applications.`
    },

]