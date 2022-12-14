# TechStore-grupp1


Länk till repot: https://github.com/aljer80/TechStore-grupp1.git

<b>Kort beskrivning av projektet</b> <br>
Projektet är att bygga en e-handelssida till ett nystartat företag som säljer teknikprylar. Företaget heter TechStore. Sidan är byggd utifrån en given kravspecifikation.

<b>Avsteg från kravspecen</b> <br> 
Vi har valt att avvika från kravspecifikationen lite grann. Enligt mockup bilderna har telefondivarna en svagt gråaktig bakgrundsfärg, men vi valde att ha en vit bakgrundsfärg för att det blev snyggare. Storleken på divarna var inte heller fast utan styrdes av innehållet. Vi tyckte att det blev snyggare och mer enhetligt med en minimumbredd på divarna. Då blir de lika breda om inte innehållet kräver mer utrymme. Med nuvuarande innehåll blir divarna lika breda. 

Vi valde även att göra en egen HTML-sida för tackmeddelande och bekräftelse på köpet istället för att göra en pop up då det är snyggare och de flesta användare tycker att pop ups är irriterande. <br>
<br>
<b>Betyg:</b>
Vi satsar på G <br>

<b>G-krav</b> <br>
Navigationsbar:<br>
Hemsidan skall innehålla en fixerad navigationsbar längst upp på sidan som går hela vägen från vänster till höger.<br>
Till vänster i navigationsbaren skall det finnas en titel (TechStore) som skall vara klickbar, ett klick på titeln tar användaren till startsidan.<br>
Till höger i navigationsbaren skall det finnas en kundvagnsknapp som skall vara klickbar, ett klick på knappen tar användaren till kundvagnssidan.<br>
När en produkt läggs till i kundvagnen skall detta reflekteras med att det visas en siffra intill kundvagnsknappen som reflekterar antalet produkter i kundvagnen.<br>

Startsida:<br>
Startsidan skall lista produkterna som finns i products.json filen.<br>
Varje presentationsyta för produkterna skall ta upp ungefär hela höjden av skärmen och presentera all produktinformation.<br>
Det skall även, för varje produkt, finnas en knapp för att lägga till produkterna i kundvagnen.<br>
Produkterna som har lags till i kundvagnen skall sparas i localStorage så det är möjligt att komma åt informationen från alla sidor.<br>

Kundvagnssida:<br>
Kundvagnssidan skall lista produkterna som användaren har lagt till i kundvagnen.<br>
Listan skall vara horizontell och centrerad.<br>
Det ska gå att se flera produkter utan att behöva skrolla på sidan.<br>
Varje produkt i listan skall visa bilden, titeln, priset och en knapp för att ta bort produkten ur kundvagnen.<br>
Nedanför listan skall det finnas ett totalbelopp samt en knapp för att slutföra köpet.<br>
Knappen för att slutföra köpet skall, vid klickning, visa en bekräftelse på köpet i en popup.<br>

Övrigt: <br>
Hemsidan skall vara responsiv, dvs den skall gå att öppna på en mobil, en surfplatta och en datorskärm.<br>
Hemsidan skall efterlikna bilderna som finns i mockup-mappen (inklusive samtliga färger, font-typ, textstorlek osv).<br>

GIT:<br>
Ni skall jobba enligt GIT-Flow.<br>
Alla ändringar i koden skall gå igenom en Pull-Request in i er default-branch (main/master).<br>
Er default branch skall vara låst så ni ej kan pusha direkt till den branchen, detta sätts med en regel i Github.<br>
 
