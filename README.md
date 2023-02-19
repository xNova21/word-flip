# Wordlu Infinite

## This project is deployed at

[Vercel](https://wordlu.vercel.app/)

## About this project

Game based in [Wordle](https://www.powerlanguage.co.uk/wordle/ ). 
 
<img src="https://media-exp1.licdn.com/dms/image/C4D22AQGPRdmPGVcvLA/feedshare-shrink_800/0/1642697285572?e=1646265600&v=beta&t=MK8iCmknehkMbqCD-NIllPQvkBtkO_ONk9o7XR0g734" alt=""/>
1.  Enter a word as a guess for the hidden target word.
 
2.  Any letters which are within the hidden target word are coloured in
    yellow.
    
3.  Any letters which match exactly the letter in the hidden target word
    are coloured green.
    
4.  Figure out a new candidate word as a guess for the hidden target
    word, and go back to Step 1.

Wordlu ∞ is in spanish.

## If you prefer to run locally

1.  `$ git clone https://github.com/xNova21/wordlu.git`
2.  `$ cd wordlu`
3.  `$ npm i`
4.  `npm start`

### !

Locally Wordlu will get a word from list of all valid words.
If you want to get words from less options you can create a Database with an array with your list and add the followind variables in a .env file.
Also should change the max number from Math.random at setPalabraBuena in Home component.

- `DB_User` Username of Database
- `DB_NAME` Name of Database
- `DB_PASSWORD` Password of Database
- `SALT` Number for BCrypt
- `SECRET_WORD` Word for BCrypt

## Tools and languages
<a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS3" width="40" height="40"/> </a>
<a href="https://git-scm.com/" target="_blank"> <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" width="40" height="40"/> </a>
<a href="https://github.com/" target="_blank"> <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="40" height="40"/> </a>
<a href="https://www.heroku.com/" target="_blank"> <img src="https://brand.heroku.com/static/media/heroku-logo-stroke-gradient.bb410472.svg" alt="Heroku" width="40" height="40"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5" width="40" height="40"/> </a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/245px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" width="40" height="40"/> </a>
<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" width="40" height="40"/> </a>
<a href="https://code.visualstudio.com/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png" alt="Visual Studio Code" width="40" height="40"/> </a>

