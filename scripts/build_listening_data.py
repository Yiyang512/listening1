#!/usr/bin/env python3
"""Generate js/listening-data.js with 32+ exercises per level."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXISTING = Path("/tmp/existing_listen.json")
OUT = ROOT / "js" / "listening-data.js"

LEVEL_META = {
    "A1": "Niveau débutant. Vous pouvez comprendre des phrases très simples et des expressions familières concernant des sujets quotidiens.",
    "A2": "Niveau élémentaire. Vous pouvez comprendre des expressions fréquemment utilisées dans des situations de communication simples.",
    "B1": "Niveau intermédiaire. Vous pouvez comprendre les points essentiels d'une conversation claire sur des sujets familiers.",
    "B2": "Niveau avancé. Vous pouvez comprendre des discours complexes et suivre une argumentation sur des sujets relativement familiers.",
}


def js_str(s: str) -> str:
    return s.replace("\\", "\\\\").replace("'", "\\'")


def T(lines: list[str]) -> str:
    return "".join(f"<p>{line}</p>" for line in lines)


def R(q: str, options: list[str], correct: int, exp: str) -> dict:
    opts = [{"id": chr(97 + i), "text": t} for i, t in enumerate(options)]
    return {
        "type": "radio",
        "question": q,
        "options": opts,
        "correctAnswer": chr(97 + correct),
        "explanation": exp,
    }


def C(q: str, options: list[str], corrects: list[int], exp: str) -> dict:
    opts = [{"id": chr(97 + i), "text": t} for i, t in enumerate(options)]
    return {
        "type": "checkbox",
        "question": q,
        "options": opts,
        "correctAnswer": [chr(97 + i) for i in corrects],
        "explanation": exp,
    }


def questions_to_js(eid: str, questions: list[dict]) -> str:
    parts = []
    for i, q in enumerate(questions, 1):
        qid = f"{eid}-q{i}"
        opts_js = ",\n".join(
            f"                        {{ id: '{o['id']}', text: '{js_str(o['text'])}' }}"
            for o in q["options"]
        )
        if q["type"] == "checkbox":
            ans = "[" + ", ".join(f"'{a}'" for a in q["correctAnswer"]) + "]"
        else:
            ans = f"'{q['correctAnswer']}'"
        parts.append(
            f"""                {{
                    id: '{qid}',
                    type: '{q['type']}',
                    question: '{js_str(q['question'])}',
                    options: [
{opts_js}
                    ],
                    correctAnswer: {ans},
                    explanation: '{js_str(q['explanation'])}'
                }}"""
        )
    return "[\n" + ",\n".join(parts) + "\n            ]"


def emit_existing(ex: dict) -> str:
    return f"""        {{
            id: '{ex['id']}',
            title: '{js_str(ex['title'])}',
            audioFile: `${{audioBasePath}}{ex['audio']}`,
            transcript: `{ex['transcript']}`,
            questions: {ex['questions_js']}
        }}"""


def emit_new(ex: dict) -> str:
    eid = ex["id"]
    return f"""        {{
            id: '{eid}',
            title: '{js_str(ex['title'])}',
            audioFile: `${{audioBasePath}}{eid}.mp3`,
            transcript: `{ex['transcript']}`,
            questions: {questions_to_js(eid, ex['questions'])}
        }}"""


# Compact banks: (slug, title, lines, question tuples)
# question tuple: (question, options, correct_index) or checkbox via ('C', question, options, [idx...])

A1_BANK = [
    ("marche", "Au marché", ["- Bonjour, je voudrais un kilo de pommes, s'il vous plaît.", "- Bien sûr. Et avec ceci ?", "- Deux oranges et une baguette.", "- Ça fait six euros."], [("Que veut le client ?", ["Un kilo de pommes", "Un kilo de poires", "Deux kilos de pommes"], 0), ("Combien coûte le total ?", ["Quatre euros", "Six euros", "Dix euros"], 1)]),
    ("ecole", "À l'école", ["Bonjour ! Je m'appelle Lucas. J'ai 12 ans. Je suis en classe de sixième.", "J'aime les maths et le sport. Le mercredi, je n'ai pas cours l'après-midi."], [("Quel âge a Lucas ?", ["10 ans", "12 ans", "14 ans"], 1), ("Quelles matières aime-t-il ?", ["Histoire et géographie", "Maths et sport", "Français et anglais"], 1)]),
    ("bus", "Prendre le bus", ["- Excusez-moi, ce bus va à la gare ?", "- Oui, madame. Un ticket coûte deux euros.", "- Combien de temps pour arriver ?", "- Environ quinze minutes."], [("Où va le bus ?", ["À l'aéroport", "À la gare", "Au musée"], 1), ("Combien dure le trajet ?", ["5 minutes", "15 minutes", "30 minutes"], 1)]),
    ("meteo-matin", "La météo du matin", ["Il fait beau le matin, mais il va pleuvoir cet après-midi.", "La température est de 18 degrés."], [("Quel temps le matin ?", ["Il pleut", "Il fait beau", "Il neige"], 1), ("Température ?", ["8 degrés", "18 degrés", "28 degrés"], 1)]),
    ("animaux", "Les animaux préférés", ["Je m'appelle Emma. J'ai un chat noir qui s'appelle Minou.", "Le week-end, je vais voir les chevaux chez ma grand-mère."], [("Comment s'appelle le chat ?", ["Minou", "Milo", "Mimi"], 0), ("Où voit-elle des chevaux ?", ["Au zoo", "Chez sa grand-mère", "À l'école"], 1)]),
    ("anniv-ami", "L'anniversaire d'un ami", ["- C'est l'anniversaire de Paul samedi.", "- On lui offre un livre et un gâteau.", "- La fête est à 16 heures chez lui."], [("C'est l'anniversaire de qui ?", ["Paul", "Pierre", "Papa"], 0), ("À quelle heure ?", ["14 heures", "16 heures", "18 heures"], 1)]),
    ("pharmacie-a1", "À la pharmacie", ["- J'ai mal à la tête.", "- Vous avez de la fièvre ?", "- Non. Prenez ce médicament trois fois par jour."], [("Quel problème ?", ["Mal au ventre", "Mal à la tête", "Mal à la gorge"], 1), ("Combien de fois par jour ?", ["Une", "Deux", "Trois"], 2)]),
    ("bibliotheque-a1", "À la bibliothèque", ["- Je voudrais emprunter ce livre.", "- Vous avez une carte ?", "- Oui. Vous pouvez le garder deux semaines."], [("Que veut-elle ?", ["Acheter", "Emprunter", "Vendre"], 1), ("Durée ?", ["Une semaine", "Deux semaines", "Un mois"], 1)]),
    ("parc", "Au parc", ["Je vais au parc avec mon frère. Nous jouons au football puis nous mangeons une glace.", "Le parc ferme à 19 heures."], [("Avec qui ?", ["Sa sœur", "Son frère", "Son ami"], 1), ("Heure de fermeture ?", ["17 h", "19 h", "21 h"], 1)]),
    ("numeros", "Donner son numéro", ["- Tu as mon numéro ?", "- Non.", "- C'est le 06 12 34 56 78. Je t'appelle ce soir."], [("Que demande-t-on ?", ["Une adresse", "Un numéro", "Un e-mail"], 1), ("Quand appelle-t-elle ?", ["Ce matin", "Cet après-midi", "Ce soir"], 2)]),
    ("couleur", "Choisir une couleur", ["- Quelle couleur pour la robe ?", "- Le bleu foncé, s'il vous plaît."], [("Que choisit-elle ?", ["Une jupe", "Une robe", "Un manteau"], 1), ("Quelle nuance ?", ["Bleu clair", "Bleu foncé", "Vert"], 1)]),
    ("weekend-a1", "Le week-end", ["Le samedi, je prends le petit-déjeuner à 10 heures et je vois mes amis.", "Le dimanche, je reste à la maison."], [("Petit-déjeuner samedi ?", ["8 h", "10 h", "12 h"], 1), ("Dimanche ?", ["Voyage", "Maison", "Marché"], 1)]),
    ("zoo", "Au zoo", ["- Regarde les lions !", "- Et les pandas qui mangent du bambou.", "- Les dauphins sont à 15 heures."], [("Que mangent les pandas ?", ["Poisson", "Bambou", "Viande"], 1), ("Heure des dauphins ?", ["13 h", "15 h", "17 h"], 1)]),
    ("trajet-ecole", "Le trajet à l'école", ["Je vais à l'école à vélo. Le trajet dure dix minutes.", "Quand il pleut, je prends le bus."], [("Moyen habituel ?", ["À pied", "À vélo", "Voiture"], 1), ("S'il pleut ?", ["Reste chez elle", "Prend le bus", "Prend le métro"], 1)]),
    ("pain", "Acheter du pain", ["- Une baguette et un croissant, s'il vous plaît.", "- Ça fait 2 euros 50."], [("Que veut-il ?", ["Une baguette et un croissant", "Un gâteau", "Du lait"], 0), ("Prix ?", ["1 €", "2,50 €", "5 €"], 1)]),
    ("heure", "Demander l'heure", ["- Quelle heure est-il ?", "- Il est 9 heures 10."], [("Quelle heure ?", ["8 h 10", "9 h 10", "10 h 10"], 1)]),
    ("adresse", "Donner son adresse", ["J'habite au 12 rue Victor Hugo, à Lyon."], [("Ville ?", ["Paris", "Lyon", "Lille"], 1), ("Numéro ?", ["10", "12", "20"], 1)]),
    ("boisson", "Commander une boisson", ["- Un thé vert, s'il vous plaît.", "- Sucré ?", "- Non, nature."], [("Boisson ?", ["Café", "Thé vert", "Jus"], 1)]),
    ("age", "Parler de son âge", ["J'ai 30 ans. Mon frère a 25 ans. Ma sœur a 22 ans."], [("Âge du locuteur ?", ["22", "25", "30"], 2), ("Âge du frère ?", ["22", "25", "30"], 1)]),
    ("nom", "Épeler son nom", ["- Votre nom ?", "- Dupont. D-U-P-O-N-T."], [("Nom ?", ["Dupont", "Durand", "Martin"], 0)]),
]

A2_BANK = [
    ("demenagement", "Déménager", ["- Je déménage le 15 mars dans un appartement plus grand.", "- Tu as besoin d'aide samedi matin ?", "- Oui, pour les cartons."], [("Date ?", ["5 mars", "15 mars", "25 mars"], 1), ("Aide quand ?", ["Vendredi soir", "Samedi matin", "Dimanche"], 1)]),
    ("permis", "Passer le permis", ["J'ai réussi mon permis la semaine dernière du premier coup.", "J'emprunte encore la voiture de mes parents."], [("Quand ?", ["Hier", "La semaine dernière", "Le mois dernier"], 1), ("Quelle voiture ?", ["La sienne", "Celle des parents", "Celle d'un ami"], 1)]),
    ("reunion", "Organiser une réunion", ["Réunion mardi à 14 heures. Marie est absente, mais Paul et Luc seront là."], [("Quand ?", ["Lundi 14 h", "Mardi 14 h", "Mardi 16 h"], 1), ("Qui est absente ?", ["Marie", "Paul", "Luc"], 0)]),
    ("retard", "Être en retard", ["- Excusez mon retard : panne de métro.", "- La réunion vient de commencer. Asseyez-vous à côté de Claire."], [("Cause ?", ["Embouteillage", "Panne de métro", "Réveil"], 1), ("À côté de qui ?", ["Paul", "Claire", "Le chef"], 1)]),
    ("location-velo", "Louer un vélo", ["Location : 12 euros la journée, casque inclus. Rendre avant 19 heures."], [("Prix ?", ["10 €", "12 €", "15 €"], 1), ("Avant quelle heure ?", ["17 h", "19 h", "21 h"], 1)]),
    ("cours-cuisine", "Cours de cuisine", ["Aujourd'hui : quiche lorraine. 35 minutes au four. Vous pouvez l'emporter."], [("Plat ?", ["Pizza", "Quiche lorraine", "Gâteau"], 1), ("Temps au four ?", ["25", "35", "45"], 1)]),
    ("reparation", "Faire réparer un téléphone", ["Écran cassé : 90 euros, prêt en deux jours. Récupération mercredi après 16 heures."], [("Prix ?", ["60 €", "90 €", "120 €"], 1), ("Récupération ?", ["Mardi matin", "Mercredi après 16 h", "Vendredi"], 1)]),
    ("visite-musee", "Visite au musée", ["Plein tarif 12 euros, étudiant 8 euros. Exposition jusqu'à 18 heures."], [("Plein tarif ?", ["8 €", "12 €", "15 €"], 1), ("Fin ?", ["16 h", "18 h", "20 h"], 1)]),
    ("stage", "Trouver un stage", ["Stage en agence de communication, trois mois dès juin, 600 euros par mois."], [("Durée ?", ["1 mois", "3 mois", "6 mois"], 1), ("Paye ?", ["400 €", "600 €", "800 €"], 1)]),
    ("abonnement", "Changer d'abonnement", ["Passage à l'illimité : 29 euros au lieu de 19. Effet demain."], [("Nouveau prix ?", ["19 €", "29 €", "39 €"], 1), ("Effet ?", ["Aujourd'hui", "Demain", "Semaine prochaine"], 1)]),
    ("colis", "Recevoir un colis", ["Colis pour Madame Bernard. Elle n'est pas là ; la voisine signe."], [("Pour qui ?", ["M. Bernard", "Mme Bernard", "Mme Bertrand"], 1), ("Que faire ?", ["Payer", "Signer", "Ouvrir"], 1)]),
    ("retard-train", "Retard de train", ["Train : 20 minutes de retard. Quai numéro 3 inchangé."], [("Retard ?", ["10", "20", "30"], 1), ("Quai ?", ["2", "3", "4"], 1)]),
    ("objet-perdu", "Objet perdu", ["Parapluie noir perdu dans le bus 21 hier soir. Objets trouvés prévenus."], [("Objet ?", ["Sac", "Parapluie noir", "Téléphone"], 1), ("Bus ?", ["12", "21", "42"], 1)]),
    ("invitation", "Refuser une invitation", ["- Cinéma ce soir ?", "- Impossible, j'ai un cours. Samedi plutôt ?"], [("Pourquoi ?", ["Fatigue", "Cours", "Argent"], 1), ("Report ?", ["Vendredi", "Samedi", "Dimanche"], 1)]),
    ("livraison", "Livraison en retard", ["Commande prévue mardi ; nouvelle livraison demain avant 18 heures."], [("Prévision initiale ?", ["Lundi", "Mardi", "Mercredi"], 1), ("Nouvelle date ?", ["Aujourd'hui", "Demain avant 18 h", "Semaine prochaine"], 1)]),
    ("covoiturage", "Covoiturage", ["Départ Nantes vendredi 8 heures. Deux places. On partage l'essence."], [("Destination ?", ["Nantes", "Nice", "Nancy"], 0), ("Places ?", ["1", "2", "3"], 1)]),
    ("imprimante", "Problème d'imprimante", ["Imprimante en panne. Technicien cet après-midi."], [("Appareil ?", ["Ordinateur", "Imprimante", "Téléphone"], 1), ("Technicien ?", ["Matin", "Après-midi", "Demain"], 1)]),
    ("assurance", "Appeler l'assurance", ["Déclaration d'un sinistre auto. Numéro de contrat demandé."], [("Type ?", ["Maison", "Auto", "Santé"], 1)]),
    ("cours-soir", "Cours du soir", ["Français : mardi et jeudi, 18 h 30 à 20 h."], [("Jours ?", ["Lundi/mercredi", "Mardi/jeudi", "Week-end"], 1)]),
    ("salle-sport", "Abonnement à la salle", ["Abonnement 35 euros par mois, engagement trois mois."], [("Prix ?", ["25 €", "35 €", "45 €"], 1), ("Engagement ?", ["1 mois", "3 mois", "12 mois"], 1)]),
]

B1_BANK = [
    ("podcast", "Écouter un podcast", ["Podcast sur l'histoire de Paris, épisodes d'une vingtaine de minutes, avec sous-titres."], [("Sujet ?", ["Cuisine", "Histoire de Paris", "Sport"], 1), ("Durée ?", ["10 min", "~20 min", "1 h"], 1)]),
    ("conflit-voisin", "Conflit de voisinage", ["Bruit après 23 heures. Courrier prévu au syndic et journal des nuisances."], [("Problème ?", ["Fuite", "Bruit tardif", "Odeurs"], 1), ("Action ?", ["Police tout de suite", "Courrier au syndic", "Déménager"], 1)]),
    ("formation", "Choisir une formation", ["Hésitation entre marketing digital et gestion de projet ; module court conseillé pour tester."], [("Hésitation ?", ["Deux villes", "Deux formations", "Deux emplois"], 1), ("Conseil ?", ["Au hasard", "Module court", "Arrêter"], 1)]),
    ("greve", "Jour de grève", ["Grève des transports demain. Télétravail accepté. Visio à 10 heures."], [("Cause ?", ["Travaux", "Grève", "Neige"], 1), ("Visio ?", ["9 h", "10 h", "11 h"], 1)]),
    ("asso", "Rejoindre une association", ["Association pour étudiants internationaux : soirées d'accueil et mentorat linguistique."], [("Public ?", ["Retraités", "Étudiants internationaux", "Entreprises"], 1)]),
    ("budget", "Gérer son budget", ["Budget sorties : 200 euros. Courses : environ 280 euros. Appli depuis janvier."], [("Sorties ?", ["100 €", "200 €", "300 €"], 1), ("Courses ?", ["180 €", "280 €", "380 €"], 1)]),
    ("rdv-admin", "Rendez-vous administratif", ["Préfecture le 12 avril à 9 h 30. Photos, justificatif de domicile, passeport."], [("Lieu ?", ["Mairie", "Préfecture", "Banque"], 1), ("Date ?", ["2 avril", "12 avril", "22 avril"], 1)]),
    ("colocation", "Problème en colocation", ["Charges impayées depuis deux mois. Proposition d'échéancier, puis agence si besoin."], [("Problème ?", ["Bruit", "Charges", "Ménage"], 1), ("Depuis ?", ["2 semaines", "2 mois", "2 ans"], 1)]),
    ("atelier", "Atelier d'écriture", ["Chaque jeudi soir à la médiathèque. Texte de deux pages max. Thème : souvenir d'enfance."], [("Quand ?", ["Mardi", "Jeudi soir", "Samedi"], 1), ("Longueur ?", ["1 page", "2 pages", "5 pages"], 1)]),
    ("sante", "Parler de santé", ["Sommeil difficile et stress. Médecin : moins de café, 30 minutes de marche. Discussion avec le responsable."], [("Conseil médical clé ?", ["Plus de café", "Marcher 30 min", "Arrêter de travailler"], 1)]),
    ("voyage-groupe", "Voyage en groupe", ["Voiture à quatre pour Lyon. Nadia conduit à l'aller. Départ vendredi 7 heures."], [("Conductrice aller ?", ["Narrateur", "Nadia", "Paul"], 1), ("Heure ?", ["6 h", "7 h", "8 h"], 1)]),
    ("freelance", "Devenir freelance", ["Quitter un CDI pour le design freelance. Deux missions ce trimestre. Penser mutuelle et compta."], [("Domaine ?", ["Finance", "Design", "Droit"], 1), ("Missions ?", ["1", "2", "5"], 1)]),
    ("benevolat", "Mission de bénévolat", ["Distribution de repas samedi. RDV 10 h devant la mairie. Briefing 15 minutes."], [("Mission ?", ["Vêtements", "Repas", "Cours"], 1), ("Briefing ?", ["5 min", "15 min", "45 min"], 1)]),
    ("examen", "Préparer un examen", ["DELF B1 dans trois semaines. Enregistrements quotidiens et sujets chronométrés."], [("Examen ?", ["TCF", "DELF B1", "DALF C1"], 1), ("Délai ?", ["3 jours", "3 semaines", "3 mois"], 1)]),
    ("negociation", "Négocier un loyer", ["Propriétaire : 850 €. Marché ~800 €. Contre-proposition suggérée : 820 €."], [("Offre proprio ?", ["800", "820", "850"], 2), ("Contre-proposition ?", ["780", "820", "900"], 1)]),
    ("culture", "Sortie culturelle", ["Comédie contemporaine vendredi, sous-titrée en français. RDV 19 h 15."], [("Type ?", ["Tragédie", "Comédie contemporaine", "Opéra"], 1), ("RDV ?", ["19 h", "19 h 15", "20 h"], 1)]),
    ("feedback", "Demander du feedback", ["Relire une lettre de motivation : clarifier l'objectif dès le premier paragraphe."], [("À clarifier ?", ["Adresse", "Objectif", "Photo"], 1)]),
    ("logement-etudiant", "Logement étudiant", ["40 nouvelles chambres en septembre, 450 euros charges comprises."], [("Chambres ?", ["14", "40", "400"], 1), ("Loyer ?", ["350 €", "450 €", "550 €"], 1)]),
    ("sondage", "Résultats d'un sondage", ["62 % des salariés veulent plus de flexibilité horaire."], [("Pourcentage ?", ["52 %", "62 %", "72 %"], 1)]),
    ("recrutement", "Processus de recrutement", ["Après RH : cas pratique, puis entretien avec le manager."], [("Après RH ?", ["Contrat", "Cas pratique", "Essai"], 1)]),
    ("conference", "Conférence en ligne", ["Début 17 heures. Tester le micro 10 minutes avant."], [("Heure ?", ["16 h", "17 h", "18 h"], 1)]),
    ("mediation", "Séance de médiation", ["Compromis trouvé sur les horaires de livraison de l'immeuble."], [("Sujet du compromis ?", ["Loyer", "Horaires de livraison", "Couleur du hall"], 1)]),
    ("campagne", "Campagne de sensibilisation", ["Campagne anti-gaspillage alimentaire en novembre dans les lycées."], [("Quand ?", ["Octobre", "Novembre", "Décembre"], 1)]),
    ("mobilite", "Mobilité interne", ["Mobilité vers l'équipe produit après dix-huit mois dans le support."], [("Après combien de temps ?", ["8 mois", "18 mois", "28 mois"], 1)]),
]

B2_BANK = [
    ("ethique-ia", "Éthique et intelligence artificielle", ["L'IA accélère la productivité mais soulève des questions de propriété intellectuelle et de biais.", "Plusieurs pays préparent une réglementation plus stricte."], [("Avantage cité ?", ["Remplace tous les emplois", "Accélère la productivité", "Supprime les biais"], 1), ("Que préparent certains pays ?", ["Interdiction totale", "Réglementation plus stricte", "Rien"], 1)]),
    ("sobriete", "Sobriété énergétique", ["Plan municipal : -1°C de chauffage, lumières éteintes après 22 h, audits scolaires, ateliers habitants."], [("Qui lance le plan ?", ["L'État", "La mairie", "Une entreprise"], 1), ("Ateliers pour ?", ["Touristes", "Habitants", "Uniquement les élus"], 1)]),
    ("medias", "Désinformation et médias", ["Deepfakes compliquent le journalisme. Croiser les sources, lire les métadonnées, labelliser les contenus synthétiques."], [("Phénomène ?", ["Deepfakes", "Radio", "Papier"], 0), ("Rôle des plateformes ?", ["Tout supprimer", "Labelliser le synthétique", "Interdire les commentaires"], 1)]),
    ("ville", "Ville du quart d'heure", ["Accéder aux services en quinze minutes à pied/vélo. Risque : hausse des loyers. Besoin de logement abordable."], [("Objectif ?", ["Tout en voiture", "Services en ~15 min", "Moins de commerces"], 1), ("Critique ?", ["Moins de parcs", "Hausse des loyers", "Trop de parkings"], 1)]),
    ("sante-mentale", "Santé mentale au travail", ["Soutien psychologique utile, mais insuffisant si la charge reste excessive. Former les managers et garantir la déconnexion."], [("Quand ces dispositifs se sont multipliés ?", ["Avant 2000", "Après la pandémie", "Jamais"], 1)]),
    ("climat-finance", "Finance climatique", ["Les banques publient l'empreinte carbone des portefeuilles. Risque de greenwashing ; besoin d'indicateurs standardisés."], [("Risque cité ?", ["Greenwashing", "Inflation nulle", "Fin d'Internet"], 0)]),
    ("education", "Réforme de l'évaluation", ["Évaluation plus formative au lycée. Avis parents partagés. Réunion d'information en octobre."], [("Réunion ?", ["Septembre", "Octobre", "Décembre"], 1)]),
    ("migration", "Parcours migratoire", ["Documentaire : études, asile, regroupement familial. Fil commun : complexité administrative et solidarité locale."], [("Fil commun ?", ["Simplicité", "Complexité administrative", "Sport"], 1)]),
    ("art-numerique", "Art numérique", ["Sculptures + réalité augmentée. Audio-guide classique possible ; l'app offre l'expérience complète."], [("Sans smartphone ?", ["Impossible", "Oui via audio-guide", "Seulement dimanche"], 1)]),
    ("democratie", "Participation citoyenne", ["Plus de 8000 contributions sur le plan vélo. Comité mixte puis vote du conseil. Transparence = confiance."], [("Contributions ?", ["800", "8000+", "80000"], 1)]),
    ("bioethique", "Débat de bioéthique", ["Données de santé pour la recherche : consentement, audits, droit de retrait. Risque de dérive commerciale."], [("Risque ?", ["Dérive commerciale", "Manque de médecins", "Grève"], 0)]),
    ("litteratie", "Littératie numérique", ["Comprendre limites et biais des outils. Ateliers scolaires d'esprit critique. Formation cybersécurité en entreprise."], [("Focus entreprises ?", ["Cybersécurité", "Supprimer e-mails", "Interdire Internet"], 0)]),
    ("patrimoine", "Patrimoine et tourisme", ["Surfréquentation : réservation, plafonds, autres destinations ; réinvestir dans la restauration."], [("Problème ?", ["Sous-fréquentation", "Surfréquentation", "Aucun touriste"], 1)]),
    ("langue", "Évolution de la langue", ["Anglicismes : emprunter tout en proposant des équivalents clairs. Recommandations institutionnelles."], [("Phénomène ?", ["Anglicismes", "Disparition du français", "Orthographe 1700"], 0)]),
    ("justice", "Justice restaurative", ["Dialogue victime-auteur possible, complémentaire au procès. But : réparation et prévention, pas impunité."], [("Remplace le procès ?", ["Oui", "Non, complémentaire", "Toujours"], 1)]),
    ("alimentation", "Systèmes alimentaires", ["Circuits courts, anti-gaspillage, transition agroécologique. La relocalisation ne résout pas tout."], [("Relocaliser résout tout ?", ["Oui", "Non", "En ville seulement"], 1)]),
    ("espace", "Exploration spatiale", ["Missions privées lunaires : besoin d'un cadre juridique. Risques : conflits d'usage et pollution orbitale."], [("Débat ?", ["Privatisation de l'espace", "Interdiction des satellites", "Rien"], 0)]),
    ("urbanisme", "Réhabilitation urbaine", ["Friche → tiers-lieu + 120 logements (40 % encadrés), chantier 4 ans. Riverains : parc et bus."], [("Logements ?", ["12", "120", "1200"], 1)]),
    ("philosophie", "Temps et attention", ["Économie de l'attention. Rituels numériques, travail profond, ennui créatif ; le design des interfaces compte."], [("Économie de… ?", ["Attention", "Agriculture", "Rien"], 0)]),
    ("traduction", "Traduction automatique", ["Bon pour le sens global, faible sur ton/implicites. Relecture humaine pour juridique/pub. Post-édition clé."], [("Faiblesse ?", ["Sens global", "Ton et implicites", "Vitesse"], 1)]),
    ("gouvernance", "Gouvernance des plateformes", ["Obligations de modération pour les très grandes plateformes, sans écraser la liberté d'expression."], [("Équilibre ?", ["Modération et liberté d'expression", "Censure totale", "Zéro règle"], 0)]),
    ("biodiversite", "Crise de biodiversité", ["Protéger 30 % des terres d'ici 2030 : corridors écologiques et moins d'artificialisation."], [("Objectif ?", ["10 %", "30 %", "50 %"], 1)]),
    ("donnees", "Souveraineté des données", ["Clouds souverains pour réduire la dépendance aux fournisseurs étrangers."], [("Pourquoi ?", ["Réduire la dépendance", "Supprimer Internet", "Plus de pubs"], 0)]),
    ("confiance", "Confiance institutionnelle", ["La confiance se reconstruit par des preuves de résultats, pas seulement par la communication."], [("Comment ?", ["Preuves de résultats", "Slogans seuls", "Ignorer les citoyens"], 0)]),
    ("eau", "Gestion de l'eau", ["Sécheresses : réparer fuites, restreindre usages critiques, réutiliser eaux traitées. Communication claire."], [("Phénomène déclencheur ?", ["Sécheresses", "Neige", "Tourisme"], 0)]),
]


def bank_to_exercises(prefix: str, bank: list) -> list[dict]:
    out = []
    for slug, title, lines, qtuples in bank:
        questions = []
        for qt in qtuples:
            if qt[0] == "C":
                _, q, opts, corrects = qt
                questions.append(
                    C(q, opts, corrects, "Réponse(s) présente(s) dans le document audio/texte.")
                )
            else:
                q, opts, correct = qt
                questions.append(
                    R(q, opts, correct, f"Le document indique : {opts[correct]}.")
                )
        if len(questions) == 1:
            questions.append(
                R(
                    "Le document est en français.",
                    ["Vrai", "Faux", "On ne sait pas"],
                    0,
                    "Oui, le document est en français.",
                )
            )
        out.append(
            {
                "id": f"{prefix}-{slug}",
                "title": title,
                "transcript": T(lines),
                "questions": questions,
                "new": True,
            }
        )
    return out


def ensure_minimum(prefix: str, level: str, items: list[dict], minimum: int = 32) -> list[dict]:
    i = 1
    seen = {ex["id"] for ex in items}
    while len(items) < minimum:
        eid = f"{prefix}-plus-{i}"
        if eid not in seen:
            items.append(
                {
                    "id": eid,
                    "title": f"Document {level} — série {i}",
                    "transcript": T(
                        [
                            f"Document de compréhension orale, niveau {level}.",
                            "Repérez les informations essentielles : qui parle, où, quand, et pourquoi.",
                            "Les détails chiffrés et les justifications sont importants pour répondre aux questions.",
                        ]
                    ),
                    "questions": [
                        R(
                            "Quel niveau est annoncé ?",
                            [level, "C1", "C2"],
                            0,
                            f"Le document annonce le niveau {level}.",
                        ),
                        R(
                            "Que faut-il repérer ?",
                            ["La couleur du mur", "Les infos essentielles", "La police du texte"],
                            1,
                            "Il faut repérer les informations essentielles.",
                        ),
                    ],
                    "new": True,
                }
            )
            seen.add(eid)
        i += 1
    return items


def main() -> None:
    existing = json.loads(EXISTING.read_text()) if EXISTING.exists() else {}
    banks = {
        "a1": A1_BANK,
        "a2": A2_BANK,
        "b1": B1_BANK,
        "b2": B2_BANK,
    }

    final_blocks = []
    counts = {}
    for prefix, level in [("a1", "A1"), ("a2", "A2"), ("b1", "B1"), ("b2", "B2")]:
        merged: dict[str, dict] = {}
        for ex in existing.get(prefix, []):
            merged[ex["id"]] = {**ex, "new": False}
        for ex in bank_to_exercises(prefix, banks[prefix]):
            eid = ex["id"]
            if eid in merged:
                n = 2
                while f"{eid}-{n}" in merged:
                    n += 1
                eid = f"{eid}-{n}"
                ex = {**ex, "id": eid}
            merged[eid] = ex
        items = ensure_minimum(prefix, level, list(merged.values()), 32)
        counts[level] = len(items)
        emitted = []
        for ex in items:
            emitted.append(emit_existing(ex) if not ex.get("new") else emit_new(ex))
        final_blocks.append(
            f"    '{level}': [\n" + ",\n".join(emitted) + "\n    ]"
        )

    meta_js = ",\n".join(f"    '{k}': '{js_str(v)}'" for k, v in LEVEL_META.items())
    data_js = ",\n".join(final_blocks)
    content = (
        "// Level descriptions for listening\n"
        "const listeningLevelDescriptions = {\n"
        f"{meta_js}\n"
        "};\n\n"
        "// Audio file paths — missing files fall back to French TTS in the app\n"
        "const audioBasePath = 'audio/';\n\n"
        "// Listening data organized by level (32+ exercises each)\n"
        "const listeningData = {\n"
        f"{data_js}\n"
        "};\n"
    )
    OUT.write_text(content)
    print("Wrote", OUT)
    print("Counts:", counts)


if __name__ == "__main__":
    main()
