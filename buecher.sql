-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 04. Jan 2023 um 12:37
-- Server-Version: 10.4.22-MariaDB
-- PHP-Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `ewa_apl`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `buecher`
--

CREATE TABLE `buecher` (
  `ProduktID` bigint(20) NOT NULL,
  `Produktcode` bigint(11) NOT NULL,
  `Produkttitel` text NOT NULL,
  `Autorname` text NOT NULL,
  `Genre` varchar(30) DEFAULT 'Unkategorisiert',
  `Verlagsname` text NOT NULL,
  `PreisNetto` float NOT NULL,
  `Mwstsatz` float NOT NULL,
  `Lagerbestand` int(11) NOT NULL,
  `Kurzinhalt` text NOT NULL,
  `Gewicht` float NOT NULL,
  `LinkGrafikdatei` text NOT NULL,
  `date_added` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Daten für Tabelle `buecher`
--

INSERT INTO `buecher` (`ProduktID`, `Produktcode`, `Produkttitel`, `Autorname`, `Genre`, `Verlagsname`, `PreisNetto`, `Mwstsatz`, `Lagerbestand`, `Kurzinhalt`, `Gewicht`, `LinkGrafikdatei`, `date_added`) VALUES
(1, 9783809445289, 'Unnützes Wissen Kalender 2023. Der beliebte, aber überflüssige Abreißkalender', 'Gerald Drews', 'Kalender', 'Bassermann', 6.99, 7, 8, 'Der Geschwindigkeitsrekord auf dem Mond liegt bei 18 Stundenkilometern und die Summe aller Zahlen von eins bis hundert ist 5050: Erstaunliche Fakten, häppchenweise präsentiert, sind ideale und garantiert unbedenkliche Brain Booster. Sie erweitern den...', 482, 'https://images.thalia.media/00/-/062402128c1547a2b757adb34d45243b/unnuetzes-wissen-kalender-2023-der-beliebte-aber-ueberfluessige-abreisskalender.jpeg', '2022-12-17'),
(2, 9783749905034, 'Die Vergessene', 'Karin Slaughter', 'Krimi', 'HarperCollins', 16.99, 19, 21, 'Vierzig Jahre Schweigen: Karin Slaughters neuer SPIEGEL-Bestseller zeichnet das aufrüttelnde Portrait eines grausamen Mordes\r\n\r\nEin Mädchen mit einem Geheimnis ...\r\nEin kleiner Ort an der US-Ostküste, 1982: Sorgfältig macht sich die siebzehnjährige Emily Vaughn...\r\n', 564, 'https://images.thalia.media/-/BF2000-2000/a9e7aae75ccd4f43b2892ff3244eef38/die-vergessene-epub-karin-slaughter.jpeg', '2022-12-17'),
(3, 9783426281574, 'Mimik', 'Sebastian Fitzek', 'Psychothriller', 'Droemer Knaur Verlag', 20.16, 19, 7, '\r\n\r\nFürchte dich nicht! Außer vor dir selbst …\r\n\r\nSebastian Fitzeks herausragender Psychothriller um eine Mimikresonanz-Expertin, die sich in größter Not selbst nicht mehr trauen kann\r\n\r\nEin winziges Zucken im Mundwinkel,...\r\n', 324, 'https://assets.thalia.media/img/artikel/7aa48b75b2307f6a982d5ae8f79065432abfdfca-00-00.jpeg', '2022-12-17'),
(4, 9783764532857, 'Rise of the Dragon. An Illustrated History of the Targaryen Dynasty (Vol. 1)', 'George R.R. Martin', 'Fantasy', 'Penhaligon', 49, 19, 45, 'Jahrhundertelang herrschte das Haus Targaryen über den Kontinent Westeros, während seine Drachen die Lüfte regierten. Dieser reich bebilderte Prachtband widmet sich dem Aufstieg dieser Dynastie, beginnend mit der Eroberung von Westeros durch Aegon Targaryen bis hin zum legendären Drachentanz, der die Familie fast auslöschte. Die Targaryen – und ihre Drachen – erwachen in dieser Chronik eindrücklich zum Leben: 200 wunderschöne farbige Illustrationen schmücken die knapp 400 Seiten dieses eindrucksvollen Bildbands. Unverzichtbar für Fans von George R.R. Martins »Das Lied von Eis und Feuer« und der Verfilmung »Game of Thrones« sowie seines jüngsten Werks »Feuer und Blut« und der daraus entstandenen Fernsehserie »House of the Dragon«. ', 1836, 'https://images.thalia.media/-/BF2000-2000/8ac24623d96240988cffdec7bd52b58f/targaryen-gebundene-ausgabe-george-r-r-martin.jpeg', '2022-12-17'),
(5, 9783423263382, 'Kalt und still', 'Viveca Sten', 'Krimi', 'dtv', 16.45, 19, 15, ' Bei Minus 20 Grad zählt jede Stunde\r\n\r\nHanna Ahlander ist 34, als ihre Welt kurz vor Weihnachten in sich zusammenfällt. Ihr Freund verlässt sie für eine andere und ihr Vorgesetzter legt ihr nahe, den Dienst bei der Stockholmer Polizei zu quittieren. Nachdem sie nicht bereit war, einen kriminellen Kollegen zu decken, stellt sich das Polizeikorps gegen sie. Zum Glück gibt es in dieser Männerwelt auch Frauen: Etwa ihre ältere Schwester, die sie flugs nach Åre schickt in ihr leer stehendes Ferienhaus. Hanna badet noch in Selbstmitleid, als eine Vermisstenmeldung sie erreicht. Nach einer Party ist die junge Amanda nicht nach Hause gekommen. Bei Minus 20 Grad zählt jede Stunde. Hanna beteiligt sich an der Suchaktion und hält Augen und Ohren offen. Bald weiß sie mehr als die örtliche Polizei …\r\n', 520, 'https://images.thalia.media/-/BF2000-2000/81ebd3d5bb0640f29a6f787ff3ff2431/kalt-und-still-taschenbuch-viveca-sten.jpeg', '2022-12-17'),
(6, 9783709981023, 'In der Schlinge des Hasses', 'Herbert Dutzler', 'Krimi', 'Haymon Verlag', 16.95, 19, 51, '„Schnörkellos erzählt Herbert Dutzler vom ganz normalen Leben, in dem nichts normal läuft. Und gerade das lässt mir, mehr noch als die Morde, Schauder über den Rücken jagen. Was wäre, wenn Leo mehr Glück gehabt hätte? Eine andere Abzweigung genommen hätte? Oder darf man das einem Rechtsradikalen nicht wünschen?“ Eva Rossmann „Eine bedrückende Studie toxischer Männlichkeit und völkischer Ideologie. Und trotz seines Wahns beginnen wir, dem Protagonisten die Daumen zu drücken, dass er vielleicht doch die Kurve bekommt. Spannend!“ Horst Eckert „Ich war schockiert und trotzdem so gefesselt von diesem Buch. ', 612, 'https://images.thalia.media/-/BF2000-2000/c9f0a088af3a4c1b9e9b20a63a33f5c3/in-der-schlinge-des-hasses-gebundene-ausgabe-herbert-dutzler.jpeg', '2022-12-17'),
(7, 9783864909009, 'Von Grundlagen bis Best Practices – Für den Um- und Einstieg in Vue 3', 'Fabian Deitelhoff', 'Lehrbuch', 'Dpunkt', 34.95, 7, 104, 'Dieses Buch ist ein praxisnaher Einstieg für alle, die sich Vue einmal genauer ansehen möchten. Fabian Deitelhoff erklärt den komponentenbasierte Ansatz, wie dieser umgesetzt wird und natürlich was für Vorteile er hat. Die Neuerungen von Vue 3 erläutert er detailliert. Und wer noch mit Vue 2 arbeiten muss oder möchte, findet hilfreiche Tipps und Hinweise zu Unterschieden und Stolpersteinen. Auch ein Blick in das Vue-Ökosystem rund um Themen wie State Management oder Internationalisierung sind Teil dieses Buchs. Angereichert mit vielen Code-Beispielen und praktischen Tipps aus der Webentwicklung begleitet Sie der Autor so von Projektstart, über Architektur bis Testen und Deployment.', 840, 'https://images.thalia.media/-/BF2000-2000/27344d8294414d85af3ab6623bcdfc34/vue-js-taschenbuch-fabian-deitelhoff.jpeg', '2022-12-17'),
(8, 9783642217371, 'Artificial Neural Networks and Machine Learning - ICANN 2011', '\r\n    Timo Honkela\r\n    Włodzisław Duch\r\n    Mark Girolami\r\n    Samuel Kaski\r\n', 'Lehrbuch', 'Springer Berlin', 74.95, 7, 23, 'This two volume set (LNCS 6791 and LNCS 6792) constitutes the refereed proceedings of the 21th International Conference on Artificial Neural Networks, ICANN 2011, held in Espoo, Finland, in June 2011.\r\nThe 106 revised full or poster papers presented were carefully reviewed and selected from numerous submissions. ICANN 2011 had two basic tracks: brain-inspired computing and machine learning research, with strong cross-disciplinary interactions and applications.', 746, 'https://images.thalia.media/-/BF2000-2000/81f6894cec69498b87b978ec0dc7e8eb/artificial-neural-networks-and-machine-learning-icann-2011-taschenbuch-englisch.jpeg', '2022-12-17'),
(9, 9783426519479, 'Playlist', 'Sebastian Fitzek', 'Krimi', 'Knaur Taschenbuch', 19.9, 19, 8, 'Musik ist ihr Leben. 15 Songs entscheiden, wie lange es noch dauert\r\n\r\nVor einem Monat verschwand die 15-jährige Feline Jagow spurlos auf dem Weg zur Schule. Von ihrer Mutter beauftragt, stößt Privatermittler Alexander Zorbach auf einen Musikdienst im Internet, über den Feline immer ihre Lieblingssongs hörte. Das Erstaunliche: Vor wenigen Tagen wurde die Playlist verändert. Sendet Feline mit der Auswahl der Songs einen versteckten Hinweis, wohin sie verschleppt wurde und wie sie gerettet werden kann? Fieberhaft versucht Zorbach das Rätsel der Playlist zu entschlüsseln.', 400, 'https://images.thalia.media/-/BF2000-2000/e64ee2caff784010bd8784dfe55dd12e/playlist-taschenbuch-sebastian-fitzek.jpeg', '2022-12-17');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
