export const FIRST_NAME = [
    `Himura`,
    `Daichi`,
    `Eiko`,
    `Genji`,
    `Mizu`,
    `Isamu`,
    `Toyo`,
    `Ryoma`,
    `Michiko`,
    `Tomoe`,
    `Osamu`,
    `Rei`,
    `Sachi`,
    `Saito`,
    `Ume`,
    `Yori`,
    `Zen`,
    `Arata`,
    `Jiro`,
    `Musashi`,
    `Akihiro`,
    `Botan`,
    `Chika`,
    `Daigo`,
    `Etsuko`,
    `Fumio`,
    `Gendo`,
    `Hoshiko`,
    `Ichiro`,
    `Jun`,
    `Kaede`,
    `Katsuro`,
    `Masaki`,
    `Noboru`,
    `Renka`,
    `Sadao`,
    `Takumi`,
    `Umeko`,
    `Yori`,
    `Zanka`,
];

export const LAST_NAMES = [
    `Battosai`,
    `Chiba`,
    `Fujiwara`,
    `Hattori`,
    `Ito`,
    `Matsamune`,
    `Sakura`,
    `Sakamoto`,
    `Okada`,
    `Hajime`,
    `Takahashi`,
    `Uesugi`,
    `Yamagata`,
    `Yojimbo`,
    `Akiyama`,
    `Fujimoto`,
    `Miyamoto`,
    `Ishikawa`,
    `Kitano`,
    `Matsushita`,
    `Ayanami`,
    `Chikamatsu`,
    `Dazai`,
    `Ebihara`,
    `Fujikawa`,
    `Gōda`,
    `Hayashi`,
    `Ishibashi`,
    `Jinno`,
    `Kamizawa`,
    `Kuroda`,
    `Minamoto`,
    `Nakamura`,
    `Okabe`,
    `Ryuzaki`,
    `Saotome`,
    `Takayama`,
    `Yagami`,
    `Zenko`,
    'Bando',
];

export const NICKNAMES = [
    `The Hawk's Eye / Taka no Me`,
    `The Dragon of the Sea / Umi no Tatsu`,
    `Thunder Fang / Kaminari no Kiba`,
    `River God / Kawa no Kami`,
    `Mountain Wind / Yama no Kaze`,
    `Sword Saint of the Wind / Kaze no Kensei`,
    `Demon of the Fog / Kiri no Oni`,
    `Tiger of Hell / Jigoku no Tora`,
    `Fox of the Night / Yoru no Kitsune`,
    `Black Fang / Kuroi Kiba`,
    `Tiger Demon / Tora no Oni`,
    `Cat's Paw / Neko no Te`,
    `Wind Tengu / Kaze no Tengu`,
    `Man Slayer / Hitokiri`,
    `Knight of Darkness / Yami no Kishi`,
    `Monster Boss / Bakemono no Oyabun`,
    `Flower Geisha / Hana no Geisha`,
    `Warrior of Thunder / Kaminari no Senshi`,
    `Ghostly Wanderer / Yurei no Tomurai`,
    `Black Shadow / Kuroi Kage `,
    `Black Swallow / Kuroi Tsubame`,
    `Shadow Wind / Kaze no Yami`,
    `Iron Fang / Tetsu Kiba`,
    `Snow of Hell / Jigoku no Yuki`,
    `Demon Feather / Hane no Oni`,
    `Crimson Mist / Akai Kiri`,
    `Scarlet Thunder / Shinku Kaminari`,
    `River Ghost / Kawa no Yurei`,
    `Eye of the Crow / Karasu no Me`,
    `Silent Tiger / Shizuka Tora`,
    `Flower of Darkness / Yami no Hana`,
    `Blood Crane / Chi no Tsuru`,
    `World Between / Utsushiyo`,
    `Thunder Monk / Kaminari Sho¯Nin`,
    `Invisible Feather / To¯Mei Hane`,
    `Sweet Death / Amai Shi`,
    `Voice of Higan / Higan no Koe`,
    `Swan Spirit / Hakucho¯ Reikon`,
    `White Claw / Shiroi Tsume`,
    `Rat of the Night / Yoru no Nezumi`,
];

