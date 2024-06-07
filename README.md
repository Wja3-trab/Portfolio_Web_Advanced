# Web Advanced

## Portfolio

Zoals vermeld staat op canvas moeten de studenten een portfolio indienen voor het vak Web Advanced. In deze file kan de lezer een lijst van de onderwerpen die aan bod komen en waar ze werden gebruikt.

## Structuur

Er zijn twee projecten in deze repository. Namelijk een FormValidationPage en ToDoListProject. Ik heb de projecten simpel proberen te houden. 

Initiël had ik problemen met het opkomen van een idee. Dit reflecteerd zeker in het eerste project. Daar is het eerder een collectie van onderwerpen die snel in elkaar zijn gestoken. Ik was doelloos te werg gegaan en probeerde verschillende zaken.

De takenlijst is al iets doordachter. Er is wat meer structuur en de opbouw is ook logischer opgesteld. Desondanks dat het een simpele applicatie is, heb ik wat zaken proberen toe te voegen om het iets uitdagender te maken.

- PROJECTS
    - FormValidationPage
        - index.html
        - main.js
        - style.css
    - ToDoListProject
        - index.html
        - main.js
        - style.css
        - util.js

## FormValidationPage

### Elementen selecteren & manipuleren

Elementen worden over de gehele file gebruikt d.m.v. 'querySelector' en 'getElementById'. Bij 'querySelector' gebruik ik meestal de klasse als wijze om een element te selecteren. Er is een element met de klasse 'render'. In dat element probeer ik dynamisch informatie te renderen. Nadat een user het formulier ingeeft dan worden er andere elementen aangemaakt. De 'innerHTML' wordt gemanipuleerd. Er zijn meer voorbeelden hiervan in dit project. Ze zijn allemaal terug te vinden in het javascript file.

### Event aan een element koppelen & gebruiken van een constante
Het document bevat een eventListener wanneer alle DOMElement zijn geladen. Enkel dan kan de rest van de logice uitgevoerd worden. Er wordt een 'submit' eventListener toegevoegd aan het formulier. Deze bevat de functie 'printFormDetails'. Het formulier wordt in een constante variabel gezet door dit te selecteren met 'querySelector'. De meeste variablen in het project worden gedeclareerd met het sleutelwoord 'const'.

### Formulier valideren & Template literals
Nadat de user het 'submit' evenement activeerd dan wordt het formulier gevalideerd. Gebaseerd op input gebeurt er iets met het scherm. Dit wordt gedaan d.m.v. een if-else-statement. Als de input goed is dan worden er wat nieuwe elementen gegenereerd en kan de user een api-link ingeven en het resultaat hiervan displayen. Mocht het verkeerd zijn dan komt er een tekst die zegt dat de input ongeldig is. Bij een juiste input wordt er gebruik gemaakt van een template die de twee variabelen bevat en vormt de tekst van de constante details. Een andere user zal dezelfde template hebben maar met andere variablen. Dit is te vinden op lijn 55.

### Arrow function, Promise, Fetch, Async & Await
Alle functies in dit project is een arrow function. Sommige zoals 'testApi' zijn asynchroon en bevatten het sleutelwoor 'async' bij de declaratie. Deze functie maakt ook gebruik van het 'await'-woord omdat er een fetch call wordt gedaan naar een link die door de user wordt ingegeven. Dit moet een Api zijn. Om de 'Promise' te behandelen heb ik de '.then()' methode gebruikt. Daarin wordt er een check gedaan of het antwoord 'ok' is. Zoniet dan gaat dit opgevangen worden door de '.catch()' methode en vervolgens gelogged.

### JSON manipuleren en weergeven
De response van de fetch call wordt gemanipuleerd door de 'JSON.stringify' methode. Dit laat ons toe om de response data, javascript value, om te zetten naar een JSON string. Het kan zelfs indentingen toevoegen. Deze wordt dan vervolgens weergegeven in een 'pre' element. Het 'pre' element behoudt de formatering en structuur van een text.

## ToDoListProject
Veel onderdelen die al eerder vernoemd werden komen ook hier in voor. Dus ik zal ze in iets minder detail bespreken.

### Elementen selecteren, manipuleren, arrow function en een event koppelen aan een element
De elementen in dit project worden ook geselecteerd door 'querySelector' en 'getElementById' met als renditie de methode 'querySelectorAll'. Ik heb deze nieuwe toevoeging gebruikt in de functie 'addListenerToDelBtn', waar er over alle elementen wordt gegaan met de 'delBtn'-id. Bij ieder element wordt er een click-event gekoppeld. Wanneer die afgaat dan voert de code de arrow function 'delTask' uit. Bij de constante 'divToDelete' wordt er een klasse toegevoegd om een fadeOut animatie af te vuren.

### Formulier valideren, gebruiken van constante, template literals
In de functie 'submitTask' wordt er het formulier gevalideerd. De functie gaat na of er geen blank input element wordt ingediend. Als de enige characters spaties zijn dan gebeurt er niks. De waarde van het input element wordt opgeslagen in de constante 'tskInp'.

Template literals zijn toegepast in de functie 'taskTemplate'. De variabelen worden meegegeven als parameters. Op deze wijze hebben de elementen die gegenereerd worden een unieke id.

### Destructering, iteration over een array, consumer methods en Promise
Bij destructering had ik niet meteen een idee wat er mee te doen. Dus koos ik voor een basic arrow functie 'destructureTasks' die de constante 'tasksMap' deconstructureerd en deze filterd via de 'filter()' methode. Alle taken met een lengte meer dan 15 worden in een array gezet en gelogged. 

De '.map()' methode werd gebruikt in de functie 'updateList'. Er wordt ook een index bijgehouden om dit toe te voegen aan de methode taskTemplate. Ook is er een 'forEach' loop benut geweest om te itereren over de array 'lvls'.

In de file 'util.js' heb ik de laatste consumer methode 'reduce()' geimplementeerd. Deze was nodig om een sequentie van functies achter elkaar uit te voeren wachtende op de elkaar. Zo kon ik de fadeOut animatie volledig uit te laten runnen en dan vervolgens de volgende functies uit te voeren om de lijst en het scherm te vernieuwen. Als dit niet gedaan wordt dan zal de animatie niet runnen.

Rest operator werd gebruikt om parameters mee te geven in de functie 'runMultipleFunctionsWithInitDelay'. Spread operator implementeerde ik in bij de destructureTasks waar de values van drie arrays werden toegevoegd aan een nieuwe array.

### LocalStorage, flexbox, css animatie, self executing funtion, JSON manipuleren
In de functie 'checkLocalStorage' wordt er gecontroleerd of er een key aanwezig is in de localStorage. Als deze er niet is dan wordt ze aangemaakt en opgeslagen. Daarna wordt deze geparsed door 'JSON.parse' en meegegeven als resultaat van deze functie in een return-statement. Deze methode zet JSON om in een object zodat we het kunnen aanpassen en later opnieuw opslaan localStorage.

Voor de elementen met de klasses 'item' werd er flexbox toegepast in de vorm van 'space-around'. De css animaties zijn te vinden in de 'style.css' file. Ze noemen fadeIn en fadeOut. Telkens als er een item toegevoegd wordt dan is er een fadeIn effect. Wanneer een element wordt verwijderd dan zal de fadeOut animatie afgaan. Dit doen we door de opaciteit te veranderen.

De gehele functie waar alle logica in zit is een self executing function.


Sources:
- https://www.freecodecamp.org/news/how-to-use-javascript-array-reduce-method/
- https://stackoverflow.com/questions/41243468/javascript-array-reduce-with-async-await