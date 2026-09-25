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
    `Thunder Monk / Kaminari Shō Nin`,
    `Invisible Feather / Tō Mei Hane`,
    `Sweet Death / Amai Shi`,
    `Voice of Higan / Higan no Koe`,
    `Swan Spirit / Hakuchō Reikon`,
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
            title: `The Rōnin's Creed`,
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
    //Drunken Monk
    {
        name: `Drunken Monk`,
        descrip: `
            <p><strong>The Drunken Monk</strong>, swaying and stumbling like a drunkard yet wielding the <strong>power of a raging storm</strong>. They are a master of <strong>Zen Buddhism</strong> and have honed their skills in the art of drunken fighting to a <strong>deadly level</strong>.</p>
            <p>Don't be fooled by their appearance, for they move with an <strong>otherworldly grace</strong> that belies their drunken state. These wandering monks often find themselves on a <strong>quest for enlightenment</strong> or may lend their services as <strong>bodyguards and enforcers</strong> to those who can afford them.</p>
            <p>With their combination of <strong>martial arts and spiritual insight</strong>, the <strong>Drunken Monk</strong> is a true master of the way of the warrior.</p>
        `,
        stats: {
            swiftness: 2,
            spirit: 2,
            vigor: 1,
            resilience: -2,
            honour: -1,
            virtues: 4,
            hp: 8 
        },
        features: [
            {
                title: `Drunken Fist`,
                descrip:
                `
                <em>The Drunken Monk fights with an unpredictable, fluid style that confounds opponents.</em>
                <p>They may add their <strong class="adjust-strong-size">Spirit modifier</strong> when making <strong class="adjust-strong-size">unarmed attacks</strong>.</p>
                `
            },

            {
                title: `Five Finger Death Punch`,
                descrip: 
                `
                <span class="underline">Once per session</span>, choose to strike an opponent with a <strong class="adjust-strong-size">precision unarmed attack</strong> that targets pressure points, dealing an <strong class="adjust-strong-size">additional 6d4 on a <span class="underline">success</span></strong> and <strong class="adjust-strong-size">stunning the target</strong>.
                `
            },
            {
                title: `Roadhouse`,
                descrip: 
                `
                    <em>Make a brutal attack against an opponent's throat <strong class="adjust-strong-size">potentially killing them outright</strong>.</em>
                    <p><span class="underline">Before making an attack</span>, <strong class="adjust-strong-size">Test Spirit DR14</strong>. The attack requires the monk to make a <strong class="adjust-strong-size">successful attack</strong> and may only be used on a <strong class="adjust-strong-size">surprised opponent</strong>.</p>
                `
            },
            {
                title: `Flame Fist`,
                descrip: 
                `
                    Knuckles imbued with <em>mystical fire</em>, dealing <strong class="adjust-strong-size">1d4 additional fire damage</strong> and potentially <strong class="adjust-strong-size">setting targets on fire</strong>. 
                    <p>The Monk may only use this ability a <span class="underline">limited number of times per day</span> (<strong class="adjust-strong-size">Spirit +1</strong>).</p>
                `
            },
            {
                title: `Sake Style`,
                descrip: 
                `
                    <span class="underline">When the Drunken Monk is under the effects of <strong class="adjust-strong-size">alcohol</strong></span>, they gain a temporary <strong class="adjust-strong-size">+2 bonus to their melee attacks</strong> and <strong class="adjust-strong-size">defence</strong>.
                `
            },
            {
                title: `Drunken Master`,
                descrip: 
                `
                    Turn any item into a weapon, increasing the <strong class="adjust-strong-size">damage from a d4 to d6</strong>. Additionally, they have a <strong class="adjust-strong-size">+1 bonus to initiative rolls <span class="underline">while drunk</span></strong>.
                `
            },
        ],
        startingEquipment: [
            {
                item: `A set of <span class="underline">brass knuckles</span> (<strong>d4 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `A set of monk's robes and sandals`,
                type: `item`,
                die: ``
            },
            {
                item: `A gourd of sake`,
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
            title: `Noble Truths`,
            honourList: [
                {
                    name: `Simplicity`,
                    descrip: `Live simply and humbly, free of worldly attachments.`,
                },
                {
                    name: `Harmony`,
                    descrip: `Seek to bring balance to all aspects of life.`
                },
                {
                    name: `Compassion`,
                    descrip: `Show compassion and mercy to all, even enemies.`,
                },
                {
                    name: `Perseverance`,
                    descrip: `Never give up, even in the face of adversity.`,
                },
                {
                    name: `Serenity`,
                    descrip: `Remain calm and composed, even during chaos.`,
                },
                {
                    name: `Honesty`,
                    descrip: `Always speak and act truthfully and hold yourself to the highest moral standard.`,
                },
            ]
        },
        ryo: `1d6x10`,
    },
    //Corrupted Shinobi 
    {
        name: `Corrupted Shinobi`,
        descrip: `
            <strong>The Corrupted Shinobi</strong>, a scoundrel of the highest order, has <strong>forsaken all traditional honour</strong>.
            <p>Instead, they use their <strong>stealth</strong> and <strong>guile</strong> to <strong>weave a web of deceit</strong>, assassinating their prey from the <strong>shadows</strong>. No lord or clan can control this wily fiend, for their <strong>only true master is their own greed</strong>.</p>
            <p>Their <strong>blades are sharp</strong>, <strong>their wits sharper</strong>, and their <strong>hearts as black as the night they stalk</strong>. They are the shadow that creeps up behind you, the serpent that slithers beneath your feet. Cross them at your own peril, for they are the <strong>Corrupted Shinobi</strong>, and their <strong>loyalty is to only themselves</strong>.</p>
        `,
        stats: {
            swiftness: 2,
            spirit: 2,
            vigor: -1,
            resilience: 1,
            honour: -2,
            virtues: 2,
            hp: 8
        },
        features: [
            {
                title: `Corrupted Technique`,
                descrip:
                `
                    <em>Various forbidden techniques that allow manipulation of shadows and infliction of horrific curses. </em>
                    <p><span class="underline">Once per day</span>, they can choose one of the following effects: <strong class="adjust-strong-size">create a pool of darkness to hide in</strong> or <strong class="adjust-strong-size">curse an enemy to take ongoing damage</strong> (<em>d4 per round</em>).</p>
                `
            },

            {
                title: `Poison Master`,
                descrip: 
                `
                <em>An expert in crafting and applying deadly poisons. </em>
                <p>They can create <strong class="adjust-strong-size">one dose of poison during a <span class="underilne">short rest</span></strong>. Poisons created this way deal an <strong class="adjust-strong-size">additional d4 damage</strong>.</p>
                `
            },
            {
                title: `Smoke Screen`,
                descrip: 
                `
                    <span class="underline">Once per day</span>, the shinobi can create a <strong class="adjust-strong-size">dense cloud of smoke</strong> that provides <strong class="adjust-strong-size">cover</strong> and <strong class="adjust-strong-size">obscures vision</strong>.
                    <p><span class="underline">The smoke lasts for d6 rounds</span>.</p>
                `
            },
            {
                title: `Betrayer's Blade`,
                descrip: 
                `
                    <em>The Corrupted Shinobi carries a blade that is infused with dark magic and has the ability to absorb the life force of their enemies.</em>
                    <p><span class="underline">Once per day</span>, they can use this ability to deal an <strong class="adjust-strong-size">additional d8 damage</strong> and <strong class="adjust-strong-size">heal themselves for the same amount</strong>.</p>
                `
            },
            {
                title: `Shadow Step`,
                descrip: 
                `
                    <em>Teleport a short distance by stepping into the shadows. </em>
                    <p>They can use this ability to <strong class="adjust-strong-size">teleport</strong> to a <strong class="adjust-strong-size">nearby shadowy area</strong>. The Shinobi may only use this ability a <span class="underline">limited number of times per day</span> (<em>Swiftness +1</em>).</p>
                `
            },
            {
                title: `Dark Illusion`,
                descrip: 
                `
                    <span class="underline">Once per combat</span>, they can create an <strong class="adjust-strong-size">illusory double of themselves</strong>, causing enemies to attack the <strong class="adjust-strong-size">wrong target</strong>. 
                    <p><span class="underline">When the Shinobi is hit</span>, <strong class="adjust-strong-size">roll a d6</strong>; on an <span class="underline">even number</span> the <strong class="adjust-strong-size">enemy hits the Shinobi</strong>, on an <span class="underline">odd number</span> it hits the <strong class="adjust-strong-size">illusion causing it to disappear</strong>.</p>
                `
            },
        ],
        startingEquipment: [
            {
                item: `A pair of <span class="underline">matched kusarigama</span> (<strong>d6 damage, melee + ranged</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `10 <span class="underline">Shuriken</span> (<strong>d4 Damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `A small <span class="underline">vial of poison</span> (<strong>d6 uses, d4 damage for d4 rounds</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `A set of dark, unremarkable clothing`,
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
            title: `The Unseen Virtues`,
            honourList: [
                {
                    name: `Deception`,
                    descrip: `Use your skills of deception to achieve your goals, but never let your true intentions be known.`,
                },
                {
                    name: `Ruthlessness`,
                    descrip: `Show no mercy to those who oppose you.`
                },
                {
                    name: `Loyalty`,
                    descrip: `Remain loyal to your allies and those who hold power over you, even if it goes against your personal interests.`,
                },
                {
                    name: `Discretion`,
                    descrip: `Keep your actions and intentions secret, revealing them only to those you trust`,
                },
                {
                    name: `Adaptability`,
                    descrip: `Be prepared to adapt and change your plans at a moment's notice to achieve your goals`,
                },
                {
                    name: `Perseverance`,
                    descrip: `Never give up, even in the face of seemingly insurmountable obstacles.`,
                },
            ]
        },
        ryo: `2d6x10`,
    },
    // Onmyoji 
    {
        name: `Onmyoji`,
        descrip: `
            The <strong>Onmyoji</strong>, a conduit of the <strong>spiritual world</strong> who uses their powers to <strong>bend the very fabric of reality to their will</strong>. They are <strong>feared</strong> and <strong>shunned</strong> with their talk of <strong>dead spirits</strong> and <strong>otherworldly beings</strong>. 
            <p>They must be careful not to be <strong>consumed by their own greed and desires</strong>, for they know that there are spirits out there that would love nothing more than to <strong>drag them down into the abyss</strong>.</p>
            <p>They may work for the powerful, using their <strong>otherworldly knowledge</strong> to gain favour and influence. Or they may be <strong>outcasts</strong>, living in the shadows and using their powers to make a quick coin. <strong>They know the secrets of the dead and can communicate with the spirits that linger in this world</strong>.</p>
        `,
        stats: {
            swiftness: -1,
            spirit: 3,
            vigor: 2,
            resilience: -1,
            honour: 0,
            virtues: 4,
            hp: 8
        },
        features: [
            {
                title: `Divining Rod`,
                descrip:
                `
                <em>A rod carved from a sacred tree that vibrates and hums when danger is near. When in use, the rod will point in the direction of any nearby threats. </em>
                <p><span class="underline">Once per day</span>, the Onmyoji can ask the rod a <strong class="adjust-strong-size">yes</strong> or <strong class="adjust-strong-size">no</strong> question and <strong class="adjust-strong-size">receive a clear answer</strong>.</p>
                `
            },

            {
                title: `Ofuda Talisman`,
                descrip: 
                `
                    <em>A sheet of paper inscribed with protective symbols that can be used to ward off evil spirits or curses. </em>
                    <p>The talisman can be used <span class="underline">once per day</span> to <strong class="adjust-strong-size">protect against a single supernatural attack or effect</strong>. <strong class="adjust-strong-size">Test Spirit DR12</strong> to activate the talisman and <strong class="adjust-strong-size">negate the effect</strong>.</p>
                `
            },
            {
                title: `Spirit Beacon`,
                descrip: 
                `
                    <span class="underline">Once per day</span>, the Onmyoji can use their spirit energy to create a <strong class="adjust-strong-size">glowing beacon that draws enemies towards it</strong>. 
                    <p><strong class="adjust-strong-size">Test Spirit DR12</strong>. <span class="underline">On a success</span>, all enemies in the area are drawn to the beacon, <strong class="adjust-strong-size">distracting them from attacking the Onmyoji</strong>. <span class="underline">On a fail</span>, the beacon attracts <strong class="adjust-strong-size">all enemies to the Onmyoji</strong>. </p>
                    <p>The beacon lasts for <span class="underline">d6 rounds</span>.</p>
                `
            },
            {
                title: `Shadow Binding`,
                descrip: 
                `
                    <em>Attempt to bind an enemy to its shadow, rendering them immobile.</em>
                    <p>To use this ability, <strong class="adjust-strong-size">Test Spirit DR12</strong>. <span class="underline">On a success</span>, the enemy is <strong class="adjust-strong-size">unable to move until the <span class="underline">end of the Onmyoji's next turn</span></strong>.</p>
                    <p>The Onmyoji may only use this ability a <span class="underline">limited number of times per day</span> (<strong class="adjust-strong-size">Spirit +1</strong>).</p>
                `
            },
            {
                title: `Text of Exorcism`,
                descrip: 
                `
                    <em>A text containing powerful incantations and symbols that can be used to banish evil spirits or demons.</em>
                    <p><span class="underline">Once per day</span>, the Onmyoji must <strong class="adjust-strong-size">Test Spirit DR14</strong> to activate the text, which can <strong class="adjust-strong-size">banish a single spirit or demon</strong> (<span class="underline">cannot be used in Yomi</span>).</p>
                `
            },
            {
                title: `Mirror of Reflection`,
                descrip: 
                `
                    <em>A handheld mirror inscribed with runes that can be used to reflect hostile spells or attacks. </em>
                    <p><span class="underline">Once per day</span>, <strong class="adjust-strong-size">Test Spirit DR12</strong> to use the mirror, reflecting any spell or attack directed at them. <strong class="adjust-strong-size">This deals the attack’s damage back to the attacker</strong>.</p>
                `
            },
        ],
        startingEquipment: [
            {
                item: `A <span class="underline">Kiseru</span>, a metal smoking pipe used as a makeshift weapon (<strong>d4 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `A set of robes and talismans`,
                type: `item`,
                die: ``
            },
            {
                item: `A random Unseen Text and Shintai Text`,
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
            title: `The Rules of the Divine`,
            honourList: [
                {
                    name: `Respect for Nature`,
                    descrip: `Show reverence and respect for the natural world and its power.`,
                },
                {
                    name: `Balance`,
                    descrip: `Seek to maintain balance and harmony between the physical and spiritual worlds.`
                },
                {
                    name: `Wisdom`,
                    descrip: `Use your knowledge and wisdom to guide your actions and decisions.`,
                },
                {
                    name: `Compassion`,
                    descrip: `Show compassion and empathy for all living beings, even those who are different or oppose you.`,
                },
                {
                    name: `Patience`,
                    descrip: `Be patient and wait for the right time to act, rather than rushing into action.`,
                },
                {
                    name: `Perseverance`,
                    descrip: `Never give up, even in the face of seemingly impossible odds.`,
                },
            ]
        },
        ryo: `1d6x10`,
    },
    // Bakuto 
    {
        name: `Bakuto`,
        descrip: `
            The <strong>Bakuto</strong>, a crafty sort with a <strong>loaded dice</strong> and a <strong>silver tongue</strong>. They'll charm you with their words and bleed you dry with their cards. <strong>A master of deception</strong>, the Bakuto knows how to get what they want, be it gold or power, without getting their hands dirty.
            <p><strong>They dance with danger</strong>, walking the razor's edge between life and death, making deals and playing both sides. <strong>They are the underworld's puppet masters</strong>, pulling the strings of the criminal world with their slick moves and cold heart.</p>
            <p>The Bakuto's loyalty lies with themselves and their allies, but they may lend their talents to those who can <strong>pay the price</strong>. Watch your step, for if the Bakuto is playing, <strong>the game is rigged, and the house always wins</strong>.</p>
        `,
        stats: {
            swiftness: -2,
            spirit: 2,
            vigor: 2,
            resilience: -1,
            honour: 1,
            virtues: 4,
            hp: 10
        },
        features: [
            {
                title: `Gambling Luck`,
                descrip:
                `
                    <em>Bakuto can sense when a game is rigged, or someone is cheating.</em>
                    <p>They get <strong class="adjust-strong-size">+2 to Spirit tests</strong> when <span class="underline">gambling or playing games of chance</span>.</p>
                    <p>They can also <strong class="adjust-strong-size">re-roll any one roll</strong>, <span class="underline">once per day</span>.</p>
                `
            },

            {
                title: `Sucker Punch`,
                descrip: 
                `
                <em>Take a swing before they know what hit ‘em.</em>
                <p>Deal <strong class="adjust-strong-size">double damage</strong> with their <span class="underline">first strike in a round</span>.</p>
                `
            },
            {
                title: `Dirty Tricks.`,
                descrip: 
                `
                    <em>Pull a fast one to gain the advantage.</em>
                    <p><span class="underline">Once per combat</span>, <strong class="adjust-strong-size">add +2 to any attack</strong> or <strong class="adjust-strong-size">defence roll</strong> by using deception, trickery or surprise.</p>
                `
            },
            {
                title: `Sleight of Hand`,
                descrip: 
                `
                    <em>The art of pickpocketing, intimidation, and thievery. </em>
                    <p>They get <strong class="adjust-strong-size">+4 to Spirit tests</strong> when <span class="underline">attempting these actions</span>.</p>
                `
            },
            {
                title: `Double Strike`,
                descrip: 
                `
                <em>A master of dual wielding.</em>
                <p><strong class="adjust-strong-size">Make two melee attacks in a <span class="underline">single turn</span></strong>, but each attack <strong class="adjust-strong-size">suffers a -2 penalty to the attack roll</strong>.</p>
                `
            },
            {
                title: `Feint`,
                descrip: 
                `
                    Choose to forgo their attack on their turn and instead <strong class="adjust-strong-size">Test Spirit DR10</strong>.
                    <p><span class="underline">If successfu</span>l, the Bakuto gains a <strong class="adjust-strong-size">+4 to their <span class="underline">next attack</span> also dealing +4 damage</strong>.</p>
                `
            },
        ],
        startingEquipment: [
            {
                item: `A <spaan class="underline">tanto</spaan> (<strong>d4 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `A set of stylish, flamboyant clothing`,
                type: `item`,
                die: ``
            },
            {
                item: `A set of loaded dice and marked cards.`,
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
            title: `The Gambler’s Way`,
            honourList: [
                {
                    name: `Honour Among Thieves`,
                    descrip: `Show respect and loyalty to fellow Bakuto and maintain a strict code of conduct among yourselves.`,
                },
                {
                    name: `Resourcefulness`,
                    descrip: `Use whatever means necessary to achieve your goals, whether it be through cunning, brute force, or diplomacy.`
                },
                {
                    name: `Bravery`,
                    descrip: `Face danger with courage and determination, even if it means risking your life.`,
                },
                {
                    name: `Self-Reliance`,
                    descrip: `Rely on your own skills and instincts to survive and thrive.`,
                },
                {
                    name: `Camaraderie`,
                    descrip: `Forge strong bonds with your allies, and never abandon them in times of need.`,
                },
                {
                    name: `Adaptability`,
                    descrip: `Be prepared to change your plans and methods as circumstances dictate.`,
                },
            ]
        },
        ryo: `3d6x10`,
    },
    // Yamabushi
    {
        name: `Yamabushi`,
        descrip: `
            The <strong>Yamabushi</strong> aren’t your run-of-the-mill warriors. No sir, they're a solitary bunch, cut from a different cloth, <strong>steeped in the quiet whispers of mountain trails and fog-shrouded peaks</strong>.
            <p>They know the dance of <strong>Shugendō</strong> - a spiritual tango drawing its steps from <strong>Taoism, Shinto, Buddhism, and the raw poetry of the earth itself</strong>.</p>
            <p>They pull their power from the <strong>heart of the world</strong>, and there is nothing more potent than that. <strong>Healers, exorcists, drinkers of the divine</strong>, they weave their lives with threads of the ethereal, mixing the mystic with the martial like some potent brew. Now, the Yamabushi, they’re not your swordswinging, horse-riding types, no. They're your <strong>high-altitude monks</strong>, your mystics with <strong>mud-caked boots and stars in their eyes</strong>.</p>
        `,
        stats: {
            swiftness: 1,
            spirit: 2,
            vigor: -1,
            resilience: 1,
            honour: 1,
            virtues: 4,
            hp: 8
        },
        features: [
            {
                title: `Mountain's Resolve`,
                descrip:
                `
                    <span class="underline">Once per day</span>, draw upon the spiritual energy of the mountains to gain a <strong class="adjust-strong-size">+4 bonus to a roll</strong>.
                `
            },

            {
                title: `Spiritual Martial Arts`,
                descrip: 
                `
                    <em>They are trained in a unique form of martial arts that channels spiritual energy.</em>
                    <p><span class="underline">Once per combat</span>, they may add their <strong class="adjust-strong-size">Spirit modifier</strong> to an <strong class="adjust-strong-size">attack</strong> or <strong class="adjust-strong-size">defence roll</strong>.</p>
                `
            },
            {
                title: `Mountain's Fury`,
                descrip: 
                `
                    <span class="underline">Once per combat</span>, channel the wrath of the mountains into a powerful strike, <strong class="adjust-strong-size">dealing an additional d6 damage</strong>.
                `
            },
            {
                title: `Ascetic's Wisdom`,
                descrip: 
                `
                    <em>Your years of solitude have given the Yamabushi deep insight.</em>
                    <p><span class="underline">Once per day</span>, they may <strong class="adjust-strong-size">reroll a failed Spirit test</strong>.</p>
                `
            },
            {
                title: `Divine Guidance`,
                descrip: 
                `
                    <em>Call upon the spirits for guidance and protection. </em>
                    <p><span class="underline">Once per day</span>, the Yamabushi can perform a ritual to seek divine guidance, granting them a <strong class="adjust-strong-size">temporary bonus of +2</strong> to <strong class="adjust-strong-size">one ability of their choice</strong> for the <span class="underline">next hour</span>.</p>
                `
            },
            {
                title: `Mystic's Shield`,
                descrip: 
                `
                    <span class="underline">Once per day</span>, they may use their spiritual energy to shield themself from harm, <strong class="adjust-strong-size">reducing the damage of an incoming attack to zero</strong>.
                `
            },
        ],
        startingEquipment: [
            {
                item: `A <span class="underline">bo staff</span> (<strong>d6 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `Robes and sash adorned with pom-poms`,
                type: `item`,
                die: ``
            },
            {
                item: `A random Unseen Text. `,
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
            title: `The Yamabushi’s Path`,
            honourList: [
                {
                    name: `Enlightenment`,
                    descrip: `Pursue spiritual clarity amidst worldly chaos.`,
                },
                {
                    name: `Harmony`,
                    descrip: `Maintain balance with nature's elements and wisdom.`
                },
                {
                    name: `Healing`,
                    descrip: `Utilize divine energies to soothe suffering.`,
                },
                {
                    name: `Exorcism`,
                    descrip: `Expel malevolent spirits plaguing the world.`,
                },
                {
                    name: `Discipline`,
                    descrip: `Uphold Shugendō's austerity, forsaking worldly luxuries.`,
                },
                {
                    name: `Tradition`,
                    descrip: `Honour and respect ancient rituals and practices.`,
                },
            ]
        },
        ryo: `1d6x10`,
    },
];

    
    // {
    //     name: ``,
    //     descrip: `

    //     `,
    //     stats: {
    //         swiftness: ,
    //         spirit: ,
    //         vigor: ,
    //         resilience: ,
    //         honour: ,
    //         virtues: ,
    //         hp: 
    //     },
    //     features: [
    //         {
    //             title: ``,
    //             descrip:
    //             `
                
    //             `
    //         },

    //         {
    //             title: ``,
    //             descrip: 
    //             `
                
    //             `
    //         },
    //         {
    //             title: ``,
    //             descrip: 
    //             `

    //             `
    //         },
    //         {
    //             title: ``,
    //             descrip: 
    //             `

    //             `
    //         },
    //         {
    //             title: ``,
    //             descrip: 
    //             `
                
                
    //             `
    //         },
    //         {
    //             title: ``,
    //             descrip: 
    //             `

    //             `
    //         },
    //     ],
    //     startingEquipment: [
    //         {
    //             item: `A worn but serviceable <strong class="underline">katana</strong> (<strong>d8 damage</strong>)`,
    //             type: `weapon`,
    //             die: ``,
    //         },
    //         {
    //             item: `A set of traveling clothes`,
    //             type: `item`,
    //             die: ``
    //         },
    //         {
    //             item: `A letter of introduction (<em>can be used to gain an audience with a local lord or official</em>)`,
    //             type: `item`,
    //             die: ``
    //         },
    //         {
    //             item: `A straw hat`,
    //             type: `item`,
    //             die: ``
    //         },
    //         {
    //             item: `[] <strong class="underline">food</strong>`,
    //             type: `item`,
    //             die: `1d4`,
    //         },            
    //         {
    //             item: `[] <strong class="underline">water</strong>`,
    //             type: `item`,
    //             die: `1d4`,
    //         },
    //     ],
    //     tenants: {
    //         title: ``,
    //         honourList: [
    //             {
    //                 name: ``,
    //                 descrip: ``,
    //             },
    //             {
    //                 name: ``,
    //                 descrip: ``
    //             },
    //             {
    //                 name: ``,
    //                 descrip: ``,
    //             },
    //             {
    //                 name: ``,
    //                 descrip: ``,
    //             },
    //             {
    //                 name: ``,
    //                 descrip: ``,
    //             },
    //             {
    //                 name: ``,
    //                 descrip: ``,
    //             },
    //         ]
    //     },
    //     ryo: `1d6x10`,
    // },