export const JOBS = [
    //Forgotten Rōnin
    {
        name: `Forgotten Rōnin`,
        descrip: `
            <p>
                <strong>The Forgotten Rōnin</strong>, a man without a master, he roams the land with his sword at his side and his
                honour as his guide. He's a samurai of the road, a warrior of the wilds, seeking fortune and adventure
                wherever they may be found.
            </p>
            <p>
                His skills are <strong>sharp</strong>, his heart is <strong>ashes</strong>, but he's a man on the outside looking in. He's not bound by
                the rules of society, nor is he burdened by its obligations. He's a <strong>lone wolf</strong>, a <strong>rebel</strong>, a <strong>
                force of nature</strong>. And when trouble comes to town, he's the one they call on to <strong>set things right</strong>.
            </p>
        `,
        stats: {
            swiftness: 2,
            spirit: -2,
            vigor: 2,
            resilience: 2,
            honour: -1,
            virtues: 2,
            hp: 10
        },
        features: [
            {
                title: `RONIN’S RESOLVE`,
                descrip:
                `<em>The Forgotten Ronin can draw upon their inner strength and resolve in times of great need.</em>
                <p><strong class="adjust-strong-size">Once per day</strong>, they may <strong class="adjust-strong-size">roll d6</strong> and add the result to <span class="underline">any one roll they make</span>.</p>
                `
            },

            {
                title: `SWORD MASTER`,
                descrip: `
                <em>A master of the blade, wielding their sword with deadly precision.</em>
                <p>They may add their <strong class="adjust-strong-size">Vigor modifier</strong> to <strong class="adjust-strong-size">damage rolls made with melee weapons</strong>.</p>
                `
            },
            {
                title: `MASTERLESS`,
                descrip: `
                If the Forgotten Rōnin’s <span class="underline"><strong class="adjust-strong-size">honour score</strong> is below 10</span> they may <strong class="adjust-strong-size">Parry at DR12</strong>. 
                `
            },
            {
                title: `BUSHI'S BLADE`,
                descrip: `
                When both the Rōnin and an enemy are wielding a <strong class="adjust-strong-size">Katana</strong> or <strong class="adjust-strong-size">Wakizashi</strong> the <span class="underline">attack and defence DR is lowered by 2</span>. 
                `
            },
            {
                title: `PROTECTOR`,
                descrip: `
                <em>The Forgotten Ronin is fiercely protective of their allies and will go to great lengths to defend them.</em>
                <p><span class="underline">Once per combat</span>, they may protect an ally, <strong class="adjust-strong-size">adding +2 to their defence against all attacks</strong> until the <span class="underline">end of the Ronin’s next turn</span>.</p>
                `
            },
            {
                title: `HAUNTED BLADE`,
                descrip: `
                <em>A cursed blade that whispers to them in moments of stress.</em>
                <p><span class="underline">Once per combat</span>, the Ronin can choose to make a sacrifice to the blade, granting it power for a <span class="underline">single strike</span>. The sacrifice can be anything from <strong class="adjust-strong-size">losing d4 HP</strong> to discarding an <strong class="adjust-strong-size">important item</strong>.</p>
                <p><span class="underline">The next time the Ronin attacks with the blade</span>, they <strong class="adjust-strong-size">roll twice</strong> and take the <strong class="adjust-strong-size">higher roll</strong>, the strike deals an <strong class="adjust-strong-size">extra d8 damage</strong>.</p>
                <p>However, <span class="underline">after the strike</span>, the blade becomes <em>uncontrollable</em> and <strong class="adjust-strong-size">attacks a random target</strong>, including the Rōnin or their allies, until the <span class="underline">end of the Ronin’s next turn</span>. </p>
                `
            },
        ],
        startingEquipment: [
            {
                item: `A worn but serviceable <strong class="underline">katana</strong> (<strong>d8 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `A set of traveling clothes`,
                type: `item`,
                die: ``
            },
            {
                item: `A letter of introduction (<em>can be used to gain an audience with a local lord or official</em>)`,
                type: `item`,
                die: ``
            },
            {
                item: `A straw hat`,
                type: `item`,
                die: ``
            },
            {
                item: `[] <strong class="underline">food</strong>`,
                type: `item`,
                die: `1d4`,
            },            
            {
                item: `[] <strong class="underline">water</strong>`,
                type: `item`,
                die: `1d4`,
            },
        ],
        tenants: {
            title: `The Ronin's Creed`,
            honourList: [
                {
                    name: `Resilience`,
                    descrip: `Endure and overcome hardship, never giving up in the face of adversity.`,
                },
                {
                    name: `Freedom`,
                    descrip: `Be free from the expectations and constraints of society and is free to pursue their own path and goals. However, they must always be mindful of the consequences of their actions.`,
                },
                {
                    name: `Personal Mastery`,
                    descrip: `Constantly strive to improve their skills and abilities, to become a true master of their craft.`,
                },
                {
                    name: `Empathy`,
                    descrip: `Understand and empathize with the suffering of others, and to show compassion and mercy when it is called for.`,
                },
                {
                    name: `Discipline`,
                    descrip: `Have the self-discipline and self-control to master their own emotions and impulses, and to act with clarity and purpose in all situations.`,
                },
                {
                    name: `Dignity`,
                    descrip: `Face death with dignity and honour, and never fear the unknown.`,
                },
            ]
        },
        ryo: `1d6x10`,
    },
    //Erudite Samurai
    {
        name: `Erudite Samurai`,
        descrip: `
            <p>
                <strong>The Erudite Samurai</strong> is an inquisitive one, with a thirst for knowledge that rivals their love for battle. They're the kind of warrior who can discuss poetry as deftly as they can swing a sword.
            </p>
            <p>
                They know that true <strong>Mastery of the Blade</strong> requires a deep understanding of the world around them.
                They use their <strong>intellect</strong> to gain the upper hand in battles of wit and diplomacy. A master of tactics
                and culture. In a world where <strong>brawn</strong> often <strong>reigns supreme</strong>, the erudite samurai is a rare and valuable
                gem, a warrior who values <strong>knowledge and wisdom</strong> as highly as <strong>strength and skill</strong>.
            </p>
        `,
        stats: {
            swiftness: -1,
            spirit: -1,
            vigor: 2,
            resilience: 1,
            honour: 2,
            virtues: 2,
            hp: 8
        },
        features: [
            {
                title: `Scholarly Training`,
                descrip:
                `
                <em>The Erudite Samurai has received extensive training in the arts of literature, philosophy, and the sciences.</em>
                <p><span class="underline">If in honourable standing</span> (<strong class="adjust-strong-size">above 10 Honour</strong>) they may add <strong class="adjust-strong-size">+4 to a damage roll</strong> <span class="underline">once per day</span>.</p>
                `
            },

            {
                title: `Philosophy of War`,
                descrip: `
                <em>A deep understanding of the nature of conflict allows them to predict their enemies' movements and plan accordingly.</em>
                <p><span class="underline">Once per combat</span>, the <strong class="adjust-strong-size">Erudite Samurai</strong> can predict the next move of their opponent and gain a <strong class="adjust-strong-size">+2 bonus to their attack roll against that opponent</strong>.</p>
                <p><strong class="adjust-strong-size">This ability can only be used if</strong> they have had <span class="underline">at least one round</span> to observe their <strong class="adjust-strong-size">opponent's fighting style</strong>.</p>
                `
            },
            {
                title: `Tactical Genius`,
                descrip: `
                <em>A master of strategy and tactics.</em>
                <p>They may use their <strong class="adjust-strong-size">honour score</strong> if in <span class="underline">honourable standing</span> (<strong class="adjust-strong-size">Honour 10 or above</strong>) to gain an advantage in combat, <strong class="adjust-strong-size">reducing the DR of a parry to DR12</strong>.</p>
                `
            },
            {
                title: `Precise Strike`,
                descrip: `
                <em>Trained to strike with precision, finding the weaknesses in their opponents' defences.</em> 
                <p><span class="underline">Once per combat encounter</span>, they may add a <strong class="adjust-strong-size">bonus to their attack roll equal to their Vigor modifier</strong>.</p>
                `
            },
            {
                title: `Intimidating Presence`,
                descrip: `
                <em>Knowledge and training make them a formidable opponent.</em>
                <p><span class="underline">Once per day</span>, they can intimidate their enemies, <strong class="adjust-strong-size">lowering the DR of their next attack by 4</strong>.</p>
                `
            },
            {
                title: `Zen Focus`,
                descrip: `
                <span class="underline">Once per day</span>, they can enter a state of zen-like focus, granting them a <strong class="adjust-strong-size">+1 bonus to all ability rolls for a <span class="underline">duration of 10 minutes</span></strong>.
                `
            },
        ],
        startingEquipment: [
            {
                item: `A fine <span class="underline">Katana</span> (<strong>d10 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `A <span class="underline">Wakizashi</span> (<strong>d6 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `A set of sturdy armour (tier 2) `,
                type: `armor`,
                die: ``,
            },
            {
                item: `A collection of <span class="underline">books and papers</span>`,
                type: `item`,
                die: ``
            },
            {
                item: `[] <strong class="underline">food</strong>`,
                type: `item`,
                die: `1d4`,
            },            
            {
                item: `[] <strong class="underline">water</strong>`,
                type: `item`,
                die: `1d4`,
            },
        ],
        tenants: {
            title: `Bushido`,
            honourList: [
                {
                    name: `Courage`,
                    descrip: `Face challenges and adversity with courage and bravery, never backing down or showing fear.`,
                },
                {
                    name: `Honesty`,
                    descrip: `Be truthful in all your words and deeds and avoid deception or trickery.`,
                },
                {
                    name: `Honour`,
                    descrip: `Maintain a strong sense of personal honour and integrity, and always strive to live up to the ideals of the samurai.`,
                },
                {
                    name: `Loyalty`,
                    descrip: `Show unwavering loyalty to your lord and clan and prioritize their interests above your own.`,
                },
                {
                    name: `Self-Control`,
                    descrip: `Control your emotions and impulses and avoid acting impulsively or recklessly.`,
                },
                {
                    name: `Self-Sacrifice`,
                    descrip: `Be willing to sacrifice your own life or well-being for the sake of others, especially for your lord or clan.`,
                },
            ]
        },
        ryo: `3d6x10`,
    },
];
