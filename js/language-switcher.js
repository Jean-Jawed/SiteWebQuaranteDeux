// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    // Language data
    const translations = {
        'fr': {
            'home': 'Accueil',
            'game': 'Le Jeu',
            'app': 'Application',
            'author': 'Auteur',
            'privacy': 'Confidentialité',
            'hero_title': 'Découvrez le jeu de dés le plus excitant !',
            'hero_text': 'Un mélange parfait de stratégie et de chance pour des heures de divertissement entre amis ou en famille.',
            'learn_more': 'En savoir plus',
            'get_app': 'Télécharger l\'app',
            'about_dice_title': 'Les jeux de dés à travers l\'histoire',
            'about_dice_text1': 'Les jeux de dés existent depuis des millénaires, remontant à l\'Égypte ancienne et à la Rome antique. Ils ont toujours été un moyen de divertissement social, combinant chance et stratégie.',
            'about_dice_text2': 'Quarante-Deux s\'inscrit dans cette longue tradition tout en apportant des mécaniques modernes et innovantes qui en font un jeu unique et captivant.',
            'stop_or_again_title': 'La catégorie "Stop ou Encore"',
            'stop_or_again_text': 'Les jeux de type "Stop ou Encore" reposent sur un principe simple mais profondément stratégique : à chaque tour, le joueur doit décider s\'il continue à jouer pour accumuler plus de points ou s\'il s\'arrête pour sécuriser son score. Cette tension entre risque et récompense crée une expérience de jeu intense et addictive.',
            'feature1_title': 'Simple à apprendre',
            'feature1_text': 'Les règles sont faciles à comprendre mais le jeu offre une profondeur stratégique.',
            'feature2_title': 'Parties rapides',
            'feature2_text': 'Une partie dure généralement entre 10 et 20 minutes, parfait pour une pause.',
            'feature3_title': 'Social',
            'feature3_text': 'Idéal pour jouer entre amis ou en famille, en présentiel ou à distance.',
            'game_intro_title': 'Quarante-Deux : L\'esprit du jeu',
            'game_intro_text1': 'Quarante-Deux est bien plus qu\'un simple jeu de dés. C\'est une expérience sociale, un prétexte à la convivialité, un moment de partage et de rires.',
            'game_intro_text2': 'Imaginez une terrasse ensoleillée, des amis autour d\'une table, le bruit caractéristique des dés qui s\'entrechoquent dans un gobelet, les exclamations lorsque le fameux "4 et 2" apparaît...',
            'game_intro_text3': 'Ce jeu est né de ces moments simples mais précieux où le temps semble suspendu le temps d\'une partie.',
            'rules_title': 'Règles du jeu',
            'rule1_title': 'But du jeu',
            'rule1_text': 'Être le premier joueur à atteindre ou dépasser 210 points en accumulant des points tour après tour.',
            'rule2_title': 'Déroulement d\'un tour',
            'rule2_text': 'À son tour, le joueur lance les dés autant de fois qu\'il le souhaite et accumule les points. À tout moment, il peut choisir de s\'arrêter ("Stop") pour ajouter les points accumulés à son score total.',
            'rule3_title': 'Valeur des lancers',
            'rule3_text': 'Un lancer vaut la somme des deux dés (par exemple 5+3 = 8 points), sauf dans les cas particuliers suivants :',
            'special_rule1_title': 'Suite (1-2, 2-3, etc.)',
            'special_rule1_text': 'Bonus de 10 points (ex: 1+2 = 3 + 10 = 13 points)',
            'special_rule2_title': 'Double (deux dés identiques)',
            'special_rule2_text': 'Le joueur perd tous les points du tour et son tour se termine immédiatement.',
            'special_rule3_title': 'Lancer identique au précédent',
            'special_rule3_text': 'Le joueur perd tous les points du tour et son tour se termine immédiatement. L\'ordre des dés n\'a pas d\'importance (5-3 est identique à 3-5).',
            'special_rule4_title': 'Le fameux 4 et 2',
            'special_rule4_text': 'Si le joueur crie "42" (ou clique le bouton dans l\'app) dans les 0.5 secondes, le lancer vaut 42 points. Sinon, il vaut 6 points (4+2).',
            'rule4_title': 'Fin de la partie',
            'rule4_text': 'Le premier joueur à atteindre ou dépasser 210 points gagne la partie. Si plusieurs joueurs atteignent 210 points dans le même tour, celui avec le score le plus élevé l\'emporte.',
            'strategy_title': 'Conseils stratégiques',
            'tip1_title': 'Gérez votre risque',
            'tip1_text': 'Plus vous accumulez de points dans un tour, plus le risque de perdre tout est grand. Apprenez à vous arrêter à temps.',
            'tip2_title': 'Mémoire des lancers',
            'tip2_text': 'Souvenez-vous de votre dernier lancer pour éviter de faire le même et perdre vos points.',
            'tip3_title': 'Anticipez le 4-2',
            'tip3_text': 'Soyez toujours prêt à crier "42" quand vous lancez les dés, surtout si vous avez besoin de beaucoup de points.',
            'app_hero_title': 'Quarante-Deux sur votre mobile',
            'app_hero_text': 'Emportez le plaisir du jeu partout avec vous grâce à notre application officielle pour Android.',
            'download_app': 'Télécharger sur Google Play',
            'rating_text': '4.8/5 - Nombre de téléchargements',
            'features_title': 'Fonctionnalités de l\'application',
            'app_feature1_title': 'Jeu solo contre l\'IA',
            'app_feature1_text': 'Affrontez un adversaire virtuel à la stratégie redoutable.',
            'app_feature2_title': 'Multijoueur local',
            'app_feature2_text': 'Jouez avec des amis sur le même appareil, idéal pour les soirées.',
            'app_feature3_title': 'Multijoueur en ligne',
            'app_feature3_text': 'Défiez des joueurs du monde entier en temps réel.',
            'app_feature4_title': 'Statistiques détaillées',
            'app_feature4_text': 'Suivez vos performances, vos records et votre progression.',
            'app_feature5_title': 'Personnalisation',
            'app_feature5_text': 'Choisissez parmi différents thèmes visuels et designs de dés.',
            'app_feature6_title': 'Notifications',
            'app_feature6_text': 'Recevez des défis et rappels pour ne jamais manquer une partie.',
            'screenshots_title': 'Galerie d\'écrans',
            'screenshot1_desc': 'Le jeu de dés enfin sur mobile',
            'screenshot2_desc': 'Interface de jeu intuitive',
            'testimonials_title': 'Ce que disent les joueurs',
            'testimonial1_text': '"Addictif ! La meilleure version numérique d\'un jeu de dés que j\'ai trouvée. Les animations sont superbes et le jeu est fluide."',
            'testimonial1_author': '- Marie D.',
            'testimonial2_text': '"Parfait pour jouer avec des amis quand on ne peut pas se voir en personne. Le mode multijoueur en ligne fonctionne parfaitement."',
            'testimonial2_author': '- Thomas L.',
            'testimonial3_text': '"J\'adore le défi du 4-2 qui demande des réflexes. Ça ajoute une dimension excitante au jeu traditionnel."',
            'testimonial3_author': '- Sophie K.',
            'download_cta_title': 'Prêt à jouer ?',
            'download_cta_text': 'Téléchargez gratuitement l\'application Quarante-Deux et commencez à jouer dès maintenant !',
            'download_now': 'Télécharger maintenant',
            'compatibility_text': 'Compatibles avec Android 8.0 et versions ultérieures. Aucun achat in-app nécessaire.',
            'author_title': 'Jawed Tahir',
            'author_subtitle': 'Développeur & Créateur de Quarante-Deux',
            'author_text1': 'Passionné par les jeux depuis mon enfance et développeur professionnel depuis plus de 10 ans, j\'ai créé Quarante-Deux pour partager ma passion pour les jeux de dés simples mais stratégiques.',
            'author_text2': 'Basé à Marseille, je m\'inspire de l\'ambiance conviviale des terrasses de café et des parties entre amis pour créer des expériences de jeu mémorables.',
            'story_title': 'L\'histoire derrière Quarante-Deux',
            'story1_title': 'La découverte',
            'story1_text': 'J\'ai découvert ce jeu de dés lors d\'une soirée entre amis. La simplicité des règles combinée à la profondeur stratégique m\'a immédiatement séduit.',
            'story2_title': 'La création',
            'story2_text': 'Après des années à jouer avec des dés traditionnels, j\'ai décidé de créer une version numérique pour pouvoir jouer n\'importe où, n\'importe quand.',
            'story3_title': 'Le développement',
            'story3_text': 'Plusieurs mois de développement ont été nécessaires pour créer une application fluide, intuitive et fidèle à l\'esprit du jeu original.',
            'story4_title': 'Le lancement',
            'story4_text': 'Quarante-Deux est enfin disponible sur le Play Store, recevant des retours extrêmement positifs de la communauté de joueurs.',
            'contact_title': 'Contactez-moi',
            'contact_text': 'Vous avez des questions sur le jeu, des suggestions d\'amélioration ou simplement envie de partager votre expérience ? N\'hésitez pas à me contacter !',
            'email_title': 'Email',
            'personal_website_title': 'Mon site perso',
            'personal_website_link': 'javed.fr',
            'projects_title': 'Mes autres projets',
            'project1_title': 'NeuroHarmonics',
            'project1_text': 'Une application qui génère des ondes pour se détendre, mieux dormir, ou se concentrer.',
            'project2_title': 'Projet 2',
            'project2_text': 'À déterminer.',
            'project3_title': 'Projet 3',
            'project3_text': 'À déterminer.',
            'privacy_title': 'Politique de confidentialité',
            'privacy_intro': 'Dernière mise à jour : 14 Août 2025',
            'privacy_text1': 'Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre application Quarante-Deux Le Jeu.',
            'privacy_point1_title': '1. Collecte d\'informations',
            'privacy_point1_text': 'L\'application Quarante-Deux ne collecte aucune information personnelle identifiable. Nous ne demandons pas et ne stockons pas votre nom, adresse e-mail, numéro de téléphone ou toute autre information personnelle.',
            'privacy_point2_title': '2. Données de jeu',
            'privacy_point2_text': 'Les scores et statistiques de jeu sont stockés localement sur votre appareil uniquement. Ces données ne sont pas envoyées à nos serveurs ni partagées avec des tiers.',
            'privacy_point3_title': '3. Permissions de l\'application',
            'privacy_point3_text': 'Quarante-Deux ne requiert aucune permission spéciale sur votre appareil. L\'application fonctionne sans accès à votre localisation, contacts, appareil photo, microphone ou autres fonctionnalités sensibles.',
            'privacy_point4_title': '4. Publicité',
            'privacy_point4_text': 'Notre application ne contient pas de publicités et n\'utilise pas de services publicitaires tiers qui pourraient collecter des données à des fins de ciblage.',
            'privacy_point5_title': '5. Achats in-app',
            'privacy_point5_text': 'Quarante-Deux est entièrement gratuit et ne propose pas d\'achats in-app. Aucune information de paiement n\'est donc collectée.',
            'privacy_point6_title': '6. Sécurité',
            'privacy_point6_text': 'Bien que nous ne collections pas de données sensibles, nous mettons en œuvre des mesures de sécurité raisonnables pour protéger toute information stockée localement sur votre appareil.',
            'privacy_point7_title': '7. Modifications de cette politique',
            'privacy_point7_text': 'Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour révisée.',
            'privacy_point8_title': '8. Nous contacter',
            'privacy_point8_text': 'Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à l\'adresse : jawed_tahir@yahoo.fr',
            'privacy_acceptance': 'En utilisant l\'application Quarante-Deux, vous acceptez les termes de cette politique de confidentialité.',
            'follow_us': 'Suivez-nous :',
            'copyright': '©2025 Quarante-Deux Le Jeu. Par Jawed Tahir. Tous droits réservés.'
        },
        'en': {
            'home': 'Home',
            'game': 'The Game',
            'app': 'App',
            'author': 'Author',
            'privacy': 'Privacy',
            'hero_title': 'Discover the most exciting dice game!',
            'hero_text': 'A perfect mix of strategy and luck for hours of entertainment with friends or family.',
            'learn_more': 'Learn more',
            'get_app': 'Get the app',
            'about_dice_title': 'Dice games through history',
            'about_dice_text1': 'Dice games have existed for millennia, dating back to ancient Egypt and Rome. They have always been a means of social entertainment, combining luck and strategy.',
            'about_dice_text2': 'Quarante-Deux is part of this long tradition while bringing modern and innovative mechanics that make it a unique and captivating game.',
            'stop_or_again_title': 'The "Stop or Again" category',
            'stop_or_again_text': 'Games of the "Stop or Again" type are based on a simple but deeply strategic principle: on each turn, the player must decide whether to continue playing to accumulate more points or to stop to secure their score. This tension between risk and reward creates an intense and addictive gaming experience.',
            'feature1_title': 'Easy to learn',
            'feature1_text': 'The rules are easy to understand but the game offers strategic depth.',
            'feature2_title': 'Quick games',
            'feature2_text': 'A game typically lasts between 10 and 20 minutes, perfect for a break.',
            'feature3_title': 'Social',
            'feature3_text': 'Ideal for playing with friends or family, in person or remotely.',
            'game_intro_title': 'Quarante-Deux: The spirit of the game',
            'game_intro_text1': 'Quarante-Deux is much more than just a dice game. It\'s a social experience, an excuse for conviviality, a moment of sharing and laughter.',
            'game_intro_text2': 'Imagine a sunny terrace, friends around a table, the characteristic sound of dice rattling in a cup, the exclamations when the famous "4 and 2" appears...',
            'game_intro_text3': 'This game was born from these simple but precious moments when time seems suspended for the duration of a game.',
            'rules_title': 'Game rules',
            'rule1_title': 'Goal of the game',
            'rule1_text': 'Be the first player to reach or exceed 210 points by accumulating points turn after turn.',
            'rule2_title': 'Turn sequence',
            'rule2_text': 'On their turn, the player rolls the dice as many times as they wish and accumulates points. At any time, they can choose to stop ("Stop") to add the accumulated points to their total score.',
            'rule3_title': 'Value of rolls',
            'rule3_text': 'A roll is worth the sum of the two dice (e.g. 5+3 = 8 points), except in the following special cases:',
            'special_rule1_title': 'Sequence (1-2, 2-3, etc.)',
            'special_rule1_text': '10-point bonus (e.g. 1+2 = 3 + 10 = 13 points)',
            'special_rule2_title': 'Double (two identical dice)',
            'special_rule2_text': 'The player loses all points for the turn and their turn ends immediately.',
            'special_rule3_title': 'Roll identical to the previous one',
            'special_rule3_text': 'The player loses all points for the turn and their turn ends immediately. The order of the dice doesn\'t matter (5-3 is identical to 3-5).',
            'special_rule4_title': 'The famous 4 and 2',
            'special_rule4_text': 'If the player shouts "42" (or clicks the button in the app) within 0.5 seconds, the roll is worth 42 points. Otherwise, it\'s worth 6 points (4+2).',
            'rule4_title': 'End of the game',
            'rule4_text': 'The first player to reach or exceed 210 points wins the game. If several players reach 210 points in the same turn, the one with the highest score wins.',
            'strategy_title': 'Strategy tips',
            'tip1_title': 'Manage your risk',
            'tip1_text': 'The more points you accumulate in a turn, the greater the risk of losing everything. Learn to stop in time.',
            'tip2_title': 'Roll memory',
            'tip2_text': 'Remember your last roll to avoid making the same one and losing your points.',
            'tip3_title': 'Anticipate the 4-2',
            'tip3_text': 'Always be ready to shout "42" when you roll the dice, especially if you need a lot of points.',
            'app_hero_title': 'Quarante-Deux on your mobile',
            'app_hero_text': 'Take the fun of the game anywhere with our official Android app.',
            'download_app': 'Download on Google Play',
            'rating_text': '4.8/5 - Number of downloads',
            'features_title': 'App features',
            'app_feature1_title': 'Solo play against AI',
            'app_feature1_text': 'Face a virtual opponent with a formidable strategy.',
            'app_feature2_title': 'Local multiplayer',
            'app_feature2_text': 'Play with friends on the same device, perfect for parties.',
            'app_feature3_title': 'Online multiplayer',
            'app_feature3_text': 'Challenge players from around the world in real time.',
            'app_feature4_title': 'Detailed statistics',
            'app_feature4_text': 'Track your performance, records and progress.',
            'app_feature5_title': 'Customization',
            'app_feature5_text': 'Choose from different visual themes and dice designs.',
            'app_feature6_title': 'Notifications',
            'app_feature6_text': 'Receive challenges and reminders to never miss a game.',
            'screenshots_title': 'Screenshots gallery',
            'screenshot1_desc': 'The dice game finally on mobile',
            'screenshot2_desc': 'Intuitive game interface',
            'testimonials_title': 'What players say',
            'testimonial1_text': '"Addictive! The best digital version of a dice game I\'ve found. The animations are superb and the game is smooth."',
            'testimonial1_author': '- Marie D.',
            'testimonial2_text': '"Perfect for playing with friends when you can\'t meet in person. The online multiplayer works perfectly."',
            'testimonial2_author': '- Thomas L.',
            'testimonial3_text': '"I love the 4-2 challenge that requires reflexes. It adds an exciting dimension to the traditional game."',
            'testimonial3_author': '- Sophie K.',
            'download_cta_title': 'Ready to play?',
            'download_cta_text': 'Download the Quarante-Deux app for free and start playing now!',
            'download_now': 'Download now',
            'compatibility_text': 'Compatible with Android 8.0 and later. No in-app purchases required.',
            'author_title': 'Jawed Tahir',
            'author_subtitle': 'Developer & Creator of Quarante-Deux',
            'author_text1': 'Passionate about games since my childhood and a professional developer for over 10 years, I created Quarante-Deux to share my passion for simple but strategic dice games.',
            'author_text2': 'Based in Marseille, I draw inspiration from the convivial atmosphere of café terraces and games between friends to create memorable gaming experiences.',
            'story_title': 'The story behind Quarante-Deux',
            'story1_title': 'The discovery',
            'story1_text': 'I discovered this dice game during a party with friends. The simplicity of the rules combined with the strategic depth immediately seduced me.',
            'story2_title': 'The creation',
            'story2_text': 'After years of playing with traditional dice, I decided to create a digital version to be able to play anywhere, anytime.',
            'story3_title': 'The development',
            'story3_text': 'Several months of development were needed to create a smooth, intuitive app faithful to the spirit of the original game.',
            'story4_title': 'The launch',
            'story4_text': 'Quarante-Deux is finally available on the Play Store, receiving extremely positive feedback from the gaming community.',
            'contact_title': 'Contact me',
            'contact_text': 'Do you have questions about the game, suggestions for improvement or just want to share your experience? Don\'t hesitate to contact me!',
            'email_title': 'Email',
            'personal_website_title': 'My personal website',
            'personal_website_link': 'javed.fr',
            'projects_title': 'My other projects',
            'project1_title': 'NeuroHarmonics',
            'project1_text': 'A complete app for generating sound waves to relax, sleep better, or focus.',
            'project2_title': 'Project 2',
            'project2_text': 'To Determine.',
            'project3_title': 'Project 3',
            'project3_text': 'To Determine.',
            'privacy_title': 'Privacy Policy',
            'privacy_intro': 'Last updated: August 14, 2025',
            'privacy_text1': 'This privacy policy explains how we collect, use and protect your information when you use our Quarante-Deux Le Jeu app.',
            'privacy_point1_title': '1. Information collection',
            'privacy_point1_text': 'The Quarante-Deux app does not collect any personally identifiable information. We do not request or store your name, email address, phone number or any other personal information.',
            'privacy_point2_title': '2. Game data',
            'privacy_point2_text': 'Game scores and statistics are stored locally on your device only. This data is not sent to our servers or shared with third parties.',
            'privacy_point3_title': '3. App permissions',
            'privacy_point3_text': 'Quarante-Deux does not require any special permissions on your device. The app works without access to your location, contacts, camera, microphone or other sensitive features.',
            'privacy_point4_title': '4. Advertising',
            'privacy_point4_text': 'Our app contains no ads and does not use third-party advertising services that might collect data for targeting purposes.',
            'privacy_point5_title': '5. In-app purchases',
            'privacy_point5_text': 'Quarante-Deux is completely free and does not offer in-app purchases. No payment information is therefore collected.',
            'privacy_point6_title': '6. Security',
            'privacy_point6_text': 'Although we do not collect sensitive data, we implement reasonable security measures to protect any information stored locally on your device.',
            'privacy_point7_title': '7. Changes to this policy',
            'privacy_point7_text': 'We reserve the right to modify this privacy policy at any time. Any changes will be posted on this page with a revised update date.',
            'privacy_point8_title': '8. Contact us',
            'privacy_point8_text': 'If you have any questions about this privacy policy, you can contact us at: jawed_tahir@yahoo.fr',
            'privacy_acceptance': 'By using the Quarante-Deux app, you agree to the terms of this privacy policy.',
            'follow_us': 'Follow us:',
            'copyright': '©2025 Quarante-Deux The game. By Jawed Tahir. All rights reserved.'
        }
    };

    // Language switcher functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'fr'; // Default language

    // Check for saved language preference
    if (localStorage.getItem('language')) {
        currentLang = localStorage.getItem('language');
        updateLanguage(currentLang);
        setActiveLangButton(currentLang);
    }

    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                localStorage.setItem('language', lang);
                updateLanguage(lang);
                setActiveLangButton(lang);
            }
        });
    });

    function setActiveLangButton(lang) {
        langButtons.forEach(button => {
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    function updateLanguage(lang) {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
                
                // Special case for input placeholder
                if (element.tagName === 'INPUT') {
                    element.setAttribute('placeholder', translations[lang][key]);
                }
            }
        });
        
        // Update page title
        const pageTitle = document.querySelector('title');
        const pageName = document.querySelector('header .active')?.textContent || 'Quarante-Deux';
        if (pageTitle) {
            pageTitle.textContent = `Quarante-Deux | ${pageName}`;
        }
    }
});