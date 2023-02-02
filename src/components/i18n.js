import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'de',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // language resources
    resources: {
      de: {
        translation: {

        /* Landingpage*/
        text1_home: "Das Forecasting, Modelling and Scenario hub (FOMOS Hub)  ist eine integrierte Plattform für die Kommunikation und Interaktion von Forschung zu transparenten Prognosen, Entscheidungen und Ergebnissen für und mit der Gesellschaft.", 
        text2_home: "FOMOS zeigt Forschung und Forschungsergebnisse in Echtzeit zu wichtigen gesellschaftlichen Themenfeldern.", 
        corona_headline: "Nowcasting von COVID-Hospitalisierungen",
        corona_explain: "Echtzeitkorrektur der Meldeverzüge in COVID-19 Hospitalisierungsdaten.",
        forecasting_button: "Forecasting",
        two_explain: "coming soon...",
        two_headline: "Forecasting 2",
        three_explain: "coming soon...",
        three_headline: "Forecasting 3",
        
        

        /* Fomos main + Expert*/
        heading_nowcast: "Hospitalisierungsinzidenz in Deutschland (COVID-19)",
        expertbutton_on: "Expertenmodus an",
        expertbutton_aus: "Expertenmodus aus",
        button1_nowcast: "Korrigierter 7-Tage Nowcastwert",
        button1hover_nowcast: "Letzter korrigierter 7-Tages Trend für die Hospitalisierung. ",
        button2_nowcast: "Letzter Trend des Graphen",
        button2hover_nowcast: "Gibt die Tendenz des Graphen der letzten 7 Tage an.",
        button3_nowcast: "Unkorrigierter 7-Tage Nowcastwert",
        button3hover_nowcast: "Letzter unkorrigierter 7-Tages Trend für die Hospitalisierung.",
        button4_nowcast: "7-Tages Fallzahlen",
        button4hover_nowcast: "Anzahl der gemeldeten neuen Fälle in den letzten 7 Tagen.",


        text1_nowcast: "Die 7-Tages-Hospitalisierungsinzidenz ist einer der Leitindikatoren für die COVID-19 Pandemie in Deutschland. Diese Plattform vereint Nowcasts der 7-Tages-Hospitalisierungsinzidenz basierend auf verschiedenen statistischen Korrekturverfahren, mit dem Ziel einer verlässlichen Einschätzung der aktuellen Trends. Dadurch ist es möglich, eine bessere Einschätzung der derzeitigen epidemischen Lage zu bekommen.",
        text2_nowcast: "Aufgrund von Verzögerungen sind die für die letzten Tage veröffentlichten rohen Inzidenzwerte stets zu niedrig. Nowcasts helfen, diese Werte zu korrigieren. Sie stellen eine Vorhersage dafür dar, um wie viel die Hospitalisierungsinzidenz noch nach oben korrigiert werden wird. Wir zeigen die Nowcasts gemeinsam mit Unsicherheitsintervallen, die den späteren korrigierten Wert mit einer gegebenen Wahrscheinlichkeit enthalten sollen (95%).",
        text3_nowcast: "Es gibt unterschiedliche Nowcasting-Verfahren. Diese werden in dem sogenannten Ensemble-Nowcast zu einer Prognose kombiniert.",
        text4_nowcast: "Gleichzeitig haben wir ein wissenschaftliches Interesse, die verschiedenen Nowcasting-Verfahren miteinander zu vergleichen.",

        show_method: "Methoden einblenden",
        unshow_method: "Methoden ausblenden",
        tabelbutton: "Tabelle anzeigen",


        hinweis: "Hinweis: Unregelmäßigkeiten oder Überlastungen im Meldeprozess können die Zuverlässigkeit der Nowcasts beeinträchtigen.",

        /* Nav*/
        home: "Home",
        fomos: "Fomos",
        hintergrund: "Hintergrund",
        kontakt: "Kontakt",
        sprache: "Sprache",

        /* Footer */
        KIT: "Statistische Methoden und Ökonometrie (KIT)",
        HITS: "Computational Statistics Gruppe (HITS)",
        FAQ: "FAQ",
        Datenschutz: "Datenschutz | Impressum",

        /* Kontakt*/
        kontaktheadline: "KONTAKT",
        kontakttext1: "Diese Plattform wird betrieben von Mitgliedern des Lehrstuhls für Statistik und Ökonometrie am Karlsruher Institut für Technologie und der Computational Statistics Gruppe am Heidelberger Institut für Theoretische Studien. Sie können uns unter ",
        kontakttext2:" kontaktieren. Technische Hinweise können Sie auch als Issue in unserem GitHub Repository abgeben.",
        kontaktprof1: "Professorin am ",
        kontaktprof2: "Professor am ",


        /* FAQ*/
        FAQ_Heading: "FAQ",
        FAQ_Text: "",
        Question1: "Was ist das Ziel dieser Plattform?",
        Question2: " Was ist die 7-Tage-Hospitalisierungsinzidenz?",
        Question3: "Wird unterschieden zwischen Hospitalisierungen, bei denen COVID-19 der Hauptgrund der Hospitalisierung ist und solchen, bei denen dies nicht der Fall ist? ",
        Question4: "Warum sind die berichteten Werte der letzten Tage unzuverlässig und warum ist das ein Problem? ",
        Question5: "Was bedeutet das für die Schwellenwerte, die für die 7-Tage-Hospitalisierungsinzidenz festgelegt wurden? ",
        Question6: "Was bedeutet Nowcasting und wie sollten die Nowcasts interpretiert werden? ",
        Question7: "Wieso werden mehrere verschiedene Nowcasts gezeigt? Was ist ein Ensemble-Nowcast? ",
        Question8: "Warum ist es wichtig, Unsicherheitsintervalle mit anzugeben? ",
        Question9: "Wie verlässlich sind die Nowcasts? ",
        Question10: "Was sind mögliche Probleme und Schwächen? Wann muss man bei der Interpretation besonders vorsichtig sein? ",
        Question11: "Wie oft werden die Nowcasts aktualisiert? ",
        Question12: "Wieso gibt es eine Schaltfläche, um die Nowcasts des heutigen und gestrigen Tages auszublenden? ",
        Question13: "Was zeigt die “Zeitreihe nach Erscheinen in RKI-Daten”? ",
        Question14: "Was zeigt die “Zeitreihe eingefrorener Werte”?",
        Question15: "Was ist mit “nachträglich erstellten Nowcasts” gemeint?",

        Answer1: "Das Hauptziel dieses Projekts besteht darin, die Werte der 7-Tages-Hospitalisierungsinzidenz für Deutschland und die Bundesländer zuverlässig zu schätzen und aus vorläufigen Daten aktuelle Trends herauszuarbeiten. Die häufig angegebenen jeweils neuesten Werte der rohen Hospitalisierungsinzidenz unterschätzen die entsprechende wahre Zahl der Hospitalisierungen (siehe dazu die Antworten zu den weiteren Fragen). Nowcast-Korrekturen dieser Zahlen erlauben eine bessere Einschätzung der derzeitigen epidemischen Lage. Gleichzeitig haben wir ein wissenschaftliches Interesse, verschiedene Nowcasting-Verfahren miteinander zu vergleichen und zu untersuchen, ob die Kombination verschiedener Nowcasts zu verlässlicheren Ergebnissen führt.",
        Answer2: "Wir richten uns hier nach der Definition des Robert-Koch-Instituts. Die heutige 7-Tage-Hospitalisierungsinzidenz ist die Anzahl an hospitalisierten COVID-19 Fällen (absolut oder pro 100.000 Einwohner) deren Meldedatum, also das Datum an dem das lokale Gesundheitsamt die zugehörige COVID-19 Infektion elektronisch erfasst hat, in den 7 vorangegangenen Tagen liegt. Es handelt sich also nicht um die Zahl der neuen Hospitalisierungen in den letzten 7 Tagen. Auch berücksichtigt die 7-Tage-Hospitalisierungsinzidenz nicht, ob der Hospitalisierungsgrund COVID-19 oder ein anderer ist (siehe nächste Frage). Weitere Informationen sowie die aktuellen und vergangenen 7-Tage-Hospitalisierungsinzidenzen finden sich auf der GitHub Seite des Robert Koch-Instituts. Wir weisen in diesem Zusammenhang darauf hin, dass manche Bundesländer auch eigene Hospitalisiserungsinzidenzen veröffentlichen, deren Definitionen von der des RKI abweichen (z.B. zeitliche Aggregierung nach Hospitalisierungsdatum statt Meldedatum der Infektion; siehe Nachrichtenartikel des NDR). Wir betrachten ausschließlich den Indikator des RKI.",
        Answer3: "Die Hospitalisierungsinzidenz wie vom RKI definiert unterscheidet nicht nach dem Hauptgrund der Hospitalisierung (“mit oder wegen COVID”). Unsere Analysen bauen auf diesem Indikator auf und betreffen einzig die Problematik der Verzüge und der resultierenden Unvollständigkeit der letzten Inzidenzwerte (siehe nächste Frage). Die Schwierigkeit, dass nur ein Teil der erfassten Hospitalisierungen tatsächlich aufgrund einer COVID-Erkrankung erfolgen verbleibt also. Nach unserem Kenntnisstand stehen derzeit auf Bundesebene keine belastbaren Daten zu dieser Frage zur Verfügung. Mit der mutmaßlich im Mittel milder verlaufenden Omikron-Variante ist es möglich, dass sich der Anteil an Hospitalisierungen, bei denen COVID nur eine Begleiterscheinung ist, erhöht. Dies kann die Vergleichbarkeit der Inzidenzwerte über die verschiedenen Phasen der Pandemie hinweg einschränken und muss bei der Interpretation berücksichtigt werden. Allerdings ist auch zu beachten, dass selbst eine Hospitalisierung, bei der COVID nicht der Einlieferungsgrund ist für die Krankenhäuser Zusatzaufwand bedeutet, etwa aufgrund von Isolationsmaßnahmen. Eine umfassendere Darstellung dieser Thematik findet sich für die Bundesländer Rheinland-Pfalz und Baden-Württemberg in Nachrichtenartikeln des SWR. Demzufolge entfiel Ende Januar 2022 in Rheinland-Pfalz nur etwa ein Drittel der Hospitalisierungsinzidenz auf Fälle mit COVID-19 als primärem Hospitalisierungsgrund, während es in Baden-Württemberg fast zwei Drittel waren. Analysen für die Länder Bayern und Saarland finden sich im CODAG-Bericht Nr. 26 der LMU München.",
        Answer4: "Zwischen dem Meldedatum und dem Datum, an welchem ein hospitalisierter Fall vom Robert Koch-Institut in die 7-Tage-Hospitalisierungsinzidenz aufgenommen wird, können mehrere Tage oder sogar Wochen vergehen. Hier spielen mehrere Faktoren eine Rolle. Erstens kann es sein, dass eine Person am Meldedatum nicht in einem Zustand ist, der eine Hospitalisierung erfordert, jedoch später hospitalisiert werden muss. In diesem Fall wird rückwirkend die Zahl der Hospitalisierungen für das entsprechende Meldedatum um eins erhöht. Zweitens kann es Meldeverzüge zwischen dem tatsächlichen Hospitalisierungsdatum und der Erfassung der Hospitalisierungen in den Daten des RKI geben. Deswegen werden die täglichen nach Meldedatum ausgewiesenen Hospitalisierungen in der Regel nachträglich nach oben korrigiert. Die meisten Nachtragungen erfolgen innerhalb von wenigen Tagen, sodass vor allem die Werte der jeweils letzten Tage betroffen sind. Diese unterschätzen die tatsächlichen Hospitalisierungen oft deutlich (siehe z.B. diesen Nachrichtenartikel des NDR oder CODAG-Bericht Nr. 21 der LMU München). Das macht es sehr schwierig, aktuelle Tendenzen aus der rohen 7-Tage-Hospitalisierungsinzidenz abzulesen. Insbesondere kann der Eindruck einer fallenden Hospitalisierungsinzidenz entstehen, selbst wenn diese in Wirklichkeit steigt.",
        Answer5: "Die im September 2021 vom RKI vorgeschlagenen Schwellenwerte (Abbildung 1) von 1.5 und 5 beziehen sich ausdrücklich auf die vorläufigen tagesaktuell berichteten Werte (siehe Punkt “eingefrorene Zeitreihe” unten). Sie beziehen die Unvollständigkeit der Daten also mit ein. Der Regierungsbeschluss vom 18.11.2021 (Punkt 9) spezifiziert nicht explizit, ob sich die Schwellenwerte 3, 6 und 9 auf vorläufige tagesaktuelle oder auf finale Werte beziehen. Medienberichten zufolge werden Schwellenwerte allerdings ebenfalls auf die vorläufigen tageaktuellen Werte angewendet.",
        Answer6: "Nowcasting bezeichnet ein statistisches Korrekturverfahren, das ausgehend von vorläufigen Messungen schätzt, welchen Wert die selben Größen in einer späteren finalen Version eines Datensatzes annehmen werden. In unserem Anwendunsfall schätzen wir beruhend auf den Hospitalisierungen, die bis zum heutigen Tag für ein bestimmtes Meldedatum (siehe oben) bekannt geworden sind, wie hoch die Zahl der Hospitalisierungen für dieses Datum nach Vorliegen aller Meldungen insgesamt liegen wird. Dabei werden Daten aus der Vergangenheit mit vollständiger Information genutzt. Klassischerweise bezieht sich Nowcasting auf Ereignisse, die bereits eingetreten sind, aber noch nicht vollständig gemessen oder erfasst sind. Bei COVID-19-Fallzahlen schätzt man mittels Nowcasting-Verfahren beispielsweise, wie viele Infektionen insgesamt an einem bestimmten Tag erfasst worden sind bevor diese Daten vollständig an zentraler Stelle zusammengetragen sind. Im Fall der Hospitalisierungen trifft dies nicht ganz zu, denn es ist möglich, dass Hospitalisierungen, die einem bestimmten (Fall-)Meldedatum zuzuordnen sind zum Zeitpunkt des Nowcasts noch gar nicht passiert sind. Wir verwenden dennoch den Begriff des Nowcasting, der sich auch für diese Art von Analyse eingebürgert hat. Die hier präsentierten Nowcasts sollten als Wahrscheinlichkeitsaussagen interpretiert werden. Eine exakte Bestimmung der tatsächlichen Hospitalisierungszahl ist nicht möglich und Nowcasts geben lediglich einen Bereich wahrscheinlicher Werte an (siehe unten).",
        Answer7: "Bei der Erstellung von Nowcasts wird stets eine Reihe von Annahmen getroffen. Zudem können unterschiedliche Modelle unterschiedliche zusätzliche Datenquellen mit einbeziehen. Daher können sich die Ergebnisse verschiedener Verfahren unterscheiden, und es ist es sinnvoll, mehrere Nowcasts zu vergleichen und die Bandbreite der Vorhersagen zu berücksichtigen. Zudem kann es vorteilhaft sein, verschiedene Nowcasts in einem sogenannten Ensemble-Nowcast zusammenzuführen, um eine robustere Schätzung zu erhalten. Dies hat sich beispielsweise in der Wettervorhersage, aber auch in epidemiologischen Anwendungen bewährt. Hinweis: Die im Ensemble zusammengefassten Modelle sind unter Umständen nicht jeden Tag die selben (z.B. werden am Wochenende manche Modelle aktualisiert, andere nicht). Dadurch kann es sein, dass das Ensemble an aufeinanderfolgenden Tagen etwas unterschiedlich aussieht.",
        Answer8: "Kein Modell ist perfekt und die genaue Zahl der Hospitalisierungen zu einem bestimmten Meldedatum kann nicht exakt vorhergesagt werden. Die Nowcasts, die hier dargestellt werden, quantifizieren deshalb explizit ihre Unsicherheit, d.h. geben mit an, als wie verlässlich sie ihre eigene Schätzung ansehen. Dies geschieht mittels Intervallen, die den wahren Wert mit einer bestimmten Wahrscheinlichkeit (50% oder 95%) enthalten sollen.",
        Answer9: "Die Evaluation der verschiedenen Verfahren ist ein wichtiges Ziel dieses Projekts (siehe unten). Jedoch liegt es in der Natur des Problems, dass erst mit größerem zeitlichem Abstand systematisch ausgewertet werden kann, wie zuverlässig die Nowcasts waren. Das Visualisierungs-Tool erlaubt es, mittels der Datumsauswahl zu früheren Datenständen und den damals erstellten Nowcasts zurückzukehren und so einen Eindruck von der Qualität der Nowcasts zu gewinnen. Z.B. der Nowcast für Sachsen vom 18. November liegt deutlich unter den in der Folge beobachteten Werten, was vermutlich der Überlastung des Meldesystems geschuldet ist (siehe nächste Frage).",
        Answer10: "Die zentrale Annahme, auf der die meisten Nowcasts beruhen ist, dass die Verzögerungen zwischen Meldedatum und Erscheinen einer Hospitalisierung in den Daten des RKI auch in Zukunft ähnlichen Mustern folgen werden wie in der Vergangenheit. Ist dies nicht mehr der Fall, etwa aufgrund gewichtiger Änderungen der Teststrategie oder einer Überlastung der Gesundheitsämter, so kann die Qualität der Nowcasts beeinträchtigt werden. Werden etwa die mittleren Verzögerungen größer, so können die Nowcasts dazu neigen, die wahren Werte zu unterschätzen.",
        Answer11: "Die Nowcasts werden täglich gegen 13:00 aktualisiert. Solange ein Team seinen Nowcast noch nicht aktualisiert hat wird der Nowcast des Vortages angezeigt (oder der neueste Nowcast aus den letzten sieben Tagen). Gelegentlich kann es zu Verzögerungen kommen, z.B. wenn die Ausgangsdaten des RKI später als gewöhnlich online erscheinen. Wir versuchen, auch in diesem Fall zeitnah aktualisierte Nowcasts zu erstellen, jedoch benötigen manche der Modelle eine gewisse Rechenzeit.",
        Answer12: "Für den heutigen und gestrigen Tag werden besonders viele Fälle nachgemeldet. Dadurch sind auch die Nowcasts für diese Tage weniger zuverlässig als für Tage, die weiter in der Vergangenheit liegen. Zu Beginn unseres Projektes zeigten wir die Nowcasts für den heutigen und gestrigen Tag aus diesem Grund standardmäßig nicht an. Mittlerweile konnten wir feststellen, dass die Nowcasts für diese beiden Tage ähnlich zuverlässig wie für die anderen Tage funktionieren, wenn man die breiteren Unsicherheitsintervalle mit einbezieht. Wir haben deshalb entschieden, sie nun standardmäßig mit einzublenden.",
        Answer13: "Eine Alternative zum Nowcast der Hospitalisierungsinzidenz nach Meldedatum (also dem Datum, an dem die Infektion im lokale Gesundheitsamt elektronisch erfasst wurde, siehe oben) ist es, Hospitalisierungszahlen nach dem Zeitpunkt ihres Auftauchens im Datensatz des RKI zu aggregieren. Diese Zahlen ändern sich in den darauffolgenden Tagen nicht mehr, sodass Trends einfacher zu interpretieren sind. Die resultierende Kurve ist gegenüber der 7-Tages-Inzidenz nach Meldedatum in der Regel nach rechts verschoben, da es oft eine Verzögerung zwischen dem Meldedatum und dem Auftauchen einer Hospitalisierung in den Daten gibt.",
        Answer14: "Eine weitere Alternative zum Nowcasting besteht darin, für jedes Meldedatum die 7-Tage-Hospitalisierungsinzidenz gemäß des Datenstandes am jeweiligen Datum zu zeigen. Hierdurch sind alle gezeigten Werte ähnlich unvollständig und somit besser über die Zeit hinweg vergleichbar. Ein Nachteil dieser Herangehensweise ist, dass nur ein Teil der bereits verfügbaren Information genutzt wird.",
        Answer15: "Das Hauptziel dieses Projekts ist es, Nowcasts in Echtzeit zur Verfügung zu stellen um eine verbesserte Lageeinschätzung zu ermöglichen. Um verschiedene Modellierungsansätze besser wissenschaftlich vergleichen zu können, sammeln wir aber auch Nowcasts, die rückwirkend erzeugt wurden. So können wir evaluieren, wie diese in der Vergangenheit abgeschnitten hätten. Wichtig für einen fairen Vergleich ist hierbei, dass auch bei den nachträglich erstellten Nowcasts nur Daten in das Modell einfließen, die zum jeweiligen Nowcast-Zeitpunkt bereits verfügbar waren.",

        /* Hintergrund*/
        hintergrund_headline: "HINTERGRUND",
        hintergrund_hinweis: "Hinweis",
        hintergrund_hinweistext: "Nowcasts können weniger verlässlich sein, wenn sich Meldeverzögerungen z.B. aufgrund starken Meldeaufkommens anders verhalten als in früheren Phasen der Pandemie. Außerdem ist zu beachten, dass sich der Anteil der in der Hospitalisierungsinzidenz erfassten Personen, bei denen COVID-19 tatsächlich der primäre Hospitalisieurngsgrund ist über die Zeit ändern kann (z.B. aufgrund der vermutlich milderen Omikron-Variante). Dies schränkt de Vergleichbarkeit über verschiedene Zeiträume hinweg ein.",
        hintergrund_gruppen: "Beteiligte-Gruppen",
        hintergrund_gruppentext: " Diese Plattform wird von Mitgliedern des Lehrstuhls für Ökonometrie und Statistik am Karlsruher Institut für Technologie sowie der Computational Statistics Gruppe am Heidelberger Institut für Theoretische Studien betrieben. Mehrere unabhängige weitere Gruppen aus Wissenschaft und Medien tragen Nowcasts bei (siehe auch Metadata-Files in unserem GitHub Repository):",
        hintergrund_TU: "Institut für Mathematik, TU Ilmenau",
        hintergrund_LMU: "Statistisches Beratungslabor, LMU München",
        hintergrund_RIVM: "RIVM (Rijksinstituut voor Volksgezondheid en Milieu), Bilthoven, Niederlande",
        hintergrund_Stockholm: "Department Mathematik, Universität Stockholm",
        hintergrund_Süddeutsche: " Süddeutsche Zeitung",
        hintergrund_London: "London School of Hygiene and Tropical Medicine / epiforecasts",

        hintergrund_RKI1: "Außerdem zeigen wir die ",
        hintergrund_RKI2: "adjustierten Hospitalisierungsinzidenzen ",
        hintergrund_RKI3: "des Robert Koch Instituts.",

        hintergrund_github: "GitHub Repository und Nutzung von Ergebnissen", 
        hintergrund_githubtext: "Alle Nowcasts sind unter offenen Lizenzen in einem öffentlichen GitHub Repository verfügbar. Sie können für eine Vielzahl von Zwecken weiterverwendet werden, sofern die Quelle angegeben wird (siehe die entsprechenden Lizenzfiles für Details). Wenn Sie Nowcasts aus dieser Plattform für öffentliche Darstellungen weiterverwenden freuen wir uns über eine kurze Nachricht an das Organisationsteam oder die Autoren des jeweiligen Nowcasts. Derzeit werden Nowcasts aus unserer Plattform z.B. von Zeit Online, der Neuen Zürcher Zeitung dem Norddeutschen Rundfunk sowie dem Südwestrundfunk verwendet.",
            
        hintergrund_evaluation: "Evalutationsstudie", 
        hintergrund_evaluationtext: "Wir planen, die verschiedenen Nowcasting-Verfahren in einer prospektiven Evaluationsstudie systematisch zu vergleichen. Hierfür haben wir ein öffentliches Studienprotokoll hinterlegt (ähnlich dem Protokoll zu einer früheren Studie über Kurzzeitvorhersagen).", 
            
        hintergrund_hospitalisierungsrate: "Bundeslandspezifische Erhebungen der Hospitalisierungsrate",
        hintergrund_hospitalisierungsratetext: "Einige Bundesländer veröffenltichen vom RKI abweichende Daten zur Hospitalisierungsinzidenz, bei denen die Meldeproblematik teils weniger ausgeprägt ist oder zusätzliche Informationen zur Unterscheidung zwischen Einlieferungen mit oder wegen COVID-19 verfügbar sind (Details zur Erhebung sind in der Regel auf den entsprechenden Seiten verfügbar): Berlin, Bremen, Mecklenburg-Vorpommern, Niedersachsen, Nordrhein-Westphalen, Rheinland-Pfalz, Sachsen.",
            
        hintergrund_verwandte: "Verwandte Projekte und Analysen",
        hintergrund_verwandtetext1: "Der europäische, US-amerikanische und deutsch/polnische COVID-19 Forecast Hub mit Kurzzeitvorhersagen von Fall- und Todeszahlen (eine bis vier Wochen voraus).",
        hintergrund_verwandtetext2: "Nowcasts für Fallzahlen und die effektive Reproduktionszahl in Deutschland des Robert Koch Instituts.",
        hintergrund_verwandtetext3: "Nowcasts für Fallzahlen und die effektive Reproduktionszahl in Bayern der CODAG Gruppe an der LMU München.",
        hintergrund_verwandtetext4: "Der US Scenario Modelling Hub mit längerfristigen Szenario-Projektionen.",
    
            
        methoden_headline: "METHODEN",
        methoden_text: "Alle Methoden auf einen Blick.",

        method1: "Epiforecasts-independent (London School of Hygiene and Tropical Medicine / epiforecasts)",
        method1_text: "Ein semiparametrisches Nowcasting-Verfahren für rechszensierte Hospitalisierungen nach Datum des positiven Tests. Hospitalisierungen werden mittels eines Random-Walk auf der log-Skala modelliert. Reporting-Verzögerungen werden anschließend parametrisch mit einer log-Normalverteilung modelliert, wobei der log-Erwartungswert und die log-Standardabweichung einem wöchentlichen Random-Walk mit gemeinsamer Standardabweichung folgen. Wochentagseffekte im Reporting werden mit zufälligen Effekten modelliert, wobei Feiertage wie Sonntage behandelt werden. Nowcasts für Altersgruppen und geographische Einheiten werden jeweils separat erstellt (daher der Name des Modells). Das Modell ist im R-Paket epinowcast implementiert. Der Analyse-Code ist hier verfügbar. Anmerkung: In einer zweiten Version des Modells (bisher nicht angezeigt) werden die verschiedenen Zeitreihen gemeinsam modelliert (Epiforecasts-hierarchical).",
        method2: "ILM-prop (TU Ilmenau)",
        method2_text: "Diese Nowcasts verwenden die in der Vergangenheit beobachteten, an der 7-Tage-Inzidenz der COVID-19 Fällen anteiligen, 7-Tage-Hospitalisierungsinzidenz nach einer, zwei usw. Wochen. Von der heute bekannten 7-Tage-Inzidenz werden dann diese Anteile berechnet und aufsummiert um die finale Anzahl an 7-Tage-Hospitalisierungen vorherzusagen. Die Unsicherheit wird durch Anwendung der Methode auf vergangene Zeitpunkte quantifiziert, wobei eine Log-Normalverteilung (Altersgruppen) beziehungsweise Normalverteilung (Summe über alle Altersgruppen) für die Vorhersagefehler angesetzt wird. Die Hauptannahme dieses Verfahrens ist, dass sich der Anteil von Hospitalisierungen an der 7-Tage-Inzidenz und die Verzüge von Meldedatum des Falls bis dieser in den RKI-Daten erscheint nur langsam ändert.",
        method3: "KIT-simple_nowcast (Karlsruher Institut für Technologie)",
        method3_text: "Das Nowcasting beruht auf einer einfachen Schätzung der Verteilung der Verzögerungsdauern zwischen Meldedatum und Erscheinen einer Hospitalisierung in den RKI-Daten (basierend auf den letzten 60 Tagen). Aus diesen werden Multiplikationsfaktoren abgeleitet, mit denen die jeweils unvollständigen aktuellsten Beobachtungen nach oben korrigiert werden. Um die Nowcast-Unsicherheit zu beurteilen werden derartige korrigierte Werte auch für vergangene Zeitpunkte (basierend jeweils auf der damals verfügbaren Information) generiert und mit den entsprechenden später gemachten Beobachtungen verglichen. Hierfür wird eine negative Binomialverteilung angenommen, deren Streuungsparameter vom zeitlichen Abstand zwischen Meldedatum und Zeitpunkt des Nowcats abhängt. Die Schätzung der Streuungsparameter erfolgt mittels der Maximum Likelihood-Methode. Dieses Verfahren ist bewusst einfach gehalten und hat die Funktion eines Referenz-/Baseline-Modells in unserer vergleichenden Evaluationsstudie (siehe unten). Die zentrale Annahme besteht darin, dass die Struktur der Meldeverzüge zeitlich stabil bleibt. Z.B. Wochentagseffekte oder Entwicklungen der Fallzahlen werden nicht berücksichtigt.",
        method4: "LMU_StaBLab-GAM_nowcast (LMU München)",
        method4_text: "Die Nowcasts beruhen auf einem generalisierten additiven Modell und der sequenziellen Multinomialstruktur der zeitlichen Verzögerungen. Das Modell ist eine geringfügig angepasste Version des Verfahrens von Schneble et al. (2020) zum Nowcasting von tödlich verlaufenden Infektionen.",
        method5: "NowcastHub-MeanEnsemble",
        method5_text: "Dieses Ensemble berechnet sich als der quantilsweise Mittelwert der eingereichten Modelle mit vollständigen Nowcasts (28 bis 0 Tage vor dem aktuellen Datum).",
        method6: "RIVM-KEW (RIVM (Rijksinstituut voor Volksgezondheid en Milieu), Bilthoven, Niederlande)",
        method6_text: "Dieses Modell ist eine vereinfachte Version des Verfahrens von van de Kassteele, Eilers und Wallinga (Epidemiology, 2019). Für die berichteten Zählwerte pro Meldedatum und Verzögerung wird eine negative Binomialverteilung angenommen. Die erwarteten Werte werden mittels einer zweidimensionalen P-Spline-Oberfläche und weiteren Kovariablen modelliert. Diese Oberfläche wird für die noch nicht beobachteten Kombinationen von Datums- und Verzögerungswert extrapoliert. Der Nowcast für ein Meldedatum entspricht dann der Summe über die entsprechenden beobachteten und extrapolierten Zählwerte pro Verzögerungsdauer. Vorhersageintervalle werden per Monte-Carlo-Simulation aus der entsprechenden prädiktiven Verteilung generiert. Die vereinfachte Version des Modells enthält keine Interaktionsterme für Kalenderzeit und Verzögerung und keine Unimodalitäts- oder Boundary-Restriktionen. Das Modell wird mittels des R-Pakets mgcv angepasst.",
        method7: "RKI-weekly_report (Robert Koch Institut)",
        method7_text: "Hierbei handelt es sich um Schätzungen, die zunächst jeweils Donnerstags in den Wochenberichten des Robert Koch Instituts veröffentlicht wurden und mittlerweile täglich im COVID-19 Trends Dashboard erscheinen. Diese basieren auf einer modifizierten Variante der Nowcastingberechnung zur 7-Tage-Inzidenz.",
        method8: "SU-hier_bayes (Universität Stockholm)",
        method8_text: "tba",
        method9: "SZ-hosp_nowcast (Süddeutsche Zeitung)",
        method9_text: "Die SZ schätzt die Werte für das Nowcasting der Hospitalisierungsinzidenz auf Basis der Abweichungen zwischen täglich veröffentlichten und nachträglich korrigierten Werten, die durch Nachmeldungen entstehen. Dabei werden die archivierten Datensätze des Robert-Koch-Instituts (https://github.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland) der vergangenen 60 Tage analysiert. Jeweils für die 25 Tage vor dem letzten Datum im Datensatz wird berechnet, um wie viel Prozent der an späteren Tagen gemeldete korrigierte Wert von der ursprünglich gemeldeten Hospitalisierungsinzidenz abweicht. Für diese abgeleiteten Multiplikationsfaktoren werden Quantile berechnet. Die aktuell veröffentlichte Inzidenz wird mit den berechneten Quantilen multipliziert, um die Hospitalisierungsinzidenz zu schätzen. Abschließend wird die Hospitalisierungsinzidenz über ein Drei-Tage-Fenster geglättet, um unrealistische größere Schwankungen auszugleichen.",
        method10: "NowcastHub-MedianEnsemble",
        method10_text: "Dieses Ensemble berechnet sich als der quantilsweise Median der eingereichten Modelle mit vollständigen Nowcasts (28 bis 0 Tage vor dem aktuellen Datum).",
    

        /* hover Texte Graph*/
        buttonrightchart:"Zum vergrößern des Graph Ausschnitts.",
        buttonleftchart: "Zum verkleinern des Graph Ausschnitts.",

        
        hover_oder: "Es ist nur möglich, nach Bundesland oder dem Alter zu Filtern. Eine Kombination ist aufgrund der Datengrundlage nicht möglich.",
        hover1_methoden: "",
        hover2_methoden: "Semiparametrisches Nowcasting-Verfahren für rechszensierte Hospitalisierungen nach Datum des positiven Tests.",
        hover3_methoden: "Verwenden von in der Vergangenheit beobachteten, an der 7-Tage-Inzidenz der COVID-19 Fällen anteiligen, 7-Tage-Hospitalisierungsinzidenz nach einer, zwei usw. Wochen.",
        hover4_methoden: "Basierend auf einfacher Schätzung der Verteilung der Verzögerungsdauern zwischen Meldedatum und Erscheinen einer Hospitalisierung in den RKI-Daten.",
        hover5_methoden: "Basierend auf generalisiertem additiven Modell und der sequenziellen Multinomialstruktur der zeitlichen Verzögerungen.",
        hover6_methoden: "Als quantilsweiser Mittelwert der eingereichten Modelle mit vollständigen Nowcasts berechnet.",
        hover7_methoden: "Für die berichteten Zählwerte pro Meldedatum und Verzögerung wird eine negative Binomialverteilung angenommen.",
        hover8_methoden: "Basierend auf modifizierter Variante der Nowcastingberechnung zur 7-Tage-Inzidenz.",
        hover9_methoden: "tba",
        hover10_methoden: "Abweichungen zwischen täglich veröffentlichten und nachträglich korrigierten Werten.",

        hover_date: " Definiert das Startdatum des Graphen.",

        /* Texte Graph*/

        Datenstand: "Datenstand",
        Filter: "Filter",
        oder: "oder",
        Bundesland: "Bundesland:",
        Alter: "Alter: ",
        Anzeige: "Anzeige",
        per100k: "Pro 100.000",
        absoluteZ: "absolute Zahlen",
        Unsicherheitsintervall: "Unsicherheitsintervall",
        keines: "keines",

        /* Methoden*/

        Datenstand_s: "Datenstand schwarz",
        Datenstand_g: "Datenstand grau",


        Deutschland: "Deutschland",




        
   
       /*Datenschutz*/
        DatenschutzTitle:"DATENSCHUTZ | IMPRESSUM",
        Datenschutz_S1_Title: "Datenschutz",
        Datenschutz_S2_Title: "Cookies",
        Datenschutz_S3_Title: "Server-Log-Files",
        Datenschutz_S4_Title: "Recht auf Auskunft, Löschung, Sperrung",
        
        Datenschutz_S1_Text1: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
        Datenschutz_S1_Text2: "Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.",
        Datenschutz_S1_Text3: "Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",


        Datenschutz_S2_Text1: "Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.",
        Datenschutz_S2_Text2: "Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.",
        Datenschutz_S2_Text3: "Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.",

        Datenschutz_S3_Text1: "Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:",
        Datenschutz_S3_ul1: "Browsertyp und Browserversion",
        Datenschutz_S3_ul2: "Verwendetes Betriebssystem",
        Datenschutz_S3_ul3: "Referrer URL",
        Datenschutz_S3_ul4: "Hostname des zugreifenden Rechners",
        Datenschutz_S3_ul5: "Uhrzeit der Serveranfrage",
        
        Datenschutz_S3_Text3: "Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.",
       
        Datenschutz_S4_Text:"Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.",
        
        /*Impressum*/
        ImpressumTitle:"IMPRESSUM",
        Impressum_S1_Title: "Angaben gemäß § 5 TMG:",
        Impressum_S2_Title: "Kontakt",
        Impressum_S3_Title:"Registereintrag:",
        Impressum_S4_Title:"Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:",
        Impressum_S5_Title:"Quelle",
        Impressum_S2_Text1:"Telefon: ",
        Impressum_S2_Text2: "Mail:",
        Impressum_S3_Text1: "Eintragung im Vereinsregister.",
        Impressum_S3_Text2: "Registergericht: Mannheim ",
        Impressum_S3_Text3:" Registernummer: 700629",
        
      }
      },
      en: {
        translation: {

        /* Landingpage*/
        text1_home: "The FOrecasting, MOdelling and Scenario hub (FOMOS Hub) is an integrated platform for the communication and interaction of research into transparent forecasts, decisions and outcomes for and with society.",
        text2_home: "FOMOS shows research and research results in real time on important social topics.", 
        corona_headline: "Nowcasting of COVID hospitalizations",
        corona_explain: "Real-time correction of reporting delays in COVID-19 hospitalization data.",
        forecasting_button: "Forecasting",
        two_explain: "Short explanation Forecasting 2",
        two_headline: "Forecasting 2",
        three_explain: "Short explanation Forecasting 3",
        three_headline: "Forecasting 3",
        four_explain: "Short explanation Forecasting 4",
        four_headline: "Forecasting 4",
        five_explain: "Short explanation Forecasting 5",
        five_headline: "Forecasting 5",
        six_explain: "Short explanation Forecasting 6",
        six_headline: "Forecasting 6",

        /* Fomos main + Expert*/
        heading_nowcast: "Hospitalization incidence in Germany (COVID-19)",
        expertbutton_on: "Expert mode on",
        expertbutton_aus: "Expert mode off",
        button1_nowcast: "Corrected 7-day nowcast value",
        button1hover_nowcast: "Last corrected 7-day trend for hospitalization.",
        button2_nowcast: "Last tendenz of the graph",
        button2hover_nowcast: "Indicates the trend of the graph for the last 7 days.",
        button3_nowcast: "Uncorrected 7-day nowcast value",
        button3hover_nowcast: "Last uncorrected 7-day trend for hospitalization.",
        button4_nowcast: "Last tendenz of the graph",
        button4hover_nowcast: "Indicates the trend of the graph for the last 7 days.",
        
        text1_nowcast: "The 7-day hospitalization incidence is one of the leading indicators for the COVID-19 pandemic in Germany. This platform combines nowcasts of the 7-day hospitalization incidence based on various statistical correction methods with the aim of a reliable assessment of the current trends. This makes it possible to get a better assessment of the current epidemic situation.",
        text2_nowcast: "Due to delays, the raw incidence values ​​published for the last few days are always too low. Nowcasts help correct these values. They represent a prediction of how much the hospitalization incidence will be revised upwards. We show the nowcasts along with uncertainty intervals that are supposed to contain the later corrected value with a given probability (95%).",
        text3_nowcast: "There are different nowcasting procedures. These are combined into a forecast in the so-called ensemble nowcast.",
        text4_nowcast: "At the same time, we have a scientific interest in comparing the different nowcasting methods.",


        show_method: "Show methodes",
        unshow_method: "Hide methodes",
        tabelbutton: "Show table",

        hinweis: "Note: Irregularities or overloads in the reporting process can affect the reliability of the nowcasts.",
        
        /* Nav*/
        home: "Home",
        fomos: "Fomos",
        hintergrund: "Background",
        kontakt: "Contact",
        sprache: "Language",

        /* Footer */
        KIT: "Statistic methodes and  und econometrics (KIT)",
        HITS: "Computational Statistics Group (HITS)",
        FAQ: "FAQ",
        Datenschutz: "Privacy Policy | Imprint ",

        /*contact*/
        kontaktheadline: "CONTACT",
        kontakttext1: "This platform is operated by members of the Chair of Statistics and Econometrics at the Karlsruhe Institute of Technology and the Computational Statistics Group at the Heidelberg Institute for Theoretical Studies. You can contact us at ",
        kontakttext2:". You can also submit technical notes as an issue in our GitHub repository.",
        kontaktprof1: "Professor at the",
        kontaktprof2: "Professor at the",

        /* FAQ*/
        FAQ_Heading: "FAQ",
        FAQ_Text: "",
    
        Question1: "What is the goal of this platform? ",
        Question2: "What is the 7-day hospitalization incidence? ",
        Question3: "Is there a distinction between hospitalizations with COVID-19 as the main reason and hospitalizations of infected persons due to other reasons? ",
        Question4: "Why are the reported values for the most recent days unreliable and why is that a problem? ",
        Question5: "What does that mean for the thresholds which have been defined for the hospitalization incidence? ",
        Question6: "What does nowcasting mean and how should nowcasts be interpreted? ",
        Question7: "Why are several different nowcasts shown? What is an ensemble nowcast? ",
        Question8: "Why is it important to provide uncertainty intervals? ",
        Question9: "How reliable are the nowcasts? ",
        Question10: "What are possible difficulties and weaknesses? When are results to be interpreted with special care? ",
        Question11: "How often are nowcasts updated?",
        Question12: "Why is there a switch to remove nowcasts for the current and previous day?",
        Question13: "What does the “time series by appearance in RKI data” show?",
        Question14: "What does the “time series of frozen values” show?",
        Question15: "What is meant by “retrospective nowcasts”? ",

        Answer1: "The main goal of this project is to estimate the 7-day hospitalization incidence for Germany and its states reliably and to assess recent trends based on incomplete data. The frequently referred to most recent values of the raw hospitalization incidence underestimate the true number of hospitalizations (see also answers to the other questions). Nowcasting corrections of these numbers allow for a better assessment of the current epidemic situation. At the same time we have a scientific interest to compare different nowcasting methods and to assess whether the combination of different nowcasts yields more reliable results.",
        Answer2: "We follow the definition by Robert Koch Institute. Today’s seven-day hospitalization incidence is the number of hospitalized cases of COVID-19 (in absolute numbers or per 100.000 population) whose Meldedatum, i.e. the date when the respective infection was electronically recorded at the local health authorities was in the 7 preceding days. It is thus not equivalent to the number of new hospitalizations during the last 7 days. Also, the 7-day hospitalization incidence does not take into account whether the reason of hospitalization was COVID-19 or not (see next question). Further information on the 7-day hospitalization incidence (in German) are available on the GitHub site of Robert Koch-Institute. In this context we note that some German states (Bundesländer) also publish their own hospitalization incidences which follow different definitions (e.g., temporal aggregation by date of hospitalization rather than Meldedatum of the infection; see this news item by NDR)). We focus exclusively on the indicator provided by RKI. ",
        Answer3: "The hospitalization incidence as defined by RKI does not take into account the main reason of hospitalization (“with or because of COVID”). Our analyses build directly upon this indicator and concern purely the problem of delays and incomplete most recent data points (see next question). The difficulty that only part of the hospitalizations are due to illness from COVID thus remains. To our knowledge there are currently no reliable national-level data on this question. Given the presumably lower average severity of infections with the omicron variant it is possible that the share of hospitalizations where COVID is not the reason of hospitalization increases. This can limit the comparability of incidence values across different phases of the pandemic and needs to be taken into account in their interpretation. However, it should be noted that hospitalizations with COVID as a secondary diagnosis nonetheless imply additional efforts for hospitals, e.g. in terms of isolation measures. A more detailed account on this question for the states of Rheinland-Pfalz and Baden-Württemberg can be found in news items by German public broadcaster SWR (in German). According to these articles, approximately on third of the hospitalization incidence was due to cases where COVID-19 was the primary reason of hospitalization in Rheinland-Pfalz, while the number was close to two thirds in Baden-Württemberg. Analyses on the states of Bavaria and Saarland are available in CODAG report no. 26 from LMU Munich (in German). ",
        Answer4: "The Meldedatum and the date when a hospitalization first appears the data set at Robert Koch Institut can be several days or even weeks apart. Several aspects play a role here. Firstly, an infected person may not be in a state which requires hospitalization on the Meldedatum, but reach such a state at a later point. In this case, the number of hospitalizations for the respective Meldedatum will be retrospectively increased by one. Secondly, there can be reporting delays between the actual date of hospitalization and the appearance of the hospitalization in the RKI data. The daily values of the hospitalization incidence aggregated by Meldedatum are thus usually corrected upwards during the following days and weeks. Most additions occur within a few days, so that the values for the last few days are most strongly affected. Oftentimes they considerably underestimate the true number of hospitalizations (see e.g. this news item by the public broadcaster NDR or CODAG-Report Nr. 21 by LMU Munich; both in German). In particular, preliminary data can create the impression of a decreasing hospitalization incidence even if it is actually on the rise. ",
        Answer5: "The thresholds of 1.5 and 5 suggested by RKI in September 2021 (Fig 1) explicitly refer to preliminary values as available on the respective date (see “time series of frozen values” below). They thus take into account the incompleteness of the data. The governmental decision from 18 November 2021 (Paragraph 9) does not address this distinction explicitly, but according to media coverage the thresholds of 3, 6 and 9 are equally applied to the preliminary values. ",
        Answer6: "Nowcasting is a statistical tool which, based on preliminary data, estimates which value a given quantity will take once measurements are complete. In our application we estimate how many hospitalizations will be reported in total for a given Meldedatum. To this end, information on the hospitalizations already reported up to the current date and data on past reporting delays are used. The term nowcasting typically refers to events which have already occurred, but have not been measured or reported completely. For instance, nowcasting methods can be used to estimate how many cases of COVID-19 have been detected on a given day before these information have been aggregated into a central data set. This is not exactly the case for the hospitalization incidence as it is possible that hospitalizations linked to a given Meldedatum have not even occurred yet at the time of nowcasting. We nonetheless use the term nowcasting as it has become common for this type of analysis. ",
        Answer7: "Nowcasts are always based on a number of assumptions. Moeover, different models may include different additional data sources. Therefore, results based on different approaches often vary, and it is reasonable to compare different nowcasts to get an idea of the range of predictions. Moreover it can be helpful to combine several nowcasts into a so-called ensemble nowcast to achieve a more robust estimation. This approach has shown benefits for instance in weather forecasting, but also in epidmimological applications. ",
        Answer8: "No model is perfect and the exact number of hospitalizations for a given Meldedatum canot be predicted exactly. The nowcasts displayed here therefore explicitly quantify their own uncertainty, i.e. they state how reliable they consider their own estimation. This is done via intervals which are supposed to contain the true value with a given probability (50% or 95%). ",
        Answer9: "The evaluation of the different methods is an important goal of this project (see below). However, it is in the nature of things that assessing the quality of nowcasts is only feasible after a some time has passed. The visualization tool enables the user to return to past data versions and nowcasts issued in the past to get an idea of their reliability. E.g., nowcasts for the state of Saxony from 18 November 2021 were considerably below the ultimately observed values, which was likely due to the overstrain of the reporting system (see next question). ",
        Answer10: "The central assumption on which most nowcasts are built is that the delays between the Meldedatum and the apppearance of a hospitalization in the RKI data set will follow similar patterns in the future as they did in the past. If this is not the case, e.g., due to major changes in testing strategies or an overload of the health system, the quality of nowcasts may suffer. For instance, if average delays get loner, nowcasts may tend to underestimate the true values. It must be assumed that this is currently (December 2021) the case for certain federal states, or may be the case in weeks to come. ",
        Answer11: "Nowcasts are updated daily at around 1pm. As long as a team have not updated their nowcast yet, their nowcast from the previous day (or the most recent nowcasts which is not older than seven days) is displayed. Occasionally there may be delays, e.g. if input data from RKI become available later than usually. In this case we try to update nowcasts in a timely manner, but some models require a certain time to compute. ",
        Answer12: "For the last two days a particularly large number of additional reports must be expected. Therefore, nowcasts for these days may be less reliable than for days which are further in the past. For this reason we did not show nowcasts for the last two days by default during the first few weeks of our project. In the meantime we have found that, if one takes into account the wider uncertainty intervals, the nowcasts for these two days are not actually less reliable than the remaining ones. We have therefore decided to show them by default. ",
        Answer13: "An alternative to nowcasting the hospitalization incidence by Meldedatum (i.e. the day when the respective infection was electronically recorded by the local health authority, see above) is to aggregate hospitalizations by the day when they first appeared in the RKI data set. These numbers do not change over the following days, meaning that trends are more straightforward to interpret. Owing to reporting delays, the resulting curve is typically shifted to the right compared to the seven-day hospitalization incidence by Meldedatum. ",
        Answer14: "Another alternative to nowcasting is to show the 7-day hospitalization incidence for each Meldedatum based on the data version from the respective date. This way, all shown values will be similarly incomplete and more comparable over time. A downside of this approach is that it only exploits part of the information already available. ",
        Answer15: "The main goal of this project is to provide nowcasts in real time to allow for an improved assessment of the current situation. However, in order to systematically compare different modelling approaches, we also collect nowcast which have been created retrospectively and evaluate how they would have performed in the past. For a fair comparison it is crucial that models only use data which would already have been available at the respective time of nowcasting. ",

        /* Hintergrund*/
        hintergrund_headline: "BACKGROUND",
        hintergrund_hinweis: "Notice",
        hintergrund_hinweistext: "Nowcasts can be less reliable if reporting delays behave differently than in earlier phases of the pandemic, e.g. due to high reporting volumes. It should also be noted that the proportion of people recorded in the hospitalization incidence for whom COVID-19 is actually the primary reason for hospitalization can change over time (e.g. due to the presumably milder omicron variant). This limits comparability across different time periods.",
        hintergrund_gruppen: "Stakeholder groups",
        hintergrund_gruppentext: "This platform is run by members of the Chair of Econometrics and Statistics at the Karlsruhe Institute of Technology and the Computational Statistics Group at the Heidelberg Institute for Theoretical Studies. Several other independent groups from science and media contribute nowcasts (see also metadata files in our GitHub repository):",
        hintergrund_TU: "Institut for math, TU Ilmenau",
        hintergrund_LMU: "Statistical Consulting Laboratory, LMU Munich",
        hintergrund_RIVM: "RIVM (Rijksinstituut voor Volksgezondheid en Milieu), Bilthoven, Niederlande",
        hintergrund_Stockholm: "Department of math, University of Stockholm",
        hintergrund_Süddeutsche: "Southgerman newspaper",
        hintergrund_London: "London School of Hygiene and Tropical Medicine / epiforecasts",

        hintergrund_RKI1: "In addition, we show the ",
        hintergrund_RKI2: "adjusted hospitalization incidences ",
        hintergrund_RKI3: "of the Robert Koch Institut.",

        hintergrund_github: "GitHub repository and usage of results", 
        hintergrund_githubtext: "All nowcasts are available under open licenses in a public GitHub repository. They may be reused for a variety of purposes provided the source is acknowledged (see the relevant license files for details). If you continue to use nowcasts from this platform for public presentations, we would appreciate a short message to the organization team or the authors of the respective nowcast. Currently, nowcasts from our platform are used, for example, by Zeit Online, the Neue Zürcher Zeitung, the Norddeutscher Rundfunk and the Südwestrundfunk.",
            
        hintergrund_evaluation: "Evaluation study", 
        hintergrund_evaluationtext: "We plan to systematically compare the different nowcasting methods in a prospective evaluation study. For this we have deposited a public study protocol (similar to the protocol of a previous study on short-term forecasts).", 
            
        hintergrund_hospitalisierungsrate: "State-specific surveys of the hospitalization rate",
        hintergrund_hospitalisierungsratetext: "Some federal states publish data on the incidence of hospitalization that deviate from the RKI, for which the reporting problems are sometimes less pronounced or additional information is available to differentiate between admissions with or because of COVID-19 (details on the survey are usually available on the relevant pages): Berlin, Bremen, Mecklenburg-Western Pomerania, Lower Saxony, North Rhine-Westphalia, Rhineland-Palatinate, Saxony.",
            
        hintergrund_verwandte: "Related projects and analysis",
        hintergrund_verwandtetext1: "The European, US and German/Polish COVID-19 Forecast Hub with short-term forecasts of case and death numbers (one to four weeks ahead).",
        hintergrund_verwandtetext2: "Nowcasts for case numbers and the effective number of reproductions in Germany from the Robert Koch Institute.",
        hintergrund_verwandtetext3: "Nowcasts for case numbers and the effective number of reproductions in Bavaria from the CODAG group at the LMU Munich.",
        hintergrund_verwandtetext4: "The US Scenario Modeling Hub with longer-term scenario projections.",
    
            
        methoden_headline: "METHODS",
        methoden_text: "Overview of all the methodes.",

        method1: "ILM-prop (TU Ilmenau)",
        method1_text: "These nowcasts use the historically observed 7-day incidence of hospitalization as a proportion of the 7-day incidence of COVID-19 cases at one, two, etc. weeks. From the 7-day incidence known today, these proportions are then calculated and added up to predict the final number of 7-day hospitalizations. The uncertainty is quantified by applying the method to past time points, using a log-normal distribution (age groups) or normal distribution (sum over all age groups) for the prediction errors. The main assumption of this method is that the proportion of hospitalizations in the 7-day incidence and the delays from the reporting date of the case until it appears in the RKI data only change slowly.        ",
        method2: "KIT-simple_nowcast (Karlsruher institute for technology)",
        method2_text: "The nowcasting is based on a simple estimate of the distribution of the delay between the date of notification and the occurrence of hospitalization in the RKI data (based on the last 60 days). Multiplication factors are derived from these, with which the respective incomplete most recent observations are corrected upwards. In order to assess the nowcast uncertainty, such corrected values ​​are also generated for past points in time (based on the information available at the time) and compared with the corresponding observations made later. For this purpose, a negative binomial distribution is assumed, the dispersion parameter of which depends on the time between the reporting date and the time of the nowcat. The scatter parameters are estimated using the maximum likelihood method. This procedure is deliberately kept simple and has the function of a reference/baseline model in our comparative evaluation study (see below). The central assumption is that the structure of the reporting delays remains stable over time. For example, weekday effects or developments in the number of cases are not taken into account.",
        method3: "LMU_StaBLab-GAM_nowcast (LMU Munich)",
        method3_text: "The nowcasts are based on a generalized additive model and the sequential multinomial structure of the time delays. The model is a slightly adapted version of the Schneble et al method. (2020) on nowcasting fatal infections.",
        method4: "RIVM-KEW (RIVM (Rijksinstituut voor Volksgezondheid en Milieu), Bilthoven, Netherlands)",
        method4_text: "This model is a simplified version of the method of van de Kassteele, Eilers and Wallinga (Epidemiology, 2019). A negative binomial distribution is assumed for the reported count values ​​per reporting date and delay. The expected values ​​are calculated using a two-dimensional P-spline surface and other covariables. This surface is extrapolated for the not yet observed combinations of date and lag value. The nowcast for a reporting date then corresponds to the sum over the corresponding observed and extrapolated count values ​​per lag duration. Prediction intervals are calculated using Monte Carlo simulation of the corresponding predictive distribution.The simplified version of the model contains no interaction terms for calendar time and lag, and no unimodality or boundary restrictions.The model is fitted using the R-package mgcv.",
        method5: "RKI-weekly_report (Robert Koch Institute)",
        method5_text: "These are estimates that were initially published on Thursdays in the weekly reports of the Robert Koch Institute and now appear daily in the COVID-19 Trends Dashboard. These are based on a modified variant of the nowcasting calculation for the 7-day incidence.",
        method6: "SU-hier_bayes (University Stockholm)",
        method6_text: "tba",
        method7: "SZ-hosp_nowcast (Southgerman newspaper)",
        method7_text: "The SZ estimates the values ​​for the nowcasting of the hospitalization incidence on the basis of the deviations between the daily published and subsequently corrected values ​​that arise from late reports. The archived data records of the Robert Koch Institute (https://github.com/robert-koch-institut/COVID-19-Hospitalisierungen_in_Deutschland) from the past 60 days are analyzed. For each of the 25 days before the last date in the data set, the percentage by which the corrected value reported on later days deviates from the originally reported hospitalization incidence is calculated. Quantiles are calculated for these derived multiplication factors. The currently published incidence is multiplied by the calculated quantiles to estimate the hospitalization incidence. Finally, the hospitalization incidence is smoothed over a three-day window to compensate for unrealistic larger fluctuations.",
        method8: "Epiforecasts-independent (London School of Hygiene and Tropical Medicine / epiforecasts)",
        method8_text: "A semiparametric nowcasting procedure for recensored hospitalizations by date of positive test. Hospitalizations are modeled using a random walk on the log scale. Reporting lags are then modeled parametrically with a log-normal distribution, where the log expectation and log standard deviation follow a weekly random walk with a common standard deviation. Weekday effects in reporting are modeled with random effects, with public holidays treated as Sundays. Nowcasts for age groups and geographic entities are each created separately (hence the name of the model). The model is implemented in the R package epinowcast. The analysis code is available here. Note: In a second version of the model (not shown previously), the different time series are modeled together (Epiforecasts-hierarchical).",
        method9: "NowcastHub-MeanEnsemble",
        method9_text: "This ensemble is calculated as the quantile mean of the submitted models with complete nowcasts (28 to 0 days before the current date).",
        method10: "NowcastHub-MedianEnsemble",
        method10_text: "This ensemble is calculated as the quantile-wise median of the submitted models with complete nowcasts (28 to 0 days before the current date).",
    
        

        /* hover Texte Graph*/
        buttonrightchart:"To enlarge the graph section.",
        buttonleftchart: "To reduce the size of the graph section.",
        
        hover_oder: "It is only possible to filter by state or age. A combination is not possible due to the data basis. ",
        hover1_methoden: "",
        hover2_methoden: "A semi-parametric nowcasting procedure for right-censored hospitalisations by date of positive test",
        hover3_methoden: "Using past observed proportional to 7-day incidence of COVID-19 cases, 7-day hospitalisation incidence after one, two, etc. weeks.",
        hover4_methoden: "Based on simple estimation of the distribution of delay durations between reporting date and appearance of a hospitalisation in the RKI data.",
        hover5_methoden: "Based on generalised additive model and the sequential multinomial structure of temporal delays.",
        hover6_methoden: "Calculated as quantile mean of submitted models with full nowcasts.",
        hover7_methoden:"A negative binomial distribution is assumed for the reported counts per reporting date and delay.",
        hover8_methoden:"Based on modified variant of nowcasting calculation for 7-day incidence.",
        hover9_methoden:"tba",
        hover10_methoden:"Discrepancies between daily published and subsequently corrected values.",

        hover_date: "Defines the starting date of the graph.",

        yAxis: "7 Tage Hospitalisierungsinzidenz",
        xAxis: "Meldedatum",


        /*Texte Graph*/

        Datenstand: "Current data",
        Filter: "Filter",
        oder: "or",
        Bundesland: "State:",
        Alter: "Age: ",
        Anzeige: "Display",
        per100k: "Per 100.000",
        absoluteZ: "absolute numbers",
        Unsicherheitsintervall: "Uncertainty interval",
        keines: "none",

        /* Methoden*/

        Datenstand_s: "Current data black",
        Datenstand_g: "Current data grey",


        Deutschland: "Germany",

        /*Datenschutz*/
        DatenschutzTitle:"PRIVACY | IMPRINT",
        Datenschutz_S1_Title: "Privacy",
        Datenschutz_S2_Title: "Cookies",
        Datenschutz_S3_Title: "Server-Log-Files",
        Datenschutz_S4_Title: "Right to information, deletion, blocking",
       
        Datenschutz_S1_Text1: "The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this data protection declaration.",
        Datenschutz_S1_Text2: "The use of our website is generally possible without providing personal data. Insofar as personal data (e.g. name, address or e-mail addresses) is collected on our pages, this is always done on a voluntary basis as far as possible. This data will not be passed on to third parties without your express consent.",
        Datenschutz_S1_Text3: "We would like to point out that data transmission on the Internet (e.g. when communicating by e-mail) can have security gaps. Complete protection of data against access by third parties is not possible.",

        Datenschutz_S2_Text1: "Some of the Internet pages use so-called cookies. Cookies do not cause any damage to your computer and do not contain viruses. Cookies serve to make our offer more user-friendly, effective and secure. Cookies are small text files that are stored on your computer and saved by your browser.",
        Datenschutz_S2_Text2: "Most of the cookies we use are so-called 'session cookies'. They are automatically deleted after the end of your visit. Other cookies remain stored on your terminal device until you delete them. These cookies enable us to recognise your browser on your next visit.",
        Datenschutz_S2_Text3: "You can set your browser so that you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or in general and activate the automatic deletion of cookies when closing the browser. If you deactivate cookies, the functionality of this website may be limited.",
        
        Datenschutz_S3_Text1: "The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:",
         Datenschutz_S3_ul1: "Browser type and version",
        Datenschutz_S3_ul2: "Operating system used",
        Datenschutz_S3_ul3: "Referrer URL",
        Datenschutz_S3_ul4: "Host name of the accessing computer",
        Datenschutz_S3_ul5: "Time of the server request",
        
        Datenschutz_S3_Text3: "You have the right at any time to free information about your stored personal data, its origin and recipient and the purpose of data processing, as well as the right to correct, block or delete this data. For this purpose as well as for further questions on the subject of personal data, you can contact us at any time at the address given in the imprint.",
        Datenschutz_S4_Text:"You have the right at any time to free information about your stored personal data, its origin and recipient and the purpose of data processing, as well as the right to correct, block or delete this data. For this purpose as well as for further questions on the subject of personal data, you can contact us at any time at the address given in the imprint.",
        /*Impressum*/
        ImpressumTitle:"IMPRINT",
        Impressum_S1_Title: "Information according to § 5 TMG:",
        Impressum_S2_Title: "Contact",
        Impressum_S3_Title:"Register entry:",
        Impressum_S4_Title:"Responsible for the content according to § 55 para. 2 RStV:",
        Impressum_S5_Title:"Source",
        Impressum_S2_Text1:"Phone:",
        Impressum_S2_Text2: "Mail:",
        Impressum_S3_Text1: "Entry in the register of associations.",
        Impressum_S3_Text2: "Register court: Mannheim ",
        Impressum_S3_Text3:" Register number: 700629",

        }
      },
    }
  });

  export default i18n;