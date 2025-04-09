// Level descriptions
const levelDescriptions = {
    'A1': 'Niveau débutant. Vous pouvez comprendre des phrases très simples sur des sujets familiers.',
    'A2': 'Niveau élémentaire. Vous pouvez comprendre des textes courts et simples sur des sujets quotidiens.',
    'B1': 'Niveau intermédiaire. Vous pouvez comprendre des textes essentiellement rédigés dans une langue courante.',
    'B2': 'Niveau avancé. Vous pouvez comprendre des textes complexes sur des sujets concrets ou abstraits.'
};

// Reading data organized by level
const readingData = {
    'A1': [
        {
            id: 'a1-1',
            title: 'Ma famille',
            content: `<p>Bonjour ! Je m'appelle Thomas. J'ai 25 ans. Je suis français. J'habite à Lyon avec ma famille.</p>
                     <p>Ma famille est petite. J'ai une sœur. Elle s'appelle Marie. Elle a 20 ans. Elle est étudiante. Mes parents s'appellent Jean et Sophie. Mon père est médecin. Il travaille à l'hôpital. Ma mère est professeure. Elle enseigne le français à l'école.</p>
                     <p>Nous avons un chat. Il s'appelle Minou. Il est noir et blanc. Il a 3 ans. J'aime beaucoup ma famille !</p>`,
            questions: [
                {
                    id: 'a1-1-q1',
                    type: 'radio',
                    question: 'Quel âge a Thomas ?',
                    options: [
                        { id: 'a', text: '20 ans' },
                        { id: 'b', text: '25 ans' },
                        { id: 'c', text: '30 ans' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Thomas a 25 ans, comme indiqué dans la première phrase du texte.'
                },
                {
                    id: 'a1-1-q2',
                    type: 'radio',
                    question: 'Quelle est la profession du père de Thomas ?',
                    options: [
                        { id: 'a', text: 'Professeur' },
                        { id: 'b', text: 'Médecin' },
                        { id: 'c', text: 'Étudiant' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le père de Thomas est médecin. Il travaille à l\'hôpital.'
                },
                {
                    id: 'a1-1-q3',
                    type: 'text',
                    question: 'Comment s\'appelle le chat de la famille ?',
                    correctAnswer: 'Minou',
                    explanation: 'Le chat s\'appelle Minou, comme indiqué dans le dernier paragraphe.'
                }
            ]
        },
        {
            id: 'a1-2',
            title: 'Au café',
            content: `<p>Pierre est au café. Il est 10 heures du matin. Il boit un café et il mange un croissant. Il lit aussi le journal.</p>
                     <p>Une femme entre dans le café. Elle s'appelle Claire. Elle est amie avec Pierre. Elle dit : « Bonjour Pierre ! Comment ça va ? »</p>
                     <p>« Très bien, merci ! » répond Pierre. « Tu veux un café ? »</p>
                     <p>« Oui, merci. », dit Claire. Elle s'assoit à la table de Pierre. Ils parlent de leur week-end. Claire a visité un musée. Pierre a fait du vélo dans le parc.</p>`,
            questions: [
                {
                    id: 'a1-2-q1',
                    type: 'checkbox',
                    question: 'Que fait Pierre au café ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Il boit un café' },
                        { id: 'b', text: 'Il mange un sandwich' },
                        { id: 'c', text: 'Il lit le journal' },
                        { id: 'd', text: 'Il travaille sur son ordinateur' }
                    ],
                    correctAnswer: ['a', 'c'],
                    explanation: 'Pierre boit un café et lit le journal. Il mange un croissant, pas un sandwich.'
                },
                {
                    id: 'a1-2-q2',
                    type: 'radio',
                    question: 'Qu\'a fait Claire pendant le week-end ?',
                    options: [
                        { id: 'a', text: 'Elle a fait du vélo' },
                        { id: 'b', text: 'Elle a visité un musée' },
                        { id: 'c', text: 'Elle est allée au restaurant' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Claire a visité un musée pendant le week-end.'
                },
                {
                    id: 'a1-2-q3',
                    type: 'text',
                    question: 'À quelle heure Pierre est-il au café ?',
                    correctAnswer: '10 heures',
                    explanation: 'Pierre est au café à 10 heures du matin.'
                }
            ]
        },
        {
            id: 'a1-3',
            title: 'Ma journée',
            content: `<p>Je m'appelle Sophie et j'ai 22 ans. Je suis étudiante. Voici ma journée typique.</p>
                     <p>Je me lève à 7 heures. Je prends une douche et je m'habille. Je prends mon petit-déjeuner à 7h30. Je mange des céréales et je bois un thé.</p>
                     <p>Je vais à l'université à 8h30. J'ai des cours de 9 heures à midi. À midi, je déjeune à la cafétéria avec mes amis. L'après-midi, j'étudie à la bibliothèque.</p>
                     <p>Je rentre chez moi à 18 heures. Je dîne à 19h30 et après, je regarde la télévision ou je lis un livre. Je me couche à 23 heures.</p>`,
            questions: [
                {
                    id: 'a1-3-q1',
                    type: 'radio',
                    question: 'À quelle heure Sophie se lève-t-elle ?',
                    options: [
                        { id: 'a', text: 'À 6 heures' },
                        { id: 'b', text: 'À 7 heures' },
                        { id: 'c', text: 'À 8 heures' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Sophie se lève à 7 heures, comme indiqué dans le deuxième paragraphe.'
                },
                {
                    id: 'a1-3-q2',
                    type: 'radio',
                    question: 'Que fait Sophie l\'après-midi ?',
                    options: [
                        { id: 'a', text: 'Elle va au cinéma' },
                        { id: 'b', text: 'Elle travaille dans un café' },
                        { id: 'c', text: 'Elle étudie à la bibliothèque' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'L\'après-midi, Sophie étudie à la bibliothèque.'
                },
                {
                    id: 'a1-3-q3',
                    type: 'checkbox',
                    question: 'Que fait Sophie après le dîner ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Elle regarde la télévision' },
                        { id: 'b', text: 'Elle lit un livre' },
                        { id: 'c', text: 'Elle fait du sport' },
                        { id: 'd', text: 'Elle écoute de la musique' }
                    ],
                    correctAnswer: ['a', 'b'],
                    explanation: 'Après le dîner, Sophie regarde la télévision ou lit un livre.'
                }
            ]
        },
        {
            id: 'a1-4',
            title: 'Au supermarché',
            content: `<p>Aujourd'hui, Marie va au supermarché. Elle a besoin d'acheter des aliments pour la semaine.</p>
                     <p>D'abord, elle prend un panier à l'entrée. Puis, elle va au rayon des fruits et légumes. Elle achète des pommes, des bananes et des carottes.</p>
                     <p>Ensuite, Marie va au rayon des produits laitiers. Elle prend du lait, du fromage et des yaourts. Elle achète aussi du pain à la boulangerie du supermarché.</p>
                     <p>À la caisse, elle paie 25 euros. Elle met ses courses dans son sac et rentre chez elle.</p>`,
            questions: [
                {
                    id: 'a1-4-q1',
                    type: 'radio',
                    question: 'Où va Marie aujourd\'hui ?',
                    options: [
                        { id: 'a', text: 'Au restaurant' },
                        { id: 'b', text: 'Au supermarché' },
                        { id: 'c', text: 'À la pharmacie' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Marie va au supermarché, comme indiqué dans la première phrase.'
                },
                {
                    id: 'a1-4-q2',
                    type: 'checkbox',
                    question: 'Quels fruits Marie achète-t-elle ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Des pommes' },
                        { id: 'b', text: 'Des oranges' },
                        { id: 'c', text: 'Des bananes' },
                        { id: 'd', text: 'Des fraises' }
                    ],
                    correctAnswer: ['a', 'c'],
                    explanation: 'Marie achète des pommes et des bananes. Les oranges et les fraises ne sont pas mentionnées.'
                },
                {
                    id: 'a1-4-q3',
                    type: 'text',
                    question: 'Combien Marie paie-t-elle à la caisse ?',
                    correctAnswer: '25 euros',
                    explanation: 'Marie paie 25 euros à la caisse, comme indiqué dans le dernier paragraphe.'
                }
            ]
        },
        {
            id: 'a1-5',
            title: 'Les vacances',
            content: `<p>L'été dernier, Paul et sa femme Julie sont allés en vacances en Espagne. Ils ont passé deux semaines à Barcelone.</p>
                     <p>Ils ont voyagé en avion. Le vol a duré deux heures. À Barcelone, ils ont loué un petit appartement près de la plage.</p>
                     <p>Pendant leur séjour, ils ont visité beaucoup de monuments. Ils ont vu la Sagrada Familia et le parc Güell. Ils ont aussi passé du temps à la plage et ont mangé dans de bons restaurants.</p>
                     <p>Paul et Julie ont pris beaucoup de photos. Ils ont adoré leurs vacances et veulent retourner en Espagne l'année prochaine.</p>`,
            questions: [
                {
                    id: 'a1-5-q1',
                    type: 'radio',
                    question: 'Où Paul et Julie sont-ils allés en vacances ?',
                    options: [
                        { id: 'a', text: 'En France' },
                        { id: 'b', text: 'En Italie' },
                        { id: 'c', text: 'En Espagne' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'Paul et Julie sont allés en vacances en Espagne, comme indiqué dans la première phrase.'
                },
                {
                    id: 'a1-5-q2',
                    type: 'radio',
                    question: 'Combien de temps ont-ils passé à Barcelone ?',
                    options: [
                        { id: 'a', text: 'Une semaine' },
                        { id: 'b', text: 'Deux semaines' },
                        { id: 'c', text: 'Un mois' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Ils ont passé deux semaines à Barcelone, comme indiqué dans la première phrase.'
                },
                {
                    id: 'a1-5-q3',
                    type: 'checkbox',
                    question: 'Quels monuments ont-ils visités ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'La Sagrada Familia' },
                        { id: 'b', text: 'La Tour Eiffel' },
                        { id: 'c', text: 'Le parc Güell' },
                        { id: 'd', text: 'Le Colisée' }
                    ],
                    correctAnswer: ['a', 'c'],
                    explanation: 'Ils ont visité la Sagrada Familia et le parc Güell. La Tour Eiffel est à Paris et le Colisée est à Rome.'
                }
            ]
        },
        {
            id: 'a1-6',
            title: 'Mon appartement',
            content: `<p>J'habite dans un petit appartement au centre-ville. C'est un studio au troisième étage d'un immeuble ancien.</p>
                     <p>Mon appartement n'est pas très grand, mais il est confortable. Il y a une pièce principale avec un canapé-lit, une petite table et deux chaises. La cuisine est ouverte sur la pièce principale. Elle est équipée d'un réfrigérateur, d'une plaque de cuisson et d'un micro-ondes.</p>
                     <p>La salle de bain est petite mais fonctionnelle, avec une douche, un lavabo et des toilettes. J'ai aussi un petit balcon où j'ai mis des plantes et une chaise.</p>
                     <p>Ce que j'aime dans mon appartement, c'est qu'il est très lumineux et bien situé. Il est près des magasins, des restaurants et du métro.</p>`,
            questions: [
                {
                    id: 'a1-6-q1',
                    type: 'radio',
                    question: 'Où se trouve l\'appartement ?',
                    options: [
                        { id: 'a', text: 'À la campagne' },
                        { id: 'b', text: 'Au centre-ville' },
                        { id: 'c', text: 'Dans la banlieue' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'appartement se trouve au centre-ville, comme indiqué dans la première phrase.'
                },
                {
                    id: 'a1-6-q2',
                    type: 'checkbox',
                    question: 'Quels appareils y a-t-il dans la cuisine ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Un réfrigérateur' },
                        { id: 'b', text: 'Un four' },
                        { id: 'c', text: 'Un micro-ondes' },
                        { id: 'd', text: 'Une plaque de cuisson' }
                    ],
                    correctAnswer: ['a', 'c', 'd'],
                    explanation: 'Dans la cuisine, il y a un réfrigérateur, une plaque de cuisson et un micro-ondes. Un four n\'est pas mentionné.'
                },
                {
                    id: 'a1-6-q3',
                    type: 'text',
                    question: 'Qu\'est-ce que la personne a mis sur son balcon ?',
                    correctAnswer: 'des plantes et une chaise',
                    explanation: 'Sur le balcon, la personne a mis des plantes et une chaise.'
                }
            ]
        },
        {
            id: 'a1-7',
            title: 'Une lettre à un ami',
            content: `<p>Cher Pierre,</p>
                     <p>Comment vas-tu ? Moi, je vais bien. Je t'écris de ma nouvelle ville, Marseille. J'habite ici depuis deux mois.</p>
                     <p>Mon nouvel appartement est petit mais agréable. Il est près de la mer. Tous les matins, je marche sur la plage. Le temps est chaud et ensoleillé ici.</p>
                     <p>J'ai commencé un nouveau travail dans un restaurant. Mes collègues sont très sympathiques. Le week-end, je visite la ville et ses environs.</p>
                     <p>J'espère que tu pourras venir me rendre visite bientôt. Je voudrais te montrer ma nouvelle ville.</p>
                     <p>Amicalement,<br>
                     Marie</p>`,
            questions: [
                {
                    id: 'a1-7-q1',
                    type: 'radio',
                    question: 'Où habite Marie maintenant ?',
                    options: [
                        { id: 'a', text: 'À Paris' },
                        { id: 'b', text: 'À Lyon' },
                        { id: 'c', text: 'À Marseille' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'Marie habite à Marseille, comme elle l\'indique dans sa lettre.'
                },
                {
                    id: 'a1-7-q2',
                    type: 'radio',
                    question: 'Que fait Marie tous les matins ?',
                    options: [
                        { id: 'a', text: 'Elle nage dans la mer' },
                        { id: 'b', text: 'Elle marche sur la plage' },
                        { id: 'c', text: 'Elle va au travail' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Tous les matins, Marie marche sur la plage.'
                },
                {
                    id: 'a1-7-q3',
                    type: 'text',
                    question: 'Où travaille Marie ?',
                    correctAnswer: 'dans un restaurant',
                    explanation: 'Marie travaille dans un restaurant, comme elle le mentionne dans sa lettre.'
                }
            ]
        },
        {
            id: 'a1-8',
            title: 'Au restaurant',
            content: `<p>Marc et Sophie sont au restaurant. C'est samedi soir. Le restaurant est plein.</p>
                     <p>Le serveur vient à leur table : « Bonsoir, vous avez choisi ? »</p>
                     <p>Marc répond : « Oui, je voudrais une salade verte en entrée et un steak frites en plat principal. »</p>
                     <p>Sophie dit : « Pour moi, ce sera une soupe à l'oignon et un poisson avec des légumes. »</p>
                     <p>Le serveur demande : « Et comme boisson ? »</p>
                     <p>Marc commande une bouteille d'eau et un verre de vin rouge. Sophie prend un jus d'orange.</p>
                     <p>Pour le dessert, ils partagent une tarte aux pommes. À la fin du repas, Marc demande l'addition. Le repas coûte 45 euros.</p>`,
            questions: [
                {
                    id: 'a1-8-q1',
                    type: 'radio',
                    question: 'Quel jour Marc et Sophie sont-ils au restaurant ?',
                    options: [
                        { id: 'a', text: 'Vendredi' },
                        { id: 'b', text: 'Samedi' },
                        { id: 'c', text: 'Dimanche' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Marc et Sophie sont au restaurant samedi soir, comme indiqué au début du texte.'
                },
                {
                    id: 'a1-8-q2',
                    type: 'checkbox',
                    question: 'Qu\'est-ce que Marc commande ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Une salade verte' },
                        { id: 'b', text: 'Un steak frites' },
                        { id: 'c', text: 'Un verre de vin rouge' },
                        { id: 'd', text: 'Un poisson' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Marc commande une salade verte, un steak frites et un verre de vin rouge. Le poisson est commandé par Sophie.'
                },
                {
                    id: 'a1-8-q3',
                    type: 'text',
                    question: 'Combien coûte le repas au total ?',
                    correctAnswer: '45 euros',
                    explanation: 'À la fin du repas, le total est de 45 euros.'
                }
            ]
        },
        {
            id: 'a1-9',
            title: 'À la boulangerie',
            content: `<p>Ce matin, Marie va à la boulangerie du quartier. Elle entre dans la boutique à 8 heures.</p>
                     <p>« Bonjour Madame, dit Marie à la boulangère. Je voudrais une baguette, s'il vous plaît. »</p>
                     <p>« Bonjour Mademoiselle, répond la boulangère. Voici votre baguette. Ce sera tout ? »</p>
                     <p>« Non, je voudrais aussi deux croissants et un pain au chocolat. »</p>
                     <p>« Très bien. Cela fait 5 euros et 20 centimes. »</p>
                     <p>Marie donne 10 euros à la boulangère. La boulangère lui rend 4 euros et 80 centimes.</p>
                     <p>« Merci ! Au revoir, Madame », dit Marie en sortant de la boulangerie.</p>`,
            questions: [
                {
                    id: 'a1-9-q1',
                    type: 'radio',
                    question: 'À quelle heure Marie va-t-elle à la boulangerie ?',
                    options: [
                        { id: 'a', text: 'À 7 heures' },
                        { id: 'b', text: 'À 8 heures' },
                        { id: 'c', text: 'À 9 heures' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Marie entre dans la boutique à 8 heures, comme indiqué dans le premier paragraphe.'
                },
                {
                    id: 'a1-9-q2',
                    type: 'checkbox',
                    question: 'Qu\'est-ce que Marie achète ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Une baguette' },
                        { id: 'b', text: 'Deux croissants' },
                        { id: 'c', text: 'Un pain au chocolat' },
                        { id: 'd', text: 'Un gâteau' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Marie achète une baguette, deux croissants et un pain au chocolat. Elle n\'achète pas de gâteau.'
                },
                {
                    id: 'a1-9-q3',
                    type: 'text',
                    question: 'Combien coûtent les achats de Marie ?',
                    correctAnswer: '5 euros et 20 centimes',
                    explanation: 'Les achats de Marie coûtent 5 euros et 20 centimes, comme indiqué dans le texte.'
                }
            ]
        },
        {
            id: 'a1-10',
            title: 'Les transports en commun',
            content: `<p>Thomas habite à Paris. Chaque jour, il prend les transports en commun pour aller au travail.</p>
                     <p>Le matin, il sort de chez lui à 8h15. Il marche cinq minutes jusqu'à la station de métro. Il prend la ligne 7 et voyage pendant 15 minutes. Puis, il change de ligne et prend la ligne 4 pour trois stations.</p>
                     <p>Il arrive à son bureau à 9h00. Le soir, il quitte son travail à 18h00 et prend le bus pour rentrer chez lui. Le bus est souvent plein, mais Thomas trouve toujours une place assise.</p>
                     <p>Le week-end, Thomas ne prend pas les transports en commun. Il préfère marcher ou faire du vélo dans la ville.</p>`,
            questions: [
                {
                    id: 'a1-10-q1',
                    type: 'radio',
                    question: 'Où habite Thomas ?',
                    options: [
                        { id: 'a', text: 'À Lyon' },
                        { id: 'b', text: 'À Paris' },
                        { id: 'c', text: 'À Marseille' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Thomas habite à Paris, comme indiqué dans la première phrase.'
                },
                {
                    id: 'a1-10-q2',
                    type: 'radio',
                    question: 'Quel transport Thomas prend-il le matin ?',
                    options: [
                        { id: 'a', text: 'Le bus' },
                        { id: 'b', text: 'Le métro' },
                        { id: 'c', text: 'Le vélo' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le matin, Thomas prend le métro (lignes 7 et 4) pour aller au travail.'
                },
                {
                    id: 'a1-10-q3',
                    type: 'text',
                    question: 'À quelle heure Thomas arrive-t-il au bureau ?',
                    correctAnswer: '9h00',
                    explanation: 'Thomas arrive à son bureau à 9h00, comme indiqué dans le texte.'
                }
            ]
        },
        {
            id: 'a1-11',
            title: 'Les saisons',
            content: `<p>Il y a quatre saisons dans l'année : le printemps, l'été, l'automne et l'hiver.</p>
                     <p>Le printemps commence en mars. Il fait doux et les fleurs apparaissent. Les gens aiment se promener dans les parcs.</p>
                     <p>L'été commence en juin. Il fait chaud et le soleil brille. C'est la période des vacances. Beaucoup de personnes vont à la plage ou à la montagne.</p>
                     <p>L'automne commence en septembre. Les feuilles des arbres deviennent jaunes, oranges et rouges, puis tombent. Les températures baissent et il pleut souvent.</p>
                     <p>L'hiver commence en décembre. Il fait froid et parfois, il neige. Les gens portent des manteaux, des écharpes et des gants pour se protéger du froid.</p>`,
            questions: [
                {
                    id: 'a1-11-q1',
                    type: 'radio',
                    question: 'Quand commence le printemps ?',
                    options: [
                        { id: 'a', text: 'En mars' },
                        { id: 'b', text: 'En juin' },
                        { id: 'c', text: 'En septembre' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'Le printemps commence en mars, comme indiqué dans le texte.'
                },
                {
                    id: 'a1-11-q2',
                    type: 'checkbox',
                    question: 'Quelles caractéristiques sont associées à l\'automne ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Les feuilles deviennent jaunes, oranges et rouges' },
                        { id: 'b', text: 'Il fait chaud' },
                        { id: 'c', text: 'Il pleut souvent' },
                        { id: 'd', text: 'Les températures baissent' }
                    ],
                    correctAnswer: ['a', 'c', 'd'],
                    explanation: 'En automne, les feuilles changent de couleur, il pleut souvent et les températures baissent. Il ne fait pas chaud en automne.'
                },
                {
                    id: 'a1-11-q3',
                    type: 'text',
                    question: 'Que portent les gens en hiver pour se protéger du froid ?',
                    correctAnswer: 'des manteaux, des écharpes et des gants',
                    explanation: 'En hiver, les gens portent des manteaux, des écharpes et des gants pour se protéger du froid.'
                }
            ]
        },
        {
            id: 'a1-12',
            title: 'Ma routine quotidienne',
            content: `<p>Je m'appelle Pierre et voici ma routine quotidienne.</p>
                     <p>Je me réveille tous les jours à 6h30. Je me lève immédiatement et je vais dans la salle de bain. Je me douche et je me brosse les dents. Ensuite, je m'habille.</p>
                     <p>À 7h15, je prends mon petit-déjeuner dans la cuisine. Je mange des céréales avec du lait et je bois un café. Après le petit-déjeuner, je prends mon sac et je pars travailler.</p>
                     <p>Je travaille de 8h30 à 17h00. À midi, je déjeune avec mes collègues à la cantine de l'entreprise. Après le travail, je rentre chez moi et je me détends en lisant ou en regardant la télévision.</p>
                     <p>Je dîne vers 20h00. Puis, je me prépare pour la nuit. Je me couche généralement à 22h30 et je m'endors rapidement.</p>`,
            questions: [
                {
                    id: 'a1-12-q1',
                    type: 'radio',
                    question: 'À quelle heure Pierre se réveille-t-il ?',
                    options: [
                        { id: 'a', text: 'À 6h00' },
                        { id: 'b', text: 'À 6h30' },
                        { id: 'c', text: 'À 7h00' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Pierre se réveille tous les jours à 6h30, comme indiqué au début du texte.'
                },
                {
                    id: 'a1-12-q2',
                    type: 'checkbox',
                    question: 'Que fait Pierre après le travail ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Il rentre chez lui' },
                        { id: 'b', text: 'Il fait du sport' },
                        { id: 'c', text: 'Il lit' },
                        { id: 'd', text: 'Il regarde la télévision' }
                    ],
                    correctAnswer: ['a', 'c', 'd'],
                    explanation: 'Après le travail, Pierre rentre chez lui et se détend en lisant ou en regardant la télévision. Le texte ne mentionne pas qu\'il fait du sport.'
                },
                {
                    id: 'a1-12-q3',
                    type: 'text',
                    question: 'Où Pierre déjeune-t-il à midi ?',
                    correctAnswer: 'à la cantine de l\'entreprise',
                    explanation: 'À midi, Pierre déjeune avec ses collègues à la cantine de l\'entreprise.'
                }
            ]
        },
        {
            id: 'a1-13',
            title: 'Mon animal de compagnie',
            content: `<p>J'ai un chat qui s'appelle Felix. C'est un chat noir et blanc. Il a trois ans.</p>
                     <p>Felix est très joueur. Il aime courir après les petites balles et attraper les jouets. Il dort beaucoup aussi, surtout l'après-midi sur le canapé ou sur mon lit.</p>
                     <p>Le matin, Felix me réveille pour manger. Je lui donne des croquettes et de l'eau fraîche. Le soir, il mange de la pâtée pour chat.</p>
                     <p>Felix n'aime pas l'eau et il déteste prendre un bain. Il n'aime pas non plus quand il y a beaucoup de bruit ou quand des étrangers viennent à la maison.</p>
                     <p>J'aime beaucoup mon chat. C'est un bon compagnon et il me fait toujours rire avec ses bêtises.</p>`,
            questions: [
                {
                    id: 'a1-13-q1',
                    type: 'radio',
                    question: 'De quelle couleur est Felix ?',
                    options: [
                        { id: 'a', text: 'Tout noir' },
                        { id: 'b', text: 'Noir et blanc' },
                        { id: 'c', text: 'Tout blanc' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Felix est un chat noir et blanc, comme décrit dans le premier paragraphe.'
                },
                {
                    id: 'a1-13-q2',
                    type: 'checkbox',
                    question: 'Qu\'est-ce que Felix n\'aime pas ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'L\'eau' },
                        { id: 'b', text: 'Les jouets' },
                        { id: 'c', text: 'Le bruit' },
                        { id: 'd', text: 'Les étrangers' }
                    ],
                    correctAnswer: ['a', 'c', 'd'],
                    explanation: 'Felix n\'aime pas l\'eau, le bruit et les étrangers. Le texte dit qu\'il aime les jouets.'
                },
                {
                    id: 'a1-13-q3',
                    type: 'text',
                    question: 'Que mange Felix le soir ?',
                    correctAnswer: 'de la pâtée pour chat',
                    explanation: 'Le soir, Felix mange de la pâtée pour chat, comme indiqué dans le texte.'
                }
            ]
        }
    ],
    'A2': [
        {
            id: 'a2-1',
            title: 'Une journée à Paris',
            content: `<p>Samedi dernier, j'ai visité Paris avec mon amie Julie. Nous sommes partis tôt le matin, vers 7 heures. Nous avons pris le train pour arriver à Paris à 9 heures.</p>
                     <p>D'abord, nous avons visité la Tour Eiffel. Il y avait beaucoup de touristes ! Ensuite, nous avons marché jusqu'au musée du Louvre. Nous avons admiré la Joconde et d'autres tableaux célèbres.</p>
                     <p>À midi, nous avons mangé dans un petit restaurant près de la Seine. J'ai choisi un croque-monsieur et Julie a commandé une quiche lorraine. C'était délicieux !</p>
                     <p>L'après-midi, nous avons fait du shopping sur les Champs-Élysées. Julie a acheté un nouveau sac et j'ai trouvé un livre intéressant. Vers 18 heures, nous sommes rentrés chez nous, fatigués mais contents de notre journée.</p>`,
            questions: [
                {
                    id: 'a2-1-q1',
                    type: 'radio',
                    question: 'Comment sont-ils allés à Paris ?',
                    options: [
                        { id: 'a', text: 'En voiture' },
                        { id: 'b', text: 'En train' },
                        { id: 'c', text: 'En bus' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Ils ont pris le train pour aller à Paris.'
                },
                {
                    id: 'a2-1-q2',
                    type: 'checkbox',
                    question: 'Quels lieux ont-ils visités ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'La Tour Eiffel' },
                        { id: 'b', text: 'Notre-Dame' },
                        { id: 'c', text: 'Le musée du Louvre' },
                        { id: 'd', text: 'Les Champs-Élysées' }
                    ],
                    correctAnswer: ['a', 'c', 'd'],
                    explanation: 'Ils ont visité la Tour Eiffel, le musée du Louvre, et les Champs-Élysées. Notre-Dame n\'est pas mentionnée dans le texte.'
                },
                {
                    id: 'a2-1-q3',
                    type: 'text',
                    question: 'Qu\'a mangé Julie au restaurant ?',
                    correctAnswer: 'une quiche lorraine',
                    explanation: 'Julie a commandé une quiche lorraine pour le déjeuner.'
                }
            ]
        },
        {
            id: 'a2-2',
            title: 'Cherche colocataire',
            content: `<p>Bonjour,</p>
                     <p>Je m'appelle Lucas, j'ai 24 ans et je suis étudiant en informatique. Je cherche un colocataire pour partager mon appartement à partir du 1er septembre.</p>
                     <p>L'appartement est situé dans le centre-ville, près de l'université. Il y a deux chambres, une salle de bain, une cuisine équipée et un petit salon. Le loyer est de 400 € par mois, charges comprises.</p>
                     <p>Je cherche une personne sérieuse, non-fumeur et qui aime le calme. J'accepte les animaux si ils sont petits et calmes. Si vous êtes intéressé, contactez-moi par e-mail : lucas.dupont@email.com ou par téléphone au 06 12 34 56 78.</p>
                     <p>À bientôt !</p>`,
            questions: [
                {
                    id: 'a2-2-q1',
                    type: 'radio',
                    question: 'Quelle est la profession de Lucas ?',
                    options: [
                        { id: 'a', text: 'Professeur' },
                        { id: 'b', text: 'Étudiant' },
                        { id: 'c', text: 'Informaticien' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Lucas est étudiant en informatique.'
                },
                {
                    id: 'a2-2-q2',
                    type: 'radio',
                    question: 'Combien coûte le loyer mensuel ?',
                    options: [
                        { id: 'a', text: '300 €' },
                        { id: 'b', text: '400 €' },
                        { id: 'c', text: '500 €' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le loyer est de 400 € par mois, charges comprises.'
                },
                {
                    id: 'a2-2-q3',
                    type: 'checkbox',
                    question: 'Quelles sont les caractéristiques que Lucas recherche chez son colocataire ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Sérieux' },
                        { id: 'b', text: 'Fumeur' },
                        { id: 'c', text: 'Aime le calme' },
                        { id: 'd', text: 'Aime faire la fête' }
                    ],
                    correctAnswer: ['a', 'c'],
                    explanation: 'Lucas recherche une personne sérieuse et qui aime le calme. Il précise "non-fumeur", donc il ne veut pas un fumeur.'
                }
            ]
        },
        {
            id: 'a2-3',
            title: 'Un week-end à la campagne',
            content: `<p>Le week-end dernier, ma famille et moi avons décidé de quitter la ville pour aller à la campagne. Nous sommes partis samedi matin en voiture. Nous avons roulé pendant environ deux heures jusqu'à un petit village dans la région de Normandie.</p>
                     <p>Nous avons loué une jolie maison avec un grand jardin. Il faisait beau et nous avons profité du soleil. Les enfants ont joué dehors pendant que mon mari et moi préparions un barbecue pour le déjeuner.</p>
                     <p>L'après-midi, nous avons fait une longue promenade dans la forêt. Nous avons vu des écureuils et ramassé des champignons. Le soir, nous avons allumé un feu dans la cheminée et nous avons joué à des jeux de société.</p>
                     <p>Dimanche, avant de rentrer, nous sommes allés au marché du village. Les enfants ont acheté du miel et des fromages locaux. Ce week-end à la campagne était vraiment reposant. Nous espérons y retourner bientôt !</p>`,
            questions: [
                {
                    id: 'a2-3-q1',
                    type: 'radio',
                    question: 'Où sont-ils allés le week-end dernier ?',
                    options: [
                        { id: 'a', text: 'À la mer' },
                        { id: 'b', text: 'À la montagne' },
                        { id: 'c', text: 'À la campagne' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'Ils sont allés à la campagne, dans un petit village en Normandie.'
                },
                {
                    id: 'a2-3-q2',
                    type: 'radio',
                    question: 'Qu\'ont-ils fait l\'après-midi du samedi ?',
                    options: [
                        { id: 'a', text: 'Ils ont nagé dans une rivière' },
                        { id: 'b', text: 'Ils ont fait une promenade dans la forêt' },
                        { id: 'c', text: 'Ils ont visité un château' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'après-midi, ils ont fait une longue promenade dans la forêt.'
                },
                {
                    id: 'a2-3-q3',
                    type: 'checkbox',
                    question: 'Qu\'ont-ils acheté au marché ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Du miel' },
                        { id: 'b', text: 'Des légumes' },
                        { id: 'c', text: 'Des fromages' },
                        { id: 'd', text: 'De la viande' }
                    ],
                    correctAnswer: ['a', 'c'],
                    explanation: 'Au marché, les enfants ont acheté du miel et des fromages locaux.'
                }
            ]
        },
        {
            id: 'a2-4',
            title: 'Recette : Crêpes faciles',
            content: `<p>Aujourd'hui, je vais vous montrer comment faire des crêpes françaises. C'est une recette facile et rapide.</p>
                     <p>Ingrédients (pour 4 personnes) :</p>
                     <p>- 250g de farine<br>
                     - 4 œufs<br>
                     - 500ml de lait<br>
                     - 2 cuillères à soupe d'huile<br>
                     - 1 pincée de sel<br>
                     - 2 cuillères à soupe de sucre</p>
                     <p>Préparation :</p>
                     <p>1. Dans un saladier, mettez la farine et formez un puits.<br>
                     2. Ajoutez les œufs, l'huile, le sel et le sucre.<br>
                     3. Mélangez doucement en ajoutant progressivement le lait.<br>
                     4. Laissez reposer la pâte pendant 1 heure.<br>
                     5. Faites chauffer une poêle et ajoutez une petite quantité de pâte.<br>
                     6. Faites cuire la crêpe 1 minute de chaque côté.<br>
                     7. Servez avec du sucre, de la confiture ou du chocolat.</p>
                     <p>Bon appétit !</p>`,
            questions: [
                {
                    id: 'a2-4-q1',
                    type: 'checkbox',
                    question: 'Quels ingrédients sont nécessaires pour cette recette ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Farine' },
                        { id: 'b', text: 'Beurre' },
                        { id: 'c', text: 'Œufs' },
                        { id: 'd', text: 'Lait' }
                    ],
                    correctAnswer: ['a', 'c', 'd'],
                    explanation: 'Les ingrédients nécessaires sont la farine, les œufs et le lait. Le beurre n\'est pas mentionné dans la recette, qui utilise de l\'huile à la place.'
                },
                {
                    id: 'a2-4-q2',
                    type: 'radio',
                    question: 'Combien de temps faut-il laisser reposer la pâte ?',
                    options: [
                        { id: 'a', text: '30 minutes' },
                        { id: 'b', text: '1 heure' },
                        { id: 'c', text: '2 heures' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Il faut laisser reposer la pâte pendant 1 heure.'
                },
                {
                    id: 'a2-4-q3',
                    type: 'text',
                    question: 'Combien de temps faut-il cuire la crêpe de chaque côté ?',
                    correctAnswer: '1 minute',
                    explanation: 'Il faut faire cuire la crêpe 1 minute de chaque côté.'
                }
            ]
        },
        {
            id: 'a2-5',
            title: 'Mon métier : infirmière',
            content: `<p>Je m'appelle Camille et je suis infirmière depuis cinq ans. Je travaille dans un grand hôpital à Lyon. J'ai toujours voulu aider les autres, c'est pourquoi j'ai choisi ce métier.</p>
                     <p>Je travaille souvent en équipe avec des médecins et d'autres infirmières. Mes journées commencent tôt, généralement à 7 heures du matin. Je m'occupe des patients : je vérifie leur température, leur tension et je distribue les médicaments.</p>
                     <p>J'aime beaucoup mon travail, mais il est parfois difficile. Je dois souvent travailler la nuit et les week-ends. Les journées sont longues et fatigantes. Mais quand je vois mes patients aller mieux, je suis très heureuse.</p>
                     <p>Pour devenir infirmière, j'ai fait trois ans d'études après le baccalauréat. J'ai appris beaucoup de choses sur le corps humain et les maladies. J'ai aussi fait plusieurs stages dans différents services de l'hôpital.</p>
                     <p>Si vous êtes patient et que vous aimez aider les autres, c'est un métier formidable !</p>`,
            questions: [
                {
                    id: 'a2-5-q1',
                    type: 'radio',
                    question: 'Depuis combien de temps Camille est-elle infirmière ?',
                    options: [
                        { id: 'a', text: 'Trois ans' },
                        { id: 'b', text: 'Cinq ans' },
                        { id: 'c', text: 'Sept ans' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Camille est infirmière depuis cinq ans, comme indiqué dans la première phrase.'
                },
                {
                    id: 'a2-5-q2',
                    type: 'checkbox',
                    question: 'Quelles sont les tâches de Camille à l\'hôpital ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Vérifier la température des patients' },
                        { id: 'b', text: 'Opérer les patients' },
                        { id: 'c', text: 'Vérifier la tension des patients' },
                        { id: 'd', text: 'Distribuer les médicaments' }
                    ],
                    correctAnswer: ['a', 'c', 'd'],
                    explanation: 'Camille vérifie la température et la tension des patients, et distribue les médicaments. Elle ne fait pas d\'opérations, car ce n\'est pas le rôle d\'une infirmière.'
                },
                {
                    id: 'a2-5-q3',
                    type: 'text',
                    question: 'Combien d\'années d\'études Camille a-t-elle faites pour devenir infirmière ?',
                    correctAnswer: 'trois ans',
                    explanation: 'Camille a fait trois ans d\'études après le baccalauréat pour devenir infirmière.'
                }
            ]
        },
        {
            id: 'a2-6',
            title: 'Une interview avec un chef français',
            content: `<p>Journaliste : Bonjour, Chef Laurent. Merci d'avoir accepté cette interview pour notre magazine. Pouvez-vous nous parler de votre parcours ?</p>
                     <p>Chef Laurent : Bonjour et merci à vous. J'ai commencé à cuisiner très jeune avec ma grand-mère dans le sud de la France. Après le lycée, j'ai étudié à l'école hôtelière de Lyon pendant trois ans. Ensuite, j'ai travaillé dans plusieurs restaurants en France et à l'étranger.</p>
                     <p>Journaliste : Qu'est-ce qui vous a inspiré à ouvrir votre propre restaurant ?</p>
                     <p>Chef Laurent : Après dix ans d'expérience, j'avais envie de créer ma propre cuisine, avec mes propres recettes. J'ai ouvert mon restaurant "Chez Laurent" il y a cinq ans à Paris. Notre spécialité est la cuisine française traditionnelle revisitée avec des ingrédients modernes.</p>
                     <p>Journaliste : Quels sont vos projets pour l'avenir ?</p>
                     <p>Chef Laurent : J'aimerais écrire un livre de recettes et peut-être ouvrir un deuxième restaurant dans une autre ville française. Je souhaite aussi continuer à former de jeunes chefs passionnés.</p>`,
            questions: [
                {
                    id: 'a2-6-q1',
                    type: 'radio',
                    question: 'Où le Chef Laurent a-t-il étudié la cuisine ?',
                    options: [
                        { id: 'a', text: 'À Paris' },
                        { id: 'b', text: 'À Lyon' },
                        { id: 'c', text: 'À Marseille' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le Chef Laurent a étudié à l\'école hôtelière de Lyon pendant trois ans.'
                },
                {
                    id: 'a2-6-q2',
                    type: 'radio',
                    question: 'Depuis combien de temps le Chef Laurent a-t-il son restaurant ?',
                    options: [
                        { id: 'a', text: 'Trois ans' },
                        { id: 'b', text: 'Cinq ans' },
                        { id: 'c', text: 'Dix ans' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le Chef Laurent a ouvert son restaurant il y a cinq ans à Paris.'
                },
                {
                    id: 'a2-6-q3',
                    type: 'checkbox',
                    question: 'Quels sont les projets du Chef Laurent pour l\'avenir ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Écrire un livre de recettes' },
                        { id: 'b', text: 'Ouvrir un restaurant à l\'étranger' },
                        { id: 'c', text: 'Former de jeunes chefs' },
                        { id: 'd', text: 'Ouvrir un deuxième restaurant' }
                    ],
                    correctAnswer: ['a', 'c', 'd'],
                    explanation: 'Le Chef Laurent souhaite écrire un livre de recettes, former de jeunes chefs et ouvrir un deuxième restaurant. Il ne mentionne pas vouloir ouvrir un restaurant à l\'étranger mais plutôt "dans une autre ville française".'
                }
            ]
        },
        {
            id: 'a2-7',
            title: 'Une visite au musée',
            content: `<p>Le week-end dernier, j'ai visité le nouveau musée d'art contemporain de ma ville avec mon amie Clara. Nous avions réservé nos billets en ligne pour éviter de faire la queue.</p>
                     <p>Nous sommes arrivées au musée à 10 heures du matin. Le bâtiment est vraiment impressionnant : c'est une ancienne usine qui a été complètement rénovée par un architecte célèbre. À l'intérieur, il y a de grandes salles lumineuses avec de hauts plafonds.</p>
                     <p>L'exposition principale présentait des œuvres d'artistes français contemporains. J'ai particulièrement aimé les grandes peintures colorées de Marie Dumont et les sculptures en métal de Thomas Leroy. Clara, elle, a préféré les installations vidéo et les photographies.</p>
                     <p>Vers midi, nous avons déjeuné au café du musée qui offre une belle vue sur le jardin de sculptures. L'après-midi, nous avons participé à une visite guidée qui nous a permis d'en apprendre davantage sur les artistes et leurs techniques.</p>
                     <p>Nous avons passé presque toute la journée au musée et nous sommes parties vers 17 heures, fatiguées mais heureuses d'avoir découvert tant d'œuvres intéressantes.</p>`,
            questions: [
                {
                    id: 'a2-7-q1',
                    type: 'radio',
                    question: 'Comment les deux amies ont-elles acheté leurs billets pour le musée ?',
                    options: [
                        { id: 'a', text: 'À la billetterie du musée' },
                        { id: 'b', text: 'Par téléphone' },
                        { id: 'c', text: 'En ligne' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'Elles avaient réservé leurs billets en ligne pour éviter de faire la queue.'
                },
                {
                    id: 'a2-7-q2',
                    type: 'radio',
                    question: 'Qu\'était le bâtiment du musée avant sa rénovation ?',
                    options: [
                        { id: 'a', text: 'Une école' },
                        { id: 'b', text: 'Une usine' },
                        { id: 'c', text: 'Un hôpital' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le bâtiment du musée était une ancienne usine qui a été complètement rénovée.'
                },
                {
                    id: 'a2-7-q3',
                    type: 'checkbox',
                    question: 'Quels types d\'œuvres ont été mentionnés dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Des peintures' },
                        { id: 'b', text: 'Des sculptures' },
                        { id: 'c', text: 'Des installations vidéo' },
                        { id: 'd', text: 'Des mosaïques' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Le texte mentionne des peintures de Marie Dumont, des sculptures en métal de Thomas Leroy, et des installations vidéo. Les mosaïques ne sont pas mentionnées.'
                }
            ]
        },
        {
            id: 'a2-8',
            title: 'Conseils pour apprendre une langue étrangère',
            content: `<p>Apprendre une nouvelle langue peut sembler difficile, mais avec quelques bonnes habitudes, tout le monde peut progresser rapidement. Voici quelques conseils pratiques pour vous aider dans votre apprentissage.</p>
                     <p>Premièrement, la régularité est essentielle. Il vaut mieux étudier 20 minutes chaque jour plutôt que 3 heures une fois par semaine. Fixez-vous un horaire régulier et tenez-vous-y. Utilisez une application sur votre téléphone pour vous rappeler d'étudier.</p>
                     <p>Deuxièmement, immergez-vous dans la langue autant que possible. Regardez des films, écoutez de la musique ou des podcasts, lisez des livres simples ou des articles dans la langue que vous apprenez. Plus vous êtes exposé à la langue, plus vous progresserez rapidement.</p>
                     <p>Troisièmement, n'ayez pas peur de faire des erreurs ! C'est en parlant que l'on apprend le mieux. Cherchez des partenaires linguistiques en ligne ou rejoignez un groupe de conversation dans votre ville. La pratique est la clé du succès.</p>
                     <p>Enfin, fixez-vous des objectifs réalistes. Apprendre une langue prend du temps. Célébrez vos petites victoires : comprendre une chanson, tenir une conversation simple ou lire un article sans dictionnaire. Chaque progrès compte !</p>`,
            questions: [
                {
                    id: 'a2-8-q1',
                    type: 'radio',
                    question: 'Selon le texte, quelle est la meilleure façon d\'organiser son temps d\'étude ?',
                    options: [
                        { id: 'a', text: 'Étudier 3 heures une fois par semaine' },
                        { id: 'b', text: 'Étudier 20 minutes chaque jour' },
                        { id: 'c', text: 'Étudier seulement le week-end' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Selon le texte, il vaut mieux étudier 20 minutes chaque jour plutôt que 3 heures une fois par semaine.'
                },
                {
                    id: 'a2-8-q2',
                    type: 'checkbox',
                    question: 'Quelles activités sont recommandées pour s\'immerger dans la langue ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Regarder des films' },
                        { id: 'b', text: 'Écouter de la musique' },
                        { id: 'c', text: 'Lire des livres' },
                        { id: 'd', text: 'Faire des exercices de grammaire' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Le texte recommande de regarder des films, d\'écouter de la musique et de lire des livres. Les exercices de grammaire ne sont pas mentionnés comme moyen d\'immersion.'
                },
                {
                    id: 'a2-8-q3',
                    type: 'text',
                    question: 'Selon le texte, quelle est la meilleure façon d\'apprendre à parler une langue ?',
                    correctAnswer: 'en parlant',
                    explanation: 'Selon le texte, "c\'est en parlant que l\'on apprend le mieux".'
                }
            ]
        },
        {
            id: 'a2-9',
            title: 'Une visite chez le médecin',
            content: `<p>Hier, je ne me sentais pas bien. J'avais mal à la tête et j'avais de la fièvre. J'ai décidé d'aller voir mon médecin, le Dr Martin.</p>
                     <p>Dans la salle d'attente, il y avait quatre autres patients. J'ai attendu environ 30 minutes avant que ce soit mon tour. Une fois dans le cabinet du médecin, le Dr Martin m'a demandé ce qui n'allait pas.</p>
                     <p>Je lui ai expliqué mes symptômes : "J'ai mal à la tête depuis hier matin. J'ai aussi de la fièvre et je me sens très fatigué. J'ai pris du paracétamol, mais ça n'a pas beaucoup aidé."</p>
                     <p>Le Dr Martin m'a examiné. Il a pris ma température – j'avais 38,5°C. Il a regardé ma gorge et a écouté ma respiration avec son stéthoscope. "Vous avez une grippe", m'a-t-il dit. "Ce n'est pas grave, mais vous devez vous reposer et boire beaucoup d'eau."</p>
                     <p>Il m'a prescrit des médicaments pour la fièvre et la douleur. Il m'a aussi recommandé de rester chez moi pendant trois jours. J'ai remercié le Dr Martin et je suis allé à la pharmacie pour acheter les médicaments.</p>`,
            questions: [
                {
                    id: 'a2-9-q1',
                    type: 'radio',
                    question: 'Pourquoi la personne est-elle allée voir le médecin ?',
                    options: [
                        { id: 'a', text: 'Elle avait mal au ventre' },
                        { id: 'b', text: 'Elle avait mal à la tête et de la fièvre' },
                        { id: 'c', text: 'Elle s\'était cassé le bras' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne est allée voir le médecin car elle avait mal à la tête et de la fièvre.'
                },
                {
                    id: 'a2-9-q2',
                    type: 'checkbox',
                    question: 'Qu\'a fait le médecin pendant l\'examen ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Il a pris la température du patient' },
                        { id: 'b', text: 'Il a fait une prise de sang' },
                        { id: 'c', text: 'Il a regardé la gorge du patient' },
                        { id: 'd', text: 'Il a écouté la respiration du patient' }
                    ],
                    correctAnswer: ['a', 'c', 'd'],
                    explanation: 'Le médecin a pris la température du patient, a regardé sa gorge et a écouté sa respiration avec son stéthoscope. Il n\'a pas fait de prise de sang.'
                },
                {
                    id: 'a2-9-q3',
                    type: 'text',
                    question: 'Quel diagnostic le médecin a-t-il posé ?',
                    correctAnswer: 'une grippe',
                    explanation: 'Le médecin a diagnostiqué une grippe, comme indiqué dans le quatrième paragraphe.'
                }
            ]
        },
        {
            id: 'a2-10',
            title: 'Une soirée au cinéma',
            content: `<p>Samedi dernier, j'ai invité mon amie Léa à aller au cinéma. Nous avons décidé de voir le nouveau film français "La Vie en couleurs", qui venait de sortir. Le film commençait à 20h00.</p>
                     <p>Nous sommes arrivés au cinéma à 19h30. Il y avait beaucoup de monde et une longue file d'attente à la caisse. Heureusement, j'avais réservé nos billets en ligne, donc nous sommes allés directement aux distributeurs automatiques pour les récupérer.</p>
                     <p>Avant d'entrer dans la salle, nous avons acheté du popcorn et deux sodas. Notre salle était la numéro 7, au premier étage. Nous avons trouvé nos places, au milieu de la rangée 10. Les sièges étaient confortables et nous avions une très bonne vue de l'écran.</p>
                     <p>Le film était excellent ! C'était l'histoire d'une jeune artiste peintre qui découvre qu'elle peut voir des couleurs invisibles pour les autres personnes. L'actrice principale jouait très bien et les images étaient magnifiques. À la fin du film, tout le public a applaudi.</p>
                     <p>Après le film, Léa et moi avons discuté de l'histoire en prenant un verre dans un café près du cinéma. Nous avons passé une très agréable soirée.</p>`,
            questions: [
                {
                    id: 'a2-10-q1',
                    type: 'radio',
                    question: 'Comment ont-ils obtenu leurs billets ?',
                    options: [
                        { id: 'a', text: 'Ils les ont achetés à la caisse' },
                        { id: 'b', text: 'Ils les ont réservés en ligne et récupérés aux distributeurs automatiques' },
                        { id: 'c', text: 'Ils les ont reçus gratuitement' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Ils avaient réservé leurs billets en ligne et les ont récupérés aux distributeurs automatiques.'
                },
                {
                    id: 'a2-10-q2',
                    type: 'checkbox',
                    question: 'Qu\'ont-ils acheté avant d\'entrer dans la salle ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Du popcorn' },
                        { id: 'b', text: 'Des bonbons' },
                        { id: 'c', text: 'Des sodas' },
                        { id: 'd', text: 'Des sandwichs' }
                    ],
                    correctAnswer: ['a', 'c'],
                    explanation: 'Avant d\'entrer dans la salle, ils ont acheté du popcorn et deux sodas. Les bonbons et les sandwichs ne sont pas mentionnés.'
                },
                {
                    id: 'a2-10-q3',
                    type: 'text',
                    question: 'Quel était le sujet du film ?',
                    correctAnswer: 'une artiste peintre qui voit des couleurs invisibles',
                    explanation: 'Le film racontait l\'histoire d\'une jeune artiste peintre qui découvre qu\'elle peut voir des couleurs invisibles pour les autres personnes.'
                }
            ]
        },
        {
            id: 'a2-11',
            title: 'La colocation',
            content: `<p>Depuis six mois, je partage un appartement avec deux autres étudiants, Thomas et Julie. Notre appartement se trouve près de l'université, dans un quartier animé avec beaucoup de cafés et de restaurants.</p>
                     <p>L'appartement n'est pas très grand, mais il est fonctionnel. Il y a trois chambres individuelles, un salon commun, une cuisine équipée et une salle de bain. Nous avons aussi un petit balcon où nous avons mis des plantes et une table pour manger quand il fait beau.</p>
                     <p>Pour organiser notre vie commune, nous avons établi quelques règles. Chacun fait le ménage à tour de rôle. Nous avons un planning affiché sur le réfrigérateur. Pour les courses, nous achetons ensemble les produits de base comme le lait, le café ou le papier toilette. Pour les repas, nous cuisinons souvent ensemble le soir, c'est plus économique et plus convivial.</p>
                     <p>Bien sûr, la colocation présente parfois des difficultés. Par exemple, Thomas aime écouter de la musique très fort, ce qui peut être gênant quand j'étudie. Julie invite souvent ses amis, et parfois ils restent tard le soir. Mais nous discutons de nos problèmes et trouvons toujours des compromis.</p>
                     <p>En général, cette expérience de colocation est très positive. J'économise sur le loyer, je ne me sens pas seul et j'ai découvert que vivre avec d'autres personnes m'apprend beaucoup sur moi-même.</p>`,
            questions: [
                {
                    id: 'a2-11-q1',
                    type: 'radio',
                    question: 'Depuis combien de temps la personne partage-t-elle un appartement ?',
                    options: [
                        { id: 'a', text: 'Trois mois' },
                        { id: 'b', text: 'Six mois' },
                        { id: 'c', text: 'Un an' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne partage un appartement depuis six mois, comme indiqué au début du texte.'
                },
                {
                    id: 'a2-11-q2',
                    type: 'checkbox',
                    question: 'Quelles règles ont-ils établies pour la colocation ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Faire le ménage à tour de rôle' },
                        { id: 'b', text: 'Acheter ensemble les produits de base' },
                        { id: 'c', text: 'Interdire les invités après 22h' },
                        { id: 'd', text: 'Cuisiner ensemble le soir' }
                    ],
                    correctAnswer: ['a', 'b', 'd'],
                    explanation: 'Ils ont établi les règles suivantes : faire le ménage à tour de rôle, acheter ensemble les produits de base et cuisiner ensemble le soir. L\'interdiction des invités après 22h n\'est pas mentionnée.'
                },
                {
                    id: 'a2-11-q3',
                    type: 'text',
                    question: 'Quel est le problème avec Thomas mentionné dans le texte ?',
                    correctAnswer: 'il écoute de la musique très fort',
                    explanation: 'Le problème avec Thomas est qu\'il aime écouter de la musique très fort, ce qui peut être gênant pour la personne quand elle étudie.'
                }
            ]
        },
        {
            id: 'a2-12',
            title: 'Les préparatifs de voyage',
            content: `<p>Dans deux semaines, je pars en vacances au Portugal avec ma femme. Nous avons réservé notre voyage il y a trois mois et maintenant, nous faisons les derniers préparatifs.</p>
                     <p>D'abord, nous avons vérifié nos passeports. Ils sont encore valides, donc pas de problème de ce côté. Ensuite, nous avons réservé une navette pour aller à l'aéroport. Notre vol part très tôt le matin, à 6h30, et les transports en commun ne fonctionnent pas à cette heure-là.</p>
                     <p>Hier, j'ai commencé à préparer ma valise. Comme nous partons pour dix jours et que la météo sera chaude, j'emporte surtout des vêtements légers : des t-shirts, des shorts, un maillot de bain et des sandales. J'ai aussi préparé une petite trousse de pharmacie avec des médicaments de base, de la crème solaire et des pansements.</p>
                     <p>Aujourd'hui, j'ai retiré de l'argent et j'ai échangé des euros contre des euros (le Portugal utilise aussi l'euro). Ma femme s'est occupée des guides touristiques et des cartes. Nous avons également fait une liste des endroits que nous voulons visiter : Lisbonne, Porto, et quelques plages de l'Algarve.</p>
                     <p>Le plus important est déjà fait : nous avons réservé les vols et les hôtels pour tout notre séjour. Nous sommes très impatients de découvrir ce beau pays !</p>`,
            questions: [
                {
                    id: 'a2-12-q1',
                    type: 'radio',
                    question: 'Dans combien de temps le couple part-il en vacances ?',
                    options: [
                        { id: 'a', text: 'Dans une semaine' },
                        { id: 'b', text: 'Dans deux semaines' },
                        { id: 'c', text: 'Dans trois mois' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le couple part en vacances dans deux semaines, comme indiqué au début du texte.'
                },
                {
                    id: 'a2-12-q2',
                    type: 'checkbox',
                    question: 'Quels vêtements la personne emporte-t-elle ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Des t-shirts' },
                        { id: 'b', text: 'Des pulls' },
                        { id: 'c', text: 'Des shorts' },
                        { id: 'd', text: 'Un maillot de bain' }
                    ],
                    correctAnswer: ['a', 'c', 'd'],
                    explanation: 'La personne emporte des t-shirts, des shorts et un maillot de bain. Les pulls ne sont pas mentionnés.'
                },
                {
                    id: 'a2-12-q3',
                    type: 'text',
                    question: 'Quelles villes portugaises le couple souhaite-t-il visiter ?',
                    correctAnswer: 'Lisbonne et Porto',
                    explanation: 'Le couple souhaite visiter Lisbonne et Porto, ainsi que quelques plages de l\'Algarve.'
                }
            ]
        },
        {
            id: 'a2-13',
            title: 'Un nouveau hobby',
            content: `<p>Depuis trois mois, j'ai commencé un nouveau hobby : la photographie. Tout a commencé quand j'ai reçu un appareil photo numérique pour mon anniversaire. Au début, je ne savais pas vraiment comment l'utiliser, alors j'ai décidé de prendre des cours.</p>
                     <p>J'ai trouvé un atelier de photographie dans ma ville qui propose des cours pour débutants le samedi matin. Le professeur, Monsieur Dubois, est un photographe professionnel très sympathique et patient. Dans son cours, nous apprenons les bases de la photographie : comment utiliser les différentes fonctions de l'appareil, l'importance de la lumière, les règles de composition...</p>
                     <p>Maintenant, je sors souvent prendre des photos dans différents endroits. J'aime particulièrement photographier la nature : les paysages, les fleurs, les arbres. J'essaie aussi de capturer des moments de la vie quotidienne dans les rues de ma ville. Parfois, je me lève très tôt pour profiter de la lumière du matin, qui est parfaite pour les photos.</p>
                     <p>Le week-end dernier, j'ai participé à une sortie photo organisée par l'atelier. Nous sommes allés dans un petit village de montagne et nous avons passé la journée à prendre des photos. C'était une expérience très enrichissante car j'ai pu discuter avec d'autres passionnés et recevoir des conseils.</p>
                     <p>La photographie est devenue une vraie passion pour moi. J'ai créé un compte sur Instagram pour partager mes meilleures photos et j'ai déjà reçu de nombreux commentaires positifs. Mon prochain objectif est d'organiser une petite exposition dans un café de mon quartier.</p>`,
            questions: [
                {
                    id: 'a2-13-q1',
                    type: 'radio',
                    question: 'Comment la personne a-t-elle commencé la photographie ?',
                    options: [
                        { id: 'a', text: 'Elle a acheté un appareil photo' },
                        { id: 'b', text: 'Elle a reçu un appareil photo pour son anniversaire' },
                        { id: 'c', text: 'Un ami lui a prêté un appareil photo' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La personne a commencé la photographie après avoir reçu un appareil photo numérique pour son anniversaire.'
                },
                {
                    id: 'a2-13-q2',
                    type: 'checkbox',
                    question: 'Qu\'est-ce que la personne aime photographier ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Les paysages' },
                        { id: 'b', text: 'Les portraits' },
                        { id: 'c', text: 'Les fleurs' },
                        { id: 'd', text: 'La vie quotidienne dans les rues' }
                    ],
                    correctAnswer: ['a', 'c', 'd'],
                    explanation: 'La personne aime photographier les paysages, les fleurs et la vie quotidienne dans les rues. Les portraits ne sont pas mentionnés spécifiquement.'
                },
                {
                    id: 'a2-13-q3',
                    type: 'text',
                    question: 'Quel est le prochain objectif de la personne concernant sa photographie ?',
                    correctAnswer: 'organiser une exposition dans un café',
                    explanation: 'Le prochain objectif de la personne est d\'organiser une petite exposition dans un café de son quartier.'
                }
            ]
        }
    ],
    'B1': [
        {
            id: 'b1-1',
            title: 'La vie en ville',
            content: `<p>De plus en plus de Français préfèrent habiter en ville plutôt qu'à la campagne. Pourquoi ? La vie urbaine offre de nombreux avantages. D'abord, les transports en commun permettent de se déplacer facilement sans voiture. Ensuite, on trouve tous les services nécessaires à proximité : supermarchés, médecins, écoles et universités.</p>
                     <p>Cependant, la vie en ville présente aussi des inconvénients. Le coût de la vie est généralement plus élevé, surtout pour le logement. La pollution et le bruit peuvent également être problématiques. Certaines personnes se plaignent du stress et du rythme de vie trop rapide.</p>
                     <p>Malgré ces aspects négatifs, les grandes villes françaises comme Paris, Lyon et Marseille continuent d'attirer de nouveaux habitants chaque année. Les jeunes, en particulier, s'y installent pour leurs études ou pour trouver un emploi. Les opportunités professionnelles et culturelles restent les principales raisons de choisir la vie urbaine.</p>`,
            questions: [
                {
                    id: 'b1-1-q1',
                    type: 'radio',
                    question: 'Selon le texte, pourquoi les Français préfèrent-ils vivre en ville ?',
                    options: [
                        { id: 'a', text: 'Pour le climat plus agréable' },
                        { id: 'b', text: 'Pour les transports en commun et la proximité des services' },
                        { id: 'c', text: 'Pour les logements moins chers' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Les Français préfèrent vivre en ville pour les transports en commun et la proximité des services essentiels.'
                },
                {
                    id: 'b1-1-q2',
                    type: 'checkbox',
                    question: 'Quels sont les inconvénients de la vie en ville mentionnés dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Le manque de transports' },
                        { id: 'b', text: 'Le coût élevé du logement' },
                        { id: 'c', text: 'La pollution et le bruit' },
                        { id: 'd', text: 'Le stress et le rythme de vie rapide' }
                    ],
                    correctAnswer: ['b', 'c', 'd'],
                    explanation: 'Les inconvénients mentionnés sont le coût élevé du logement, la pollution et le bruit, et le stress et le rythme de vie rapide.'
                },
                {
                    id: 'b1-1-q3',
                    type: 'text',
                    question: 'Qui sont les personnes qui s\'installent principalement dans les grandes villes françaises ?',
                    correctAnswer: 'Les jeunes',
                    explanation: 'Ce sont principalement les jeunes qui s\'installent dans les grandes villes françaises pour leurs études ou pour trouver un emploi.'
                }
            ]
        },
        {
            id: 'b1-2',
            title: 'Le télétravail en France',
            content: `<p>Depuis la crise sanitaire de 2020, le télétravail s'est considérablement développé en France. Cette nouvelle façon de travailler, qui permet aux employés de travailler depuis leur domicile, a bouleversé les habitudes professionnelles de nombreux Français.</p>
                     <p>Les avantages du télétravail sont nombreux. D'abord, les salariés gagnent du temps en évitant les trajets quotidiens entre leur domicile et leur lieu de travail. Ensuite, ils peuvent organiser leur journée plus librement et concilier plus facilement vie professionnelle et vie personnelle. De plus, certaines études montrent que la productivité peut augmenter grâce à un environnement de travail plus calme.</p>
                     <p>Toutefois, le télétravail présente aussi des inconvénients. L'isolement social est souvent cité comme le principal problème : les échanges informels avec les collègues manquent à beaucoup de télétravailleurs. Par ailleurs, la frontière entre vie professionnelle et vie privée devient parfois floue, ce qui peut créer du stress. Enfin, tous les métiers ne sont pas adaptés au télétravail, ce qui crée des inégalités entre les travailleurs.</p>
                     <p>Aujourd'hui, de nombreuses entreprises françaises adoptent un modèle hybride, permettant à leurs employés de partager leur temps entre le bureau et le domicile. Ce compromis semble satisfaire la majorité des travailleurs qui souhaitent conserver les avantages du télétravail tout en maintenant un lien social avec leurs collègues.</p>`,
            questions: [
                {
                    id: 'b1-2-q1',
                    type: 'radio',
                    question: 'Selon le texte, quand le télétravail s\'est-il développé en France ?',
                    options: [
                        { id: 'a', text: 'Depuis les années 1990' },
                        { id: 'b', text: 'Depuis 2010' },
                        { id: 'c', text: 'Depuis la crise sanitaire de 2020' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'Le télétravail s\'est considérablement développé en France depuis la crise sanitaire de 2020.'
                },
                {
                    id: 'b1-2-q2',
                    type: 'checkbox',
                    question: 'Quels sont les avantages du télétravail mentionnés dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Gain de temps sur les trajets' },
                        { id: 'b', text: 'Meilleure organisation de la journée' },
                        { id: 'c', text: 'Plus de contacts sociaux' },
                        { id: 'd', text: 'Augmentation potentielle de la productivité' }
                    ],
                    correctAnswer: ['a', 'b', 'd'],
                    explanation: 'Les avantages mentionnés sont le gain de temps en évitant les trajets, une organisation plus libre de la journée, et une possible augmentation de la productivité. Les contacts sociaux sont au contraire réduits, ce qui est présenté comme un inconvénient.'
                },
                {
                    id: 'b1-2-q3',
                    type: 'text',
                    question: 'Quel modèle de travail adoptent aujourd\'hui de nombreuses entreprises françaises ?',
                    correctAnswer: 'Un modèle hybride',
                    explanation: 'Aujourd\'hui, de nombreuses entreprises françaises adoptent un modèle hybride, permettant aux employés de partager leur temps entre le bureau et le domicile.'
                }
            ]
        },
        {
            id: 'b1-3',
            title: 'Le système éducatif français',
            content: `<p>Le système éducatif français est organisé en plusieurs cycles. L'éducation est obligatoire pour tous les enfants de 3 à 16 ans. Cette obligation s'applique à tous les enfants français ou étrangers résidant en France.</p>
                     <p>Le parcours scolaire commence par l'école maternelle, de 3 à 6 ans. Ensuite, les enfants entrent à l'école élémentaire pendant cinq ans, de 6 à 11 ans. Ils apprennent à lire, écrire, compter et découvrent différentes matières comme l'histoire, la géographie et les sciences.</p>
                     <p>À 11 ans, les élèves entrent au collège pour quatre années d'études. Ils étudient des matières plus spécifiques et commencent généralement l'apprentissage d'une deuxième langue étrangère. À la fin du collège, ils passent le diplôme national du brevet.</p>
                     <p>Après le collège, la majorité des élèves poursuivent leurs études au lycée pendant trois ans. Ils préparent le baccalauréat, diplôme nécessaire pour accéder à l'enseignement supérieur. Il existe différentes filières au lycée : générale, technologique ou professionnelle.</p>
                     <p>L'enseignement supérieur offre ensuite de nombreuses possibilités : universités, grandes écoles, instituts spécialisés... Les études sont organisées selon le système LMD : Licence (3 ans), Master (2 ans) et Doctorat (3 ans ou plus).</p>`,
            questions: [
                {
                    id: 'b1-3-q1',
                    type: 'radio',
                    question: 'À quel âge l\'éducation devient-elle obligatoire en France ?',
                    options: [
                        { id: 'a', text: 'À 3 ans' },
                        { id: 'b', text: 'À 6 ans' },
                        { id: 'c', text: 'À 11 ans' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'L\'éducation est obligatoire pour tous les enfants de 3 à 16 ans en France.'
                },
                {
                    id: 'b1-3-q2',
                    type: 'checkbox',
                    question: 'Quelles sont les filières disponibles au lycée ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Générale' },
                        { id: 'b', text: 'Technologique' },
                        { id: 'c', text: 'Artistique' },
                        { id: 'd', text: 'Professionnelle' }
                    ],
                    correctAnswer: ['a', 'b', 'd'],
                    explanation: 'Il existe trois filières au lycée : générale, technologique et professionnelle. La filière artistique n\'est pas mentionnée comme une filière distincte.'
                },
                {
                    id: 'b1-3-q3',
                    type: 'text',
                    question: 'Quel diplôme est nécessaire pour accéder à l\'enseignement supérieur ?',
                    correctAnswer: 'le baccalauréat',
                    explanation: 'Le baccalauréat est le diplôme nécessaire pour accéder à l\'enseignement supérieur en France.'
                }
            ]
        },
        {
            id: 'b1-4',
            title: 'Les énergies renouvelables',
            content: `<p>Face au changement climatique et à l'épuisement des ressources fossiles, les énergies renouvelables représentent une solution d'avenir. Ces sources d'énergie proviennent de phénomènes naturels réguliers ou constants, comme le soleil, le vent, les chutes d'eau, les marées, ou la chaleur de la Terre.</p>
                     <p>En France, l'énergie hydraulique est la première source d'électricité renouvelable. Les barrages permettent de produire de l'électricité en utilisant la force de l'eau. Cette énergie est fiable et peut être mobilisée rapidement pour répondre aux pics de consommation.</p>
                     <p>L'énergie solaire se développe également avec l'installation de panneaux photovoltaïques sur les toits des maisons ou dans des centrales solaires. Ces panneaux transforment la lumière du soleil en électricité. Bien que cette technologie dépende de l'ensoleillement, elle devient de plus en plus efficace et moins coûteuse.</p>
                     <p>L'énergie éolienne utilise la force du vent pour faire tourner des hélices qui produisent de l'électricité. Les éoliennes sont de plus en plus nombreuses dans le paysage français, notamment dans les régions venteuses. Des projets d'éoliennes en mer sont également en cours de développement.</p>
                     <p>Malgré leurs avantages écologiques, les énergies renouvelables font face à certains défis : intermittence de production, coût d'installation ou impact visuel. Cependant, leur développement est essentiel pour réduire les émissions de gaz à effet de serre et assurer notre indépendance énergétique.</p>`,
            questions: [
                {
                    id: 'b1-4-q1',
                    type: 'radio',
                    question: 'Quelle est la première source d\'électricité renouvelable en France ?',
                    options: [
                        { id: 'a', text: 'L\'énergie solaire' },
                        { id: 'b', text: 'L\'énergie éolienne' },
                        { id: 'c', text: 'L\'énergie hydraulique' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'En France, l\'énergie hydraulique est la première source d\'électricité renouvelable.'
                },
                {
                    id: 'b1-4-q2',
                    type: 'checkbox',
                    question: 'Quels sont les défis auxquels font face les énergies renouvelables ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'L\'intermittence de production' },
                        { id: 'b', text: 'Le coût d\'installation' },
                        { id: 'c', text: 'L\'impact visuel' },
                        { id: 'd', text: 'La popularité excessive' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Les défis mentionnés sont l\'intermittence de production, le coût d\'installation et l\'impact visuel. La popularité excessive n\'est pas mentionnée comme un défi.'
                },
                {
                    id: 'b1-4-q3',
                    type: 'text',
                    question: 'Que transforment les panneaux photovoltaïques en électricité ?',
                    correctAnswer: 'la lumière du soleil',
                    explanation: 'Les panneaux photovoltaïques transforment la lumière du soleil en électricité.'
                }
            ]
        },
        {
            id: 'b1-5',
            title: 'Le tourisme durable',
            content: `<p>Le tourisme est l'un des secteurs économiques les plus importants au monde, mais son impact sur l'environnement et les communautés locales peut être considérable. Face à ce constat, le tourisme durable gagne en popularité. Ce type de tourisme vise à respecter l'environnement et la culture locale tout en contribuant au développement économique des régions visitées.</p>
                     <p>Plusieurs pratiques caractérisent le tourisme durable. D'abord, le choix des transports : privilégier le train plutôt que l'avion permet de réduire significativement son empreinte carbone. Ensuite, l'hébergement : opter pour des établissements éco-responsables, qui limitent leur consommation d'eau et d'énergie, utilisent des produits locaux et recyclent leurs déchets.</p>
                     <p>Le comportement du voyageur est également essentiel. Respecter les sites naturels en ne laissant aucun déchet, suivre les sentiers balisés pour préserver la flore, et observer les animaux à distance sont des règles fondamentales. Dans les villes ou villages, il est important de respecter les coutumes locales, de demander l'autorisation avant de photographier des personnes, et d'acheter des souvenirs fabriqués localement.</p>
                     <p>En France, de nombreuses initiatives encouragent le tourisme durable. Des labels comme "Clef Verte" pour les hébergements ou "Grand Site de France" pour les sites naturels permettent aux voyageurs d'identifier facilement les options responsables. Des régions entières, comme le Jura ou les Cévennes, misent sur l'écotourisme pour attirer des visiteurs respectueux de leur patrimoine naturel et culturel.</p>
                     <p>Voyager de manière durable ne signifie pas renoncer au plaisir. Au contraire, cette approche permet souvent de vivre des expériences plus authentiques et enrichissantes, en découvrant des lieux moins fréquentés et en créant des liens véritables avec les habitants.</p>`,
            questions: [
                {
                    id: 'b1-5-q1',
                    type: 'radio',
                    question: 'Quel est l\'objectif principal du tourisme durable ?',
                    options: [
                        { id: 'a', text: 'Attirer plus de touristes dans les régions isolées' },
                        { id: 'b', text: 'Respecter l\'environnement et la culture locale tout en contribuant au développement économique' },
                        { id: 'c', text: 'Réduire le nombre de touristes dans les zones surpeuplées' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le tourisme durable vise à respecter l\'environnement et la culture locale tout en contribuant au développement économique des régions visitées.'
                },
                {
                    id: 'b1-5-q2',
                    type: 'checkbox',
                    question: 'Quelles pratiques caractérisent le tourisme durable ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Privilégier le train plutôt que l\'avion' },
                        { id: 'b', text: 'Choisir des hébergements éco-responsables' },
                        { id: 'c', text: 'Photographier les habitants sans leur permission' },
                        { id: 'd', text: 'Acheter des souvenirs fabriqués localement' }
                    ],
                    correctAnswer: ['a', 'b', 'd'],
                    explanation: 'Les pratiques durables mentionnées sont : privilégier le train plutôt que l\'avion, choisir des hébergements éco-responsables, et acheter des souvenirs fabriqués localement. Photographier les habitants sans leur permission va à l\'encontre du respect des coutumes locales.'
                },
                {
                    id: 'b1-5-q3',
                    type: 'text',
                    question: 'Quel label français permet d\'identifier les hébergements éco-responsables ?',
                    correctAnswer: 'Clef Verte',
                    explanation: 'Le label "Clef Verte" permet aux voyageurs d\'identifier facilement les hébergements éco-responsables en France.'
                }
            ]
        },
        {
            id: 'b1-6',
            title: 'Les festivals de musique en France',
            content: `<p>La France est reconnue pour sa richesse culturelle, et les festivals de musique y occupent une place importante. Chaque année, des centaines d'événements musicaux sont organisés dans tout le pays, attirant des millions de spectateurs français et étrangers.</p>
                     <p>Les Francofolies de La Rochelle, créées en 1985, célèbrent la chanson francophone pendant cinq jours en juillet. Ce festival présente aussi bien des artistes confirmés que de jeunes talents. Dans un autre style, les Eurockéennes de Belfort, l'un des plus grands festivals de rock en France, accueille chaque année près de 130 000 spectateurs sur un site naturel exceptionnel entre lac et collines.</p>
                     <p>Le Festival d'Avignon, bien que principalement consacré au théâtre, propose également de nombreux concerts et performances musicales. À Paris, Rock en Seine transforme le Domaine national de Saint-Cloud en un immense espace de concerts pendant trois jours fin août, avec une programmation internationale de qualité.</p>
                     <p>Ces dernières années, les festivals ont dû faire face à plusieurs défis : contraintes financières, préoccupations environnementales, et plus récemment, la crise sanitaire. Beaucoup ont adapté leur format, proposant des événements hybrides mêlant spectacles en présentiel et diffusions en ligne. D'autres ont mis en place des mesures écologiques comme l'utilisation de gobelets réutilisables ou la promotion des transports en commun.</p>
                     <p>Malgré ces difficultés, les festivals restent des événements culturels majeurs qui contribuent au dynamisme des régions françaises et à la promotion de la diversité musicale. Pour beaucoup de Français, assister à un festival est devenu un rituel estival incontournable.</p>`,
            questions: [
                {
                    id: 'b1-6-q1',
                    type: 'radio',
                    question: 'Quel festival est spécialement dédié à la chanson francophone ?',
                    options: [
                        { id: 'a', text: 'Les Eurockéennes de Belfort' },
                        { id: 'b', text: 'Rock en Seine' },
                        { id: 'c', text: 'Les Francofolies de La Rochelle' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'Les Francofolies de La Rochelle, créées en 1985, célèbrent la chanson francophone pendant cinq jours en juillet.'
                },
                {
                    id: 'b1-6-q2',
                    type: 'checkbox',
                    question: 'Quels défis ont dû affronter les festivals ces dernières années ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Contraintes financières' },
                        { id: 'b', text: 'Préoccupations environnementales' },
                        { id: 'c', text: 'Crise sanitaire' },
                        { id: 'd', text: 'Manque d\'artistes' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Les festivals ont dû faire face à plusieurs défis : contraintes financières, préoccupations environnementales, et la crise sanitaire. Le manque d\'artistes n\'est pas mentionné dans le texte.'
                },
                {
                    id: 'b1-6-q3',
                    type: 'text',
                    question: 'Quel type de mesures écologiques ont adopté certains festivals ?',
                    correctAnswer: 'gobelets réutilisables',
                    explanation: 'Parmi les mesures écologiques mentionnées, certains festivals ont mis en place l\'utilisation de gobelets réutilisables.'
                }
            ]
        },
        {
            id: 'b1-7',
            title: 'Les marchés en France',
            content: `<p>Les marchés font partie intégrante de la culture française. Dans presque toutes les villes et villages de France, un marché s'installe au moins une fois par semaine. Ces lieux vivants et colorés sont bien plus que de simples endroits où faire ses courses : ce sont des espaces de rencontre et d'échange social.</p>
                     <p>Les marchés alimentaires sont les plus répandus. On y trouve des étals de fruits et légumes frais, souvent cultivés localement, ainsi que des stands de fromages, charcuteries, viandes et produits de la mer. Les producteurs locaux y vendent directement leurs produits, ce qui garantit fraîcheur et qualité. C'est aussi l'occasion de découvrir des spécialités régionales qui font la richesse de la gastronomie française.</p>
                     <p>Il existe également des marchés spécialisés comme les marchés aux fleurs, les marchés aux livres ou aux puces. Ces derniers, particulièrement prisés des amateurs d'antiquités et de brocante, permettent de dénicher des objets rares et de seconde main. Le célèbre marché aux puces de Saint-Ouen, au nord de Paris, est le plus grand du monde avec ses 2 500 marchands.</p>
                     <p>Avec l'intérêt croissant pour une consommation plus responsable, les marchés connaissent un regain de popularité. Ils offrent une alternative aux supermarchés en favorisant les circuits courts et en réduisant les emballages. De plus en plus de marchés biologiques se développent, répondant à la demande des consommateurs pour des produits plus sains et respectueux de l'environnement.</p>
                     <p>Au-delà de leur fonction commerciale, les marchés français sont des institutions culturelles qui contribuent à maintenir le lien social et à préserver les traditions culinaires locales.</p>`,
            questions: [
                {
                    id: 'b1-7-q1',
                    type: 'radio',
                    question: 'Selon le texte, que sont les marchés français au-delà de leur fonction commerciale ?',
                    options: [
                        { id: 'a', text: 'Des attractions touristiques' },
                        { id: 'b', text: 'Des espaces de rencontre et d\'échange social' },
                        { id: 'c', text: 'Des lieux réservés aux habitants locaux' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Selon le texte, les marchés sont des espaces de rencontre et d\'échange social, bien plus que de simples endroits où faire ses courses.'
                },
                {
                    id: 'b1-7-q2',
                    type: 'checkbox',
                    question: 'Quels types de marchés spécialisés sont mentionnés dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Marchés aux fleurs' },
                        { id: 'b', text: 'Marchés aux livres' },
                        { id: 'c', text: 'Marchés aux puces' },
                        { id: 'd', text: 'Marchés aux vêtements' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Le texte mentionne trois types de marchés spécialisés : les marchés aux fleurs, les marchés aux livres et les marchés aux puces. Les marchés aux vêtements ne sont pas mentionnés.'
                },
                {
                    id: 'b1-7-q3',
                    type: 'text',
                    question: 'Quel est le marché aux puces le plus grand du monde selon le texte ?',
                    correctAnswer: 'Saint-Ouen',
                    explanation: 'Selon le texte, le marché aux puces de Saint-Ouen, au nord de Paris, est le plus grand du monde avec ses 2 500 marchands.'
                }
            ]
        },
        {
            id: 'b1-8',
            title: 'Le vélo en ville',
            content: `<p>Ces dernières années, le vélo connaît un essor remarquable dans les villes françaises. Ce moyen de transport écologique, économique et bon pour la santé séduit de plus en plus de citadins désireux d'éviter les embouteillages et de réduire leur empreinte carbone.</p>
                     <p>Pour encourager cette pratique, de nombreuses municipalités ont développé des infrastructures cyclables : pistes et bandes cyclables, parkings à vélos sécurisés, systèmes de vélos en libre-service. Paris, par exemple, a créé un réseau de "coronapistes" pendant la pandémie, ces voies cyclables temporaires qui ont ensuite été pérennisées. Lyon, Strasbourg et Bordeaux font également partie des villes les plus adaptées aux cyclistes en France.</p>
                     <p>Les avantages du vélo en ville sont nombreux. En plus d'être un mode de déplacement non polluant, il permet de faire de l'exercice quotidiennement. Les études montrent qu'une pratique régulière du vélo améliore la condition physique et réduit les risques de maladies cardiovasculaires. Sur de courtes distances en milieu urbain, le vélo est souvent plus rapide que la voiture ou les transports en commun.</p>
                     <p>Cependant, des défis persistent. La sécurité reste une préoccupation majeure pour les cyclistes, qui doivent parfois partager la route avec des véhicules motorisés. Le vol de vélos est également un problème récurrent. De plus, certaines personnes sont freinées par les conditions météorologiques défavorables ou le relief.</p>
                     <p>Malgré ces obstacles, le nombre de cyclistes urbains continue d'augmenter, signe d'une évolution durable des habitudes de déplacement en ville. Les associations de cyclistes militent activement pour améliorer encore les conditions de circulation à vélo et pour sensibiliser tous les usagers de la route au partage de l'espace public.</p>`,
            questions: [
                {
                    id: 'b1-8-q1',
                    type: 'radio',
                    question: 'Qu\'est-ce qu\'une "coronapiste" selon le texte ?',
                    options: [
                        { id: 'a', text: 'Une piste cyclable créée pendant la pandémie' },
                        { id: 'b', text: 'Une route réservée aux véhicules d\'urgence' },
                        { id: 'c', text: 'Un système de vélos en libre-service' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'Une "coronapiste" est une voie cyclable temporaire créée pendant la pandémie, qui a ensuite été pérennisée dans certaines villes comme Paris.'
                },
                {
                    id: 'b1-8-q2',
                    type: 'checkbox',
                    question: 'Quels sont les avantages du vélo en ville mentionnés dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'C\'est écologique' },
                        { id: 'b', text: 'C\'est bon pour la santé' },
                        { id: 'c', text: 'C\'est plus rapide sur de courtes distances' },
                        { id: 'd', text: 'C\'est moins cher que d\'acheter une voiture' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Les avantages mentionnés sont que le vélo est écologique, bon pour la santé et souvent plus rapide que la voiture ou les transports en commun sur de courtes distances en milieu urbain. Le coût par rapport à l\'achat d\'une voiture n\'est pas directement mentionné, bien que le texte indique que le vélo est "économique".'
                },
                {
                    id: 'b1-8-q3',
                    type: 'text',
                    question: 'Selon le texte, quels problèmes rencontrent encore les cyclistes en ville ?',
                    correctAnswer: 'la sécurité et le vol',
                    explanation: 'Selon le texte, la sécurité reste une préoccupation majeure pour les cyclistes et le vol de vélos est également un problème récurrent.'
                }
            ]
        },
        {
            id: 'b1-9',
            title: 'Le tourisme durable',
            content: `<p>Face aux défis environnementaux actuels, le secteur du tourisme connaît une transformation importante. Le tourisme durable, qui prend en compte les impacts économiques, sociaux et environnementaux, gagne en popularité auprès des voyageurs conscients de leur empreinte écologique.</p>
                     <p>Cette nouvelle approche du voyage vise à minimiser les effets négatifs du tourisme traditionnel. Par exemple, elle encourage l'utilisation de transports moins polluants, comme le train plutôt que l'avion pour les distances moyennes. Elle favorise également l'hébergement dans des établissements qui respectent l'environnement : hôtels avec certification écologique, éco-lodges ou logements chez l'habitant.</p>
                     <p>Au-delà de l'aspect environnemental, le tourisme durable a une dimension sociale importante. Il cherche à créer des bénéfices directs pour les populations locales, en soutenant les petits commerces, les restaurants de quartier et les artisans. Les voyageurs sont encouragés à découvrir la culture locale de manière respectueuse, en participant à des activités authentiques plutôt qu'à des attractions artificielles créées uniquement pour les touristes.</p>
                     <p>En France, de nombreuses initiatives se développent pour promouvoir ce type de tourisme. Certaines régions, comme la Bretagne ou l'Occitanie, mettent en place des labels spécifiques pour les professionnels du tourisme qui s'engagent dans une démarche écologique. Des plateformes en ligne spécialisées permettent de trouver facilement des hébergements et des activités respectueux de l'environnement.</p>
                     <p>Bien que le tourisme durable reste encore un marché de niche, il représente une tendance de fond qui pourrait redéfinir notre façon de voyager dans les années à venir. Les crises récentes, notamment sanitaires, ont accéléré cette prise de conscience collective sur la nécessité de repenser nos habitudes de voyage pour préserver les destinations que nous aimons tant.</p>`,
            questions: [
                {
                    id: 'b1-9-q1',
                    type: 'radio',
                    question: 'Quel moyen de transport est recommandé par le tourisme durable pour les distances moyennes ?',
                    options: [
                        { id: 'a', text: 'L\'avion' },
                        { id: 'b', text: 'Le train' },
                        { id: 'c', text: 'La voiture individuelle' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le tourisme durable encourage l\'utilisation de transports moins polluants, comme le train plutôt que l\'avion pour les distances moyennes.'
                },
                {
                    id: 'b1-9-q2',
                    type: 'checkbox',
                    question: 'Quels types d\'hébergements sont privilégiés par le tourisme durable ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Les hôtels avec certification écologique' },
                        { id: 'b', text: 'Les grands complexes touristiques' },
                        { id: 'c', text: 'Les éco-lodges' },
                        { id: 'd', text: 'Les logements chez l\'habitant' }
                    ],
                    correctAnswer: ['a', 'c', 'd'],
                    explanation: 'Le tourisme durable favorise l\'hébergement dans des établissements respectueux de l\'environnement : hôtels avec certification écologique, éco-lodges ou logements chez l\'habitant. Les grands complexes touristiques ne sont pas mentionnés comme étant privilégiés.'
                },
                {
                    id: 'b1-9-q3',
                    type: 'text',
                    question: 'Quelles régions françaises sont citées comme développant des labels pour le tourisme durable ?',
                    correctAnswer: 'la Bretagne et l\'Occitanie',
                    explanation: 'Selon le texte, certaines régions comme la Bretagne et l\'Occitanie mettent en place des labels spécifiques pour les professionnels du tourisme qui s\'engagent dans une démarche écologique.'
                }
            ]
        },
        {
            id: 'b1-10',
            title: 'Les nouvelles habitudes alimentaires des Français',
            content: `<p>Les habitudes alimentaires des Français connaissent une évolution significative ces dernières années. Si la gastronomie traditionnelle reste une fierté nationale, de nouvelles tendances émergent, reflétant des préoccupations croissantes pour la santé, l'environnement et le bien-être animal.</p>
                     <p>Le végétarisme et le véganisme gagnent du terrain, particulièrement chez les jeunes générations. Selon une étude récente, environ 5% des Français se déclarent végétariens et 1% végans. Mais au-delà de ces chiffres, c'est surtout le flexitarisme qui se développe : de nombreux Français réduisent leur consommation de viande sans l'exclure totalement de leur alimentation. Cette tendance se traduit par l'apparition de nouveaux produits dans les supermarchés, comme les alternatives végétales à la viande et aux produits laitiers.</p>
                     <p>L'intérêt pour les produits locaux et de saison s'est également renforcé. Les circuits courts, qui réduisent le nombre d'intermédiaires entre producteurs et consommateurs, sont de plus en plus populaires. Les marchés de producteurs et les AMAP (Associations pour le Maintien d'une Agriculture Paysanne) attirent un public grandissant, soucieux de soutenir l'agriculture locale et de consommer des produits plus frais et plus respectueux de l'environnement.</p>
                     <p>Le bio continue sa progression, avec une croissance annuelle à deux chiffres. La France est d'ailleurs devenue le deuxième marché européen pour les produits biologiques, derrière l'Allemagne. Cette tendance s'explique notamment par la méfiance envers les pesticides et autres produits chimiques utilisés dans l'agriculture conventionnelle. Les consommateurs sont de plus en plus attentifs à la composition des aliments qu'ils achètent et privilégient les produits avec des listes d'ingrédients courtes et compréhensibles.</p>
                     <p>Ces évolutions s'accompagnent d'un regain d'intérêt pour la cuisine maison. Cuisiner soi-même permet en effet de mieux contrôler la qualité et l'origine des ingrédients. Les cours de cuisine, les livres de recettes et les émissions culinaires connaissent un véritable succès, témoignant de cette volonté des Français de reprendre en main leur alimentation, tout en préservant le plaisir de manger qui reste une valeur fondamentale de la culture française.</p>`,
            questions: [
                {
                    id: 'b1-10-q1',
                    type: 'radio',
                    question: 'Quel pourcentage de Français se déclarent végétariens selon le texte ?',
                    options: [
                        { id: 'a', text: '1%' },
                        { id: 'b', text: '5%' },
                        { id: 'c', text: '10%' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Selon l\'étude mentionnée dans le texte, environ 5% des Français se déclarent végétariens.'
                },
                {
                    id: 'b1-10-q2',
                    type: 'checkbox',
                    question: 'Quelles tendances alimentaires sont mentionnées dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Le flexitarisme' },
                        { id: 'b', text: 'Les produits locaux et de saison' },
                        { id: 'c', text: 'La cuisine exotique' },
                        { id: 'd', text: 'Les produits biologiques' }
                    ],
                    correctAnswer: ['a', 'b', 'd'],
                    explanation: 'Le texte mentionne le flexitarisme, l\'intérêt pour les produits locaux et de saison, et les produits biologiques comme des tendances alimentaires en France. La cuisine exotique n\'est pas mentionnée.'
                },
                {
                    id: 'b1-10-q3',
                    type: 'text',
                    question: 'Que signifie le sigle AMAP mentionné dans le texte ?',
                    correctAnswer: 'Association pour le Maintien d\'une Agriculture Paysanne',
                    explanation: 'AMAP signifie Association pour le Maintien d\'une Agriculture Paysanne, comme indiqué dans le troisième paragraphe.'
                }
            ]
        },
        {
            id: 'b1-11',
            title: 'Le phénomène des podcasts en France',
            content: `<p>Les podcasts, ces contenus audio numériques disponibles sur Internet, connaissent un succès grandissant en France. Ce format, qui permet d'écouter des émissions à la demande, séduit un public de plus en plus large et diversifié.</p>
                     <p>Apparus au début des années 2000, les podcasts étaient initialement des rediffusions d'émissions de radio. Aujourd'hui, le paysage s'est considérablement enrichi. De nombreux créateurs indépendants proposent des contenus originaux sur des sujets variés : actualité, culture, histoire, science, développement personnel, ou encore divertissement. Cette diversité permet à chacun de trouver des contenus correspondant précisément à ses centres d'intérêt.</p>
                     <p>Le succès des podcasts s'explique en grande partie par leur facilité d'accès et leur format adapté aux modes de vie actuels. On peut les écouter n'importe où, n'importe quand : pendant les trajets quotidiens, en faisant du sport, ou en accomplissant des tâches ménagères. Cette flexibilité répond parfaitement aux contraintes de temps des auditeurs modernes. De plus, contrairement à la radio traditionnelle, l'auditeur peut choisir précisément ce qu'il souhaite écouter et à quel moment.</p>
                     <p>Les podcasts narratifs, qui racontent des histoires vraies à la manière d'enquêtes journalistiques, rencontrent un succès particulier en France. Des productions comme "Les Pieds sur terre" sur France Culture ou des créations indépendantes comme "Transfert" attirent des milliers d'auditeurs fidèles. Le format intimiste du podcast, souvent écouté au casque, crée une relation particulière entre le narrateur et l'auditeur, propice à l'immersion et à l'émotion.</p>
                     <p>Sur le plan économique, le modèle des podcasts reste encore en construction. Si certaines productions sont financées par la publicité ou le parrainage, d'autres expérimentent de nouveaux modèles comme les dons des auditeurs ou les abonnements. Les grandes plateformes comme Spotify ou Apple investissent massivement dans ce format, signe que le podcast est désormais considéré comme un média d'avenir incontournable dans le paysage médiatique français.</p>`,
            questions: [
                {
                    id: 'b1-11-q1',
                    type: 'radio',
                    question: 'Qu\'étaient initialement les podcasts selon le texte ?',
                    options: [
                        { id: 'a', text: 'Des émissions de télévision' },
                        { id: 'b', text: 'Des rediffusions d\'émissions de radio' },
                        { id: 'c', text: 'Des livres audio' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Selon le texte, les podcasts étaient initialement des rediffusions d\'émissions de radio.'
                },
                {
                    id: 'b1-11-q2',
                    type: 'checkbox',
                    question: 'Quels avantages des podcasts sont mentionnés dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'On peut les écouter n\'importe où' },
                        { id: 'b', text: 'Ils sont toujours gratuits' },
                        { id: 'c', text: 'On peut choisir quand les écouter' },
                        { id: 'd', text: 'Ils couvrent des sujets très variés' }
                    ],
                    correctAnswer: ['a', 'c', 'd'],
                    explanation: 'Les avantages mentionnés sont qu\'on peut écouter les podcasts n\'importe où, choisir quand les écouter, et qu\'ils couvrent des sujets très variés. Le texte n\'affirme pas que tous les podcasts sont gratuits, et mentionne même différents modèles économiques comme les abonnements.'
                },
                {
                    id: 'b1-11-q3',
                    type: 'text',
                    question: 'Quel type de podcasts rencontre un succès particulier en France selon le texte ?',
                    correctAnswer: 'les podcasts narratifs',
                    explanation: 'Selon le texte, les podcasts narratifs, qui racontent des histoires vraies à la manière d\'enquêtes journalistiques, rencontrent un succès particulier en France.'
                }
            ]
        },
        {
            id: 'b1-12',
            title: 'Les musées français à l\'ère numérique',
            content: `<p>Face aux évolutions technologiques et aux nouvelles attentes du public, les musées français se réinventent. La transformation numérique constitue un défi majeur pour ces institutions culturelles qui cherchent à rester pertinentes au XXIe siècle tout en préservant leur mission fondamentale de conservation et de transmission du patrimoine.</p>
                     <p>Les outils numériques ont profondément modifié l'expérience de visite. Les audioguides traditionnels laissent progressivement place à des applications mobiles interactives qui offrent des parcours personnalisés, des contenus enrichis et parfois des expériences de réalité augmentée. Au Louvre ou au Musée d'Orsay par exemple, ces applications permettent aux visiteurs d'obtenir des informations détaillées sur les œuvres qui les intéressent particulièrement, dans leur propre langue et à leur propre rythme.</p>
                     <p>La présence des musées sur Internet s'est également renforcée. La plupart des grandes institutions proposent désormais des visites virtuelles de leurs collections. Pendant les périodes de fermeture liées à la crise sanitaire, ces ressources ont connu un succès sans précédent. Le Centre Pompidou a ainsi vu le nombre de visiteurs de son site web tripler au printemps 2020. Les réseaux sociaux sont également devenus des canaux de communication essentiels, permettant aux musées de toucher un public plus jeune et international.</p>
                     <p>La numérisation des collections représente un autre aspect fondamental de cette transformation. Des projets comme celui de la Réunion des Musées Nationaux (RMN) visent à créer des bases de données exhaustives d'images en haute définition. Ces ressources sont précieuses non seulement pour le grand public mais aussi pour les chercheurs et les professionnels de l'éducation qui peuvent accéder à des œuvres parfois inaccessibles ou trop fragiles pour être exposées en permanence.</p>
                     <p>Si cette évolution numérique présente de nombreux avantages, elle soulève aussi des questions importantes. Comment maintenir la spécificité de l'expérience muséale, fondée sur la rencontre directe avec les œuvres originales ? Comment éviter la fracture numérique et s'assurer que ces innovations profitent à tous les publics ? Les musées français cherchent à trouver un équilibre, en considérant le numérique non pas comme une fin en soi mais comme un outil au service de leur mission culturelle fondamentale.</p>`,
            questions: [
                {
                    id: 'b1-12-q1',
                    type: 'radio',
                    question: 'Qu\'est-ce qui remplace progressivement les audioguides traditionnels dans les musées ?',
                    options: [
                        { id: 'a', text: 'Des guides en papier' },
                        { id: 'b', text: 'Des visites guidées en groupe' },
                        { id: 'c', text: 'Des applications mobiles interactives' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'Selon le texte, les audioguides traditionnels laissent progressivement place à des applications mobiles interactives.'
                },
                {
                    id: 'b1-12-q2',
                    type: 'checkbox',
                    question: 'Quels aspects de la transformation numérique des musées sont mentionnés dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Les applications mobiles pour les visites' },
                        { id: 'b', text: 'Les visites virtuelles en ligne' },
                        { id: 'c', text: 'La numérisation des collections' },
                        { id: 'd', text: 'Le remplacement des œuvres originales par des copies numériques' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Le texte mentionne les applications mobiles pour les visites, les visites virtuelles en ligne et la numérisation des collections comme aspects de la transformation numérique des musées. Il ne suggère pas le remplacement des œuvres originales par des copies numériques ; au contraire, il souligne l\'importance de l\'expérience directe avec les œuvres originales.'
                },
                {
                    id: 'b1-12-q3',
                    type: 'text',
                    question: 'Quelle institution a vu le nombre de visiteurs de son site web tripler au printemps 2020 ?',
                    correctAnswer: 'le Centre Pompidou',
                    explanation: 'Selon le texte, le Centre Pompidou a vu le nombre de visiteurs de son site web tripler au printemps 2020.'
                }
            ]
        },
        {
            id: 'b1-13',
            title: 'L\'apprentissage des langues étrangères en France',
            content: `<p>L'apprentissage des langues étrangères occupe une place importante dans le système éducatif français, qui a connu plusieurs réformes ces dernières années pour améliorer les compétences linguistiques des élèves. Si l'anglais reste la langue la plus étudiée, l'offre s'est diversifiée pour répondre aux défis d'un monde de plus en plus connecté.</p>
                     <p>À l'école primaire, l'enseignement d'une langue vivante étrangère est devenu obligatoire dès le CP (6-7 ans). Cette initiation précoce vise à familiariser les enfants avec les sonorités d'une autre langue à un âge où ils sont particulièrement réceptifs. L'approche pédagogique privilégie l'oral et les activités ludiques : chansons, jeux, saynètes... L'anglais est choisi dans la grande majorité des cas, mais certaines écoles proposent aussi l'allemand, l'espagnol ou l'italien.</p>
                     <p>Au collège et au lycée, l'apprentissage s'intensifie. Les élèves étudient généralement deux langues vivantes, parfois trois. Les méthodes pédagogiques ont évolué pour mettre davantage l'accent sur la communication et les compétences pratiques. Les programmes s'organisent autour du Cadre Européen Commun de Référence pour les Langues (CECRL), qui définit des niveaux de maîtrise précis, de A1 (débutant) à C2 (maîtrise). Les sections européennes ou internationales permettent aux élèves motivés d'approfondir leur apprentissage linguistique en suivant certains cours disciplinaires (histoire-géographie, mathématiques...) dans la langue étrangère étudiée.</p>
                     <p>En dehors du cadre scolaire, de nombreuses ressources existent pour apprendre ou améliorer ses compétences linguistiques. Les applications sur smartphone comme Duolingo ou Babbel connaissent un grand succès. Les échanges linguistiques, en présentiel ou via des plateformes comme Tandem, permettent une pratique avec des locuteurs natifs. Les séjours linguistiques à l'étranger restent également très prisés, notamment pendant les vacances scolaires.</p>
                     <p>Malgré ces efforts, les études internationales montrent que les Français restent en retrait par rapport à leurs voisins européens en matière de maîtrise des langues étrangères, notamment l'anglais. Ce constat a conduit à une réflexion sur les méthodes d'enseignement et à la mise en place de nouvelles initiatives comme le Plan Langues du ministère de l'Éducation nationale, qui vise à renforcer l'exposition quotidienne aux langues étrangères et à valoriser davantage l'oral dans les évaluations.</p>`,
            questions: [
                {
                    id: 'b1-13-q1',
                    type: 'radio',
                    question: 'À partir de quel âge l\'apprentissage d\'une langue vivante étrangère est-il obligatoire en France ?',
                    options: [
                        { id: 'a', text: 'À partir de 3 ans (maternelle)' },
                        { id: 'b', text: 'À partir de 6-7 ans (CP)' },
                        { id: 'c', text: 'À partir de 11 ans (collège)' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Selon le texte, l\'enseignement d\'une langue vivante étrangère est devenu obligatoire dès le CP (6-7 ans).'
                },
                {
                    id: 'b1-13-q2',
                    type: 'checkbox',
                    question: 'Quelles ressources pour apprendre les langues en dehors du cadre scolaire sont mentionnées dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Les applications sur smartphone' },
                        { id: 'b', text: 'Les échanges linguistiques' },
                        { id: 'c', text: 'Les cours particuliers' },
                        { id: 'd', text: 'Les séjours linguistiques' }
                    ],
                    correctAnswer: ['a', 'b', 'd'],
                    explanation: 'Le texte mentionne les applications sur smartphone, les échanges linguistiques et les séjours linguistiques comme ressources pour apprendre les langues en dehors du cadre scolaire. Les cours particuliers ne sont pas mentionnés.'
                },
                {
                    id: 'b1-13-q3',
                    type: 'text',
                    question: 'Quel est le nom du cadre qui définit les niveaux de maîtrise des langues de A1 à C2 ?',
                    correctAnswer: 'Cadre Européen Commun de Référence pour les Langues',
                    explanation: 'Selon le texte, le Cadre Européen Commun de Référence pour les Langues (CECRL) définit des niveaux de maîtrise précis, de A1 (débutant) à C2 (maîtrise).'
                }
            ]
        }
    ],
    'B2': [
        {
            id: 'b2-1',
            title: 'L\'intelligence artificielle dans notre quotidien',
            content: `<p>L'intelligence artificielle (IA) fait désormais partie intégrante de notre vie quotidienne, souvent sans même que nous en soyons conscients. Des assistants vocaux comme Siri ou Alexa aux recommandations personnalisées sur les plateformes de streaming, l'IA influence nos choix et nos comportements de manière subtile mais significative.</p>
                     <p>Dans le domaine médical, l'IA révolutionne les diagnostics et les traitements. Des algorithmes peuvent analyser des images médicales avec une précision parfois supérieure à celle des spécialistes humains, permettant une détection précoce de certaines pathologies. Cependant, les professionnels de santé soulignent que ces outils doivent rester des aides à la décision et non des substituts au jugement médical.</p>
                     <p>L'éducation n'échappe pas non plus à cette révolution numérique. Des plateformes d'apprentissage adaptatives proposent des parcours personnalisés aux élèves en fonction de leurs forces et faiblesses. Cette individualisation de l'enseignement pourrait réduire les inégalités scolaires, à condition que tous les élèves aient un accès équitable à ces technologies.</p>
                     <p>Néanmoins, cette omniprésence de l'IA soulève des questions éthiques fondamentales. La protection des données personnelles, la transparence des algorithmes et les biais potentiels dans les systèmes d'IA sont autant de défis à relever. Par exemple, des études ont montré que certains algorithmes de recrutement reproduisaient inconsciemment les discriminations existantes sur le marché du travail.</p>
                     <p>Face à ces enjeux, plusieurs pays, dont la France, travaillent à l'élaboration d'un cadre réglementaire pour encadrer le développement et l'utilisation de l'IA. L'objectif est de garantir une IA éthique et responsable, qui reste au service de l'humain plutôt que l'inverse.</p>`,
            questions: [
                {
                    id: 'b2-1-q1',
                    type: 'radio',
                    question: 'Selon le texte, comment l\'IA peut-elle contribuer au domaine médical ?',
                    options: [
                        { id: 'a', text: 'En remplaçant complètement les médecins' },
                        { id: 'b', text: 'En analysant les images médicales avec précision' },
                        { id: 'c', text: 'En réduisant le coût des traitements médicaux' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'IA contribue au domaine médical en analysant des images médicales avec une précision parfois supérieure à celle des spécialistes humains.'
                },
                {
                    id: 'b2-1-q2',
                    type: 'checkbox',
                    question: 'Quels défis éthiques liés à l\'IA sont mentionnés dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'La protection des données personnelles' },
                        { id: 'b', text: 'La transparence des algorithmes' },
                        { id: 'c', text: 'Les biais potentiels dans les systèmes d\'IA' },
                        { id: 'd', text: 'Le coût élevé des technologies d\'IA' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Les défis éthiques mentionnés sont la protection des données personnelles, la transparence des algorithmes et les biais potentiels dans les systèmes d\'IA. Le coût des technologies n\'est pas évoqué comme un défi éthique.'
                },
                {
                    id: 'b2-1-q3',
                    type: 'text',
                    question: 'Quel est l\'objectif du cadre réglementaire que certains pays élaborent pour l\'IA ?',
                    correctAnswer: 'Garantir une IA éthique et responsable',
                    explanation: 'L\'objectif du cadre réglementaire est de garantir une IA éthique et responsable, qui reste au service de l\'humain plutôt que l\'inverse.'
                }
            ]
        },
        {
            id: 'b2-2',
            title: 'Le patrimoine culinaire français face à la mondialisation',
            content: `<p>La gastronomie française, inscrite au patrimoine immatériel de l'UNESCO depuis 2010, constitue un pilier fondamental de l'identité culturelle française. Cependant, face aux défis de la mondialisation et à l'évolution des modes de consommation, ce patrimoine culinaire exceptionnel connaît de profondes transformations.</p>
                     <p>D'une part, les chaînes de restauration rapide internationales ont conquis une place importante dans les habitudes alimentaires des Français, particulièrement chez les jeunes générations. Ce phénomène s'accompagne d'une standardisation des goûts et d'une rupture avec les traditions gastronomiques régionales. Les repas traditionnels en famille, autrefois ritualisés, cèdent progressivement la place à une alimentation plus individualisée et déstructurée.</p>
                     <p>D'autre part, on observe paradoxalement un regain d'intérêt pour la cuisine française traditionnelle, porté notamment par des émissions de télévision populaires et des chefs médiatiques. Ce mouvement de revalorisation s'inscrit dans une tendance plus globale de recherche d'authenticité et de produits locaux. Les marchés de producteurs connaissent un succès croissant, et les appellations d'origine protégée (AOP) sont perçues comme des gages de qualité par les consommateurs.</p>
                     <p>La gastronomie française contemporaine, loin d'être figée dans ses traditions, s'enrichit également des influences venues d'ailleurs. De nombreux chefs français intègrent désormais des techniques et des saveurs d'Asie, d'Afrique ou d'Amérique latine dans leurs créations, donnant naissance à une cuisine fusion innovante tout en préservant l'excellence et le savoir-faire français.</p>
                     <p>Les défenseurs du patrimoine culinaire français ne s'opposent pas systématiquement à ces évolutions, mais plaident pour un équilibre qui permettrait de préserver la diversité des traditions régionales tout en restant ouverts aux innovations. Des initiatives comme la « Fête de la Gastronomie » visent ainsi à sensibiliser le public à la richesse de ce patrimoine tout en l'ancrant dans le XXIe siècle.</p>`,
            questions: [
                {
                    id: 'b2-2-q1',
                    type: 'radio',
                    question: 'Depuis quand la gastronomie française est-elle inscrite au patrimoine immatériel de l\'UNESCO ?',
                    options: [
                        { id: 'a', text: '2005' },
                        { id: 'b', text: '2010' },
                        { id: 'c', text: '2015' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'La gastronomie française est inscrite au patrimoine immatériel de l\'UNESCO depuis 2010.'
                },
                {
                    id: 'b2-2-q2',
                    type: 'checkbox',
                    question: 'Selon le texte, quels facteurs contribuent à la revalorisation de la cuisine française traditionnelle ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Les émissions de télévision populaires' },
                        { id: 'b', text: 'Les chefs médiatiques' },
                        { id: 'c', text: 'Les chaînes de restauration rapide' },
                        { id: 'd', text: 'La tendance globale de recherche d\'authenticité' }
                    ],
                    correctAnswer: ['a', 'b', 'd'],
                    explanation: 'Les facteurs mentionnés sont les émissions de télévision populaires, les chefs médiatiques, et la tendance globale de recherche d\'authenticité. Les chaînes de restauration rapide sont au contraire présentées comme une menace pour les traditions culinaires.'
                },
                {
                    id: 'b2-2-q3',
                    type: 'text',
                    question: 'Comment la gastronomie française contemporaine s\'enrichit-elle selon le texte ?',
                    correctAnswer: 'Des influences venues d\'ailleurs',
                    explanation: 'La gastronomie française contemporaine s\'enrichit des influences venues d\'ailleurs, notamment d\'Asie, d\'Afrique ou d\'Amérique latine.'
                }
            ]
        },
        {
            id: 'b2-3',
            title: 'Les défis de l\'économie circulaire',
            content: `<p>Face aux limites évidentes de notre modèle économique linéaire (extraire, fabriquer, consommer, jeter), l'économie circulaire s'impose progressivement comme une alternative viable et nécessaire. Ce modèle économique vise à limiter le gaspillage des ressources et l'impact environnemental tout en permettant le bien-être des individus.</p>
                     <p>L'économie circulaire repose sur plusieurs principes fondamentaux. L'éco-conception consiste à créer des produits durables, réparables et recyclables, en réduisant leur empreinte environnementale dès leur conception. L'économie de fonctionnalité privilégie l'usage d'un bien plutôt que sa possession, comme le font les services de vélos ou voitures en libre-service. La réutilisation et la réparation prolongent la durée de vie des produits, tandis que le recyclage permet de réintroduire les matières premières dans le cycle de production.</p>
                     <p>En France, plusieurs lois ont été adoptées pour favoriser cette transition, notamment la loi anti-gaspillage pour une économie circulaire de 2020. Cette législation a introduit des mesures concrètes comme l'interdiction des produits plastiques à usage unique, l'obligation pour les fabricants d'informer les consommateurs sur la réparabilité des produits, ou encore la fin progressive de l'élimination des invendus non alimentaires.</p>
                     <p>Malgré ces avancées, de nombreux défis persistent. D'abord, la complexité technique : certains produits, comme les smartphones, contiennent des dizaines de matériaux différents, rendant leur recyclage difficile. Ensuite, les défis économiques : les modèles d'affaires circulaires nécessitent souvent des investissements initiaux importants et une restructuration profonde des chaînes de valeur. Enfin, les défis comportementaux : l'économie circulaire implique une évolution des mentalités, tant chez les consommateurs que chez les producteurs, vers une consommation plus responsable.</p>
                     <p>Les entreprises innovantes jouent un rôle crucial dans cette transition. Des start-ups aux grands groupes, de nombreuses initiatives émergent : plateformes de seconde main, services de réparation, développement de matériaux biodégradables ou issus du recyclage... L'économie circulaire représente non seulement un impératif environnemental, mais aussi une opportunité de création d'emplois et d'innovation pour l'économie française.</p>`,
            questions: [
                {
                    id: 'b2-3-q1',
                    type: 'radio',
                    question: 'Quel est l\'objectif principal de l\'économie circulaire ?',
                    options: [
                        { id: 'a', text: 'Augmenter les profits des entreprises' },
                        { id: 'b', text: 'Limiter le gaspillage des ressources et l\'impact environnemental' },
                        { id: 'c', text: 'Réduire le nombre de produits sur le marché' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'L\'économie circulaire vise à limiter le gaspillage des ressources et l\'impact environnemental tout en permettant le bien-être des individus.'
                },
                {
                    id: 'b2-3-q2',
                    type: 'checkbox',
                    question: 'Quels principes de l\'économie circulaire sont mentionnés dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'L\'éco-conception' },
                        { id: 'b', text: 'L\'économie de fonctionnalité' },
                        { id: 'c', text: 'La délocalisation de la production' },
                        { id: 'd', text: 'Le recyclage' }
                    ],
                    correctAnswer: ['a', 'b', 'd'],
                    explanation: 'Les principes mentionnés sont l\'éco-conception, l\'économie de fonctionnalité, et le recyclage. La délocalisation de la production n\'est pas un principe de l\'économie circulaire.'
                },
                {
                    id: 'b2-3-q3',
                    type: 'text',
                    question: 'Quelle loi française a été adoptée en 2020 pour favoriser la transition vers l\'économie circulaire ?',
                    correctAnswer: 'la loi anti-gaspillage pour une économie circulaire',
                    explanation: 'En France, la loi anti-gaspillage pour une économie circulaire a été adoptée en 2020 pour favoriser cette transition.'
                }
            ]
        },
        {
            id: 'b2-4',
            title: 'Les nouveaux modes de travail post-pandémie',
            content: `<p>La pandémie de COVID-19 a profondément bouleversé le monde du travail, accélérant des tendances qui étaient déjà en germe et imposant de nouvelles façons de concevoir l'organisation professionnelle. Alors que nous entrons dans l'ère post-pandémique, ces transformations semblent s'inscrire durablement dans le paysage professionnel.</p>
                     <p>Le télétravail, autrefois marginal dans de nombreux secteurs, s'est imposé comme une pratique courante. Si le retour au bureau s'est amorcé, la plupart des entreprises ont adopté un modèle hybride, permettant à leurs employés d'alterner entre travail à distance et présence physique. Cette flexibilité répond aux attentes des salariés qui, ayant goûté à ce nouvel équilibre, sont nombreux à le considérer comme un critère déterminant dans leurs choix de carrière. Une étude récente montre que 76% des cadres français souhaitent continuer à télétravailler au moins deux jours par semaine.</p>
                     <p>Les espaces de travail évoluent également. Les bureaux se transforment pour privilégier les zones de collaboration et de socialisation, plutôt que les postes de travail individuels. Le concept de "flex office" se généralise, avec des espaces modulables adaptés aux différentes activités professionnelles. Parallèlement, on observe une multiplication des espaces de coworking dans les villes moyennes et les zones rurales, permettant aux télétravailleurs d'échapper à l'isolement du domicile tout en évitant les longs trajets vers les centres urbains.</p>
                     <p>Les outils numériques collaboratifs, dont l'usage s'est intensifié pendant les confinements, continuent de transformer les méthodes de travail. Plateformes de visioconférence, logiciels de gestion de projets en ligne, solutions de signature électronique... Ces technologies facilitent la coordination des équipes à distance et contribuent à l'émergence de nouvelles pratiques managériales, davantage basées sur l'autonomie et la confiance que sur le contrôle.</p>
                     <p>Ces évolutions soulèvent néanmoins des questions importantes. Comment maintenir la cohésion d'équipe et la culture d'entreprise dans un contexte de travail hybride ? Comment assurer l'équité entre les salariés qui peuvent télétravailler et ceux dont la présence est indispensable ? Comment prévenir les risques psychosociaux liés à l'hyperconnexion et à l'effacement des frontières entre vie professionnelle et vie personnelle ? Les réponses à ces défis détermineront en grande partie la qualité et la durabilité des nouveaux modes de travail qui se dessinent.</p>`,
            questions: [
                {
                    id: 'b2-4-q1',
                    type: 'radio',
                    question: 'Selon le texte, quel modèle de travail la plupart des entreprises ont-elles adopté après la pandémie ?',
                    options: [
                        { id: 'a', text: 'Le retour complet au bureau' },
                        { id: 'b', text: 'Le télétravail à temps plein' },
                        { id: 'c', text: 'Un modèle hybride combinant télétravail et présence au bureau' }
                    ],
                    correctAnswer: 'c',
                    explanation: 'La plupart des entreprises ont adopté un modèle hybride, permettant à leurs employés d\'alterner entre travail à distance et présence physique.'
                },
                {
                    id: 'b2-4-q2',
                    type: 'checkbox',
                    question: 'Comment évoluent les espaces de travail selon le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Les bureaux privilégient les zones de collaboration' },
                        { id: 'b', text: 'Le concept de "flex office" se généralise' },
                        { id: 'c', text: 'Les espaces de coworking diminuent' },
                        { id: 'd', text: 'Les postes de travail individuels sont moins nombreux' }
                    ],
                    correctAnswer: ['a', 'b', 'd'],
                    explanation: 'Les espaces de travail évoluent avec des bureaux qui privilégient les zones de collaboration, le concept de "flex office" qui se généralise, et moins de postes de travail individuels. Contrairement à ce qui est suggéré dans l\'option C, le texte mentionne une multiplication des espaces de coworking.'
                },
                {
                    id: 'b2-4-q3',
                    type: 'text',
                    question: 'Quel pourcentage de cadres français souhaite continuer à télétravailler au moins deux jours par semaine ?',
                    correctAnswer: '76%',
                    explanation: 'Selon l\'étude mentionnée dans le texte, 76% des cadres français souhaitent continuer à télétravailler au moins deux jours par semaine.'
                }
            ]
        },
        {
            id: 'b2-5',
            title: 'La diplomatie culturelle française',
            content: `<p>La diplomatie culturelle constitue depuis longtemps un pilier fondamental de la politique étrangère française. À travers la promotion de sa langue, de ses arts et de son patrimoine, la France exerce ce que l'on appelle communément son "soft power", cette capacité d'influence qui ne repose pas sur la contrainte mais sur l'attrait et la séduction.</p>
                     <p>Le réseau culturel français à l'étranger est l'un des plus développés au monde. Il s'appuie sur des institutions emblématiques comme les Instituts français et les Alliances françaises, présentes dans plus de 160 pays. Ces établissements proposent des cours de langue, des expositions, des projections de films et des débats d'idées, servant ainsi de vitrines à la création française contemporaine. Les lycées français à l'étranger, qui accueillent près de 370 000 élèves, contribuent également à diffuser la langue et les valeurs françaises auprès des jeunes générations.</p>
                     <p>Dans le domaine artistique, la France déploie une stratégie d'influence particulièrement active. Les grandes expositions itinérantes, les tournées de spectacles vivants ou encore les festivals de cinéma français sont autant d'occasions de faire rayonner la création hexagonale. Des institutions comme l'Institut français ou UniFrance œuvrent spécifiquement à la promotion des arts français à l'international. Par ailleurs, la politique de prêts d'œuvres et d'expertise des grands musées français (Louvre, Centre Pompidou, Quai Branly) contribue à renforcer le prestige culturel du pays.</p>
                     <p>La diplomatie culturelle française s'adapte aux défis contemporains. Face à la mondialisation et à la concurrence accrue d'autres puissances culturelles comme les États-Unis, la Chine ou la Corée du Sud, elle diversifie ses approches. L'accent est désormais mis sur les industries créatives, le numérique et les échanges bidirectionnels. Il ne s'agit plus seulement d'exporter la culture française, mais aussi d'établir des dialogues interculturels féconds et de co-construire des projets avec les partenaires étrangers.</p>
                     <p>Si la promotion de la langue française reste centrale dans cette diplomatie culturelle, l'approche a évolué. La francophonie est aujourd'hui présentée comme un espace de diversité culturelle et linguistique, un rempart contre l'uniformisation culturelle. À travers l'Organisation internationale de la Francophonie, qui rassemble 88 États et gouvernements, la France tisse des liens privilégiés avec de nombreux pays, notamment en Afrique, et porte des valeurs comme la diversité culturelle sur la scène internationale.</p>`,
            questions: [
                {
                    id: 'b2-5-q1',
                    type: 'radio',
                    question: 'Qu\'est-ce que le "soft power" mentionné dans le texte ?',
                    options: [
                        { id: 'a', text: 'Une stratégie militaire française' },
                        { id: 'b', text: 'La capacité d\'influence qui repose sur l\'attrait et la séduction' },
                        { id: 'c', text: 'Un programme d\'aide au développement' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Le "soft power" est défini dans le texte comme la capacité d\'influence qui ne repose pas sur la contrainte mais sur l\'attrait et la séduction.'
                },
                {
                    id: 'b2-5-q2',
                    type: 'checkbox',
                    question: 'Quelles institutions font partie du réseau culturel français à l\'étranger ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Les Instituts français' },
                        { id: 'b', text: 'Les Alliances françaises' },
                        { id: 'c', text: 'Les lycées français' },
                        { id: 'd', text: 'Les ambassades économiques' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Le réseau culturel français à l\'étranger s\'appuie sur les Instituts français, les Alliances françaises et les lycées français. Les "ambassades économiques" ne sont pas mentionnées dans le texte.'
                },
                {
                    id: 'b2-5-q3',
                    type: 'text',
                    question: 'Combien d\'États et gouvernements sont rassemblés dans l\'Organisation internationale de la Francophonie ?',
                    correctAnswer: '88',
                    explanation: 'L\'Organisation internationale de la Francophonie rassemble 88 États et gouvernements, comme indiqué dans le dernier paragraphe.'
                }
            ]
        },
        {
            id: 'b2-6',
            title: 'L\'intelligence artificielle et l\'éthique',
            content: `<p>L'intelligence artificielle (IA) connaît un développement fulgurant qui transforme profondément notre société. Si ses applications sont de plus en plus nombreuses et diversifiées, l'IA soulève également d'importantes questions éthiques que chercheurs, entreprises et législateurs s'efforcent d'aborder.</p>
                     <p>La question de la transparence des algorithmes est cruciale. Comment garantir que les décisions prises par une IA sont compréhensibles et justifiables ? Le problème des "boîtes noires" algorithmiques, ces systèmes dont le fonctionnement interne est difficile à expliquer, représente un défi majeur. Cette opacité peut être particulièrement problématique lorsque l'IA est utilisée pour des décisions significatives comme l'octroi d'un prêt bancaire, l'admission à une formation ou même l'évaluation d'un risque médical.</p>
                     <p>La question des biais est également préoccupante. Les systèmes d'IA sont entraînés sur des données existantes qui peuvent refléter et perpétuer des préjugés sociaux. Par exemple, des algorithmes de recrutement ont montré des biais de genre ou de race, reproduisant inconsciemment les discriminations présentes dans leur jeu de données d'apprentissage. Dès lors, comment concevoir des systèmes équitables qui ne renforcent pas les inégalités sociales ?</p>
                     <p>La protection de la vie privée constitue un autre enjeu majeur. Les systèmes d'IA les plus performants nécessitent généralement d'énormes quantités de données, souvent personnelles. L'équilibre entre l'efficacité des algorithmes et le respect des informations privées est délicat à trouver, d'autant plus que les réglementations comme le RGPD en Europe tentent d'encadrer cette utilisation des données.</p>
                     <p>Face à ces défis, diverses initiatives émergent. Des chercheurs développent des méthodes pour une "IA explicable" qui rendrait les décisions algorithmiques plus transparentes. Des cadres éthiques et juridiques se mettent progressivement en place, comme la proposition de règlement sur l'IA de l'Union européenne qui vise à établir des normes selon le niveau de risque des applications. Enfin, la formation des développeurs aux questions éthiques et la diversification des équipes travaillant sur l'IA apparaissent comme des leviers essentiels pour construire des systèmes plus justes et respectueux des valeurs humaines fondamentales.</p>`,
            questions: [
                {
                    id: 'b2-6-q1',
                    type: 'radio',
                    question: 'Selon le texte, qu\'est-ce qu\'une "boîte noire" algorithmique ?',
                    options: [
                        { id: 'a', text: 'Un système d\'IA utilisé pour des décisions financières' },
                        { id: 'b', text: 'Un système dont le fonctionnement interne est difficile à expliquer' },
                        { id: 'c', text: 'Un algorithme qui contient des biais discriminatoires' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Une "boîte noire" algorithmique est définie dans le texte comme un système dont le fonctionnement interne est difficile à expliquer.'
                },
                {
                    id: 'b2-6-q2',
                    type: 'checkbox',
                    question: 'Quels enjeux éthiques de l\'IA sont abordés dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'La transparence des algorithmes' },
                        { id: 'b', text: 'Les biais dans les données d\'apprentissage' },
                        { id: 'c', text: 'La protection de la vie privée' },
                        { id: 'd', text: 'Le coût des systèmes d\'IA' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Le texte aborde trois enjeux éthiques principaux : la transparence des algorithmes, les biais dans les données d\'apprentissage, et la protection de la vie privée. Le coût des systèmes d\'IA n\'est pas mentionné comme un enjeu éthique dans le texte.'
                },
                {
                    id: 'b2-6-q3',
                    type: 'text',
                    question: 'Quelle réglementation européenne est mentionnée concernant la protection des données ?',
                    correctAnswer: 'RGPD',
                    explanation: 'Le texte mentionne le RGPD (Règlement Général sur la Protection des Données) comme une réglementation européenne encadrant l\'utilisation des données personnelles.'
                }
            ]
        },
        {
            id: 'b2-7',
            title: 'L\'évolution du travail au 21e siècle',
            content: `<p>Le monde du travail connaît actuellement une mutation profonde, accélérée par les innovations technologiques et les évolutions sociétales. Cette transformation s'articule autour de plusieurs axes majeurs qui redéfinissent notre rapport au travail, à l'espace et au temps professionnel.</p>
                     <p>La digitalisation constitue sans doute le facteur le plus visible de cette évolution. L'automatisation et l'intelligence artificielle bouleversent de nombreux secteurs, rendant certains métiers obsolètes tout en créant de nouvelles opportunités professionnelles. Selon une étude de l'OCDE, environ 14% des emplois dans les pays développés risquent d'être complètement automatisés, tandis que 32% supplémentaires pourraient être profondément transformés. Face à ce constat, la formation continue et l'adaptabilité des compétences deviennent des enjeux cruciaux.</p>
                     <p>La flexibilisation des conditions de travail représente une autre tendance majeure. Le modèle traditionnel du salariat à temps plein et à durée indéterminée cède progressivement du terrain face à des formes d'emploi plus souples : travail indépendant, contrats de mission, activités multi-employeurs... Cette "gig economy" offre davantage de liberté aux travailleurs mais soulève également des questions concernant la protection sociale et la sécurité économique. En parallèle, l'équilibre entre vie professionnelle et vie personnelle devient une préoccupation centrale, notamment pour les nouvelles générations qui cherchent davantage de sens dans leur activité professionnelle.</p>
                     <p>La dimension spatiale du travail se transforme également de façon spectaculaire. Si la pandémie de COVID-19 a généralisé le télétravail de manière brutale et contrainte, cette pratique s'inscrit dans une tendance plus ancienne de "déterritorialisation" du travail. Les frontières entre bureau et domicile s'estompent, faisant émerger de nouveaux espaces hybrides comme les espaces de coworking. Cette évolution redessine la géographie économique des territoires, certaines zones rurales ou villes moyennes devenant plus attractives grâce à la possibilité du travail à distance.</p>
                     <p>Ces transformations posent des défis considérables aux pouvoirs publics et aux partenaires sociaux. Comment adapter la législation du travail à ces nouvelles réalités ? Comment assurer une protection sociale adéquate dans un contexte d'emplois plus fragmentés ? Comment accompagner les travailleurs dont les compétences deviennent obsolètes ? Les réponses à ces questions détermineront en grande partie la capacité de nos sociétés à faire de cette révolution du travail une opportunité d'émancipation plutôt qu'une source d'inégalités accrues.</p>`,
            questions: [
                {
                    id: 'b2-7-q1',
                    type: 'radio',
                    question: 'Selon le texte, quel pourcentage d\'emplois dans les pays développés risque d\'être complètement automatisé ?',
                    options: [
                        { id: 'a', text: '14%' },
                        { id: 'b', text: '32%' },
                        { id: 'c', text: '46%' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'Selon l\'étude de l\'OCDE citée dans le texte, environ 14% des emplois dans les pays développés risquent d\'être complètement automatisés.'
                },
                {
                    id: 'b2-7-q2',
                    type: 'checkbox',
                    question: 'Quelles tendances du monde du travail sont évoquées dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'La digitalisation' },
                        { id: 'b', text: 'La flexibilisation des conditions de travail' },
                        { id: 'c', text: 'La transformation de la dimension spatiale du travail' },
                        { id: 'd', text: 'La réduction généralisée du temps de travail' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Le texte évoque trois tendances principales : la digitalisation, la flexibilisation des conditions de travail, et la transformation de la dimension spatiale du travail. La réduction généralisée du temps de travail n\'est pas mentionnée comme une tendance actuelle.'
                },
                {
                    id: 'b2-7-q3',
                    type: 'text',
                    question: 'Quel événement a généralisé le télétravail de manière brutale et contrainte ?',
                    correctAnswer: 'la pandémie de COVID-19',
                    explanation: 'Selon le texte, c\'est la pandémie de COVID-19 qui a généralisé le télétravail de manière brutale et contrainte.'
                }
            ]
        },
        {
            id: 'b2-8',
            title: 'Le patrimoine culturel immatériel',
            content: `<p>Si les monuments et les œuvres d'art constituent la part visible de notre héritage culturel, une autre dimension tout aussi essentielle mais plus difficile à cerner et à préserver s'est progressivement imposée dans les politiques culturelles : le patrimoine culturel immatériel (PCI). Ce concept, consacré par la Convention de l'UNESCO de 2003, englobe les pratiques, représentations, expressions, connaissances et savoir-faire que les communautés reconnaissent comme faisant partie de leur patrimoine culturel.</p>
                     <p>Les traditions orales représentent une composante majeure de ce patrimoine immatériel. Contes, légendes, chants et poésies transmis de génération en génération constituent non seulement des œuvres esthétiques mais aussi des vecteurs de mémoire collective et d'identité. Les langues elles-mêmes, notamment les langues minoritaires ou régionales, font partie de ce patrimoine vivant. En France, des initiatives comme la collecte de témoignages en langues régionales ou la valorisation des littératures orales témoignent d'une prise de conscience de la richesse de ces expressions.</p>
                     <p>Les savoir-faire artisanaux constituent un autre pilier du PCI. Ces techniques traditionnelles sont souvent le fruit d'une longue évolution et d'une adaptation fine aux ressources locales. Qu'il s'agisse de la dentelle du Puy, de la tapisserie d'Aubusson ou des techniques de construction en pierre sèche, ces pratiques incarnent une intelligence collective développée au fil des siècles. Leur préservation passe non seulement par la documentation mais surtout par la transmission active à de nouveaux praticiens, ce qui soulève la question de l'apprentissage et de la viabilité économique de ces métiers dans le monde contemporain.</p>
                     <p>Les pratiques sociales et festives forment également une part importante du patrimoine immatériel. Carnavals, processions, fêtes saisonnières rythment la vie des communautés et maintiennent un lien social précieux. Ces manifestations évoluent constamment, intégrant des éléments nouveaux tout en préservant leur structure fondamentale. Cette nature dynamique du PCI constitue d'ailleurs l'un des défis de sa préservation : contrairement au patrimoine matériel, il ne s'agit pas de "figer" ces pratiques mais d'assurer les conditions de leur évolution naturelle.</p>
                     <p>La sauvegarde du patrimoine immatériel nécessite des approches spécifiques. La documentation (enregistrements audio et vidéo, transcriptions, photographies) est essentielle mais insuffisante. L'implication des communautés détentrices reste le facteur clé de la transmission de ces savoirs vivants. Les politiques publiques tentent désormais d'articuler recherche scientifique, éducation et valorisation économique pour assurer la viabilité de ce patrimoine. Entre muséification stérilisante et marchandisation excessive, l'enjeu est de trouver un équilibre permettant à ces expressions culturelles de continuer à vivre et à évoluer dans le monde contemporain, tout en préservant leur authenticité et leur signification profonde pour les communautés concernées.</p>`,
            questions: [
                {
                    id: 'b2-8-q1',
                    type: 'radio',
                    question: 'Selon le texte, quel document a consacré le concept de patrimoine culturel immatériel ?',
                    options: [
                        { id: 'a', text: 'La Déclaration universelle des droits de l\'homme' },
                        { id: 'b', text: 'La Convention de l\'UNESCO de 2003' },
                        { id: 'c', text: 'La Charte européenne du patrimoine' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Selon le texte, c\'est la Convention de l\'UNESCO de 2003 qui a consacré le concept de patrimoine culturel immatériel.'
                },
                {
                    id: 'b2-8-q2',
                    type: 'checkbox',
                    question: 'Quelles composantes du patrimoine culturel immatériel sont mentionnées dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'Les traditions orales' },
                        { id: 'b', text: 'Les savoir-faire artisanaux' },
                        { id: 'c', text: 'Les pratiques sociales et festives' },
                        { id: 'd', text: 'Les monuments historiques' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Le texte mentionne trois composantes principales du patrimoine culturel immatériel : les traditions orales, les savoir-faire artisanaux, et les pratiques sociales et festives. Les monuments historiques font partie du patrimoine matériel, pas immatériel.'
                },
                {
                    id: 'b2-8-q3',
                    type: 'text',
                    question: 'Quelle est la particularité de la préservation du patrimoine immatériel par rapport au patrimoine matériel ?',
                    correctAnswer: 'ne pas figer les pratiques',
                    explanation: 'Selon le texte, contrairement au patrimoine matériel, il ne s\'agit pas de "figer" ces pratiques mais d\'assurer les conditions de leur évolution naturelle.'
                }
            ]
        },
        {
            id: 'b2-9',
            title: 'L\'économie collaborative : promesses et défis',
            content: `<p>L'économie collaborative, caractérisée par le partage ou l'échange de biens, de services et de connaissances entre particuliers, a connu un essor fulgurant depuis une dizaine d'années. Des plateformes comme Airbnb, BlaBlaCar ou LeBonCoin sont devenues des acteurs incontournables du paysage économique contemporain, transformant profondément nos modes de consommation et d'interaction sociale.</p>
                     <p>Les promesses initiales de ce modèle étaient séduisantes. Sur le plan économique, l'économie collaborative devait permettre une utilisation plus efficiente des ressources en valorisant des actifs sous-utilisés, comme une chambre inoccupée ou une place libre dans une voiture. Elle promettait également de réduire l'empreinte environnementale de notre consommation en favorisant la réutilisation et le partage plutôt que l'achat systématique de produits neufs. Enfin, elle était censée recréer du lien social en facilitant les échanges directs entre particuliers.</p>
                     <p>Néanmoins, ce modèle soulève aujourd'hui des questionnements majeurs. La professionnalisation croissante des offreurs sur ces plateformes remet en cause la dimension véritablement collaborative du système. À Paris par exemple, de nombreux logements Airbnb ne sont plus des chambres chez l'habitant mais des appartements entiers dédiés exclusivement à la location touristique, exacerbant ainsi la crise du logement dans certains quartiers. De même, le modèle économique de ces plateformes, basé sur la précarisation de certains travailleurs (comme les chauffeurs VTC), pose des questions éthiques et juridiques complexes concernant le droit du travail.</p>
                     <p>La règlementation a progressivement évolué pour encadrer ces nouvelles pratiques. En France, la loi ELAN a limité à 120 jours par an la location d'une résidence principale sur Airbnb. Des villes comme Paris ou Berlin ont même adopté des mesures plus restrictives. Dans le domaine des transports, la reconnaissance du statut de salarié pour certains chauffeurs de VTC fait l'objet de batailles juridiques dans plusieurs pays.</p>
                     <p>Face à ces défis, l'économie collaborative semble aujourd'hui à la croisée des chemins. Peut-elle retrouver son ambition initiale d'un modèle plus durable et équitable ? Des initiatives comme les coopératives de plateformes, où les utilisateurs sont également propriétaires et décisionnaires, tentent de proposer une alternative au modèle capitaliste dominant. L'enjeu est de taille : concilier l'innovation technologique et sociale avec des principes de justice, de durabilité et de véritable coopération.</p>`,
            questions: [
                {
                    id: 'b2-9-q1',
                    type: 'radio',
                    question: 'Quelle était l\'une des promesses initiales de l\'économie collaborative sur le plan environnemental ?',
                    options: [
                        { id: 'a', text: 'Créer des emplois verts' },
                        { id: 'b', text: 'Réduire l\'empreinte environnementale de la consommation' },
                        { id: 'c', text: 'Développer des technologies propres' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Selon le texte, l\'économie collaborative promettait de réduire l\'empreinte environnementale de notre consommation en favorisant la réutilisation et le partage plutôt que l\'achat systématique de produits neufs.'
                },
                {
                    id: 'b2-9-q2',
                    type: 'checkbox',
                    question: 'Quels problèmes liés à l\'économie collaborative sont mentionnés dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'La professionnalisation des offreurs' },
                        { id: 'b', text: 'L\'exacerbation de la crise du logement' },
                        { id: 'c', text: 'La précarisation de certains travailleurs' },
                        { id: 'd', text: 'L\'augmentation de la pollution' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Le texte mentionne la professionnalisation des offreurs, l\'exacerbation de la crise du logement dans certains quartiers, et la précarisation de certains travailleurs comme problèmes liés à l\'économie collaborative. L\'augmentation de la pollution n\'est pas mentionnée comme un problème.'
                },
                {
                    id: 'b2-9-q3',
                    type: 'text',
                    question: 'Quelle limite a été imposée par la loi ELAN concernant la location sur Airbnb ?',
                    correctAnswer: '120 jours par an',
                    explanation: 'Selon le texte, la loi ELAN a limité à 120 jours par an la location d\'une résidence principale sur Airbnb.'
                }
            ]
        },
        {
            id: 'b2-10',
            title: 'La francophonie : enjeux culturels et géopolitiques',
            content: `<p>La francophonie, qui regroupe l'ensemble des pays et des personnes utilisant le français comme langue maternelle, officielle ou de communication, constitue un espace culturel, politique et économique dont l'importance ne cesse de croître sur la scène internationale. Au-delà de la simple communauté linguistique, elle incarne un projet de coopération et de solidarité fondé sur des valeurs partagées.</p>
                     <p>Sur le plan démographique, le français est actuellement parlé par environ 300 millions de personnes dans le monde, ce qui en fait la cinquième langue la plus parlée. Cette communauté linguistique présente une grande diversité : le français est langue officielle dans 29 pays répartis sur les cinq continents. Mais c'est en Afrique que l'avenir de la francophonie se joue principalement. Selon les projections démographiques, le continent africain pourrait compter près de 700 millions de francophones d'ici 2050, faisant ainsi du français l'une des langues les plus dynamiques au monde.</p>
                     <p>L'Organisation Internationale de la Francophonie (OIF), créée en 1970, structure cet espace de coopération qui compte aujourd'hui 88 États et gouvernements membres ou observateurs. Au-delà de la promotion de la langue française, son action s'étend à de nombreux domaines : éducation, culture, économie, développement durable, paix et sécurité. Face à la mondialisation souvent perçue comme facteur d'uniformisation culturelle, la francophonie défend la diversité linguistique et culturelle comme patrimoine commun de l'humanité.</p>
                     <p>Sur le plan géopolitique, la francophonie représente un levier d'influence considérable pour la France, lui permettant de maintenir une présence significative dans des régions stratégiques comme l'Afrique de l'Ouest. Pour les autres pays francophones, notamment ceux du Sud, elle constitue un espace d'expression et de revendication sur la scène internationale. Les sommets de la Francophonie, organisés tous les deux ans, sont ainsi devenus des forums politiques importants où s'expriment les préoccupations de pays qui trouvent parfois difficilement leur place dans d'autres instances internationales.</p>
                     <p>La francophonie fait néanmoins face à des défis majeurs. La concurrence de l'anglais, devenu langue mondiale dominante, s'intensifie dans tous les domaines, notamment scientifique et économique. La qualité de l'enseignement du français dans de nombreux pays francophones, particulièrement en Afrique, pose également question. Enfin, l'équilibre entre l'influence de la France et la représentativité des autres pays membres reste un sujet sensible. L'avenir de la francophonie dépendra largement de sa capacité à relever ces défis tout en préservant sa vocation humaniste et sa richesse culturelle.</p>`,
            questions: [
                {
                    id: 'b2-10-q1',
                    type: 'radio',
                    question: 'Combien de personnes parlent le français dans le monde selon le texte ?',
                    options: [
                        { id: 'a', text: 'Environ 200 millions' },
                        { id: 'b', text: 'Environ 300 millions' },
                        { id: 'c', text: 'Environ 700 millions' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Selon le texte, le français est actuellement parlé par environ 300 millions de personnes dans le monde.'
                },
                {
                    id: 'b2-10-q2',
                    type: 'checkbox',
                    question: 'Quels domaines d\'action de l\'Organisation Internationale de la Francophonie sont mentionnés dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'L\'éducation' },
                        { id: 'b', text: 'Le développement durable' },
                        { id: 'c', text: 'La défense militaire' },
                        { id: 'd', text: 'La paix et la sécurité' }
                    ],
                    correctAnswer: ['a', 'b', 'd'],
                    explanation: 'Le texte mentionne que l\'action de l\'OIF s\'étend à de nombreux domaines dont l\'éducation, le développement durable, la paix et la sécurité. La défense militaire n\'est pas citée comme un domaine d\'action de l\'OIF.'
                },
                {
                    id: 'b2-10-q3',
                    type: 'text',
                    question: 'Combien d\'États et gouvernements sont membres ou observateurs de l\'OIF selon le texte ?',
                    correctAnswer: '88',
                    explanation: 'Selon le texte, l\'Organisation Internationale de la Francophonie compte aujourd\'hui 88 États et gouvernements membres ou observateurs.'
                }
            ]
        },
        {
            id: 'b2-11',
            title: 'Les neurosciences au service de l\'éducation',
            content: `<p>La rencontre entre neurosciences et éducation constitue l'un des développements les plus prometteurs de ces dernières décennies. Cette interdisciplinarité émergente, parfois désignée sous le terme de "neuroéducation", vise à enrichir les pratiques pédagogiques par une meilleure compréhension des mécanismes cérébraux impliqués dans l'apprentissage.</p>
                     <p>Les avancées technologiques en matière d'imagerie cérébrale ont permis des découvertes majeures sur le fonctionnement du cerveau qui apprennent. Nous savons aujourd'hui que la plasticité cérébrale - cette capacité du cerveau à se reconfigurer en créant de nouvelles connexions neuronales - reste importante tout au long de la vie, bien que particulièrement marquée pendant l'enfance. Cette connaissance remet en question certaines idées reçues sur les "périodes critiques" du développement et ouvre des perspectives encourageantes pour l'apprentissage à tout âge.</p>
                     <p>Plusieurs principes issus des neurosciences font progressivement leur chemin dans les pratiques pédagogiques. L'importance de l'attention dans l'apprentissage est désormais bien établie : le cerveau ne peut traiter efficacement qu'une quantité limitée d'informations simultanément. Cette connaissance a conduit à repenser l'organisation des séquences d'apprentissage pour limiter la charge cognitive. De même, les recherches sur la mémoire ont mis en évidence l'efficacité de la répétition espacée : réactiver une information à intervalles réguliers s'avère plus efficace qu'une révision massive avant un examen.</p>
                     <p>En France, ces connaissances commencent à influencer les politiques éducatives. Le Conseil scientifique de l'Éducation nationale, créé en 2018 et présidé par le neuroscientifique Stanislas Dehaene, a pour mission d'apporter un éclairage scientifique sur les pratiques pédagogiques. Des expérimentations sont menées dans certaines académies pour tester des méthodes inspirées des neurosciences, comme l'enseignement explicite de l'attention ou les techniques de mémorisation active.</p>
                     <p>Toutefois, la prudence reste de mise. Le transfert des connaissances du laboratoire à la salle de classe est complexe et nécessite de prendre en compte la diversité des contextes éducatifs. Par ailleurs, le risque de "neuromythes" - ces croyances erronées sur le fonctionnement cérébral - est réel. L'idée que nous n'utiliserions que 10% de notre cerveau ou la théorie des styles d'apprentissage (visuel, auditif, kinesthésique) sont des exemples de ces conceptions sans fondement scientifique qui ont pourtant influencé certaines approches pédagogiques. Le dialogue entre neuroscientifiques et éducateurs apparaît donc essentiel pour développer une neuroéducation rigoureuse, qui enrichisse les pratiques pédagogiques sans tomber dans le réductionnisme biologique.</p>`,
            questions: [
                {
                    id: 'b2-11-q1',
                    type: 'radio',
                    question: 'Qu\'est-ce que la plasticité cérébrale selon le texte ?',
                    options: [
                        { id: 'a', text: 'La capacité du cerveau à se reconfigurer en créant de nouvelles connexions neuronales' },
                        { id: 'b', text: 'La capacité du cerveau à traiter plusieurs informations simultanément' },
                        { id: 'c', text: 'La capacité du cerveau à mémoriser des informations complexes' }
                    ],
                    correctAnswer: 'a',
                    explanation: 'Selon le texte, la plasticité cérébrale est la capacité du cerveau à se reconfigurer en créant de nouvelles connexions neuronales.'
                },
                {
                    id: 'b2-11-q2',
                    type: 'checkbox',
                    question: 'Quels principes issus des neurosciences sont mentionnés dans le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'L\'importance de l\'attention dans l\'apprentissage' },
                        { id: 'b', text: 'L\'efficacité de la répétition espacée pour la mémoire' },
                        { id: 'c', text: 'La théorie des styles d\'apprentissage (visuel, auditif, kinesthésique)' },
                        { id: 'd', text: 'La limitation de la charge cognitive' }
                    ],
                    correctAnswer: ['a', 'b', 'd'],
                    explanation: 'Le texte mentionne l\'importance de l\'attention dans l\'apprentissage, l\'efficacité de la répétition espacée pour la mémoire, et la limitation de la charge cognitive comme principes issus des neurosciences. La théorie des styles d\'apprentissage est au contraire présentée comme un "neuromythe", c\'est-à-dire une croyance erronée sans fondement scientifique.'
                },
                {
                    id: 'b2-11-q3',
                    type: 'text',
                    question: 'Qui préside le Conseil scientifique de l\'Éducation nationale créé en 2018 ?',
                    correctAnswer: 'Stanislas Dehaene',
                    explanation: 'Selon le texte, le Conseil scientifique de l\'Éducation nationale, créé en 2018, est présidé par le neuroscientifique Stanislas Dehaene.'
                }
            ]
        },
        {
            id: 'b2-12',
            title: 'La médecine de précision : vers des traitements personnalisés',
            content: `<p>La médecine de précision, parfois appelée médecine personnalisée, représente un changement de paradigme majeur dans l'approche thérapeutique. En s'appuyant sur les caractéristiques génétiques, moléculaires et environnementales propres à chaque individu, elle vise à proposer des traitements ciblés, maximisant l'efficacité tout en réduisant les effets indésirables. Cette approche marque une rupture avec le modèle traditionnel "one-size-fits-all" où un même traitement était prescrit à tous les patients souffrant d'une même pathologie.</p>
                     <p>Les avancées en génomique ont joué un rôle déterminant dans l'essor de cette nouvelle médecine. La diminution spectaculaire du coût du séquençage de l'ADN - passé de plusieurs milliards d'euros pour le premier génome humain complet en 2003 à environ mille euros aujourd'hui - a rendu cette technologie accessible pour des applications cliniques. L'identification de biomarqueurs spécifiques permet désormais de stratifier les patients en sous-groupes selon leur profil moléculaire, ouvrant la voie à des thérapies ciblées.</p>
                     <p>C'est dans le domaine de l'oncologie que la médecine de précision a connu ses premiers succès majeurs. Certains cancers du sein, du poumon ou du sang bénéficient aujourd'hui d'une approche thérapeutique basée sur le profil génétique de la tumeur plutôt que sur sa simple localisation anatomique. Par exemple, les inhibiteurs de tyrosine kinase ont révolutionné le traitement de la leucémie myéloïde chronique en ciblant spécifiquement l'anomalie génétique responsable de la maladie. Ces médicaments ont transformé une pathologie autrefois fatale en maladie chronique contrôlable.</p>
                     <p>La médecine de précision s'étend progressivement à d'autres domaines thérapeutiques. Des avancées prometteuses sont observées dans le traitement de certaines maladies rares, souvent d'origine génétique. Les thérapies géniques, qui consistent à introduire du matériel génétique dans les cellules d'un patient pour traiter ou prévenir une maladie, illustrent parfaitement cette approche personnalisée. Des maladies comme l'amyotrophie spinale infantile ou certaines formes de cécité héréditaire ont vu l'émergence de traitements ciblant directement la cause génétique de la pathologie.</p>
                     <p>Malgré ces avancées spectaculaires, la généralisation de la médecine de précision se heurte à plusieurs obstacles. Le coût élevé des thérapies ciblées pose la question de leur accessibilité et de la soutenabilité économique des systèmes de santé. La gestion et l'interprétation des quantités massives de données générées par les analyses génomiques représentent également un défi technique majeur. Enfin, des questions éthiques se posent concernant la confidentialité des données génétiques et le risque de discriminations basées sur le profil génétique. Pour que la promesse d'une médecine véritablement personnalisée se concrétise pleinement, ces défis devront être relevés par une approche concertée impliquant chercheurs, cliniciens, industriels, patients et décideurs politiques.</p>`,
            questions: [
                {
                    id: 'b2-12-q1',
                    type: 'radio',
                    question: 'Comment a évolué le coût du séquençage de l\'ADN selon le texte ?',
                    options: [
                        { id: 'a', text: 'Il est resté stable depuis 2003' },
                        { id: 'b', text: 'Il est passé de plusieurs milliards d\'euros à environ mille euros' },
                        { id: 'c', text: 'Il a légèrement diminué pour atteindre quelques milliers d\'euros' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Selon le texte, le coût du séquençage de l\'ADN est passé de plusieurs milliards d\'euros pour le premier génome humain complet en 2003 à environ mille euros aujourd\'hui.'
                },
                {
                    id: 'b2-12-q2',
                    type: 'checkbox',
                    question: 'Dans quels domaines médicaux la médecine de précision a-t-elle fait des avancées selon le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'L\'oncologie' },
                        { id: 'b', text: 'Les maladies rares d\'origine génétique' },
                        { id: 'c', text: 'Les maladies infectieuses' },
                        { id: 'd', text: 'Les troubles psychiatriques' }
                    ],
                    correctAnswer: ['a', 'b'],
                    explanation: 'Le texte mentionne que la médecine de précision a fait des avancées dans le domaine de l\'oncologie et dans le traitement de certaines maladies rares, souvent d\'origine génétique. Les maladies infectieuses et les troubles psychiatriques ne sont pas mentionnés comme des domaines où la médecine de précision a fait des avancées significatives.'
                },
                {
                    id: 'b2-12-q3',
                    type: 'text',
                    question: 'Quel traitement est cité comme exemple pour la leucémie myéloïde chronique ?',
                    correctAnswer: 'les inhibiteurs de tyrosine kinase',
                    explanation: 'Selon le texte, les inhibiteurs de tyrosine kinase ont révolutionné le traitement de la leucémie myéloïde chronique en ciblant spécifiquement l\'anomalie génétique responsable de la maladie.'
                }
            ]
        },
        {
            id: 'b2-13',
            title: 'Le minimalisme : philosophie et mode de vie',
            content: `<p>Le minimalisme, mouvement à la fois esthétique, philosophique et mode de vie, connaît un regain d'intérêt significatif dans nos sociétés contemporaines caractérisées par la surconsommation et la surinformation. Loin d'être une simple tendance décorative prônant les espaces épurés et les designs fonctionnels, le minimalisme s'impose progressivement comme une réponse cohérente aux excès de l'hyperconsommation et aux questions environnementales actuelles.</p>
                     <p>Les racines philosophiques du minimalisme contemporain puisent dans diverses traditions, du bouddhisme zen à la philosophie stoïcienne, en passant par certains courants artistiques du XXe siècle. Toutes ces influences convergent autour d'un principe central : la simplicité volontaire comme voie d'accès à une forme d'équilibre et de liberté. "Less is more" (moins, c'est plus), la célèbre formule de l'architecte Ludwig Mies van der Rohe, résume cette approche qui valorise la qualité plutôt que la quantité, l'essentiel plutôt que le superflu.</p>
                     <p>En tant que mode de vie, le minimalisme se traduit par des choix concrets visant à désencombrer son existence, tant sur le plan matériel qu'immatériel. Le désencombrement physique commence souvent par une phase de tri et de réduction des possessions. Cette démarche, popularisée notamment par Marie Kondo et sa méthode du "rangement qui change la vie", invite à ne conserver que les objets qui "suscitent la joie" ou qui servent véritablement au quotidien. Au-delà des aspects matériels, le minimalisme s'étend à la gestion du temps et de l'attention, ressources précieuses dans notre économie numérique. La déconnexion numérique, le "digital detox", ou la pratique de la pleine conscience s'inscrivent dans cette quête d'une attention plus focalisée et moins dispersée.</p>
                     <p>Les motivations qui poussent aujourd'hui un nombre croissant de personnes vers le minimalisme sont multiples. Pour certains, il s'agit avant tout d'une quête de bien-être mental face à l'anxiété générée par le trop-plein matériel et informationnel. Pour d'autres, la dimension écologique est primordiale : réduire sa consommation constitue une réponse concrète aux défis environnementaux. Le minimalisme peut également répondre à des préoccupations financières, permettant de réduire ses dépenses et parfois de repenser fondamentalement son rapport au travail et à l'argent.</p>
                     <p>Toutefois, le minimalisme n'échappe pas aux critiques et aux paradoxes. Sa récupération commerciale à travers des produits "minimalistes" souvent coûteux semble contradictoire avec son essence même. Par ailleurs, certains soulignent le privilège inhérent à pouvoir choisir la simplicité volontaire, quand d'autres subissent la précarité. Enfin, la dimension parfois normative de certains discours minimalistes peut être perçue comme culpabilisante. Le défi du minimalisme contemporain semble donc de préserver son potentiel émancipateur, à la fois personnel et collectif, sans tomber dans les écueils de l'élitisme ou du dogmatisme.</p>`,
            questions: [
                {
                    id: 'b2-13-q1',
                    type: 'radio',
                    question: 'Quelle formule célèbre résume l\'approche minimaliste selon le texte ?',
                    options: [
                        { id: 'a', text: '"Carpe diem"' },
                        { id: 'b', text: '"Less is more"' },
                        { id: 'c', text: '"Think outside the box"' }
                    ],
                    correctAnswer: 'b',
                    explanation: 'Selon le texte, la célèbre formule "Less is more" (moins, c\'est plus) de l\'architecte Ludwig Mies van der Rohe résume l\'approche minimaliste.'
                },
                {
                    id: 'b2-13-q2',
                    type: 'checkbox',
                    question: 'Quelles sont les motivations qui poussent les gens vers le minimalisme selon le texte ? (Plusieurs réponses possibles)',
                    options: [
                        { id: 'a', text: 'La quête de bien-être mental' },
                        { id: 'b', text: 'Les préoccupations écologiques' },
                        { id: 'c', text: 'Les raisons financières' },
                        { id: 'd', text: 'La volonté de suivre une tendance à la mode' }
                    ],
                    correctAnswer: ['a', 'b', 'c'],
                    explanation: 'Le texte mentionne trois principales motivations qui poussent les gens vers le minimalisme : la quête de bien-être mental, les préoccupations écologiques et les raisons financières. La volonté de suivre une tendance à la mode n\'est pas mentionnée comme une motivation; au contraire, le texte critique la récupération commerciale du minimalisme.'
                },
                {
                    id: 'b2-13-q3',
                    type: 'text',
                    question: 'Quelle personnalité est associée à la méthode du "rangement qui change la vie" ?',
                    correctAnswer: 'Marie Kondo',
                    explanation: 'Selon le texte, Marie Kondo est la personnalité associée à la méthode du "rangement qui change la vie", qui invite à ne conserver que les objets qui "suscitent la joie" ou qui servent véritablement au quotidien.'
                }
            ]
        }
    ]
}; 