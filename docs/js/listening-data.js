// Level descriptions for listening
const listeningLevelDescriptions = {
    'A1': 'Niveau débutant. Vous pouvez comprendre des phrases très simples et des expressions familières concernant des sujets quotidiens.',
    'A2': 'Niveau élémentaire. Vous pouvez comprendre des expressions fréquemment utilisées dans des situations de communication simples.',
    'B1': 'Niveau intermédiaire. Vous pouvez comprendre les points essentiels d\'une conversation claire sur des sujets familiers.',
    'B2': 'Niveau avancé. Vous pouvez comprendre des discours complexes et suivre une argumentation sur des sujets relativement familiers.'
};

// Example audio file paths - Replace with your actual audio files
const audioBasePath = 'audio/';

// Listening data organized by level
const listeningData = {
    'A1': [
        {
            id: 'a1-se-presenter',
            title: 'Se présenter',
            audioFile: `${audioBasePath}a1-se-presenter.mp3`,
            transcript: `<p>Bonjour ! Je m'appelle Marie. J'ai 25 ans. Je suis française et j'habite à Paris. Je suis étudiante à l'université. J'étudie l'histoire de l'art. J'aime beaucoup la musique et le cinéma. Le week-end, je vais souvent au musée avec mes amis.</p>`,
            questions: [
                {
                    id: 'a1-se-presenter-q1',
                    type: 'radio',
                    question: 'Comment s\'appelle la personne qui parle ?',
                    options: [
                        { id: 'a', text: 'Marie' },
                        { id: 'b', text: 'Sophie' },
                        { id: 'c', text: 'Julie' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'La personne se présente en disant "Je m\'appelle Marie".'
                },
                {
                    id: 'a1-se-presenter-q2',
                    type: 'radio',
                    question: 'Quel âge a-t-elle ?',
                    options: [
                        { id: 'a', text: '20 ans' },
                        { id: 'b', text: '25 ans' },
                        { id: 'c', text: '30 ans' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Marie dit qu\'elle a 25 ans.'
                },
                {
                    id: 'a1-se-presenter-q3',
                    type: 'radio',
                    question: 'Qu\'est-ce qu\'elle étudie ?',
                    options: [
                        { id: 'a', text: 'La littérature' },
                        { id: 'b', text: 'La médecine' },
                        { id: 'c', text: 'L\'histoire de l\'art' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'Marie dit qu\'elle étudie l\'histoire de l\'art.'
                }
            ]
        },
        {
            id: 'a1-restaurant',
            title: 'Au restaurant',
            audioFile: `${audioBasePath}a1-restaurant.mp3`,
            transcript: `<p>- Bonjour, monsieur. Une table pour deux personnes, s'il vous plaît.</p>
                        <p>- Bonjour, madame. Oui, bien sûr. Suivez-moi, s'il vous plaît.</p>
                        <p>- Merci beaucoup.</p>
                        <p>- Voici la carte. Le plat du jour est le poulet rôti avec des légumes.</p>
                        <p>- Très bien. Je vais prendre le plat du jour et une eau minérale, s'il vous plaît.</p>
                        <p>- Et pour monsieur ?</p>
                        <p>- Je voudrais un steak-frites et un verre de vin rouge, s'il vous plaît.</p>
                        <p>- Parfait. Je vous apporte vos boissons tout de suite.</p>`,
            questions: [
                {
                    id: 'a1-restaurant-q1',
                    type: 'radio',
                    question: 'Combien de personnes veulent une table ?',
                    options: [
                        { id: 'a', text: 'Une personne' },
                        { id: 'b', text: 'Deux personnes' },
                        { id: 'c', text: 'Trois personnes' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La cliente demande "Une table pour deux personnes, s\'il vous plaît."'
                },
                {
                    id: 'a1-restaurant-q2',
                    type: 'radio',
                    question: 'Quel est le plat du jour ?',
                    options: [
                        { id: 'a', text: 'Steak-frites' },
                        { id: 'b', text: 'Poisson grillé' },
                        { id: 'c', text: 'Poulet rôti avec des légumes' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'Le serveur dit que "le plat du jour est le poulet rôti avec des légumes".'
                },
                {
                    id: 'a1-restaurant-q3',
                    type: 'checkbox',
                    question: 'Que commande l\'homme ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Un steak-frites' },
                        { id: 'b', text: 'Une eau minérale' },
                        { id: 'c', text: 'Un verre de vin rouge' },
                        { id: 'd', text: 'Le plat du jour' }
                    ],
                    correctAnswer: ['a', 'c'],
                    explanation: 'L\'homme commande un steak-frites et un verre de vin rouge.'
                }
            ]
        },
        {
            id: 'a1-hotel',
            title: 'À l\'hôtel',
            audioFile: `${audioBasePath}a1-hotel.mp3`,
            transcript: `<p>- Bonjour, j'ai réservé une chambre au nom de Dubois.</p>
                        <p>- Bonjour, monsieur. Laissez-moi vérifier... Oui, une chambre pour deux nuits, c'est bien ça ?</p>
                        <p>- Oui, c'est exact.</p>
                        <p>- Parfait. Puis-je avoir votre passeport, s'il vous plaît ?</p>
                        <p>- Bien sûr, le voici.</p>
                        <p>- Merci. Votre chambre est la numéro 304, au troisième étage. Voici votre clé.</p>
                        <p>- Le petit-déjeuner est inclus ?</p>
                        <p>- Oui, le petit-déjeuner est servi de 7h à 10h dans la salle au rez-de-chaussée.</p>
                        <p>- Merci. À quelle heure est le check-out ?</p>
                        <p>- Le check-out est à 11h, monsieur. Bonne journée et bon séjour chez nous.</p>`,
            questions: [
                {
                    id: 'a1-hotel-q1',
                    type: 'radio',
                    question: 'Au nom de qui est la réservation ?',
                    options: [
                        { id: 'a', text: 'Martin' },
                        { id: 'b', text: 'Dubois' },
                        { id: 'c', text: 'Leclerc' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le client dit "j\'ai réservé une chambre au nom de Dubois".'
                },
                {
                    id: 'a1-hotel-q2',
                    type: 'radio',
                    question: 'Pour combien de nuits le client a-t-il réservé ?',
                    options: [
                        { id: 'a', text: 'Une nuit' },
                        { id: 'b', text: 'Deux nuits' },
                        { id: 'c', text: 'Trois nuits' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le réceptionniste confirme "une chambre pour deux nuits".'
                },
                {
                    id: 'a1-hotel-q3',
                    type: 'radio',
                    question: 'Quel est le numéro de la chambre ?',
                    options: [
                        { id: 'a', text: '204' },
                        { id: 'b', text: '304' },
                        { id: 'c', text: '404' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le réceptionniste dit "Votre chambre est la numéro 304".'
                },
                {
                    id: 'a1-hotel-q4',
                    type: 'radio',
                    question: 'À quelle heure est servi le petit-déjeuner ?',
                    options: [
                        { id: 'a', text: 'De 6h à 9h' },
                        { id: 'b', text: 'De 7h à 10h' },
                        { id: 'c', text: 'De 8h à 11h' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le réceptionniste répond "le petit-déjeuner est servi de 7h à 10h".'
                }
            ]
        },
        {
            id: 'a1-magasin',
            title: 'Dans un magasin',
            audioFile: `${audioBasePath}a1-magasin.mp3`,
            transcript: `<p>- Bonjour, je peux vous aider ?</p>
                        <p>- Bonjour, je cherche un pantalon noir, s'il vous plaît.</p>
                        <p>- Bien sûr. Quelle est votre taille ?</p>
                        <p>- Je fais du 42.</p>
                        <p>- D'accord. Les pantalons noirs sont par ici. Nous avons plusieurs modèles.</p>
                        <p>- J'aime bien celui-ci. Est-ce que je peux l'essayer ?</p>
                        <p>- Oui, bien sûr. Les cabines d'essayage sont au fond du magasin, à droite.</p>
                        <p>- Merci beaucoup.</p>
                        <p>- Alors, il vous va bien ?</p>
                        <p>- Oui, il me va parfaitement. Je vais le prendre. Combien coûte-t-il ?</p>
                        <p>- Ce pantalon coûte 45 euros. Vous pouvez payer à la caisse, là-bas.</p>`,
            questions: [
                {
                    id: 'a1-magasin-q1',
                    type: 'radio',
                    question: 'Qu\'est-ce que le client cherche ?',
                    options: [
                        { id: 'a', text: 'Une chemise noire' },
                        { id: 'b', text: 'Un pantalon noir' },
                        { id: 'c', text: 'Une veste noire' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le client dit "je cherche un pantalon noir".'
                },
                {
                    id: 'a1-magasin-q2',
                    type: 'radio',
                    question: 'Quelle est la taille du client ?',
                    options: [
                        { id: 'a', text: '40' },
                        { id: 'b', text: '42' },
                        { id: 'c', text: '44' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le client répond "Je fais du 42".'
                },
                {
                    id: 'a1-magasin-q3',
                    type: 'radio',
                    question: 'Combien coûte le pantalon ?',
                    options: [
                        { id: 'a', text: '35 euros' },
                        { id: 'b', text: '45 euros' },
                        { id: 'c', text: '55 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le vendeur dit "Ce pantalon coûte 45 euros".'
                }
            ]
        },
        {
            id: 'a1-cafe',
            title: 'Au café',
            audioFile: `${audioBasePath}a1-cafe.mp3`,
            transcript: `<p>- Bonjour, vous désirez ?</p>
                        <p>- Bonjour, je voudrais un café, s'il vous plaît.</p>
                        <p>- Un café noir ou un café au lait ?</p>
                        <p>- Un café au lait, s'il vous plaît.</p>
                        <p>- Vous voulez quelque chose à manger avec ?</p>
                        <p>- Oui, un croissant, s'il vous plaît.</p>
                        <p>- Très bien. Un café au lait et un croissant. Ça fait 5 euros 50.</p>
                        <p>- Voici 10 euros.</p>
                        <p>- Merci. Voici votre monnaie, 4 euros 50. Je vous apporte votre commande tout de suite.</p>
                        <p>- Merci beaucoup.</p>`,
            questions: [
                {
                    id: 'a1-cafe-q1',
                    type: 'radio',
                    question: 'Quel type de café le client commande-t-il ?',
                    options: [
                        { id: 'a', text: 'Un café noir' },
                        { id: 'b', text: 'Un café au lait' },
                        { id: 'c', text: 'Un cappuccino' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le client répond "Un café au lait, s\'il vous plaît".'
                },
                {
                    id: 'a1-cafe-q2',
                    type: 'radio',
                    question: 'Que commande le client à manger ?',
                    options: [
                        { id: 'a', text: 'Un croissant' },
                        { id: 'b', text: 'Un sandwich' },
                        { id: 'c', text: 'Une tarte' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'Le client commande "un croissant, s\'il vous plaît".'
                },
                {
                    id: 'a1-cafe-q3',
                    type: 'radio',
                    question: 'Combien coûte la commande ?',
                    options: [
                        { id: 'a', text: '4 euros 50' },
                        { id: 'b', text: '5 euros 50' },
                        { id: 'c', text: '10 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le serveur dit "Ça fait 5 euros 50".'
                }
            ]
        },
        {
            id: 'a1-achats',
            title: 'Faire des achats',
            audioFile: `${audioBasePath}a1-achats.mp3`,
            transcript: `<p>- Bonjour madame, je peux vous aider ?</p>
                        <p>- Bonjour, je cherche un cadeau pour ma sœur. C'est son anniversaire demain.</p>
                        <p>- Qu'est-ce qui lui ferait plaisir ?</p>
                        <p>- Elle aime beaucoup lire. Je pensais peut-être à un livre.</p>
                        <p>- Quel genre de livres préfère-t-elle ?</p>
                        <p>- Elle aime les romans policiers et les biographies.</p>
                        <p>- Nous avons un rayon littérature au premier étage. Vous y trouverez un grand choix de romans policiers. Les biographies sont au deuxième étage, dans le rayon histoire.</p>
                        <p>- Merci. Et quel est le prix moyen d'un livre ?</p>
                        <p>- Les livres de poche coûtent entre 8 et 12 euros. Les grands formats sont plus chers, entre 18 et 25 euros.</p>
                        <p>- D'accord. Je vais regarder les livres de poche. Merci pour votre aide.</p>
                        <p>- Je vous en prie. Si vous avez d'autres questions, n'hésitez pas.</p>
                        <p>- En fait, j'ai encore une question. Est-ce que vous faites les paquets cadeaux ?</p>
                        <p>- Oui, bien sûr. C'est gratuit pour les achats de plus de 15 euros.</p>
                        <p>- Parfait. Merci beaucoup.</p>
                        <p>- Je vous en prie. Bonne journée.</p>`,
            questions: [
                {
                    id: 'a1-achats-q1',
                    type: 'radio',
                    question: 'Pourquoi la cliente cherche-t-elle un cadeau ?',
                    options: [
                        { id: 'a', text: 'Pour Noël' },
                        { id: 'b', text: 'Pour l\'anniversaire de sa sœur' },
                        { id: 'c', text: 'Pour la fête des mères' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La cliente dit qu\'elle cherche un cadeau pour l\'anniversaire de sa sœur qui est le lendemain.'
                },
                {
                    id: 'a1-achats-q2',
                    type: 'checkbox',
                    question: 'Quels genres de livres préfère la sœur de la cliente ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Les romans policiers' },
                        { id: 'b', text: 'Les romans d\'amour' },
                        { id: 'c', text: 'Les biographies' },
                        { id: 'd', text: 'Les livres de cuisine' }
                    ],
                    correctAnswer: ['a', 'c'],
                    explanation: 'La cliente indique que sa sœur aime les romans policiers et les biographies.'
                },
                {
                    id: 'a1-achats-q3',
                    type: 'radio',
                    question: 'À partir de quel montant le paquet cadeau est-il gratuit ?',
                    options: [
                        { id: 'a', text: '10 euros' },
                        { id: 'b', text: '15 euros' },
                        { id: 'c', text: '20 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le vendeur indique que le paquet cadeau est gratuit pour les achats de plus de 15 euros.'
                }
            ]
        },
        {
            id: 'a1-directions',
            title: 'Demander son chemin',
            audioFile: `${audioBasePath}a1-directions.mp3`,
            transcript: `<p>- Excusez-moi, madame. Je suis perdu. Où est la station de métro, s'il vous plaît ?</p>
                        <p>- La station de métro ? Elle est tout droit, puis à droite après le supermarché.</p>
                        <p>- C'est loin ?</p>
                        <p>- Non, c'est à 5 minutes à pied environ.</p>
                        <p>- Et pour aller au musée du Louvre ?</p>
                        <p>- Pour le Louvre, c'est plus simple de prendre le métro. Prenez la ligne 1, direction La Défense, et descendez à la station Palais Royal - Musée du Louvre.</p>
                        <p>- Merci beaucoup pour votre aide.</p>
                        <p>- Je vous en prie. Bonne journée !</p>
                        <p>- Bonne journée à vous aussi.</p>`,
            questions: [
                {
                    id: 'a1-directions-q1',
                    type: 'radio',
                    question: 'Où veut aller la personne initialement ?',
                    options: [
                        { id: 'a', text: 'Au supermarché' },
                        { id: 'b', text: 'À la station de métro' },
                        { id: 'c', text: 'Au musée du Louvre' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne demande "Où est la station de métro, s\'il vous plaît ?"'
                },
                {
                    id: 'a1-directions-q2',
                    type: 'radio',
                    question: 'À quelle distance se trouve la station de métro ?',
                    options: [
                        { id: 'a', text: '2 minutes à pied' },
                        { id: 'b', text: '5 minutes à pied' },
                        { id: 'c', text: '10 minutes à pied' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La dame répond "c\'est à 5 minutes à pied environ".'
                },
                {
                    id: 'a1-directions-q3',
                    type: 'radio',
                    question: 'Quelle ligne de métro faut-il prendre pour aller au Louvre ?',
                    options: [
                        { id: 'a', text: 'Ligne 1' },
                        { id: 'b', text: 'Ligne 4' },
                        { id: 'c', text: 'Ligne 7' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'La dame dit "Prenez la ligne 1, direction La Défense".'
                }
            ]
        },
        {
            id: 'a1-famille',
            title: 'Parler de sa famille',
            audioFile: `${audioBasePath}a1-famille.mp3`,
            transcript: `<p>- Bonjour, comment ça va ?</p>
                        <p>- Ça va bien, merci. Et toi ?</p>
                        <p>- Moi aussi, ça va. Je suis mariée et j'ai deux enfants.</p>
                        <p>- Ah, c'est génial ! Combien d'enfants avez-vous ?</p>
                        <p>- Nous avons une fille de 5 ans et un garçon de 3 ans.</p>
                        <p>- C'est adorable ! Et où habitez-vous ?</p>
                        <p>- Nous habitons dans une maison à la campagne, près d'une petite ville.</p>
                        <p>- C'est charmant. Et qu'est-ce que vous faites dans la vie ?</p>
                        <p>- Je suis infirmière à l'hôpital local et mon mari est ingénieur dans une entreprise de technologie.</p>
                        <p>- C'est intéressant. Et vous, qu'est-ce que vous faites ?</p>
                        <p>- Je suis étudiante à l'université. J'étudie l'histoire de l'art.</p>
                        <p>- C'est passionnant !</p>`,
            questions: [
                {
                    id: 'a1-famille-q1',
                    type: 'radio',
                    question: 'Combien d\'enfants la femme a-t-elle ?',
                    options: [
                        { id: 'a', text: 'Un enfant' },
                        { id: 'b', text: 'Deux enfants' },
                        { id: 'c', text: 'Trois enfants' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La femme dit "Nous avons une fille de 5 ans et un garçon de 3 ans".'
                },
                {
                    id: 'a1-famille-q2',
                    type: 'radio',
                    question: 'Où habite la famille ?',
                    options: [
                        { id: 'a', text: 'En ville' },
                        { id: 'b', text: 'À la campagne' },
                        { id: 'c', text: 'Dans un appartement' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La femme dit "Nous habitons dans une maison à la campagne, près d\'une petite ville".'
                },
                {
                    id: 'a1-famille-q3',
                    type: 'radio',
                    question: 'Quel est le métier de la femme ?',
                    options: [
                        { id: 'a', text: 'Infirmière' },
                        { id: 'b', text: 'Enseignante' },
                        { id: 'c', text: 'Étudiante' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'La femme dit "Je suis étudiante à l\'université. J\'étudie l\'histoire de l\'art".'
                }
            ]
        },
        {
            id: 'a1-voyage',
            title: 'Organiser un voyage',
            audioFile: `${audioBasePath}a1-voyage.mp3`,
            transcript: `<p>- Bonjour, je voudrais organiser un voyage à Marseille.</p>
                        <p>- Bien sûr, je peux vous aider. Quand souhaitez-vous partir ?</p>
                        <p>- Nous aimerions partir en juillet.</p>
                        <p>- Très bien. Combien de personnes serez-vous ?</p>
                        <p>- Nous sommes deux adultes et deux enfants.</p>
                        <p>- Parfait. Avez-vous déjà réservé un hôtel ?</p>
                        <p>- Non, nous n'avons pas encore réservé d'hôtel.</p>
                        <p>- Je peux vous aider à trouver un hôtel adapté à vos besoins. Quel budget avez-vous en tête ?</p>
                        <p>- Nous cherchons un hôtel avec une piscine et un restaurant. Notre budget est de 150 euros par nuit.</p>
                        <p>- Très bien. Je vais chercher des options pour vous.</p>
                        <p>- Merci beaucoup.</p>`,
            questions: [
                {
                    id: 'a1-voyage-q1',
                    type: 'radio',
                    question: 'Quand souhaite la famille partir ?',
                    options: [
                        { id: 'a', text: 'En juin' },
                        { id: 'b', text: 'En juillet' },
                        { id: 'c', text: 'En août' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille dit "Nous aimerions partir en juillet".'
                },
                {
                    id: 'a1-voyage-q2',
                    type: 'radio',
                    question: 'Combien de personnes sont dans la famille ?',
                    options: [
                        { id: 'a', text: 'Deux adultes' },
                        { id: 'b', text: 'Deux adultes et deux enfants' },
                        { id: 'c', text: 'Quatre adultes' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille dit "Nous sommes deux adultes et deux enfants".'
                },
                {
                    id: 'a1-voyage-q3',
                    type: 'radio',
                    question: 'Quel est le budget de la famille pour l\'hôtel ?',
                    options: [
                        { id: 'a', text: 'Moins de 100 euros par nuit' },
                        { id: 'b', text: 'Entre 100 et 200 euros par nuit' },
                        { id: 'c', text: 'Plus de 200 euros par nuit' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille dit "Notre budget est de 150 euros par nuit".'
                }
            ]
        },
        {
            id: 'a1-appartement',
            title: 'Visite d\'un appartement',
            audioFile: `${audioBasePath}a1-appartement.mp3`,
            transcript: `<p>- Bonjour, je cherche un appartement à louer.</p>
                        <p>- Bonjour, bienvenue chez nous. Je suis votre agent immobilier. Pouvez-vous me dire ce que vous recherchez ?</p>
                        <p>- Nous cherchons un appartement de deux chambres, avec un balcon, dans un quartier calme.</p>
                        <p>- Très bien. Je vais vous montrer quelques options.</p>
                        <p>- D'accord, merci.</p>
                        <p>- Voici le premier appartement. Il a deux chambres, une cuisine équipée, un balcon et une salle de bain.</p>
                        <p>- C'est intéressant, mais il n'y a pas de parking.</p>
                        <p>- Non, désolé. Il n'y a pas de parking disponible.</p>
                        <p>- D'accord, passons au suivant.</p>
                        <p>- Voici le deuxième appartement. Il a deux chambres, une cuisine équipée, un balcon, une salle de bain et un parking.</p>
                        <p>- C'est parfait ! Combien coûte-t-il ?</p>
                        <p>- Le loyer mensuel est de 800 euros.</p>
                        <p>- C'est dans notre budget. Pouvez-vous nous donner plus de détails ?</p>
                        <p>- Bien sûr. Le quartier est calme et résidentiel. Il y a des écoles et des commerces à proximité.</p>
                        <p>- C'est exactement ce que nous recherchions. Nous allons le prendre.</p>
                        <p>- Parfait. Je vais préparer le contrat de location pour vous.</p>
                        <p>- Merci beaucoup.</p>`,
            questions: [
                {
                    id: 'a1-appartement-q1',
                    type: 'radio',
                    question: 'Quel est le nombre de chambres recherché par la famille ?',
                    options: [
                        { id: 'a', text: 'Une chambre' },
                        { id: 'b', text: 'Deux chambres' },
                        { id: 'c', text: 'Trois chambres' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille dit "Nous cherchons un appartement de deux chambres".'
                },
                {
                    id: 'a1-appartement-q2',
                    type: 'radio',
                    question: 'Quel est le budget mensuel de la famille pour le loyer ?',
                    options: [
                        { id: 'a', text: 'Moins de 700 euros' },
                        { id: 'b', text: 'Entre 700 et 900 euros' },
                        { id: 'c', text: 'Plus de 900 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille accepte un loyer de 800 euros par mois.'
                },
                {
                    id: 'a1-appartement-q3',
                    type: 'radio',
                    question: 'Quel est le critère de localisation recherché par la famille ?',
                    options: [
                        { id: 'a', text: 'Un quartier animé' },
                        { id: 'b', text: 'Un quartier calme' },
                        { id: 'c', text: 'Un quartier proche des transports en commun' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille recherche un appartement dans un quartier calme.'
                }
            ]
        },
        {
            id: 'a1-restaurant-reservation',
            title: 'Réservation au restaurant',
            audioFile: `${audioBasePath}a1-restaurant-reservation.mp3`,
            transcript: `<p>- Bonjour, je voudrais faire une réservation pour ce soir.</p>
                        <p>- Bienvenue au restaurant. Combien de personnes serez-vous ?</p>
                        <p>- Nous sommes quatre.</p>
                        <p>- Très bien. À quelle heure souhaitez-vous réserver ?</p>
                        <p>- Nous aimerions réserver à 19h30.</p>
                        <p>- D'accord. Avez-vous une préférence pour une table près de la fenêtre ou au centre de la salle ?</p>
                        <p>- Nous préférons une table près de la fenêtre.</p>
                        <p>- Parfait. Je vais vérifier la disponibilité.</p>
                        <p>- Merci.</p>
                        <p>- Oui, nous avons une table disponible près de la fenêtre à 19h30.</p>
                        <p>- C'est parfait. Pouvez-vous nous donner le nom de la personne qui réserve ?</p>
                        <p>- Oui, bien sûr. C'est pour Mme Dupont.</p>
                        <p>- Merci beaucoup. À ce soir.</p>`,
            questions: [
                {
                    id: 'a1-restaurant-reservation-q1',
                    type: 'radio',
                    question: 'Combien de personnes souhaitent faire une réservation ?',
                    options: [
                        { id: 'a', text: 'Deux personnes' },
                        { id: 'b', text: 'Quatre personnes' },
                        { id: 'c', text: 'Six personnes' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille dit "Nous sommes quatre".'
                },
                {
                    id: 'a1-restaurant-reservation-q2',
                    type: 'radio',
                    question: 'À quelle heure souhaitent-ils réserver ?',
                    options: [
                        { id: 'a', text: '18h30' },
                        { id: 'b', text: '19h30' },
                        { id: 'c', text: '20h30' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille dit "Nous aimerions réserver à 19h30".'
                },
                {
                    id: 'a1-restaurant-reservation-q3',
                    type: 'radio',
                    question: 'Où souhaitent-ils s\'asseoir ?',
                    options: [
                        { id: 'a', text: 'Au centre de la salle' },
                        { id: 'b', text: 'Près de la fenêtre' },
                        { id: 'c', text: 'Au bord de la piscine' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille préfère une table près de la fenêtre.'
                }
            ]
        },
        {
            id: 'a1-transports',
            title: 'Les transports en commun',
            audioFile: `${audioBasePath}a1-transports.mp3`,
            transcript: `<p>- Excusez-moi, je voudrais aller à la Tour Eiffel.</p>
                        <p>- Vous pouvez prendre le métro ligne 6, direction Charles de Gaulle Étoile.</p>
                        <p>- Combien coûte un ticket ?</p>
                        <p>- Un ticket coûte 1,90 euro. Vous pouvez aussi acheter un carnet de 10 tickets pour 16 euros.</p>
                        <p>- D'accord, je vais prendre un carnet. C'est plus économique.</p>
                        <p>- Très bien. Vous descendez à la station Bir-Hakeim.</p>
                        <p>- Merci beaucoup pour votre aide.</p>
                        <p>- Je vous en prie. Bon voyage !</p>`,
            questions: [
                {
                    id: 'a1-transports-q1',
                    type: 'radio',
                    question: 'Quelle ligne de métro faut-il prendre ?',
                    options: [
                        { id: 'a', text: 'Ligne 4' },
                        { id: 'b', text: 'Ligne 6' },
                        { id: 'c', text: 'Ligne 8' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Il faut prendre la ligne 6 direction Charles de Gaulle Étoile.'
                },
                {
                    id: 'a1-transports-q2',
                    type: 'radio',
                    question: 'Combien coûte un ticket de métro ?',
                    options: [
                        { id: 'a', text: '1,50 euro' },
                        { id: 'b', text: '1,90 euro' },
                        { id: 'c', text: '2,00 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Un ticket coûte 1,90 euro.'
                },
                {
                    id: 'a1-transports-q3',
                    type: 'radio',
                    question: 'À quelle station faut-il descendre ?',
                    options: [
                        { id: 'a', text: 'Charles de Gaulle Étoile' },
                        { id: 'b', text: 'Bir-Hakeim' },
                        { id: 'c', text: 'Tour Eiffel' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Il faut descendre à la station Bir-Hakeim.'
                }
            ]
        },
        {
            id: 'a1-courses',
            title: 'Faire les courses',
            audioFile: `${audioBasePath}a1-courses.mp3`,
            transcript: `<p>- Bonjour, je peux vous aider ?</p>
                        <p>- Bonjour, je cherche le rayon des fruits et légumes.</p>
                        <p>- C'est au fond du magasin, à droite.</p>
                        <p>- Merci. Et où sont les produits laitiers ?</p>
                        <p>- Les produits laitiers sont dans l'allée 3.</p>
                        <p>- Je voudrais aussi du pain.</p>
                        <p>- La boulangerie est à l'entrée du magasin.</p>
                        <p>- Parfait, merci beaucoup.</p>`,
            questions: [
                {
                    id: 'a1-courses-q1',
                    type: 'radio',
                    question: 'Où se trouve le rayon des fruits et légumes ?',
                    options: [
                        { id: 'a', text: 'À l\'entrée du magasin' },
                        { id: 'b', text: 'Au fond du magasin, à droite' },
                        { id: 'c', text: 'Dans l\'allée 3' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le rayon des fruits et légumes est au fond du magasin, à droite.'
                },
                {
                    id: 'a1-courses-q2',
                    type: 'radio',
                    question: 'Dans quelle allée sont les produits laitiers ?',
                    options: [
                        { id: 'a', text: 'Allée 2' },
                        { id: 'b', text: 'Allée 3' },
                        { id: 'c', text: 'Allée 4' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Les produits laitiers sont dans l\'allée 3.'
                },
                {
                    id: 'a1-courses-q3',
                    type: 'radio',
                    question: 'Où se trouve la boulangerie ?',
                    options: [
                        { id: 'a', text: 'À l\'entrée du magasin' },
                        { id: 'b', text: 'Au fond du magasin' },
                        { id: 'c', text: 'Dans l\'allée 3' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'La boulangerie est à l\'entrée du magasin.'
                }
            ]
        },
        {
            id: 'a1-meteo',
            title: 'La météo',
            audioFile: `${audioBasePath}a1-meteo.mp3`,
            transcript: `<p>- Bonjour à tous. Voici la météo pour demain.</p>
                        <p>- Le matin, il fera beau avec du soleil.</p>
                        <p>- La température sera de 15 degrés.</p>
                        <p>- L'après-midi, il y aura des nuages et peut-être de la pluie.</p>
                        <p>- Il fera plus chaud, environ 20 degrés.</p>
                        <p>- Le soir, le temps sera plus frais.</p>
                        <p>- N'oubliez pas votre parapluie !</p>`,
            questions: [
                {
                    id: 'a1-meteo-q1',
                    type: 'radio',
                    question: 'Quel temps fera-t-il le matin ?',
                    options: [
                        { id: 'a', text: 'Il pleuvra' },
                        { id: 'b', text: 'Il fera beau avec du soleil' },
                        { id: 'c', text: 'Il y aura des nuages' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le matin, il fera beau avec du soleil.'
                },
                {
                    id: 'a1-meteo-q2',
                    type: 'radio',
                    question: 'Quelle sera la température le matin ?',
                    options: [
                        { id: 'a', text: '10 degrés' },
                        { id: 'b', text: '15 degrés' },
                        { id: 'c', text: '20 degrés' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La température sera de 15 degrés le matin.'
                },
                {
                    id: 'a1-meteo-q3',
                    type: 'radio',
                    question: 'Que faut-il ne pas oublier ?',
                    options: [
                        { id: 'a', text: 'Les lunettes de soleil' },
                        { id: 'b', text: 'Le parapluie' },
                        { id: 'c', text: 'L\'écharpe' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Il ne faut pas oublier son parapluie.'
                }
            ]
        },
        {
            id: 'a1-anniversaire',
            title: 'Fêter son anniversaire',
            audioFile: `${audioBasePath}a1-anniversaire.mp3`,
            transcript: `<p>- Salut Marie ! C'est ton anniversaire samedi, c'est ça ?</p>
                        <p>- Oui, je fête mes 25 ans.</p>
                        <p>- Tu organises quelque chose ?</p>
                        <p>- Oui, je fais une petite fête chez moi à partir de 19h.</p>
                        <p>- Super ! Je peux apporter quelque chose ?</p>
                        <p>- Tu peux apporter un dessert si tu veux.</p>
                        <p>- D'accord, je ferai un gâteau au chocolat.</p>
                        <p>- Parfait ! À samedi alors !</p>`,
            questions: [
                {
                    id: 'a1-anniversaire-q1',
                    type: 'radio',
                    question: 'Quel âge va avoir Marie ?',
                    options: [
                        { id: 'a', text: '20 ans' },
                        { id: 'b', text: '25 ans' },
                        { id: 'c', text: '30 ans' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Marie va fêter ses 25 ans.'
                },
                {
                    id: 'a1-anniversaire-q2',
                    type: 'radio',
                    question: 'À quelle heure commence la fête ?',
                    options: [
                        { id: 'a', text: '18h' },
                        { id: 'b', text: '19h' },
                        { id: 'c', text: '20h' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La fête commence à 19h.'
                },
                {
                    id: 'a1-anniversaire-q3',
                    type: 'radio',
                    question: 'Qu\'est-ce que l\'ami(e) va apporter ?',
                    options: [
                        { id: 'a', text: 'Une boisson' },
                        { id: 'b', text: 'Un gâteau au chocolat' },
                        { id: 'c', text: 'Un cadeau' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'ami(e) va apporter un gâteau au chocolat.'
                }
            ]
        },
        {
            id: 'a1-telephone',
            title: 'Au téléphone',
            audioFile: `${audioBasePath}a1-telephone.mp3`,
            transcript: `<p>- Allô, bonjour. Je voudrais parler à Pierre, s'il vous plaît.</p>
                        <p>- Désolé, Pierre n'est pas là pour le moment.</p>
                        <p>- Je peux laisser un message ?</p>
                        <p>- Oui, bien sûr.</p>
                        <p>- Dites-lui que Thomas a appelé. Mon numéro est le 06 12 34 56 78.</p>
                        <p>- D'accord, je lui dirai de vous rappeler.</p>
                        <p>- Merci beaucoup. Au revoir.</p>
                        <p>- Au revoir.</p>`,
            questions: [
                {
                    id: 'a1-telephone-q1',
                    type: 'radio',
                    question: 'Qui appelle ?',
                    options: [
                        { id: 'a', text: 'Pierre' },
                        { id: 'b', text: 'Thomas' },
                        { id: 'c', text: 'Paul' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'C\'est Thomas qui appelle.'
                },
                {
                    id: 'a1-telephone-q2',
                    type: 'radio',
                    question: 'Est-ce que Pierre est là ?',
                    options: [
                        { id: 'a', text: 'Oui' },
                        { id: 'b', text: 'Non' },
                        { id: 'c', text: 'On ne sait pas' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Non, Pierre n\'est pas là pour le moment.'
                },
                {
                    id: 'a1-telephone-q3',
                    type: 'radio',
                    question: 'Quel est le numéro de téléphone de Thomas ?',
                    options: [
                        { id: 'a', text: '06 12 34 56 78' },
                        { id: 'b', text: '06 23 45 67 89' },
                        { id: 'c', text: '06 34 56 78 90' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'Le numéro de Thomas est le 06 12 34 56 78.'
                }
            ]
        },
        {
            id: 'a1-sport',
            title: 'Les activités sportives',
            audioFile: `${audioBasePath}a1-sport.mp3`,
            transcript: `<p>- Bonjour, je voudrais m'inscrire à des cours de sport.</p>
                        <p>- Bien sûr. Nous proposons plusieurs activités : natation, yoga, tennis et football.</p>
                        <p>- Quand sont les cours de natation ?</p>
                        <p>- Les cours de natation sont le mardi et le jeudi à 18h.</p>
                        <p>- Et combien coûte l'inscription ?</p>
                        <p>- C'est 200 euros pour l'année.</p>
                        <p>- D'accord, je vais m'inscrire à la natation.</p>
                        <p>- Parfait. Je vais préparer votre carte de membre.</p>`,
            questions: [
                {
                    id: 'a1-sport-q1',
                    type: 'checkbox',
                    question: 'Quels sports sont proposés ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Natation' },
                        { id: 'b', text: 'Yoga' },
                        { id: 'c', text: 'Tennis' },
                        { id: 'd', text: 'Football' }
                    ],
                    correctAnswer: ['a', 'b', 'c', 'd'],
                    explanation: 'Le club propose la natation, le yoga, le tennis et le football.'
                },
                {
                    id: 'a1-sport-q2',
                    type: 'checkbox',
                    question: 'Quels jours sont les cours de natation ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Mardi' },
                        { id: 'b', text: 'Mercredi' },
                        { id: 'c', text: 'Jeudi' }
                    ],
                    correctAnswer: ['a', 'c'],
                    explanation: 'Les cours de natation sont le mardi et le jeudi.'
                },
                {
                    id: 'a1-sport-q3',
                    type: 'radio',
                    question: 'Combien coûte l\'inscription à l\'année ?',
                    options: [
                        { id: 'a', text: '150 euros' },
                        { id: 'b', text: '200 euros' },
                        { id: 'c', text: '250 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'inscription coûte 200 euros pour l\'année.'
                }
            ]
        },
        {
            id: 'a1-vetements',
            title: 'Acheter des vêtements',
            audioFile: `${audioBasePath}a1-vetements.mp3`,
            transcript: `<p>- Bonjour, je peux vous aider ?</p>
                        <p>- Oui, je cherche un pull bleu.</p>
                        <p>- Quelle taille faites-vous ?</p>
                        <p>- Je fais du M.</p>
                        <p>- Voici un joli pull bleu en taille M. Vous voulez l'essayer ?</p>
                        <p>- Oui, s'il vous plaît. Où sont les cabines d'essayage ?</p>
                        <p>- Les cabines sont au fond du magasin.</p>
                        <p>- Merci. Je vais l'essayer.</p>`,
            questions: [
                {
                    id: 'a1-vetements-q1',
                    type: 'radio',
                    question: 'Quel vêtement cherche la personne ?',
                    options: [
                        { id: 'a', text: 'Une chemise bleue' },
                        { id: 'b', text: 'Un pull bleu' },
                        { id: 'c', text: 'Un pantalon bleu' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne cherche un pull bleu.'
                },
                {
                    id: 'a1-vetements-q2',
                    type: 'radio',
                    question: 'Quelle est sa taille ?',
                    options: [
                        { id: 'a', text: 'S' },
                        { id: 'b', text: 'M' },
                        { id: 'c', text: 'L' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne fait une taille M.'
                },
                {
                    id: 'a1-vetements-q3',
                    type: 'radio',
                    question: 'Où sont les cabines d\'essayage ?',
                    options: [
                        { id: 'a', text: 'À l\'entrée du magasin' },
                        { id: 'b', text: 'Au fond du magasin' },
                        { id: 'c', text: 'À droite du magasin' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Les cabines d\'essayage sont au fond du magasin.'
                }
            ]
        },
        {
            id: 'a1-cinema',
            title: 'Au cinéma',
            audioFile: `${audioBasePath}a1-cinema.mp3`,
            transcript: `<p>- Bonjour, je voudrais deux places pour le film à 20h.</p>
                        <p>- Le film "Les Aventures de Paris" ?</p>
                        <p>- Oui, c'est ça.</p>
                        <p>- D'accord. C'est 12 euros par personne.</p>
                        <p>- Voici 24 euros.</p>
                        <p>- Merci. Voici vos billets. C'est la salle 3.</p>
                        <p>- Est-ce qu'il y a une buvette ?</p>
                        <p>- Oui, la buvette est à droite de l'entrée.</p>`,
            questions: [
                {
                    id: 'a1-cinema-q1',
                    type: 'radio',
                    question: 'Combien de places la personne achète-t-elle ?',
                    options: [
                        { id: 'a', text: 'Une place' },
                        { id: 'b', text: 'Deux places' },
                        { id: 'c', text: 'Trois places' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne achète deux places.'
                },
                {
                    id: 'a1-cinema-q2',
                    type: 'radio',
                    question: 'Combien coûte une place ?',
                    options: [
                        { id: 'a', text: '10 euros' },
                        { id: 'b', text: '12 euros' },
                        { id: 'c', text: '14 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Une place coûte 12 euros.'
                },
                {
                    id: 'a1-cinema-q3',
                    type: 'radio',
                    question: 'Dans quelle salle est le film ?',
                    options: [
                        { id: 'a', text: 'Salle 1' },
                        { id: 'b', text: 'Salle 2' },
                        { id: 'c', text: 'Salle 3' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'Le film est dans la salle 3.'
                }
            ]
        },
        {
            id: 'a1-vacances-ete',
            title: 'Les vacances d\'été',
            audioFile: `${audioBasePath}a1-vacances-ete.mp3`,
            transcript: `<p>- Tu pars en vacances cet été ?</p>
                        <p>- Oui, je vais à la mer avec ma famille.</p>
                        <p>- Où allez-vous ?</p>
                        <p>- Nous allons à Nice pendant deux semaines.</p>
                        <p>- C'est super ! Vous partez quand ?</p>
                        <p>- Nous partons le 15 juillet.</p>
                        <p>- Vous allez à l'hôtel ?</p>
                        <p>- Non, nous avons loué un appartement près de la plage.</p>`,
            questions: [
                {
                    id: 'a1-vacances-ete-q1',
                    type: 'radio',
                    question: 'Où va la famille en vacances ?',
                    options: [
                        { id: 'a', text: 'À Paris' },
                        { id: 'b', text: 'À Nice' },
                        { id: 'c', text: 'À Lyon' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille va à Nice.'
                },
                {
                    id: 'a1-vacances-ete-q2',
                    type: 'radio',
                    question: 'Quand partent-ils ?',
                    options: [
                        { id: 'a', text: 'Le 1er juillet' },
                        { id: 'b', text: 'Le 15 juillet' },
                        { id: 'c', text: 'Le 30 juillet' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Ils partent le 15 juillet.'
                },
                {
                    id: 'a1-vacances-ete-q3',
                    type: 'radio',
                    question: 'Où vont-ils dormir ?',
                    options: [
                        { id: 'a', text: 'À l\'hôtel' },
                        { id: 'b', text: 'Dans un appartement' },
                        { id: 'c', text: 'Dans un camping' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Ils ont loué un appartement près de la plage.'
                }
            ]
        },
        {
            id: 'a1-rendez-vous',
            title: 'Prendre rendez-vous',
            audioFile: `${audioBasePath}a1-rendez-vous.mp3`,
            transcript: `<p>- Bonjour, je voudrais prendre rendez-vous chez le médecin.</p>
                        <p>- Oui, pour quel jour ?</p>
                        <p>- Est-ce que c'est possible demain ?</p>
                        <p>- Demain, le docteur a un créneau à 14h30.</p>
                        <p>- C'est parfait. Je peux prendre ce rendez-vous.</p>
                        <p>- D'accord. Votre nom, s'il vous plaît ?</p>
                        <p>- Je m'appelle Marie Dubois.</p>
                        <p>- Très bien, c'est noté. À demain 14h30.</p>`,
            questions: [
                {
                    id: 'a1-rendez-vous-q1',
                    type: 'radio',
                    question: 'Pour quand est le rendez-vous ?',
                    options: [
                        { id: 'a', text: 'Aujourd\'hui' },
                        { id: 'b', text: 'Demain' },
                        { id: 'c', text: 'La semaine prochaine' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le rendez-vous est pour demain.'
                },
                {
                    id: 'a1-rendez-vous-q2',
                    type: 'radio',
                    question: 'À quelle heure est le rendez-vous ?',
                    options: [
                        { id: 'a', text: '13h30' },
                        { id: 'b', text: '14h30' },
                        { id: 'c', text: '15h30' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le rendez-vous est à 14h30.'
                },
                {
                    id: 'a1-rendez-vous-q3',
                    type: 'radio',
                    question: 'Quel est le nom de la patiente ?',
                    options: [
                        { id: 'a', text: 'Marie Dubois' },
                        { id: 'b', text: 'Marie Martin' },
                        { id: 'c', text: 'Marie Laurent' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'La patiente s\'appelle Marie Dubois.'
                }
            ]
        },
        {
            id: 'a1-petit-dejeuner',
            title: 'Le petit déjeuner',
            audioFile: `${audioBasePath}a1-petit-dejeuner.mp3`,
            transcript: `<p>- Bonjour, que voulez-vous pour le petit déjeuner ?</p>
                        <p>- Je voudrais un café au lait et un croissant, s'il vous plaît.</p>
                        <p>- Vous voulez du jus d'orange aussi ?</p>
                        <p>- Oui, bonne idée.</p>
                        <p>- Vous préférez le croissant chaud ou froid ?</p>
                        <p>- Chaud, s'il vous plaît.</p>
                        <p>- D'accord, je vous apporte ça tout de suite.</p>
                        <p>- Merci beaucoup.</p>`,
            questions: [
                {
                    id: 'a1-petit-dejeuner-q1',
                    type: 'checkbox',
                    question: 'Que commande la personne ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Un café au lait' },
                        { id: 'b', text: 'Un croissant' },
                        { id: 'c', text: 'Un jus d\'orange' },
                        { id: 'd', text: 'Un thé' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'La personne commande un café au lait, un croissant et un jus d\'orange.'
                },
                {
                    id: 'a1-petit-dejeuner-q2',
                    type: 'radio',
                    question: 'Comment veut-elle le croissant ?',
                    options: [
                        { id: 'a', text: 'Chaud' },
                        { id: 'b', text: 'Froid' },
                        { id: 'c', text: 'Elle ne précise pas' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'Elle veut le croissant chaud.'
                }
            ]
        },
        {
            id: 'a1-anniversaire-2',
            title: 'L\'anniversaire',
            audioFile: `${audioBasePath}a1-anniversaire-2.mp3`,
            transcript: `<p>- C'est l'anniversaire de Pierre aujourd'hui.</p>
                        <p>- Ah oui ? Il a quel âge ?</p>
                        <p>- Il a 30 ans.</p>
                        <p>- Tu as acheté un cadeau ?</p>
                        <p>- Oui, je lui ai acheté un livre.</p>
                        <p>- C'est une bonne idée. Il aime beaucoup lire.</p>
                        <p>- La fête commence à 19h chez lui.</p>
                        <p>- D'accord, à ce soir alors !</p>`,
            questions: [
                {
                    id: 'a1-anniversaire-2-q1',
                    type: 'radio',
                    question: 'Quel âge a Pierre ?',
                    options: [
                        { id: 'a', text: '20 ans' },
                        { id: 'b', text: '30 ans' },
                        { id: 'c', text: '40 ans' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Pierre a 30 ans.'
                },
                {
                    id: 'a1-anniversaire-2-q2',
                    type: 'radio',
                    question: 'Quel cadeau a été acheté ?',
                    options: [
                        { id: 'a', text: 'Un livre' },
                        { id: 'b', text: 'Un CD' },
                        { id: 'c', text: 'Un DVD' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'La personne a acheté un livre comme cadeau.'
                },
                {
                    id: 'a1-anniversaire-2-q3',
                    type: 'radio',
                    question: 'À quelle heure commence la fête ?',
                    options: [
                        { id: 'a', text: '18h' },
                        { id: 'b', text: '19h' },
                        { id: 'c', text: '20h' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La fête commence à 19h.'
                }
            ]
        },
        {
            id: 'a1-loisirs',
            title: 'Les loisirs',
            audioFile: `${audioBasePath}a1-loisirs.mp3`,
            transcript: `<p>- Qu'est-ce que tu aimes faire pendant ton temps libre ?</p>
                        <p>- J'aime beaucoup faire du sport.</p>
                        <p>- Quel sport tu pratiques ?</p>
                        <p>- Je fais du tennis le samedi et de la natation le mercredi.</p>
                        <p>- Tu aimes aussi lire ?</p>
                        <p>- Oui, j'aime lire des romans policiers.</p>
                        <p>- Et tu regardes souvent la télévision ?</p>
                        <p>- Non, je préfère aller au cinéma.</p>`,
            questions: [
                {
                    id: 'a1-loisirs-q1',
                    type: 'checkbox',
                    question: 'Quels sports pratique la personne ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Tennis' },
                        { id: 'b', text: 'Natation' },
                        { id: 'c', text: 'Football' },
                        { id: 'd', text: 'Basketball' }
                    ],
                    correctAnswer: ['a', 'b'],
                    explanation: 'La personne fait du tennis et de la natation.'
                },
                {
                    id: 'a1-loisirs-q2',
                    type: 'radio',
                    question: 'Quel genre de livres aime-t-elle lire ?',
                    options: [
                        { id: 'a', text: 'Des romans d\'amour' },
                        { id: 'b', text: 'Des romans policiers' },
                        { id: 'c', text: 'Des bandes dessinées' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Elle aime lire des romans policiers.'
                },
                {
                    id: 'a1-loisirs-q3',
                    type: 'radio',
                    question: 'Que préfère-t-elle entre la télévision et le cinéma ?',
                    options: [
                        { id: 'a', text: 'La télévision' },
                        { id: 'b', text: 'Le cinéma' },
                        { id: 'c', text: 'Les deux' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Elle préfère aller au cinéma.'
                }
            ]
        },
        {
            id: 'a1-gare',
            title: 'À la gare',
            audioFile: `${audioBasePath}a1-gare.mp3`,
            transcript: `<p>- Bonjour, je voudrais un billet pour Lyon, s'il vous plaît.</p>
                        <p>- Pour quel jour ?</p>
                        <p>- Pour demain matin.</p>
                        <p>- Il y a un train à 9h et un autre à 11h.</p>
                        <p>- Je vais prendre celui de 9h.</p>
                        <p>- En première ou en seconde classe ?</p>
                        <p>- En seconde classe, s'il vous plaît.</p>
                        <p>- Ça fait 45 euros.</p>`,
            questions: [
                {
                    id: 'a1-gare-q1',
                    type: 'radio',
                    question: 'Pour quelle ville est le billet ?',
                    options: [
                        { id: 'a', text: 'Paris' },
                        { id: 'b', text: 'Lyon' },
                        { id: 'c', text: 'Marseille' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne veut un billet pour Lyon.'
                },
                {
                    id: 'a1-gare-q2',
                    type: 'radio',
                    question: 'À quelle heure part le train choisi ?',
                    options: [
                        { id: 'a', text: '8h' },
                        { id: 'b', text: '9h' },
                        { id: 'c', text: '11h' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne choisit le train de 9h.'
                },
                {
                    id: 'a1-gare-q3',
                    type: 'radio',
                    question: 'Combien coûte le billet ?',
                    options: [
                        { id: 'a', text: '35 euros' },
                        { id: 'b', text: '45 euros' },
                        { id: 'c', text: '55 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le billet coûte 45 euros.'
                }
            ]
        },
        {
            id: 'a1-maison',
            title: 'Description de la maison',
            audioFile: `${audioBasePath}a1-maison.mp3`,
            transcript: `<p>- Comment est ta nouvelle maison ?</p>
                        <p>- Elle est grande et lumineuse.</p>
                        <p>- Combien y a-t-il de pièces ?</p>
                        <p>- Il y a trois chambres, un salon, une cuisine et deux salles de bain.</p>
                        <p>- Il y a un jardin ?</p>
                        <p>- Oui, un petit jardin derrière la maison.</p>
                        <p>- C'est dans quel quartier ?</p>
                        <p>- C'est dans un quartier calme, près du parc.</p>`,
            questions: [
                {
                    id: 'a1-maison-q1',
                    type: 'checkbox',
                    question: 'Quelles pièces y a-t-il dans la maison ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Trois chambres' },
                        { id: 'b', text: 'Un salon' },
                        { id: 'c', text: 'Une cuisine' },
                        { id: 'd', text: 'Deux salles de bain' }
                    ],
                    correctAnswer: ['a', 'b', 'c', 'd'],
                    explanation: 'La maison a trois chambres, un salon, une cuisine et deux salles de bain.'
                },
                {
                    id: 'a1-maison-q2',
                    type: 'radio',
                    question: 'Comment est le jardin ?',
                    options: [
                        { id: 'a', text: 'Grand' },
                        { id: 'b', text: 'Petit' },
                        { id: 'c', text: 'Il n\'y a pas de jardin' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Il y a un petit jardin derrière la maison.'
                },
                {
                    id: 'a1-maison-q3',
                    type: 'radio',
                    question: 'Comment est le quartier ?',
                    options: [
                        { id: 'a', text: 'Calme' },
                        { id: 'b', text: 'Animé' },
                        { id: 'c', text: 'Bruyant' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'C\'est dans un quartier calme.'
                }
            ]
        }
    ],
    'A2': [
        {
            id: 'a2-medecin',
            title: 'Rendez-vous chez le médecin',
            audioFile: `${audioBasePath}a2-medecin.mp3`,
            transcript: `<p>- Bonjour, je suis là pour mon rendez-vous avec le docteur.</p>
                        <p>- Bonjour, monsieur. Je suis le docteur Martin. Entrez, asseyez-vous.</p>
                        <p>- Merci, docteur.</p>
                        <p>- Comment allez-vous aujourd'hui ?</p>
                        <p>- Je me sens un peu fatigué et j'ai mal à la gorge.</p>
                        <p>- D'accord. Je vais vous examiner.</p>
                        <p>- D'accord, docteur.</p>
                        <p>- Vous avez de la fièvre.</p>
                        <p>- Oui, j'ai de la fièvre.</p>
                        <p>- Et vous avez une toux sèche.</p>
                        <p>- Oui, j'ai une toux sèche.</p>
                        <p>- Je pense que vous avez une angine.</p>
                        <p>- D'accord, docteur. Que dois-je faire ?</p>
                        <p>- Je vais vous prescrire des antibiotiques et des gargarismes. Prenez-les régulièrement et reposez-vous.</p>
                        <p>- D'accord, docteur. Merci beaucoup.</p>
                        <p>- De rien. Revenez me voir si votre état s'aggrave.</p>
                        <p>- Oui, docteur. À bientôt.</p>`,
            questions: [
                {
                    id: 'a2-medecin-q1',
                    type: 'radio',
                    question: 'Quel est le problème de santé du patient ?',
                    options: [
                        { id: 'a', text: 'Une grippe' },
                        { id: 'b', text: 'Une angine' },
                        { id: 'c', text: 'Un rhume' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le docteur diagnostique une angine.'
                },
                {
                    id: 'a2-medecin-q2',
                    type: 'radio',
                    question: 'Quel médicament le docteur prescrit-il ?',
                    options: [
                        { id: 'a', text: 'Des antihistaminiques' },
                        { id: 'b', text: 'Des antibiotiques' },
                        { id: 'c', text: 'Des analgésiques' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le docteur prescrit des antibiotiques et des gargarismes.'
                },
                {
                    id: 'a2-medecin-q3',
                    type: 'radio',
                    question: 'Que doit faire le patient pour se rétablir ?',
                    options: [
                        { id: 'a', text: 'Se reposer et boire beaucoup d\'eau' },
                        { id: 'b', text: 'Prendre des médicaments et se reposer' },
                        { id: 'c', text: 'Faire de l\'exercice et manger des aliments sains' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le docteur conseille de prendre des médicaments et de se reposer.'
                }
            ]
        },
        {
            id: 'a2-reservation',
            title: 'Réservation d\'un vol',
            audioFile: `${audioBasePath}a2-reservation.mp3`,
            transcript: `<p>- Bonjour, je voudrais réserver un vol pour New York.</p>
                        <p>- Bonjour, bienvenue chez notre compagnie aérienne. Comment puis-je vous aider ?</p>
                        <p>- Je voudrais réserver un vol aller-retour pour New York.</p>
                        <p>- Très bien. Quelles sont vos dates de voyage ?</p>
                        <p>- Je souhaite partir le 15 juillet et revenir le 22 juillet.</p>
                        <p>- Parfait. Combien de personnes serez-vous ?</p>
                        <p>- Nous sommes deux adultes et deux enfants.</p>
                        <p>- Très bien. Avez-vous des préférences de siège ou de repas ?</p>
                        <p>- Nous préférons des sièges côté fenêtre et des repas pour enfants.</p>
                        <p>- Parfait. Je vais vérifier la disponibilité.</p>
                        <p>- Merci.</p>
                        <p>- Oui, nous avons des vols disponibles pour votre demande.</p>
                        <p>- C'est parfait. Pouvez-vous me donner le nom de la personne qui réserve ?</p>
                        <p>- Oui, bien sûr. C'est pour Mme Dupont.</p>
                        <p>- Merci beaucoup. À bientôt.</p>`,
            questions: [
                {
                    id: 'a2-reservation-q1',
                    type: 'radio',
                    question: 'Quelle est la destination du vol ?',
                    options: [
                        { id: 'a', text: 'Paris' },
                        { id: 'b', text: 'New York' },
                        { id: 'c', text: 'Londres' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le client souhaite réserver un vol pour New York.'
                },
                {
                    id: 'a2-reservation-q2',
                    type: 'radio',
                    question: 'Quelles sont les dates de voyage ?',
                    options: [
                        { id: 'a', text: '15 juillet - 22 juillet' },
                        { id: 'b', text: '10 août - 17 août' },
                        { id: 'c', text: '5 septembre - 12 septembre' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'Le client souhaite partir le 15 juillet et revenir le 22 juillet.'
                },
                {
                    id: 'a2-reservation-q3',
                    type: 'radio',
                    question: 'Combien de personnes voyagent ?',
                    options: [
                        { id: 'a', text: 'Deux adultes' },
                        { id: 'b', text: 'Deux adultes et deux enfants' },
                        { id: 'c', text: 'Quatre adultes' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le client est deux adultes et deux enfants.'
                }
            ]
        },
        {
            id: 'a2-weekend',
            title: 'Week-end à la campagne',
            audioFile: `${audioBasePath}a2-weekend.mp3`,
            transcript: `<p>- Bonjour, comment s'est passé votre week-end ?</p>
                        <p>- Ça s'est très bien passé. Nous avons passé un moment agréable à la campagne.</p>
                        <p>- C'est bien. Où étiez-vous ?</p>
                        <p>- Nous étions dans une petite ville près d'un lac.</p>
                        <p>- C'est charmant. Qu'avez-vous fait ?</p>
                        <p>- Nous avons visité une ferme locale, nous avons fait de la randonnée et nous avons même pêché.</p>
                        <p>- C'est génial ! Et vous avez mangé quoi ?</p>
                        <p>- Nous avons mangé des produits locaux, comme du fromage de chèvre et des légumes frais du marché.</p>
                        <p>- C'est délicieux. Et vous avez rencontré des animaux ?</p>
                        <p>- Oui, nous avons vu des canards, des oies et même un petit lapin.</p>
                        <p>- C'est mignon. Et vous avez pris des photos ?</p>
                        <p>- Oui, nous avons pris beaucoup de photos. C'était un week-end inoubliable.</p>
                        <p>- C'est bien. J'espère que vous reviendrez bientôt.</p>
                        <p>- Oui, nous y retournerons certainement.</p>`,
            questions: [
                {
                    id: 'a2-weekend-q1',
                    type: 'radio',
                    question: 'Où les gens ont-ils passé leur week-end ?',
                    options: [
                        { id: 'a', text: 'À la ville' },
                        { id: 'b', text: 'À la campagne' },
                        { id: 'c', text: 'À la plage' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Les gens ont passé leur week-end à la campagne.'
                },
                {
                    id: 'a2-weekend-q2',
                    type: 'radio',
                    question: 'Quelle activité ont-ils pratiquée ?',
                    options: [
                        { id: 'a', text: 'De la randonnée' },
                        { id: 'b', text: 'De la pêche' },
                        { id: 'c', text: 'De la natation' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Les gens ont fait de la randonnée et même pêché.'
                },
                {
                    id: 'a2-weekend-q3',
                    type: 'radio',
                    question: 'Quel type de nourriture ont-ils mangé ?',
                    options: [
                        { id: 'a', text: 'Des plats préparés' },
                        { id: 'b', text: 'Des produits locaux' },
                        { id: 'c', text: 'De la nourriture rapide' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Ils ont mangé des produits locaux, comme du fromage de chèvre et des légumes frais du marché.'
                }
            ]
        },
        {
            id: 'a2-poste',
            title: 'À la poste',
            audioFile: `${audioBasePath}a2-poste.mp3`,
            transcript: `<p>- Bonjour, je voudrais envoyer un colis.</p>
                        <p>- Bonjour, bienvenue à la poste. Comment puis-je vous aider ?</p>
                        <p>- Je voudrais envoyer un colis à mon amie à New York.</p>
                        <p>- Très bien. Quel est le poids du colis ?</p>
                        <p>- Le colis pèse 2 kilos.</p>
                        <p>- Parfait. Avez-vous besoin d'un emballage spécial ?</p>
                        <p>- Non, un emballage standard suffit.</p>
                        <p>- Très bien. Combien coûtera l'envoi ?</p>
                        <p>- L'envoi coûtera 25 euros.</p>
                        <p>- D'accord. Pouvez-vous me donner un récépissé ?</p>
                        <p>- Oui, bien sûr. Voici votre récépissé.</p>
                        <p>- Merci beaucoup. À bientôt.</p>`,
            questions: [
                {
                    id: 'a2-poste-q1',
                    type: 'radio',
                    question: 'Quel est le poids du colis ?',
                    options: [
                        { id: 'a', text: '1 kilo' },
                        { id: 'b', text: '2 kilos' },
                        { id: 'c', text: '3 kilos' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le colis pèse 2 kilos.'
                },
                {
                    id: 'a2-poste-q2',
                    type: 'radio',
                    question: 'Est-ce que le client a besoin d\'un emballage spécial ?',
                    options: [
                        { id: 'a', text: 'Oui' },
                        { id: 'b', text: 'Non' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le client n\'a pas besoin d\'un emballage spécial.'
                },
                {
                    id: 'a2-poste-q3',
                    type: 'radio',
                    question: 'Combien coûtera l\'envoi ?',
                    options: [
                        { id: 'a', text: '15 euros' },
                        { id: 'b', text: '25 euros' },
                        { id: 'c', text: '35 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'envoi coûtera 25 euros.'
                }
            ]
        },
        {
            id: 'a2-appartement',
            title: 'Visiter un appartement',
            audioFile: `${audioBasePath}a2-appartement.mp3`,
            transcript: `<p>- Bonjour, je cherche un appartement à louer.</p>
                        <p>- Bonjour, bienvenue chez nous. Je suis votre agent immobilier. Pouvez-vous me dire ce que vous recherchez ?</p>
                        <p>- Nous cherchons un appartement de deux chambres, avec un balcon, dans un quartier calme.</p>
                        <p>- Très bien. Je vais vous montrer quelques options.</p>
                        <p>- D'accord, merci.</p>
                        <p>- Voici le premier appartement. Il a deux chambres, une cuisine équipée, un balcon et une salle de bain.</p>
                        <p>- C'est intéressant, mais il n'y a pas de parking.</p>
                        <p>- Non, désolé. Il n'y a pas de parking disponible.</p>
                        <p>- D'accord, passons au suivant.</p>
                        <p>- Voici le deuxième appartement. Il a deux chambres, une cuisine équipée, un balcon, une salle de bain et un parking.</p>
                        <p>- C'est parfait ! Combien coûte-t-il ?</p>
                        <p>- Le loyer mensuel est de 800 euros.</p>
                        <p>- C'est dans notre budget. Pouvez-vous nous donner plus de détails ?</p>
                        <p>- Bien sûr. Le quartier est calme et résidentiel. Il y a des écoles et des commerces à proximité.</p>
                        <p>- C'est exactement ce que nous recherchions. Nous allons le prendre.</p>
                        <p>- Parfait. Je vais préparer le contrat de location pour vous.</p>
                        <p>- Merci beaucoup.</p>`,
            questions: [
                {
                    id: 'a2-appartement-q1',
                    type: 'radio',
                    question: 'Quel est le nombre de chambres recherché par la famille ?',
                    options: [
                        { id: 'a', text: 'Une chambre' },
                        { id: 'b', text: 'Deux chambres' },
                        { id: 'c', text: 'Trois chambres' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille dit "Nous cherchons un appartement de deux chambres".'
                },
                {
                    id: 'a2-appartement-q2',
                    type: 'radio',
                    question: 'Quel est le budget mensuel de la famille pour le loyer ?',
                    options: [
                        { id: 'a', text: 'Moins de 700 euros' },
                        { id: 'b', text: 'Entre 700 et 900 euros' },
                        { id: 'c', text: 'Plus de 900 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille accepte un loyer de 800 euros par mois.'
                },
                {
                    id: 'a2-appartement-q3',
                    type: 'radio',
                    question: 'Quel est le critère de localisation recherché par la famille ?',
                    options: [
                        { id: 'a', text: 'Un quartier animé' },
                        { id: 'b', text: 'Un quartier calme' },
                        { id: 'c', text: 'Un quartier proche des transports en commun' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille recherche un appartement dans un quartier calme.'
                }
            ]
        },
        {
            id: 'a2-restaurant-reservation',
            title: 'Réservation au restaurant',
            audioFile: `${audioBasePath}a2-restaurant-reservation.mp3`,
            transcript: `<p>- Bonjour, je voudrais faire une réservation pour ce soir.</p>
                        <p>- Bienvenue au restaurant. Combien de personnes serez-vous ?</p>
                        <p>- Nous sommes quatre.</p>
                        <p>- Très bien. À quelle heure souhaitez-vous réserver ?</p>
                        <p>- Nous aimerions réserver à 19h30.</p>
                        <p>- D'accord. Avez-vous une préférence pour une table près de la fenêtre ou au centre de la salle ?</p>
                        <p>- Nous préférons une table près de la fenêtre.</p>
                        <p>- Parfait. Je vais vérifier la disponibilité.</p>
                        <p>- Merci.</p>
                        <p>- Oui, nous avons une table disponible près de la fenêtre à 19h30.</p>
                        <p>- C'est parfait. Pouvez-vous nous donner le nom de la personne qui réserve ?</p>
                        <p>- Oui, bien sûr. C'est pour Mme Dupont.</p>
                        <p>- Merci beaucoup. À ce soir.</p>`,
            questions: [
                {
                    id: 'a2-restaurant-reservation-q1',
                    type: 'radio',
                    question: 'Combien de personnes souhaitent faire une réservation ?',
                    options: [
                        { id: 'a', text: 'Deux personnes' },
                        { id: 'b', text: 'Quatre personnes' },
                        { id: 'c', text: 'Six personnes' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille dit "Nous sommes quatre".'
                },
                {
                    id: 'a2-restaurant-reservation-q2',
                    type: 'radio',
                    question: 'À quelle heure souhaitent-ils réserver ?',
                    options: [
                        { id: 'a', text: '18h30' },
                        { id: 'b', text: '19h30' },
                        { id: 'c', text: '20h30' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille dit "Nous aimerions réserver à 19h30".'
                },
                {
                    id: 'a2-restaurant-reservation-q3',
                    type: 'radio',
                    question: 'Où souhaitent-ils s\'asseoir ?',
                    options: [
                        { id: 'a', text: 'Au centre de la salle' },
                        { id: 'b', text: 'Près de la fenêtre' },
                        { id: 'c', text: 'Au bord de la piscine' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille préfère une table près de la fenêtre.'
                }
            ]
        },
        {
            id: 'a2-voyage',
            title: 'Organiser un voyage',
            audioFile: `${audioBasePath}a2-voyage.mp3`,
            transcript: `<p>- Bonjour, je voudrais organiser un voyage à Marseille.</p>
                        <p>- Bien sûr, je peux vous aider. Quand souhaitez-vous partir ?</p>
                        <p>- Nous aimerions partir en juillet.</p>
                        <p>- Très bien. Combien de personnes serez-vous ?</p>
                        <p>- Nous sommes deux adultes et deux enfants.</p>
                        <p>- Parfait. Avez-vous déjà réservé un hôtel ?</p>
                        <p>- Non, nous n'avons pas encore réservé d'hôtel.</p>
                        <p>- Je peux vous aider à trouver un hôtel adapté à vos besoins. Quel budget avez-vous en tête ?</p>
                        <p>- Nous cherchons un hôtel avec une piscine et un restaurant. Notre budget est de 150 euros par nuit.</p>
                        <p>- Très bien. Je vais chercher des options pour vous.</p>
                        <p>- Merci beaucoup.</p>`,
            questions: [
                {
                    id: 'a2-voyage-q1',
                    type: 'radio',
                    question: 'Quand souhaite la famille partir ?',
                    options: [
                        { id: 'a', text: 'En juin' },
                        { id: 'b', text: 'En juillet' },
                        { id: 'c', text: 'En août' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille dit "Nous aimerions partir en juillet".'
                },
                {
                    id: 'a2-voyage-q2',
                    type: 'radio',
                    question: 'Combien de personnes sont dans la famille ?',
                    options: [
                        { id: 'a', text: 'Deux adultes' },
                        { id: 'b', text: 'Deux adultes et deux enfants' },
                        { id: 'c', text: 'Quatre adultes' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille dit "Nous sommes deux adultes et deux enfants".'
                },
                {
                    id: 'a2-voyage-q3',
                    type: 'radio',
                    question: 'Quel est le budget de la famille pour l\'hôtel ?',
                    options: [
                        { id: 'a', text: 'Moins de 100 euros par nuit' },
                        { id: 'b', text: 'Entre 100 et 200 euros par nuit' },
                        { id: 'c', text: 'Plus de 200 euros par nuit' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La famille dit "Notre budget est de 150 euros par nuit".'
                }
            ]
        },
        {
            id: 'a2-poste-lettre',
            title: 'Envoyer une lettre',
            audioFile: `${audioBasePath}a2-poste-lettre.mp3`,
            transcript: `<p>- Bonjour, je voudrais envoyer une lettre.</p>
                        <p>- Bonjour, bienvenue à la poste. Comment puis-je vous aider ?</p>
                        <p>- Je voudrais envoyer une lettre à mon amie à New York.</p>
                        <p>- Très bien. Quel est le contenu de la lettre ?</p>
                        <p>- C'est une lettre personnelle.</p>
                        <p>- Parfait. Avez-vous besoin d'un timbre ?</p>
                        <p>- Oui, je voudrais un timbre pour une lettre internationale.</p>
                        <p>- Très bien. Combien coûtera l'envoi ?</p>
                        <p>- L'envoi coûtera 3 euros.</p>
                        <p>- D'accord. Pouvez-vous me donner un récépissé ?</p>
                        <p>- Oui, bien sûr. Voici votre récépissé.</p>
                        <p>- Merci beaucoup. À bientôt.</p>`,
            questions: [
                {
                    id: 'a2-poste-lettre-q1',
                    type: 'radio',
                    question: 'Quel est le contenu de la lettre ?',
                    options: [
                        { id: 'a', text: 'Une lettre d\'affaires' },
                        { id: 'b', text: 'Une lettre personnelle' },
                        { id: 'c', text: 'Une lettre de motivation' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La lettre est personnelle.'
                },
                {
                    id: 'a2-poste-lettre-q2',
                    type: 'radio',
                    question: 'Est-ce que le client a besoin d\'un timbre ?',
                    options: [
                        { id: 'a', text: 'Oui' },
                        { id: 'b', text: 'Non' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'Le client a besoin d\'un timbre pour une lettre internationale.'
                },
                {
                    id: 'a2-poste-lettre-q3',
                    type: 'radio',
                    question: 'Combien coûtera l\'envoi ?',
                    options: [
                        { id: 'a', text: '1 euro' },
                        { id: 'b', text: '2 euros' },
                        { id: 'c', text: '3 euros' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'L\'envoi coûtera 3 euros.'
                }
            ]
        },
        {
            id: 'a2-train',
            title: 'Prendre le train',
            audioFile: `${audioBasePath}a2-train.mp3`,
            transcript: `<p>- Bonjour, je voudrais un billet pour Bordeaux, s'il vous plaît.</p>
                        <p>- Bonjour. Pour quel jour ?</p>
                        <p>- Pour demain matin.</p>
                        <p>- Aller simple ou aller-retour ?</p>
                        <p>- Aller-retour. Je voudrais partir vers 9h et revenir le lendemain soir.</p>
                        <p>- Donc un aller-retour Paris-Bordeaux. Départ demain vers 9h et retour après-demain soir. Voyons ce que nous avons... Pour l'aller, il y a un train à 8h37 et un autre à 9h13.</p>
                        <p>- Je préfère celui de 9h13, s'il vous plaît.</p>
                        <p>- D'accord. Et pour le retour, il y a des trains à 17h22, 18h45 et 20h10.</p>
                        <p>- Je vais prendre celui de 18h45.</p>
                        <p>- Très bien. En première ou en seconde classe ?</p>
                        <p>- En seconde classe, c'est suffisant.</p>
                        <p>- Voulez-vous une place côté fenêtre ou côté couloir ?</p>
                        <p>- Côté fenêtre, s'il vous plaît.</p>
                        <p>- Parfait. J'ai une place côté fenêtre pour l'aller et le retour. Avez-vous une carte de réduction ?</p>
                        <p>- Non, je n'en ai pas.</p>
                        <p>- Le prix total est de 127 euros. Comment souhaitez-vous payer ?</p>
                        <p>- Par carte bancaire.</p>
                        <p>- Très bien. Insérez votre carte et composez votre code, s'il vous plaît... Voici votre billet. Votre train part du quai 12 demain à 9h13 et arrive à Bordeaux à 11h52. Pour le retour, départ de Bordeaux à 18h45, arrivée à Paris à 21h22.</p>
                        <p>- Merci beaucoup.</p>
                        <p>- Je vous en prie. Bon voyage !</p>`,
            questions: [
                {
                    id: 'a2-train-q1',
                    type: 'radio',
                    question: 'Quelle destination la personne veut-elle rejoindre ?',
                    options: [
                        { id: 'a', text: 'Lyon' },
                        { id: 'b', text: 'Marseille' },
                        { id: 'c', text: 'Bordeaux' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'La personne demande un billet pour Bordeaux.'
                },
                {
                    id: 'a2-train-q2',
                    type: 'radio',
                    question: 'Quel type de billet la personne achète-t-elle ?',
                    options: [
                        { id: 'a', text: 'Un aller simple' },
                        { id: 'b', text: 'Un aller-retour' },
                        { id: 'c', text: 'Un billet de groupe' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne demande un aller-retour Paris-Bordeaux.'
                },
                {
                    id: 'a2-train-q3',
                    type: 'radio',
                    question: 'À quelle heure part le train aller ?',
                    options: [
                        { id: 'a', text: '8h37' },
                        { id: 'b', text: '9h13' },
                        { id: 'c', text: '10h00' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne choisit le train de 9h13 pour l\'aller.'
                },
                {
                    id: 'a2-train-q4',
                    type: 'radio',
                    question: 'Quel est le prix total du billet ?',
                    options: [
                        { id: 'a', text: '97 euros' },
                        { id: 'b', text: '127 euros' },
                        { id: 'c', text: '147 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le prix total du billet est de 127 euros.'
                }
            ]
        },
        {
            id: 'a2-pizza',
            title: 'Commander une pizza',
            audioFile: `${audioBasePath}a2-pizza.mp3`,
            transcript: `<p>- Pizzeria Bella Napoli, bonjour !</p>
                        <p>- Bonjour, je voudrais commander des pizzas à livrer, s'il vous plaît.</p>
                        <p>- Bien sûr. Quelle est votre adresse ?</p>
                        <p>- J'habite au 24 rue des Fleurs, appartement 3B.</p>
                        <p>- D'accord. Et quel est votre numéro de téléphone ?</p>
                        <p>- 06 12 34 56 78.</p>
                        <p>- Parfait. Qu'est-ce que vous aimeriez commander ?</p>
                        <p>- Je voudrais une pizza Margherita, une pizza quatre fromages et une pizza végétarienne, s'il vous plaît.</p>
                        <p>- Très bien. Quelle taille : moyenne ou grande ?</p>
                        <p>- Deux grandes et une moyenne. La végétarienne en moyenne.</p>
                        <p>- D'accord. Souhaitez-vous des boissons avec votre commande ?</p>
                        <p>- Oui, deux bouteilles de soda et une bouteille d'eau, s'il vous plaît.</p>
                        <p>- Parfait. Votre commande est enregistrée. Le total est de 42 euros. Vous payerez en espèces ou par carte à la livraison ?</p>
                        <p>- En espèces, s'il vous plaît.</p>
                        <p>- Très bien. La livraison prendra environ 30 à 40 minutes.</p>
                        <p>- Parfait. Merci beaucoup.</p>
                        <p>- Je vous en prie. Bon appétit et à bientôt !</p>`,
            questions: [
                {
                    id: 'a2-pizza-q1',
                    type: 'radio',
                    question: 'Quelle est l\'adresse de livraison ?',
                    options: [
                        { id: 'a', text: '24 rue des Roses' },
                        { id: 'b', text: '24 rue des Fleurs' },
                        { id: 'c', text: '42 rue des Fleurs' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'adresse de livraison est le 24 rue des Fleurs, appartement 3B.'
                },
                {
                    id: 'a2-pizza-q2',
                    type: 'checkbox',
                    question: 'Quelles pizzas sont commandées ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Margherita' },
                        { id: 'b', text: 'Quatre fromages' },
                        { id: 'c', text: 'Végétarienne' },
                        { id: 'd', text: 'Pepperoni' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'La personne commande une pizza Margherita, une pizza quatre fromages et une pizza végétarienne.'
                },
                {
                    id: 'a2-pizza-q3',
                    type: 'radio',
                    question: 'Quel est le temps de livraison estimé ?',
                    options: [
                        { id: 'a', text: '15 à 20 minutes' },
                        { id: 'b', text: '30 à 40 minutes' },
                        { id: 'c', text: '45 à 60 minutes' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le temps de livraison estimé est de 30 à 40 minutes.'
                }
            ]
        },
        {
            id: 'b1-entretien',
            title: 'Un entretien d\'embauche',
            audioFile: `${audioBasePath}b1-entretien.mp3`,
            transcript: `<p>- Bonjour, merci de m'accueillir pour cet entretien.</p>
                        <p>- Bonjour, enchanté de vous rencontrer. Je suis votre intervieweur. Pouvez-vous vous présenter brièvement ?</p>
                        <p>- Bien sûr. Je m'appelle Marie Dupont, j'ai 30 ans et je suis diplômée d'un master en marketing.</p>
                        <p>- Très bien. Pourriez-vous nous parler de votre expérience professionnelle ?</p>
                        <p>- Bien sûr. J'ai travaillé pendant 5 ans dans une agence de marketing numérique. J'ai été responsable de campagnes de publicité en ligne et de stratégies de contenu.</p>
                        <p>- C'est intéressant. Et quelles sont vos compétences clés ?</p>
                        <p>- Je suis une experte en analyse de données, en gestion de projets et en communication.</p>
                        <p>- Très bien. Pouvez-vous nous donner un exemple de projet réussi ?</p>
                        <p>- Bien sûr. J'ai dirigé une campagne de marketing de contenu pour une entreprise de mode en ligne. Nous avons augmenté le trafic de 30% en 6 mois et les ventes ont augmenté de 20%.</p>
                        <p>- C'est impressionnant. Et quelles sont vos ambitions professionnelles à court et moyen terme ?</p>
                        <p>- À court terme, j'aimerais contribuer à la croissance de l'entreprise en mettant en œuvre des stratégies de marketing numérique efficaces. À moyen terme, j'aspire à devenir responsable du marketing digital pour une entreprise internationale.</p>
                        <p>- Très bien. Pouvez-vous nous parler de vos loisirs et de vos intérêts ?</p>
                        <p>- Bien sûr. Je suis passionnée de lecture, de cinéma et de voyage. J'aime également cuisiner et essayer de nouvelles recettes.</p>
                        <p>- C'est intéressant. Merci beaucoup pour votre temps. Nous vous recontacterons bientôt.</p>
                        <p>- Merci beaucoup pour cette opportunité. Au revoir.</p>`,
            questions: [
                {
                    id: 'b1-entretien-q1',
                    type: 'radio',
                    question: 'Quel est le nom de la candidate ?',
                    options: [
                        { id: 'a', text: 'Marie Dupont' },
                        { id: 'b', text: 'Sophie Martin' },
                        { id: 'c', text: 'Julie Leclerc' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'La candidate se présente en disant "Je m\'appelle Marie Dupont".'
                },
                {
                    id: 'b1-entretien-q2',
                    type: 'radio',
                    question: 'Quel est le domaine d\'études de la candidate ?',
                    options: [
                        { id: 'a', text: 'Informatique' },
                        { id: 'b', text: 'Marketing' },
                        { id: 'c', text: 'Finance' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La candidate dit "j\'ai un master en marketing".'
                },
                {
                    id: 'b1-entretien-q3',
                    type: 'radio',
                    question: 'Quelle est la durée d\'expérience professionnelle de la candidate ?',
                    options: [
                        { id: 'a', text: 'Moins de 2 ans' },
                        { id: 'b', text: 'Entre 2 et 5 ans' },
                        { id: 'c', text: 'Plus de 5 ans' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La candidate dit "j\'ai travaillé pendant 5 ans dans une agence de marketing numérique".'
                }
            ]
        },
        {
            id: 'b1-voyage',
            title: 'Discussion sur un voyage',
            audioFile: `${audioBasePath}b1-voyage.mp3`,
            transcript: `<p>- Bonjour, comment s'est passé votre voyage à New York ?</p>
                        <p>- Ça s'est très bien passé. Nous avons visité de nombreux endroits intéressants.</p>
                        <p>- C'est bien. Quels endroits avez-vous visités ?</p>
                        <p>- Nous avons visité le musée d'art moderne, Central Park, Times Square et le Metropolitan Museum of Art.</p>
                        <p>- C'est impressionnant. Et qu'avez-vous pensé de la nourriture ?</p>
                        <p>- La nourriture était délicieuse. Nous avons goûté à de nombreux plats typiques, comme des bagels, des hot-dogs et des pizzas.</p>
                        <p>- C'est délicieux. Et comment était le service dans les restaurants ?</p>
                        <p>- Le service était excellent. Les serveurs étaient très sympathiques et serviables.</p>
                        <p>- C'est bien. Et comment était le logement ?</p>
                        <p>- Le logement était confortable. Nous avions une chambre spacieuse avec une vue sur la ville.</p>
                        <p>- C'est bien. Et y a-t-il des choses que vous auriez faites différemment ?</p>
                        <p>- Non, nous avons tout apprécié. C'était une expérience inoubliable.</p>
                        <p>- C'est bien. Merci pour le partage. À bientôt.</p>
                        <p>- Oui, à bientôt.</p>`,
            questions: [
                {
                    id: 'b1-voyage-q1',
                    type: 'radio',
                    question: 'Quels endroits ont été visités lors du voyage ?',
                    options: [
                        { id: 'a', text: 'Le musée d\'art moderne et Central Park' },
                        { id: 'b', text: 'Times Square et le Metropolitan Museum of Art' },
                        { id: 'c', text: 'Le musée d\'art moderne, Central Park, Times Square et le Metropolitan Museum of Art' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'Les endroits visités sont le musée d\'art moderne, Central Park, Times Square et le Metropolitan Museum of Art.'
                },
                {
                    id: 'b1-voyage-q2',
                    type: 'radio',
                    question: 'Quels plats typiques ont été goûtés ?',
                    options: [
                        { id: 'a', text: 'Des bagels et des hot-dogs' },
                        { id: 'b', text: 'Des pizzas et des hamburgers' },
                        { id: 'c', text: 'Des bagels, des hot-dogs et des pizzas' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'Les plats typiques goûtés sont des bagels, des hot-dogs et des pizzas.'
                },
                {
                    id: 'b1-voyage-q3',
                    type: 'radio',
                    question: 'Comment était le service dans les restaurants ?',
                    options: [
                        { id: 'a', text: 'Excellent' },
                        { id: 'b', text: 'Moyen' },
                        { id: 'c', text: 'Mauvais' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'Le service dans les restaurants était excellent.'
                }
            ]
        },
        {
            id: 'b1-reclamation',
            title: 'Réclamation client',
            audioFile: `${audioBasePath}b1-reclamation.mp3`,
            transcript: `<p>- Bonjour, je voudrais faire une réclamation.</p>
                        <p>- Bonjour, merci de nous appeler. Pouvez-vous me donner plus de détails ?</p>
                        <p>- Bien sûr. J'ai commandé un livre en ligne il y a deux semaines, mais il n'est toujours pas arrivé.</p>
                        <p>- Je suis désolé pour le désagrément. Pouvez-vous me donner le numéro de commande ?</p>
                        <p>- Oui, c'est le numéro 123456789.</p>
                        <p>- Très bien. Je vais vérifier la situation.</p>
                        <p>- Merci.</p>
                        <p>- Je suis désolé, mais il semble y avoir eu une erreur dans la préparation de la commande.</p>
                        <p>- Qu'est-ce que je peux faire ?</p>
                        <p>- Je vais annuler la commande et vous rembourser intégralement.</p>
                        <p>- C'est bien. Merci beaucoup.</p>
                        <p>- De rien. Nous sommes là pour vous aider. Au revoir.</p>
                        <p>- Au revoir.</p>`,
            questions: [
                {
                    id: 'b1-reclamation-q1',
                    type: 'radio',
                    question: 'Quel est le problème de la cliente ?',
                    options: [
                        { id: 'a', text: 'Elle a reçu un mauvais produit' },
                        { id: 'b', text: 'Elle n\'a pas reçu sa commande' },
                        { id: 'c', text: 'Elle a eu un problème avec le paiement' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La cliente dit "j\'ai commandé un livre en ligne il y a deux semaines, mais il n\'est toujours pas arrivé".'
                },
                {
                    id: 'b1-reclamation-q2',
                    type: 'radio',
                    question: 'Quelle est la solution proposée par le service client ?',
                    options: [
                        { id: 'a', text: 'Annuler la commande et rembourser intégralement' },
                        { id: 'b', text: 'Renvoyer un nouveau produit' },
                        { id: 'c', text: 'Offrir un bon d\'achat' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'Le service client dit "Je vais annuler la commande et vous rembourser intégralement".'
                }
            ]
        },
        {
            id: 'b1-processus',
            title: 'Processus d\'admission universitaire',
            audioFile: `${audioBasePath}b1-processus.mp3`,
            transcript: `<p>- Bonjour, je voudrais des informations sur le processus d'admission à l'université.</p>
                        <p>- Bien sûr. Je vais vous expliquer les différentes étapes.</p>
                        <p>- Tout d'abord, vous devez remplir le formulaire de candidature en ligne.</p>
                        <p>- Ensuite, vous devez fournir plusieurs documents : relevés de notes, lettres de recommandation, CV et lettre de motivation.</p>
                        <p>- Une fois votre dossier complet, il sera examiné par le comité d'admission.</p>
                        <p>- Si votre dossier est retenu, vous serez convoqué pour un entretien.</p>
                        <p>- Après l'entretien, vous recevrez une réponse définitive dans un délai de deux semaines.</p>
                        <p>- En cas d'admission, vous devrez confirmer votre inscription et payer les frais de scolarité.</p>`,
            questions: [
                {
                    id: 'b1-processus-q1',
                    type: 'checkbox',
                    question: 'Quels documents sont demandés pour la candidature ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Relevés de notes' },
                        { id: 'b', text: 'Lettres de recommandation' },
                        { id: 'c', text: 'CV' },
                        { id: 'd', text: 'Lettre de motivation' }
                    ],
                    correctAnswer: ['a', 'b', 'c', 'd'],
                    explanation: 'Tous ces documents sont requis selon l\'audio : relevés de notes, lettres de recommandation, CV et lettre de motivation.'
                },
                {
                    id: 'b1-processus-q2',
                    type: 'radio',
                    question: 'Quel est le délai de réponse après l\'entretien ?',
                    options: [
                        { id: 'a', text: 'Une semaine' },
                        { id: 'b', text: 'Deux semaines' },
                        { id: 'c', text: 'Un mois' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'audio indique que la réponse définitive sera donnée dans un délai de deux semaines après l\'entretien.'
                }
            ]
        },
        {
            id: 'b1-itineraire',
            title: 'Demander son itinéraire',
            audioFile: `${audioBasePath}b1-itineraire.mp3`,
            transcript: `<p>- Excusez-moi, je cherche la bibliothèque municipale.</p>
                        <p>- Je peux vous aider. C'est assez simple.</p>
                        <p>- Prenez la rue en face jusqu'au premier carrefour.</p>
                        <p>- Au carrefour, tournez à droite et continuez tout droit pendant environ 200 mètres.</p>
                        <p>- Vous verrez un grand parc sur votre gauche.</p>
                        <p>- Longez le parc jusqu'au bout, puis prenez la première rue à gauche.</p>
                        <p>- La bibliothèque se trouve juste après, c'est un grand bâtiment moderne.</p>
                        <p>- Vous ne pouvez pas la manquer, il y a une grande place devant.</p>`,
            questions: [
                {
                    id: 'b1-itineraire-q1',
                    type: 'radio',
                    question: 'Quelle est la première direction à prendre ?',
                    options: [
                        { id: 'a', text: 'Tourner à gauche' },
                        { id: 'b', text: 'Aller tout droit' },
                        { id: 'c', text: 'Tourner à droite' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'audio indique de prendre la rue en face (aller tout droit) jusqu\'au premier carrefour.'
                },
                {
                    id: 'b1-itineraire-q2',
                    type: 'checkbox',
                    question: 'Quels points de repère sont mentionnés dans les indications ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Un parc' },
                        { id: 'b', text: 'Une grande place' },
                        { id: 'c', text: 'Un carrefour' },
                        { id: 'd', text: 'Un feu rouge' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'L\'audio mentionne un carrefour, un grand parc et une grande place devant la bibliothèque.'
                }
            ]
        },
        {
            id: 'b1-visite-appartement',
            title: 'Visite d\'un appartement',
            audioFile: `${audioBasePath}b1-visite-appartement.mp3`,
            transcript: `<p>- Bonjour, je suis l'agent immobilier. Je vais vous faire visiter l'appartement.</p>
                        <p>- Comme vous pouvez le voir, nous sommes dans le salon qui est très lumineux grâce à ses grandes fenêtres.</p>
                        <p>- La cuisine est entièrement équipée avec des appareils modernes.</p>
                        <p>- Il y a deux chambres : une grande chambre parentale et une plus petite qui peut servir de bureau.</p>
                        <p>- La salle de bain a été récemment rénovée.</p>
                        <p>- L'appartement dispose aussi d'un balcon avec vue sur le parc.</p>
                        <p>- Le quartier est très calme et bien desservi par les transports en commun.</p>
                        <p>- Le loyer est de 1200 euros par mois, charges comprises.</p>`,
            questions: [
                {
                    id: 'b1-visite-appartement-q1',
                    type: 'checkbox',
                    question: 'Quelles pièces sont mentionnées dans la visite ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Salon' },
                        { id: 'b', text: 'Cuisine' },
                        { id: 'c', text: 'Chambres' },
                        { id: 'd', text: 'Salle de bain' }
                    ],
                    correctAnswer: ['a', 'b', 'c', 'd'],
                    explanation: 'L\'audio mentionne toutes ces pièces : le salon, la cuisine, deux chambres et la salle de bain.'
                },
                {
                    id: 'b1-visite-appartement-q2',
                    type: 'radio',
                    question: 'Quel est le loyer mensuel de l\'appartement ?',
                    options: [
                        { id: 'a', text: '1000 euros' },
                        { id: 'b', text: '1200 euros' },
                        { id: 'c', text: '1400 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'audio indique que le loyer est de 1200 euros par mois, charges comprises.'
                }
            ]
        },
        {
            id: 'b1-commande',
            title: 'Commander un repas par téléphone',
            audioFile: `${audioBasePath}b1-commande.mp3`,
            transcript: `<p>- Bonjour, restaurant Le Gourmet, que puis-je faire pour vous ?</p>
                        <p>- Bonjour, je voudrais commander un repas à emporter.</p>
                        <p>- Très bien, je vous écoute.</p>
                        <p>- Je voudrais une salade César, un steak-frites et une tarte aux pommes.</p>
                        <p>- Souhaitez-vous une cuisson particulière pour le steak ?</p>
                        <p>- Oui, à point s'il vous plaît.</p>
                        <p>- D'accord. Votre commande sera prête dans 30 minutes.</p>
                        <p>- Parfait. Quel est le montant total ?</p>
                        <p>- Ça fera 35 euros. Vous pourrez payer sur place.</p>
                        <p>- Très bien, merci. À tout à l'heure.</p>`,
            questions: [
                {
                    id: 'b1-commande-q1',
                    type: 'checkbox',
                    question: 'Quels plats sont commandés ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Salade César' },
                        { id: 'b', text: 'Steak-frites' },
                        { id: 'c', text: 'Tarte aux pommes' },
                        { id: 'd', text: 'Soupe à l\'oignon' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'La personne commande une salade César, un steak-frites et une tarte aux pommes.'
                },
                {
                    id: 'b1-commande-q2',
                    type: 'radio',
                    question: 'Quel est le montant total de la commande ?',
                    options: [
                        { id: 'a', text: '25 euros' },
                        { id: 'b', text: '35 euros' },
                        { id: 'c', text: '45 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le montant total de la commande est de 35 euros.'
                }
            ]
        },
        {
            id: 'b1-vacances',
            title: 'Préparer ses vacances',
            audioFile: `${audioBasePath}b1-vacances.mp3`,
            transcript: `<p>- Alors, tu as décidé où tu vas partir en vacances ?</p>
                        <p>- Oui, j'ai choisi la Croatie !</p>
                        <p>- Oh, c'est super ! Tu as déjà planifié ton itinéraire ?</p>
                        <p>- Oui, je commence par Zagreb, la capitale.</p>
                        <p>- Ensuite, je vais visiter Split et Dubrovnik.</p>
                        <p>- Je terminerai par quelques jours sur l'île de Hvar.</p>
                        <p>- Ça a l'air génial ! Tu as prévu combien de temps ?</p>
                        <p>- Deux semaines au total. J'ai un budget de 2000 euros.</p>
                        <p>- C'est raisonnable. Tu as déjà réservé tes hébergements ?</p>
                        <p>- Oui, j'ai tout réservé : les hôtels et les transports.</p>`,
            questions: [
                {
                    id: 'b1-vacances-q1',
                    type: 'radio',
                    question: 'Quelle est la destination choisie par Émilie ?',
                    options: [
                        { id: 'a', text: 'La Grèce' },
                        { id: 'b', text: 'L\'Italie' },
                        { id: 'c', text: 'La Croatie' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'Émilie dit qu\'elle a choisi la Croatie pour ses vacances d\'été.'
                },
                {
                    id: 'b1-vacances-q2',
                    type: 'radio',
                    question: 'Quelle ville Émilie visitera-t-elle en premier ?',
                    options: [
                        { id: 'a', text: 'Dubrovnik' },
                        { id: 'b', text: 'Split' },
                        { id: 'c', text: 'Zagreb' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Émilie indique qu\'elle va commencer par passer quatre jours à Split.'
                },
                {
                    id: 'b1-vacances-q3',
                    type: 'checkbox',
                    question: 'Quelles destinations sont incluses dans l\'itinéraire d\'Émilie ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Split' },
                        { id: 'b', text: 'L\'île de Hvar' },
                        { id: 'c', text: 'Dubrovnik' },
                        { id: 'd', text: 'Le parc national de Plitvice' }
                    ],
                    correctAnswer: ['a', 'b', 'c', 'd'],
                    explanation: 'L\'itinéraire d\'Émilie comprend Split, l\'île de Hvar, Dubrovnik et le parc national de Plitvice.'
                },
                {
                    id: 'b1-vacances-q4',
                    type: 'radio',
                    question: 'Quel est le budget prévu par Émilie pour ses deux semaines de vacances ?',
                    options: [
                        { id: 'a', text: '1000 euros' },
                        { id: 'b', text: '1500 euros' },
                        { id: 'c', text: '2000 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Émilie mentionne qu\'elle a prévu environ 1500 euros tout compris pour les deux semaines.'
                }
            ]
        },
        {
            id: 'a2-cinema',
            title: 'Au cinéma',
            audioFile: `${audioBasePath}a2-cinema.mp3`,
            transcript: `<p>- Bonsoir, je voudrais deux places pour le film "Les Étoiles de Paris".</p>
                        <p>- Oui, pour quelle séance ?</p>
                        <p>- Celle de 20h30, s'il vous plaît.</p>
                        <p>- D'accord. En tarif normal ?</p>
                        <p>- Non, un tarif étudiant et un tarif normal.</p>
                        <p>- Ça fait 18€. Vous avez une carte de fidélité ?</p>
                        <p>- Non, je n'en ai pas.</p>
                        <p>- Vous voulez en faire une ? C'est gratuit et vous aurez une place offerte après 10 films.</p>
                        <p>- Oui, pourquoi pas.</p>
                        <p>- Parfait. La salle est la numéro 3, au premier étage.</p>`,
            questions: [
                {
                    id: 'a2-cinema-q1',
                    type: 'radio',
                    question: 'À quelle heure est la séance ?',
                    options: [
                        { id: 'a', text: '19h30' },
                        { id: 'b', text: '20h30' },
                        { id: 'c', text: '21h30' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La séance choisie est à 20h30.'
                },
                {
                    id: 'a2-cinema-q2',
                    type: 'checkbox',
                    question: 'Quels types de billets sont achetés ?',
                    options: [
                        { id: 'a', text: 'Tarif normal' },
                        { id: 'b', text: 'Tarif étudiant' },
                        { id: 'c', text: 'Tarif senior' },
                        { id: 'd', text: 'Tarif enfant' }
                    ],
                    correctAnswer: ['a', 'b'],
                    explanation: 'La personne achète un billet au tarif normal et un au tarif étudiant.'
                },
                {
                    id: 'a2-cinema-q3',
                    type: 'radio',
                    question: 'Quel est l\'avantage de la carte de fidélité ?',
                    options: [
                        { id: 'a', text: 'Une réduction immédiate' },
                        { id: 'b', text: 'Une place gratuite après 10 films' },
                        { id: 'c', text: 'Du pop-corn gratuit' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La carte de fidélité offre une place gratuite après avoir vu 10 films.'
                }
            ]
        },
        {
            id: 'a2-bibliotheque',
            title: 'À la bibliothèque',
            audioFile: `${audioBasePath}a2-bibliotheque.mp3`,
            transcript: `<p>- Bonjour, je voudrais m'inscrire à la bibliothèque.</p>
                        <p>- Bien sûr. Vous habitez dans la ville ?</p>
                        <p>- Oui, j'ai emménagé le mois dernier.</p>
                        <p>- Il me faut une pièce d'identité et un justificatif de domicile.</p>
                        <p>- Voilà ma carte d'identité et une facture d'électricité.</p>
                        <p>- Parfait. L'inscription est gratuite. Vous pouvez emprunter jusqu'à 5 livres pour 3 semaines.</p>
                        <p>- Et pour les DVD ?</p>
                        <p>- C'est 3 DVD maximum pour 2 semaines.</p>
                        <p>- D'accord. Et la bibliothèque est ouverte quand ?</p>
                        <p>- Du mardi au samedi, de 10h à 18h.</p>`,
            questions: [
                {
                    id: 'a2-bibliotheque-q1',
                    type: 'checkbox',
                    question: 'Quels documents sont nécessaires pour l\'inscription ?',
                    options: [
                        { id: 'a', text: 'Une pièce d\'identité' },
                        { id: 'b', text: 'Un justificatif de domicile' },
                        { id: 'c', text: 'Une photo d\'identité' },
                        { id: 'd', text: 'Un certificat de scolarité' }
                    ],
                    correctAnswer: ['a', 'b'],
                    explanation: 'Il faut une pièce d\'identité et un justificatif de domicile pour s\'inscrire.'
                },
                {
                    id: 'a2-bibliotheque-q2',
                    type: 'radio',
                    question: 'Combien de livres peut-on emprunter ?',
                    options: [
                        { id: 'a', text: '3 livres' },
                        { id: 'b', text: '4 livres' },
                        { id: 'c', text: '5 livres' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'On peut emprunter jusqu\'à 5 livres.'
                },
                {
                    id: 'a2-bibliotheque-q3',
                    type: 'radio',
                    question: 'Quels sont les horaires d\'ouverture ?',
                    options: [
                        { id: 'a', text: 'Du lundi au vendredi' },
                        { id: 'b', text: 'Du mardi au samedi' },
                        { id: 'c', text: 'Du lundi au samedi' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La bibliothèque est ouverte du mardi au samedi, de 10h à 18h.'
                }
            ]
        },
        {
            id: 'a2-pharmacie',
            title: 'À la pharmacie',
            audioFile: `${audioBasePath}a2-pharmacie.mp3`,
            transcript: `<p>- Bonjour, je peux vous aider ?</p>
                        <p>- Oui, j'ai mal à la gorge depuis hier.</p>
                        <p>- Vous avez de la fièvre ?</p>
                        <p>- Un peu, 38,5°C ce matin.</p>
                        <p>- Je vais vous donner des pastilles pour la gorge et du paracétamol.</p>
                        <p>- D'accord. Je dois les prendre combien de fois par jour ?</p>
                        <p>- Les pastilles, 4 à 6 fois par jour. Le paracétamol, maximum 3 fois par jour.</p>
                        <p>- Et je dois boire beaucoup d'eau ?</p>
                        <p>- Oui, c'est très important. Au moins 1,5 litre par jour.</p>
                        <p>- Merci beaucoup.</p>`,
            questions: [
                {
                    id: 'a2-pharmacie-q1',
                    type: 'radio',
                    question: 'Quel est le problème de santé de la personne ?',
                    options: [
                        { id: 'a', text: 'Mal à la tête' },
                        { id: 'b', text: 'Mal à la gorge' },
                        { id: 'c', text: 'Mal au ventre' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne dit qu\'elle a mal à la gorge depuis hier.'
                },
                {
                    id: 'a2-pharmacie-q2',
                    type: 'radio',
                    question: 'Quelle est sa température ?',
                    options: [
                        { id: 'a', text: '37,5°C' },
                        { id: 'b', text: '38,5°C' },
                        { id: 'c', text: '39,5°C' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne a 38,5°C de fièvre ce matin.'
                },
                {
                    id: 'a2-pharmacie-q3',
                    type: 'checkbox',
                    question: 'Quels médicaments sont prescrits ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Des pastilles pour la gorge' },
                        { id: 'b', text: 'Du paracétamol' },
                        { id: 'c', text: 'Du sirop' },
                        { id: 'd', text: 'Des antibiotiques' }
                    ],
                    correctAnswer: ['a', 'b'],
                    explanation: 'Le pharmacien prescrit des pastilles pour la gorge et du paracétamol.'
                }
            ]
        },
        {
            id: 'a2-coiffeur',
            title: 'Chez le coiffeur',
            audioFile: `${audioBasePath}a2-coiffeur.mp3`,
            transcript: `<p>- Bonjour, j'ai rendez-vous à 14h30.</p>
                        <p>- Oui, c'est à quel nom ?</p>
                        <p>- Marie Dubois.</p>
                        <p>- Ah oui, je vous en prie, installez-vous. Qu'est-ce que vous souhaitez aujourd'hui ?</p>
                        <p>- Je voudrais une coupe avec un dégradé et raccourcir d'environ 5 centimètres.</p>
                        <p>- D'accord. Et pour le brushing ?</p>
                        <p>- Lisse, s'il vous plaît.</p>
                        <p>- Très bien. On commence par le shampooing.</p>
                        <p>- Est-ce que vous pourriez me faire un soin aussi ?</p>
                        <p>- Bien sûr. Le soin hydratant est à 15 euros en plus.</p>`,
            questions: [
                {
                    id: 'a2-coiffeur-q1',
                    type: 'radio',
                    question: 'À quelle heure est le rendez-vous ?',
                    options: [
                        { id: 'a', text: '14h00' },
                        { id: 'b', text: '14h30' },
                        { id: 'c', text: '15h00' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le rendez-vous est à 14h30.'
                },
                {
                    id: 'a2-coiffeur-q2',
                    type: 'checkbox',
                    question: 'Que demande la cliente ?',
                    options: [
                        { id: 'a', text: 'Une coupe avec dégradé' },
                        { id: 'b', text: 'Raccourcir de 5 centimètres' },
                        { id: 'c', text: 'Une coloration' },
                        { id: 'd', text: 'Un soin hydratant' }
                    ],
                    correctAnswer: ['a', 'b', 'd'],
                    explanation: 'La cliente demande une coupe avec dégradé, de raccourcir de 5 centimètres, et un soin hydratant.'
                },
                {
                    id: 'a2-coiffeur-q3',
                    type: 'radio',
                    question: 'Combien coûte le soin supplémentaire ?',
                    options: [
                        { id: 'a', text: '10 euros' },
                        { id: 'b', text: '15 euros' },
                        { id: 'c', text: '20 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le soin hydratant coûte 15 euros en plus.'
                }
            ]
        },
        {
            id: 'a2-supermarche',
            title: 'Au supermarché',
            audioFile: `${audioBasePath}a2-supermarche.mp3`,
            transcript: `<p>- Bonjour, je peux vous aider à trouver quelque chose ?</p>
                        <p>- Oui, je cherche le rayon des produits bio.</p>
                        <p>- C'est dans l'allée 4, à côté des fruits et légumes.</p>
                        <p>- Merci. Et où sont les produits sans gluten ?</p>
                        <p>- Dans le même rayon, il y a une section spéciale régimes alimentaires.</p>
                        <p>- Parfait. Une dernière chose : vous avez des sacs réutilisables ?</p>
                        <p>- Oui, ils sont en vente aux caisses. C'est 1 euro le sac.</p>
                        <p>- D'accord, j'en prendrai deux. Merci beaucoup.</p>`,
            questions: [
                {
                    id: 'a2-supermarche-q1',
                    type: 'radio',
                    question: 'Dans quelle allée se trouve le rayon bio ?',
                    options: [
                        { id: 'a', text: 'Allée 3' },
                        { id: 'b', text: 'Allée 4' },
                        { id: 'c', text: 'Allée 5' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le rayon bio se trouve dans l\'allée 4.'
                },
                {
                    id: 'a2-supermarche-q2',
                    type: 'radio',
                    question: 'Où peut-on trouver les produits sans gluten ?',
                    options: [
                        { id: 'a', text: 'Dans un rayon séparé' },
                        { id: 'b', text: 'Dans le rayon bio' },
                        { id: 'c', text: 'Aux caisses' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Les produits sans gluten sont dans le rayon bio, section régimes alimentaires.'
                },
                {
                    id: 'a2-supermarche-q3',
                    type: 'radio',
                    question: 'Combien coûte un sac réutilisable ?',
                    options: [
                        { id: 'a', text: '0,50 euro' },
                        { id: 'b', text: '1 euro' },
                        { id: 'c', text: '2 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Un sac réutilisable coûte 1 euro.'
                }
            ]
        },
        {
            id: 'a2-sport',
            title: 'Au club de sport',
            audioFile: `${audioBasePath}a2-sport.mp3`,
            transcript: `<p>- Bonjour, je voudrais des informations sur les abonnements.</p>
                        <p>- Bonjour, nous avons plusieurs formules. Vous cherchez quoi exactement ?</p>
                        <p>- Je voudrais faire de la musculation et du yoga.</p>
                        <p>- Nous avons un abonnement tout accès à 50 euros par mois.</p>
                        <p>- Les cours de yoga sont inclus ?</p>
                        <p>- Oui, tous les cours collectifs sont inclus.</p>
                        <p>- C'est parfait. Il y a un engagement minimum ?</p>
                        <p>- Oui, c'est un engagement de 12 mois.</p>
                        <p>- D'accord. Je peux commencer quand ?</p>
                        <p>- Vous pouvez commencer dès aujourd'hui si vous voulez.</p>`,
            questions: [
                {
                    id: 'a2-sport-q1',
                    type: 'checkbox',
                    question: 'Quelles activités intéressent la personne ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Musculation' },
                        { id: 'b', text: 'Yoga' },
                        { id: 'c', text: 'Natation' },
                        { id: 'd', text: 'Tennis' }
                    ],
                    correctAnswer: ['a', 'b'],
                    explanation: 'La personne souhaite faire de la musculation et du yoga.'
                },
                {
                    id: 'a2-sport-q2',
                    type: 'radio',
                    question: 'Combien coûte l\'abonnement mensuel ?',
                    options: [
                        { id: 'a', text: '40 euros' },
                        { id: 'b', text: '50 euros' },
                        { id: 'c', text: '60 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'abonnement tout accès coûte 50 euros par mois.'
                },
                {
                    id: 'a2-sport-q3',
                    type: 'radio',
                    question: 'Quelle est la durée d\'engagement minimum ?',
                    options: [
                        { id: 'a', text: '6 mois' },
                        { id: 'b', text: '12 mois' },
                        { id: 'c', text: '24 mois' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'engagement minimum est de 12 mois.'
                }
            ]
        },
        {
            id: 'a2-banque',
            title: 'À la banque',
            audioFile: `${audioBasePath}a2-banque.mp3`,
            transcript: `<p>- Bonjour, je voudrais ouvrir un compte bancaire.</p>
                        <p>- Bonjour, avez-vous déjà pris rendez-vous ?</p>
                        <p>- Non, je ne savais pas qu'il fallait un rendez-vous.</p>
                        <p>- Ce n'est pas grave. Je peux vous en donner un pour demain à 10h.</p>
                        <p>- C'est parfait. Quels documents dois-je apporter ?</p>
                        <p>- Une pièce d'identité, un justificatif de domicile et votre dernier bulletin de salaire.</p>
                        <p>- D'accord. Et combien coûte l'ouverture d'un compte ?</p>
                        <p>- L'ouverture est gratuite. La carte bancaire coûte 30 euros par an.</p>
                        <p>- Très bien, merci. À demain alors.</p>
                        <p>- À demain, bonne journée.</p>`,
            questions: [
                {
                    id: 'a2-banque-q1',
                    type: 'radio',
                    question: 'À quelle heure est le rendez-vous proposé ?',
                    options: [
                        { id: 'a', text: '9h' },
                        { id: 'b', text: '10h' },
                        { id: 'c', text: '11h' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le rendez-vous est proposé pour demain à 10h.'
                },
                {
                    id: 'a2-banque-q2',
                    type: 'checkbox',
                    question: 'Quels documents sont demandés ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Pièce d\'identité' },
                        { id: 'b', text: 'Justificatif de domicile' },
                        { id: 'c', text: 'Bulletin de salaire' },
                        { id: 'd', text: 'Relevé bancaire' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Les documents demandés sont une pièce d\'identité, un justificatif de domicile et le dernier bulletin de salaire.'
                },
                {
                    id: 'a2-banque-q3',
                    type: 'radio',
                    question: 'Combien coûte la carte bancaire par an ?',
                    options: [
                        { id: 'a', text: '20 euros' },
                        { id: 'b', text: '30 euros' },
                        { id: 'c', text: '40 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La carte bancaire coûte 30 euros par an.'
                }
            ]
        },
        {
            id: 'a2-transport',
            title: 'Les transports en commun',
            audioFile: `${audioBasePath}a2-transport.mp3`,
            transcript: `<p>- Bonjour, je voudrais acheter un pass transport pour une semaine.</p>
                        <p>- Bonjour, pour quelle zone ?</p>
                        <p>- Je vais rester dans le centre-ville, zone 1.</p>
                        <p>- D'accord. Le pass hebdomadaire zone 1 coûte 22 euros.</p>
                        <p>- Il donne accès au métro et au bus ?</p>
                        <p>- Oui, et aussi au tramway. C'est illimité pendant 7 jours.</p>
                        <p>- Parfait. Je peux payer par carte ?</p>
                        <p>- Oui, bien sûr. Vous avez une photo d'identité ?</p>
                        <p>- Oui, la voici.</p>
                        <p>- Merci. Je vais préparer votre pass.</p>`,
            questions: [
                {
                    id: 'a2-transport-q1',
                    type: 'radio',
                    question: 'Pour quelle durée est le pass ?',
                    options: [
                        { id: 'a', text: 'Un jour' },
                        { id: 'b', text: 'Une semaine' },
                        { id: 'c', text: 'Un mois' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne demande un pass transport pour une semaine.'
                },
                {
                    id: 'a2-transport-q2',
                    type: 'radio',
                    question: 'Combien coûte le pass ?',
                    options: [
                        { id: 'a', text: '12 euros' },
                        { id: 'b', text: '22 euros' },
                        { id: 'c', text: '32 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le pass hebdomadaire zone 1 coûte 22 euros.'
                },
                {
                    id: 'a2-transport-q3',
                    type: 'checkbox',
                    question: 'À quels transports donne-t-il accès ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Métro' },
                        { id: 'b', text: 'Bus' },
                        { id: 'c', text: 'Tramway' },
                        { id: 'd', text: 'Train' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Le pass donne accès au métro, au bus et au tramway.'
                }
            ]
        },
        {
            id: 'a2-restaurant',
            title: 'Au restaurant',
            audioFile: `${audioBasePath}a2-restaurant.mp3`,
            transcript: `<p>- Bonsoir, vous avez réservé ?</p>
                        <p>- Oui, une table pour deux personnes au nom de Martin.</p>
                        <p>- Ah oui, pour 20h. Suivez-moi, s'il vous plaît.</p>
                        <p>- Voici la carte. Le plat du jour est un filet de saumon aux légumes.</p>
                        <p>- Qu'est-ce que vous nous conseillez comme entrée ?</p>
                        <p>- La soupe à l'oignon est excellente, et la salade de chèvre chaud aussi.</p>
                        <p>- Très bien, nous allons réfléchir un peu.</p>
                        <p>- Je vous apporte de l'eau en attendant ?</p>
                        <p>- Oui, une carafe d'eau, s'il vous plaît.</p>
                        <p>- Je vous apporte ça tout de suite.</p>`,
            questions: [
                {
                    id: 'a2-restaurant-q1',
                    type: 'radio',
                    question: 'Pour quelle heure est la réservation ?',
                    options: [
                        { id: 'a', text: '19h30' },
                        { id: 'b', text: '20h' },
                        { id: 'c', text: '20h30' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La réservation est pour 20h.'
                },
                {
                    id: 'a2-restaurant-q2',
                    type: 'radio',
                    question: 'Quel est le plat du jour ?',
                    options: [
                        { id: 'a', text: 'Un steak-frites' },
                        { id: 'b', text: 'Un filet de saumon aux légumes' },
                        { id: 'c', text: 'Un poulet rôti' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le plat du jour est un filet de saumon aux légumes.'
                },
                {
                    id: 'a2-restaurant-q3',
                    type: 'checkbox',
                    question: 'Quelles entrées sont conseillées ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'La soupe à l\'oignon' },
                        { id: 'b', text: 'La salade de chèvre chaud' },
                        { id: 'c', text: 'Le pâté' },
                        { id: 'd', text: 'Les escargots' }
                    ],
                    correctAnswer: ['a', 'b'],
                    explanation: 'Le serveur conseille la soupe à l\'oignon et la salade de chèvre chaud.'
                }
            ]
        },
        {
            id: 'a2-hotel',
            title: 'À l\'hôtel',
            audioFile: `${audioBasePath}a2-hotel.mp3`,
            transcript: `<p>- Bonjour, j'ai une réservation au nom de Dubois.</p>
                        <p>- Bonjour, oui, une chambre double pour trois nuits.</p>
                        <p>- C'est bien ça. Je peux avoir le code du Wi-Fi ?</p>
                        <p>- Bien sûr. Le code est HOTEL2024.</p>
                        <p>- Merci. Le petit-déjeuner est inclus ?</p>
                        <p>- Oui, il est servi de 7h à 10h dans la salle du restaurant.</p>
                        <p>- Et à quelle heure est le check-out ?</p>
                        <p>- Le check-out est à 11h. Voici votre clé, chambre 304.</p>
                        <p>- Merci. Il y a un ascenseur ?</p>
                        <p>- Oui, l'ascenseur est à droite dans le hall.</p>`,
            questions: [
                {
                    id: 'a2-hotel-q1',
                    type: 'radio',
                    question: 'Pour combien de nuits est la réservation ?',
                    options: [
                        { id: 'a', text: 'Deux nuits' },
                        { id: 'b', text: 'Trois nuits' },
                        { id: 'c', text: 'Quatre nuits' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La réservation est pour trois nuits.'
                },
                {
                    id: 'a2-hotel-q2',
                    type: 'radio',
                    question: 'Quel est le code Wi-Fi ?',
                    options: [
                        { id: 'a', text: 'HOTEL2023' },
                        { id: 'b', text: 'HOTEL2024' },
                        { id: 'c', text: 'HOTEL2025' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le code Wi-Fi est HOTEL2024.'
                },
                {
                    id: 'a2-hotel-q3',
                    type: 'radio',
                    question: 'À quelle heure est le check-out ?',
                    options: [
                        { id: 'a', text: '10h' },
                        { id: 'b', text: '11h' },
                        { id: 'c', text: '12h' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le check-out est à 11h.'
                }
            ]
        },
        {
            id: 'a2-boulangerie',
            title: 'À la boulangerie',
            audioFile: `${audioBasePath}a2-boulangerie.mp3`,
            transcript: `<p>- Bonjour, je voudrais une baguette tradition, s'il vous plaît.</p>
                        <p>- Bonjour. Oui, bien sûr. Ce sera tout ?</p>
                        <p>- Non, je voudrais aussi quatre croissants et un pain au chocolat.</p>
                        <p>- D'accord. Les croissants sont tout chauds, ils sortent du four.</p>
                        <p>- Parfait ! Je prendrai aussi une tarte aux pommes.</p>
                        <p>- La petite ou la grande ?</p>
                        <p>- La petite, c'est pour ce soir.</p>
                        <p>- Très bien. Ça fait 12 euros 50 en tout.</p>
                        <p>- Je peux payer par carte ?</p>
                        <p>- Oui, bien sûr.</p>`,
            questions: [
                {
                    id: 'a2-boulangerie-q1',
                    type: 'checkbox',
                    question: 'Qu\'est-ce que la personne achète ?',
                    options: [
                        { id: 'a', text: 'Une baguette tradition' },
                        { id: 'b', text: 'Quatre croissants' },
                        { id: 'c', text: 'Un pain au chocolat' },
                        { id: 'd', text: 'Une grande tarte aux pommes' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'La personne achète une baguette tradition, quatre croissants, un pain au chocolat, et une petite (pas grande) tarte aux pommes.'
                },
                {
                    id: 'a2-boulangerie-q2',
                    type: 'radio',
                    question: 'Quel est le prix total ?',
                    options: [
                        { id: 'a', text: '11 euros 50' },
                        { id: 'b', text: '12 euros 50' },
                        { id: 'c', text: '13 euros 50' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le total est de 12 euros 50.'
                },
                {
                    id: 'a2-boulangerie-q3',
                    type: 'radio',
                    question: 'Quelle information donne la vendeuse sur les croissants ?',
                    options: [
                        { id: 'a', text: 'Ils sont en promotion' },
                        { id: 'b', text: 'Ils sortent du four' },
                        { id: 'c', text: 'Ce sont les derniers' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La vendeuse dit que les croissants sont tout chauds car ils sortent du four.'
                }
            ]
        }
    ],
    'B2': [
        {
            id: 'b2-ia',
            title: 'L\'intelligence artificielle',
            audioFile: `${audioBasePath}b2-ia.mp3`,
            transcript: `<p>Aujourd'hui, l'intelligence artificielle est au cœur de nombreuses innovations technologiques qui transforment notre quotidien. Depuis les assistants vocaux jusqu'aux systèmes de recommandation en ligne, en passant par les véhicules autonomes, l'IA est omniprésente.</p>
                        <p>Le développement rapide de cette technologie soulève de nombreuses questions éthiques et sociales. Comment garantir que ces systèmes respectent notre vie privée ? Quelles seront les conséquences sur l'emploi et les compétences requises dans le monde du travail de demain ?</p>
                        <p>Certains experts estiment que l'IA pourrait créer autant d'emplois qu'elle en supprime, mais nécessitera une adaptation constante des travailleurs. D'autres craignent un creusement des inégalités entre ceux qui maîtrisent ces technologies et les autres.</p>
                        <p>Les gouvernements commencent à mettre en place des cadres réglementaires pour encadrer le développement et l'utilisation de l'IA. L'objectif est de maximiser les bénéfices de ces technologies tout en minimisant leurs risques potentiels.</p>
                        <p>Malgré ces défis, l'IA offre des opportunités considérables dans des domaines comme la santé, où elle permet déjà d'améliorer le diagnostic de certaines maladies, ou l'environnement, où elle contribue à optimiser notre consommation d'énergie.</p>`,
            questions: [
                {
                    id: 'b2-ia-q1',
                    type: 'radio',
                    question: 'Selon l\'enregistrement, quel est l\'un des défis éthiques posés par l\'IA ?',
                    options: [
                        { id: 'a', text: 'Le coût élevé des systèmes d\'IA' },
                        { id: 'b', text: 'Le respect de la vie privée' },
                        { id: 'c', text: 'La consommation d\'énergie des centres de données' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'enregistrement mentionne explicitement la question du respect de la vie privée comme l\'un des défis éthiques posés par l\'IA.'
                },
                {
                    id: 'b2-ia-q2',
                    type: 'checkbox',
                    question: 'Quels domaines sont mentionnés comme pouvant bénéficier de l\'IA ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'La santé' },
                        { id: 'b', text: 'L\'environnement' },
                        { id: 'c', text: 'L\'éducation' },
                        { id: 'd', text: 'Les transports' }
                    ],
                    correctAnswer: ['a', 'b'],
                    explanation: 'L\'enregistrement mentionne explicitement la santé et l\'environnement comme domaines bénéficiant de l\'IA.'
                },
                {
                    id: 'b2-ia-q3',
                    type: 'radio',
                    question: 'Quelle est l\'une des préoccupations concernant l\'impact de l\'IA sur le marché du travail ?',
                    options: [
                        { id: 'a', text: 'Un possible creusement des inégalités' },
                        { id: 'b', text: 'Une diminution des salaires dans tous les secteurs' },
                        { id: 'c', text: 'L\'impossibilité de former les travailleurs aux nouvelles technologies' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'L\'enregistrement évoque le risque d\'un creusement des inégalités entre ceux qui maîtrisent ces technologies et les autres.'
                }
            ]
        },
        {
            id: 'b2-teletravail',
            title: 'Le télétravail',
            audioFile: `${audioBasePath}b2-teletravail.mp3`,
            transcript: `<p>La crise sanitaire a considérablement accéléré l'adoption du télétravail dans de nombreux secteurs d'activité. Ce qui était auparavant une exception est devenu pour beaucoup une nouvelle normalité.</p>
                        <p>Les avantages du télétravail sont nombreux : réduction du temps de transport, meilleure conciliation entre vie professionnelle et personnelle, et dans certains cas, augmentation de la productivité. Selon une récente étude, 65% des télétravailleurs se disent plus productifs lorsqu'ils travaillent de chez eux.</p>
                        <p>Cependant, le télétravail présente aussi des défis majeurs. L'isolement social peut affecter le bien-être psychologique des employés. La frontière entre vie professionnelle et personnelle devient plus floue, conduisant parfois à des journées de travail plus longues. De plus, tous les emplois ne peuvent pas être exercés à distance, ce qui crée des inégalités entre les travailleurs.</p>
                        <p>Les entreprises s'adaptent progressivement à cette nouvelle réalité. Beaucoup adoptent un modèle hybride, combinant travail à distance et présence au bureau. Elles investissent dans des outils de collaboration en ligne et repensent leurs espaces de travail pour favoriser les interactions lorsque les employés sont présents.</p>
                        <p>À l'avenir, le défi sera de trouver le bon équilibre entre flexibilité et cohésion d'équipe, entre autonomie et sentiment d'appartenance à l'entreprise. Le télétravail ne disparaîtra probablement pas, mais sa forme continuera d'évoluer.</p>`,
            questions: [
                {
                    id: 'b2-teletravail-q1',
                    type: 'radio',
                    question: 'Selon l\'enregistrement, quel pourcentage de télétravailleurs se dit plus productif en télétravail ?',
                    options: [
                        { id: 'a', text: '45%' },
                        { id: 'b', text: '65%' },
                        { id: 'c', text: '85%' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'enregistrement indique que 65% des télétravailleurs se disent plus productifs lorsqu\'ils travaillent de chez eux.'
                },
                {
                    id: 'b2-teletravail-q2',
                    type: 'checkbox',
                    question: 'Quels défis du télétravail sont mentionnés dans l\'enregistrement ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'L\'isolement social' },
                        { id: 'b', text: 'La frontière floue entre vie professionnelle et personnelle' },
                        { id: 'c', text: 'Les problèmes techniques récurrents' },
                        { id: 'd', text: 'Les inégalités entre travailleurs' }
                    ],
                    correctAnswer: ['a', 'b', 'd'],
                    explanation: 'L\'enregistrement mentionne l\'isolement social, la frontière floue entre vie professionnelle et personnelle, et les inégalités entre travailleurs comme défis du télétravail.'
                },
                {
                    id: 'b2-teletravail-q3',
                    type: 'radio',
                    question: 'Quel modèle de travail beaucoup d\'entreprises adoptent-elles selon l\'enregistrement ?',
                    options: [
                        { id: 'a', text: 'Le télétravail à temps plein' },
                        { id: 'b', text: 'Le retour complet au bureau' },
                        { id: 'c', text: 'Un modèle hybride' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'L\'enregistrement indique que beaucoup d\'entreprises adoptent un modèle hybride, combinant travail à distance et présence au bureau.'
                }
            ]
        },
        {
            id: 'b2-climat',
            title: 'Le changement climatique',
            audioFile: `${audioBasePath}b2-climat.mp3`,
            transcript: `<p>Le changement climatique représente l'un des plus grands défis de notre époque. Selon le dernier rapport du GIEC, les activités humaines ont déjà provoqué un réchauffement planétaire d'environ 1,1°C depuis l'ère préindustrielle.</p>
                        <p>Les conséquences sont déjà visibles : multiplication des événements météorologiques extrêmes, élévation du niveau des mers, perturbation des écosystèmes... Si nous ne réduisons pas drastiquement nos émissions de gaz à effet de serre, ces phénomènes s'amplifieront dans les décennies à venir.</p>
                        <p>Face à ce constat, la transition écologique devient une nécessité. Elle implique une transformation profonde de nos modes de production et de consommation : développement des énergies renouvelables, rénovation énergétique des bâtiments, mobilité durable, agriculture responsable...</p>
                        <p>Cette transition représente certes un défi, mais aussi une opportunité : création d'emplois dans les secteurs verts, amélioration de la qualité de l'air et de la santé publique, développement de nouvelles technologies...</p>
                        <p>L'action individuelle est importante, mais elle doit s'accompagner de politiques publiques ambitieuses et d'engagements forts des entreprises. L'Accord de Paris, signé en 2015, fixe l'objectif de limiter le réchauffement climatique bien en-dessous de 2°C, mais les engagements actuels des pays ne sont pas suffisants pour l'atteindre.</p>`,
            questions: [
                {
                    id: 'b2-climat-q1',
                    type: 'radio',
                    question: 'Selon l\'enregistrement, de combien de degrés la planète s\'est-elle réchauffée depuis l\'ère préindustrielle ?',
                    options: [
                        { id: 'a', text: '0,5°C' },
                        { id: 'b', text: '1,1°C' },
                        { id: 'c', text: '2°C' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'enregistrement indique que les activités humaines ont déjà provoqué un réchauffement planétaire d\'environ 1,1°C depuis l\'ère préindustrielle.'
                },
                {
                    id: 'b2-climat-q2',
                    type: 'checkbox',
                    question: 'Quelles conséquences du changement climatique sont mentionnées dans l\'enregistrement ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'La multiplication des événements météorologiques extrêmes' },
                        { id: 'b', text: 'L\'élévation du niveau des mers' },
                        { id: 'c', text: 'La perturbation des écosystèmes' },
                        { id: 'd', text: 'L\'augmentation des maladies infectieuses' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'L\'enregistrement mentionne la multiplication des événements météorologiques extrêmes, l\'élévation du niveau des mers et la perturbation des écosystèmes comme conséquences du changement climatique.'
                },
                {
                    id: 'b2-climat-q3',
                    type: 'radio',
                    question: 'Quel objectif l\'Accord de Paris fixe-t-il concernant le réchauffement climatique ?',
                    options: [
                        { id: 'a', text: 'Le limiter à 3°C' },
                        { id: 'b', text: 'Le limiter bien en-dessous de 2°C' },
                        { id: 'c', text: 'Le stopper complètement' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'enregistrement indique que l\'Accord de Paris fixe l\'objectif de limiter le réchauffement climatique bien en-dessous de 2°C.'
                }
            ]
        },
        {
            id: 'b2-environnement',
            title: 'Protection de l\'environnement',
            audioFile: `${audioBasePath}b2-environnement.mp3`,
            transcript: `<p>Aujourd'hui, la protection de l'environnement est devenue une préoccupation majeure à l'échelle mondiale. Face à l'urgence climatique et à l'épuisement des ressources naturelles, de nombreuses initiatives se développent pour tenter de préserver notre planète.</p>
                        <p>Au niveau individuel, de plus en plus de citoyens adoptent des comportements plus responsables. La réduction des déchets, notamment plastiques, est devenue une priorité pour beaucoup. Le mouvement "zéro déchet" gagne en popularité, avec des consommateurs qui privilégient les produits en vrac, réutilisables ou recyclables. Les transports doux comme le vélo ou les transports en commun sont également de plus en plus plébiscités pour limiter l'empreinte carbone.</p>
                        <p>Du côté des entreprises, on observe une prise de conscience progressive. Certaines adoptent des démarches de responsabilité sociale et environnementale (RSE) ambitieuses, repensant leurs processus de production et leurs chaînes d'approvisionnement. L'économie circulaire, qui vise à produire des biens et services tout en limitant la consommation et le gaspillage des ressources, inspire de nouveaux modèles économiques.</p>
                        <p>Les pouvoirs publics jouent également un rôle clé en mettant en place des réglementations plus strictes et des incitations fiscales en faveur de la transition écologique. L'accord de Paris sur le climat, signé en 2015, témoigne d'une volonté de coopération internationale, même si sa mise en œuvre reste inégale selon les pays.</p>
                        <p>Dans le domaine de l'énergie, la transition vers les énergies renouvelables s'accélère. L'énergie solaire et éolienne deviennent de plus en plus compétitives face aux énergies fossiles. Des innovations technologiques prometteuses émergent également, comme le stockage d'énergie par batteries ou l'hydrogène vert.</p>
                        <p>Cependant, malgré ces évolutions positives, les défis restent immenses. Le temps presse et les actions actuelles ne sont pas encore à la hauteur des enjeux. Pour réussir cette transition écologique, une mobilisation de tous les acteurs - citoyens, entreprises, États - est plus que jamais nécessaire.</p>`,
            questions: [
                {
                    id: 'b2-environnement-q1',
                    type: 'checkbox',
                    question: 'Selon l\'enregistrement, quelles actions individuelles contribuent à la protection de l\'environnement ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'La réduction des déchets plastiques' },
                        { id: 'b', text: 'L\'utilisation des transports en commun' },
                        { id: 'c', text: 'L\'achat de produits en vrac' },
                        { id: 'd', text: 'La consommation de produits locaux uniquement' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'L\'enregistrement mentionne la réduction des déchets plastiques, l\'utilisation des transports en commun et l\'achat de produits en vrac comme actions individuelles contribuant à la protection de l\'environnement. La consommation de produits locaux n\'est pas explicitement mentionnée.'
                },
                {
                    id: 'b2-environnement-q2',
                    type: 'radio',
                    question: 'Quel accord international sur le climat est mentionné dans l\'enregistrement ?',
                    options: [
                        { id: 'a', text: 'Le protocole de Kyoto' },
                        { id: 'b', text: 'L\'accord de Paris' },
                        { id: 'c', text: 'La convention de Rio' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'enregistrement mentionne l\'accord de Paris sur le climat, signé en 2015.'
                },
                {
                    id: 'b2-environnement-q3',
                    type: 'radio',
                    question: 'Selon l\'enregistrement, quel concept inspire de nouveaux modèles économiques ?',
                    options: [
                        { id: 'a', text: 'L\'économie circulaire' },
                        { id: 'b', text: 'L\'économie de marché' },
                        { id: 'c', text: 'L\'économie collaborative' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'L\'enregistrement indique que l\'économie circulaire inspire de nouveaux modèles économiques.'
                }
            ]
        },
        {
            id: 'b2-art',
            title: 'L\'art contemporain',
            audioFile: `${audioBasePath}b2-art.mp3`,
            transcript: `<p>L'art contemporain suscite souvent des réactions passionnées, entre fascination et incompréhension. Ce mouvement artistique, qui englobe les œuvres créées depuis les années 1960 jusqu'à nos jours, se caractérise par une grande diversité de pratiques, de matériaux et de concepts.</p>
                        <p>Contrairement à l'art classique, l'art contemporain ne cherche pas nécessairement à représenter la beauté ou à démontrer la virtuosité technique de l'artiste. Il privilégie souvent le concept, l'idée qui sous-tend l'œuvre. Cette approche conceptuelle a été popularisée par des artistes comme Marcel Duchamp, qui avec ses "ready-made", objets manufacturés élevés au rang d'œuvre d'art, a révolutionné notre conception même de ce qui constitue l'art.</p>
                        <p>L'art contemporain se distingue également par son caractère transdisciplinaire. Les frontières entre peinture, sculpture, photographie, vidéo, performance ou installation sont devenues poreuses. Des artistes comme Olafur Eliasson créent des installations immersives qui combinent architecture, science et art visuel pour offrir au spectateur une expérience sensorielle complète.</p>
                        <p>Le rapport au public est également repensé. L'art contemporain invite souvent à une participation active du spectateur, qui n'est plus simple observateur mais devient partie intégrante de l'œuvre. Cette interaction est au cœur de nombreuses installations et performances contemporaines.</p>
                        <p>Sur le plan thématique, l'art contemporain aborde fréquemment des questions sociales, politiques ou environnementales. Des artistes comme Ai Weiwei ou Banksy utilisent leur art comme outil de critique sociale et politique, interrogeant le monde qui nous entoure et ses contradictions.</p>
                        <p>Le marché de l'art contemporain connaît une croissance spectaculaire, avec des prix atteignant parfois des sommets vertigineux. Cette valorisation économique pose la question du rôle des institutions muséales, des galeries et des collectionneurs dans la légitimation et la diffusion de l'art contemporain.</p>
                        <p>Malgré les critiques qui lui sont parfois adressées - élitisme, hermétisme, spéculation - l'art contemporain reste un laboratoire d'idées et d'expérimentations essentiel pour comprendre notre époque et ses enjeux.</p>`,
            questions: [
                {
                    id: 'b2-art-q1',
                    type: 'radio',
                    question: 'Selon l\'enregistrement, quelle est une caractéristique principale de l\'art contemporain par rapport à l\'art classique ?',
                    options: [
                        { id: 'a', text: 'Il privilégie davantage le concept que la beauté' },
                        { id: 'b', text: 'Il est exclusivement réservé aux musées' },
                        { id: 'c', text: 'Il n\'utilise que des matériaux traditionnels' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'L\'enregistrement indique que contrairement à l\'art classique, l\'art contemporain ne cherche pas nécessairement à représenter la beauté mais privilégie souvent le concept, l\'idée qui sous-tend l\'œuvre.'
                },
                {
                    id: 'b2-art-q2',
                    type: 'radio',
                    question: 'Quel artiste est mentionné comme ayant révolutionné la conception de l\'art avec ses "ready-made" ?',
                    options: [
                        { id: 'a', text: 'Banksy' },
                        { id: 'b', text: 'Marcel Duchamp' },
                        { id: 'c', text: 'Olafur Eliasson' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'enregistrement mentionne Marcel Duchamp comme ayant révolutionné la conception de l\'art avec ses "ready-made", objets manufacturés élevés au rang d\'œuvre d\'art.'
                },
                {
                    id: 'b2-art-q3',
                    type: 'checkbox',
                    question: 'Quels thèmes sont fréquemment abordés dans l\'art contemporain selon l\'enregistrement ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Des questions sociales' },
                        { id: 'b', text: 'Des questions politiques' },
                        { id: 'c', text: 'Des questions environnementales' },
                        { id: 'd', text: 'Des questions religieuses' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'L\'enregistrement mentionne que l\'art contemporain aborde fréquemment des questions sociales, politiques ou environnementales.'
                },
                {
                    id: 'b2-art-q4',
                    type: 'radio',
                    question: 'Comment l\'art contemporain redéfinit-il le rapport au public selon l\'enregistrement ?',
                    options: [
                        { id: 'a', text: 'En maintenant une distance respectueuse' },
                        { id: 'b', text: 'En invitant à une participation active du spectateur' },
                        { id: 'c', text: 'En exigeant des connaissances préalables en histoire de l\'art' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'enregistrement indique que l\'art contemporain invite souvent à une participation active du spectateur, qui n\'est plus simple observateur mais devient partie intégrante de l\'œuvre.'
                }
            ]
        },
        {
            id: 'b2-litterature',
            title: 'Les tendances de la littérature contemporaine',
            audioFile: `${audioBasePath}b2-litterature.mp3`,
            transcript: `<p>La littérature contemporaine, en ce début de XXIe siècle, se caractérise par une grande diversité de styles, de voix et de thématiques. Les frontières entre les genres littéraires deviennent de plus en plus poreuses, avec des œuvres qui mêlent fiction et autobiographie, essai et roman, poésie et prose.</p>
                        <p>Une tendance forte est le retour du réel dans la fiction. De nombreux écrivains explorent les questions sociales et politiques contemporaines. Le roman d'anticipation connaît un nouvel essor, explorant notamment les questions écologiques ou les dérives technologiques potentielles. Ces dystopies modernes nous interrogent sur l'avenir de nos sociétés.</p>
                        <p>L'autofiction continue d'occuper une place importante dans le paysage littéraire. Dans ce genre hybride, l'auteur se met en scène dans un récit où se mêlent éléments autobiographiques et fictionnels. Des écrivains comme Annie Ernaux ont poussé cette démarche plus loin en développant une "autobiographie impersonnelle", où l'expérience individuelle devient le prisme d'une exploration sociologique.</p>
                        <p>On observe également un intérêt renouvelé pour les récits historiques, qui permettent d'éclairer le présent à la lumière du passé. Ces romans abordent souvent les périodes troubles de l'histoire, les mémoires oubliées ou occultées, et contribuent à un travail de mémoire collective.</p>
                        <p>Sur le plan formel, la littérature contemporaine se caractérise par une grande liberté. Certains auteurs privilégient une écriture fragmentaire, faite de collages, de ruptures narratives, reflétant ainsi notre époque marquée par la fragmentation de l'information et des expériences. D'autres, au contraire, renouent avec les grands récits et les sagas familiales au long cours.</p>
                        <p>La mondialisation de la littérature est un autre phénomène majeur. Les traductions se multiplient, permettant la découverte de voix venues d'horizons culturels variés. Des prix littéraires internationaux comme le Man Booker International Prize contribuent à cette circulation globale des œuvres.</p>
                        <p>Enfin, le numérique transforme profondément le paysage littéraire, tant dans les modes de diffusion que dans les formes d'écriture. La littérature numérique explore de nouvelles possibilités narratives intégrant hyperlinks, multimédia, ou participation des lecteurs.</p>
                        <p>Malgré les prédictions pessimistes sur l'avenir du livre à l'ère numérique, la littérature contemporaine démontre sa vitalité et sa capacité à se réinventer pour continuer à interroger le monde et notre condition humaine.</p>`,
            questions: [
                {
                    id: 'b2-litterature-q1',
                    type: 'radio',
                    question: 'Selon l\'enregistrement, qu\'est-ce qui caractérise la littérature contemporaine au début du XXIe siècle ?',
                    options: [
                        { id: 'a', text: 'Une grande uniformité de style' },
                        { id: 'b', text: 'Un respect strict des genres littéraires traditionnels' },
                        { id: 'c', text: 'Une grande diversité de styles, de voix et de thématiques' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'L\'enregistrement indique que la littérature contemporaine se caractérise par une grande diversité de styles, de voix et de thématiques.'
                },
                {
                    id: 'b2-litterature-q2',
                    type: 'checkbox',
                    question: 'Quels genres ou tendances littéraires sont mentionnés dans l\'enregistrement ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'L\'autofiction' },
                        { id: 'b', text: 'Le roman d\'anticipation' },
                        { id: 'c', text: 'Les récits historiques' },
                        { id: 'd', text: 'La poésie lyrique' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'L\'enregistrement mentionne l\'autofiction, le roman d\'anticipation et les récits historiques comme genres ou tendances de la littérature contemporaine. La poésie lyrique n\'est pas spécifiquement mentionnée.'
                },
                {
                    id: 'b2-litterature-q3',
                    type: 'radio',
                    question: 'Quel phénomène lié à la mondialisation est évoqué dans l\'enregistrement ?',
                    options: [
                        { id: 'a', text: 'La standardisation des styles d\'écriture' },
                        { id: 'b', text: 'La multiplication des traductions' },
                        { id: 'c', text: 'La disparition des littératures nationales' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'enregistrement évoque la multiplication des traductions comme phénomène lié à la mondialisation de la littérature.'
                },
                {
                    id: 'b2-litterature-q4',
                    type: 'radio',
                    question: 'Selon l\'enregistrement, comment le numérique transforme-t-il la littérature ?',
                    options: [
                        { id: 'a', text: 'Il cause le déclin de la littérature' },
                        { id: 'b', text: 'Il transforme les modes de diffusion et les formes d\'écriture' },
                        { id: 'c', text: 'Il n\'a aucun impact significatif' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'enregistrement indique que le numérique transforme profondément le paysage littéraire, tant dans les modes de diffusion que dans les formes d\'écriture.'
                }
            ]
        },
        {
            id: 'b2-entretien-professionnel',
            title: 'L\'entretien professionnel',
            audioFile: `${audioBasePath}b2-entretien-professionnel.mp3`,
            transcript: `<p>L'entretien professionnel est une étape cruciale dans tout processus de recrutement. Il permet aux recruteurs d'évaluer les compétences et la personnalité des candidats, et à ces derniers de mieux connaître l'entreprise et le poste proposé. Voici quelques conseils pour réussir cette épreuve souvent redoutée.</p>
                        <p>La préparation est sans doute la clé d'un entretien réussi. Avant tout, renseignez-vous sur l'entreprise : son histoire, ses valeurs, ses produits ou services, son positionnement sur le marché, ses concurrents... Ces informations montreront votre intérêt et votre motivation. Étudiez également en détail l'offre d'emploi pour bien comprendre les attentes du recruteur.</p>
                        <p>Préparez-vous aussi à présenter clairement votre parcours. L'exercice classique du "parlez-moi de vous" nécessite de savoir mettre en avant vos expériences et compétences les plus pertinentes pour le poste visé. Ne récitez pas simplement votre CV, mais construisez un récit cohérent qui montre comment votre parcours vous a préparé pour ce poste.</p>
                        <p>Anticipez également les questions classiques : "Pourquoi voulez-vous travailler pour notre entreprise ?", "Où vous voyez-vous dans cinq ans ?", "Quelles sont vos forces et faiblesses ?", etc. Pour cette dernière question, transformez vos faiblesses en axes de progression et montrez votre capacité à vous remettre en question.</p>
                        <p>Le jour J, soignez votre apparence. Votre tenue doit être adaptée à la culture de l'entreprise et au poste visé. En cas de doute, mieux vaut être un peu trop formel que pas assez. Arrivez environ 10 minutes avant l'heure du rendez-vous pour montrer votre ponctualité sans mettre le recruteur dans l'embarras.</p>
                        <p>Pendant l'entretien, adoptez une attitude positive et ouverte. La communication non verbale est essentielle : maintenez un contact visuel approprié, adoptez une posture droite mais détendue, et souriez naturellement. Écoutez attentivement les questions et prenez le temps de réfléchir avant de répondre. N'hésitez pas à demander des précisions si une question vous semble ambiguë.</p>
                        <p>À la fin de l'entretien, n'oubliez pas de poser vos propres questions sur le poste, l'équipe ou l'entreprise. Cela démontrera votre intérêt et votre capacité d'initiative. Évitez toutefois d'aborder trop tôt les questions de salaire ou d'avantages, sauf si le recruteur les mentionne en premier.</p>
                        <p>Après l'entretien, un email de remerciement peut être apprécié. Il vous permet de réaffirmer votre intérêt pour le poste et de mentionner éventuellement un point que vous auriez oublié pendant l'entretien.</p>
                        <p>Enfin, rappelez-vous que l'entretien est un échange : il s'agit autant pour vous d'évaluer si l'entreprise et le poste vous conviennent que l'inverse. Restez authentique tout en vous montrant sous votre meilleur jour.</p>`,
            questions: [
                {
                    id: 'b2-entretien-professionnel-q1',
                    type: 'radio',
                    question: 'Selon l\'enregistrement, quelle est la clé d\'un entretien réussi ?',
                    options: [
                        { id: 'a', text: 'L\'expérience professionnelle' },
                        { id: 'b', text: 'La préparation' },
                        { id: 'c', text: 'La tenue vestimentaire' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'enregistrement indique que "la préparation est sans doute la clé d\'un entretien réussi".'
                },
                {
                    id: 'b2-entretien-professionnel-q2',
                    type: 'checkbox',
                    question: 'Selon l\'enregistrement, sur quoi faut-il se renseigner avant un entretien ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'L\'histoire de l\'entreprise' },
                        { id: 'b', text: 'Les valeurs de l\'entreprise' },
                        { id: 'c', text: 'Les concurrents de l\'entreprise' },
                        { id: 'd', text: 'La vie privée des recruteurs' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'L\'enregistrement conseille de se renseigner sur l\'histoire de l\'entreprise, ses valeurs et ses concurrents, entre autres.'
                },
                {
                    id: 'b2-entretien-professionnel-q3',
                    type: 'radio',
                    question: 'Quand est-il recommandé d\'arriver à un entretien selon l\'enregistrement ?',
                    options: [
                        { id: 'a', text: 'Exactement à l\'heure prévue' },
                        { id: 'b', text: 'Environ 10 minutes avant l\'heure du rendez-vous' },
                        { id: 'c', text: 'Au moins 30 minutes à l\'avance' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'enregistrement conseille d\'arriver environ 10 minutes avant l\'heure du rendez-vous pour montrer sa ponctualité sans mettre le recruteur dans l\'embarras.'
                },
                {
                    id: 'b2-entretien-professionnel-q4',
                    type: 'radio',
                    question: 'Selon l\'enregistrement, que faut-il faire à la fin de l\'entretien ?',
                    options: [
                        { id: 'a', text: 'Négocier immédiatement le salaire' },
                        { id: 'b', text: 'Demander quand la décision sera prise' },
                        { id: 'c', text: 'Poser ses propres questions sur le poste, l\'équipe ou l\'entreprise' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'L\'enregistrement conseille de poser ses propres questions sur le poste, l\'équipe ou l\'entreprise à la fin de l\'entretien pour démontrer son intérêt et sa capacité d\'initiative.'
                }
            ]
        }
    ],
    'B1': [
        {
            id: 'b1-reseaux-sociaux',
            title: 'L\'impact des réseaux sociaux',
            audioFile: `${audioBasePath}b1-reseaux-sociaux.mp3`,
            transcript: `<p>- Bonjour à tous. Aujourd'hui, nous allons parler de l'impact des réseaux sociaux sur notre société.</p>
                        <p>- Les réseaux sociaux ont complètement transformé notre façon de communiquer et d'interagir.</p>
                        <p>- D'un côté, ils nous permettent de rester en contact avec nos amis et notre famille, même à distance.</p>
                        <p>- Ils facilitent aussi le partage d'informations et la création de communautés en ligne.</p>
                        <p>- Cependant, il y a aussi des aspects négatifs, comme la dépendance aux écrans et les problèmes de confidentialité.</p>
                        <p>- De plus, la désinformation se propage rapidement sur les réseaux sociaux.</p>
                        <p>- Il est donc important d'utiliser ces plateformes de manière responsable et modérée.</p>`,
            questions: [
                {
                    id: 'b1-reseaux-sociaux-q1',
                    type: 'checkbox',
                    question: 'Quels sont les aspects positifs des réseaux sociaux mentionnés dans l\'audio ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Rester en contact avec les proches' },
                        { id: 'b', text: 'Partager des informations' },
                        { id: 'c', text: 'Créer des communautés en ligne' },
                        { id: 'd', text: 'Faire du commerce en ligne' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'L\'audio mentionne trois aspects positifs : maintenir le contact avec les proches, partager des informations et créer des communautés en ligne.'
                },
                {
                    id: 'b1-reseaux-sociaux-q2',
                    type: 'checkbox',
                    question: 'Quels sont les problèmes liés aux réseaux sociaux évoqués dans l\'audio ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'La dépendance aux écrans' },
                        { id: 'b', text: 'Les problèmes de confidentialité' },
                        { id: 'c', text: 'La désinformation' },
                        { id: 'd', text: 'Le coût des abonnements' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'L\'audio mentionne la dépendance aux écrans, les problèmes de confidentialité et la désinformation comme aspects négatifs.'
                }
            ]
        },
        {
            id: 'b1-processus',
            title: 'Processus d\'admission universitaire',
            audioFile: `${audioBasePath}b1-processus.mp3`,
            transcript: `<p>- Bonjour, je voudrais des informations sur le processus d'admission à l'université.</p>
                        <p>- Bien sûr. Je vais vous expliquer les différentes étapes.</p>
                        <p>- Tout d'abord, vous devez remplir le formulaire de candidature en ligne.</p>
                        <p>- Ensuite, vous devez fournir plusieurs documents : relevés de notes, lettres de recommandation, CV et lettre de motivation.</p>
                        <p>- Une fois votre dossier complet, il sera examiné par le comité d'admission.</p>
                        <p>- Si votre dossier est retenu, vous serez convoqué pour un entretien.</p>
                        <p>- Après l'entretien, vous recevrez une réponse définitive dans un délai de deux semaines.</p>
                        <p>- En cas d'admission, vous devrez confirmer votre inscription et payer les frais de scolarité.</p>`,
            questions: [
                {
                    id: 'b1-processus-q1',
                    type: 'checkbox',
                    question: 'Quels documents sont demandés pour la candidature ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Relevés de notes' },
                        { id: 'b', text: 'Lettres de recommandation' },
                        { id: 'c', text: 'CV' },
                        { id: 'd', text: 'Lettre de motivation' }
                    ],
                    correctAnswer: ['a', 'b', 'c', 'd'],
                    explanation: 'Tous ces documents sont requis selon l\'audio : relevés de notes, lettres de recommandation, CV et lettre de motivation.'
                },
                {
                    id: 'b1-processus-q2',
                    type: 'radio',
                    question: 'Quel est le délai de réponse après l\'entretien ?',
                    options: [
                        { id: 'a', text: 'Une semaine' },
                        { id: 'b', text: 'Deux semaines' },
                        { id: 'c', text: 'Un mois' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'audio indique que la réponse définitive sera donnée dans un délai de deux semaines après l\'entretien.'
                }
            ]
        },
        {
            id: 'b1-itineraire',
            title: 'Demander son itinéraire',
            audioFile: `${audioBasePath}b1-itineraire.mp3`,
            transcript: `<p>- Excusez-moi, je cherche la bibliothèque municipale.</p>
                        <p>- Je peux vous aider. C'est assez simple.</p>
                        <p>- Prenez la rue en face jusqu'au premier carrefour.</p>
                        <p>- Au carrefour, tournez à droite et continuez tout droit pendant environ 200 mètres.</p>
                        <p>- Vous verrez un grand parc sur votre gauche.</p>
                        <p>- Longez le parc jusqu'au bout, puis prenez la première rue à gauche.</p>
                        <p>- La bibliothèque se trouve juste après, c'est un grand bâtiment moderne.</p>
                        <p>- Vous ne pouvez pas la manquer, il y a une grande place devant.</p>`,
            questions: [
                {
                    id: 'b1-itineraire-q1',
                    type: 'radio',
                    question: 'Quelle est la première direction à prendre ?',
                    options: [
                        { id: 'a', text: 'Tourner à gauche' },
                        { id: 'b', text: 'Aller tout droit' },
                        { id: 'c', text: 'Tourner à droite' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'audio indique de prendre la rue en face (aller tout droit) jusqu\'au premier carrefour.'
                },
                {
                    id: 'b1-itineraire-q2',
                    type: 'checkbox',
                    question: 'Quels points de repère sont mentionnés dans les indications ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Un parc' },
                        { id: 'b', text: 'Une grande place' },
                        { id: 'c', text: 'Un carrefour' },
                        { id: 'd', text: 'Un feu rouge' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'L\'audio mentionne un carrefour, un grand parc et une grande place devant la bibliothèque.'
                }
            ]
        },
        {
            id: 'b1-visite-appartement',
            title: 'Visite d\'un appartement',
            audioFile: `${audioBasePath}b1-visite-appartement.mp3`,
            transcript: `<p>- Bonjour, je suis l'agent immobilier. Je vais vous faire visiter l'appartement.</p>
                        <p>- Comme vous pouvez le voir, nous sommes dans le salon qui est très lumineux grâce à ses grandes fenêtres.</p>
                        <p>- La cuisine est entièrement équipée avec des appareils modernes.</p>
                        <p>- Il y a deux chambres : une grande chambre parentale et une plus petite qui peut servir de bureau.</p>
                        <p>- La salle de bain a été récemment rénovée.</p>
                        <p>- L'appartement dispose aussi d'un balcon avec vue sur le parc.</p>
                        <p>- Le quartier est très calme et bien desservi par les transports en commun.</p>
                        <p>- Le loyer est de 1200 euros par mois, charges comprises.</p>`,
            questions: [
                {
                    id: 'b1-visite-appartement-q1',
                    type: 'checkbox',
                    question: 'Quelles pièces sont mentionnées dans la visite ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Salon' },
                        { id: 'b', text: 'Cuisine' },
                        { id: 'c', text: 'Chambres' },
                        { id: 'd', text: 'Salle de bain' }
                    ],
                    correctAnswer: ['a', 'b', 'c', 'd'],
                    explanation: 'L\'audio mentionne toutes ces pièces : le salon, la cuisine, deux chambres et la salle de bain.'
                },
                {
                    id: 'b1-visite-appartement-q2',
                    type: 'radio',
                    question: 'Quel est le loyer mensuel de l\'appartement ?',
                    options: [
                        { id: 'a', text: '1000 euros' },
                        { id: 'b', text: '1200 euros' },
                        { id: 'c', text: '1400 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'audio indique que le loyer est de 1200 euros par mois, charges comprises.'
                }
            ]
        },
        {
            id: 'b1-commande',
            title: 'Commander un repas par téléphone',
            audioFile: `${audioBasePath}b1-commande.mp3`,
            transcript: `<p>- Bonjour, restaurant Le Gourmet, que puis-je faire pour vous ?</p>
                        <p>- Bonjour, je voudrais commander un repas à emporter.</p>
                        <p>- Très bien, je vous écoute.</p>
                        <p>- Je voudrais une salade César, un steak-frites et une tarte aux pommes.</p>
                        <p>- Souhaitez-vous une cuisson particulière pour le steak ?</p>
                        <p>- Oui, à point s'il vous plaît.</p>
                        <p>- D'accord. Votre commande sera prête dans 30 minutes.</p>
                        <p>- Parfait. Quel est le montant total ?</p>
                        <p>- Ça fera 35 euros. Vous pourrez payer sur place.</p>
                        <p>- Très bien, merci. À tout à l'heure.</p>`,
            questions: [
                {
                    id: 'b1-commande-q1',
                    type: 'checkbox',
                    question: 'Quels plats sont commandés ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Salade César' },
                        { id: 'b', text: 'Steak-frites' },
                        { id: 'c', text: 'Tarte aux pommes' },
                        { id: 'd', text: 'Soupe à l\'oignon' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'La personne commande une salade César, un steak-frites et une tarte aux pommes.'
                },
                {
                    id: 'b1-commande-q2',
                    type: 'radio',
                    question: 'Quel est le montant total de la commande ?',
                    options: [
                        { id: 'a', text: '25 euros' },
                        { id: 'b', text: '35 euros' },
                        { id: 'c', text: '45 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le montant total de la commande est de 35 euros.'
                }
            ]
        },
        {
            id: 'b1-vacances',
            title: 'Préparer ses vacances',
            audioFile: `${audioBasePath}b1-vacances.mp3`,
            transcript: `<p>- Alors, tu as décidé où tu vas partir en vacances ?</p>
                        <p>- Oui, j'ai choisi la Croatie !</p>
                        <p>- Oh, c'est super ! Tu as déjà planifié ton itinéraire ?</p>
                        <p>- Oui, je commence par Zagreb, la capitale.</p>
                        <p>- Ensuite, je vais visiter Split et Dubrovnik.</p>
                        <p>- Je terminerai par quelques jours sur l'île de Hvar.</p>
                        <p>- Ça a l'air génial ! Tu as prévu combien de temps ?</p>
                        <p>- Deux semaines au total. J'ai un budget de 2000 euros.</p>
                        <p>- C'est raisonnable. Tu as déjà réservé tes hébergements ?</p>
                        <p>- Oui, j'ai tout réservé : les hôtels et les transports.</p>`,
            questions: [
                {
                    id: 'b1-vacances-q1',
                    type: 'radio',
                    question: 'Quelle est la destination choisie par Émilie ?',
                    options: [
                        { id: 'a', text: 'La Grèce' },
                        { id: 'b', text: 'La Croatie' },
                        { id: 'c', text: 'L\'Italie' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne dit qu\'elle a choisi la Croatie comme destination.'
                },
                {
                    id: 'b1-vacances-q2',
                    type: 'radio',
                    question: 'Quelle est la première ville visitée ?',
                    options: [
                        { id: 'a', text: 'Split' },
                        { id: 'b', text: 'Dubrovnik' },
                        { id: 'c', text: 'Zagreb' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'La personne dit qu\'elle commence par Zagreb, la capitale.'
                },
                {
                    id: 'b1-vacances-q3',
                    type: 'checkbox',
                    question: 'Quelles destinations sont incluses dans l\'itinéraire d\'Émilie ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Split' },
                        { id: 'b', text: 'L\'île de Hvar' },
                        { id: 'c', text: 'Dubrovnik' },
                        { id: 'd', text: 'Le parc national de Plitvice' }
                    ],
                    correctAnswer: ['a', 'b', 'c', 'd'],
                    explanation: 'L\'itinéraire d\'Émilie comprend Split, l\'île de Hvar, Dubrovnik et le parc national de Plitvice.'
                },
                {
                    id: 'b1-vacances-q4',
                    type: 'radio',
                    question: 'Quel est le budget prévu par Émilie pour ses deux semaines de vacances ?',
                    options: [
                        { id: 'a', text: '1000 euros' },
                        { id: 'b', text: '1500 euros' },
                        { id: 'c', text: '2000 euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Émilie mentionne qu\'elle a prévu environ 1500 euros tout compris pour les deux semaines.'
                }
            ]
        }
    ]
}; 