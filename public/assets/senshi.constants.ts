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
                title: `RONIN'S RESOLVE`,
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
                    descrip: `Do what you must to achieve your goals, even if that means lying.`,
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
    // Wild Dancer 
    {
        name: `Wild Dancer `,
        descrip: `
            The <strong>Wild Dancer</strong>, that's a character who's raw and reckless, a <strong>grim ballet of steel and gunpowder</strong>, twisting through the madness of battle like a half-crazed poet on a drunken payday. <strong>There's an art to their carnage</strong>, a rhythm to their mayhem. They're a heady mix of <strong>samurai discipline</strong> and <strong>wild, gunslinging abandon</strong>, turning every bloody skirmish into a theatrical spectacle.
            <p>They're a swirling dervish of <strong>katana slashes</strong> and <strong>matchlock pistol blasts</strong>, dancing across the battlefield like it's the stage of some grand, grotesque opera. They wade through chaos with the finesse of a <strong>prima ballerina</strong> and the raw power of a <strong>rampaging bull</strong>. It's a dance of death, set to the rhythm of <strong>clashing steel</strong> and <strong>booming gunshots</strong>.</p>
        `,
        stats: {
            swiftness: -1,
            spirit: 2,
            vigor: 2,
            resilience: -2,
            honour: -1,
            virtues: 2,
            hp: 8
        },
        features: [
            {
                title: `Untamed Ferocity`,
                descrip:
                `
                    <span class="underline">Once per combat encounter</span>, they may enter a state of untamed ferocity for a <span class="underline">number of rounds equal to their <strong class="adjust-strong-size">Vigor modifier</strong></span> (<strong class="adjust-strong-size">minimum 1</strong>). 
                    <p><span class="underline">While in this state</span>, they gain a <strong class="adjust-strong-size">+1 bonus to both attack and defence rolls</strong>, and their <strong class="adjust-strong-size">matchlock pistol deals an additional d4 damage</strong>. However, they <span class="underline"><strong class="adjust-strong-size">lose their ability to Parry during this time</strong></span>, as their focus is solely on aggressive combat.</p>
                `
            },

            {
                title: `Two-Weapon Fighting`,
                descrip: 
                `
                    <em>Skilled at fighting with a weapon in each hand.</em>
                    <p><span class="underline">Once per day</span>, <strong class="adjust-strong-size">attack twice in a round</strong> with both <strong class="adjust-strong-size">gun</strong> and <strong class="adjust-strong-size">katana</strong>.</p>
                `
            },
            {
                title: `Dancing Defence`,
                descrip: 
                `
                    <em>Use graceful movements to dodge attacks. </em>
                    <p><span class="underline">Once per day</span>, <strong class="adjust-strong-size">dodge</strong> an attack that would have <strong class="adjust-strong-size">hit</strong>.</p>
                `
            },
            {
                title: `Shooting Star`,
                descrip: 
                `
                    <span class="underline">Once per combat</span>, perform a flashy attack with the pistol that distracts and confuses the enemy, <strong class="adjust-strong-size">reducing the DR to attack that enemy by 4 for the <span class="underline">next round</span></strong>.
                `
            },
            {
                title: `Sword Dance`,
                descrip: 
                `
                    <span class="underline">Once per day</span>, unleash a flurry of sword strikes, <strong class="adjust-strong-size">dealing an extra 2d6 of damage</strong>.
                `
            },
            {
                title: `Wild Spirit`,
                descrip: 
                `
                    <em>The Wild Dancer’s unpredictable nature makes it hard for enemies to anticipate their actions.</em>
                    <p><span class="underline">Once per combat</span>, they may <strong class="adjust-strong-size">reroll</strong> a <strong class="adjust-strong-size">failed attack</strong> or <strong class="adjust-strong-size">defence roll</strong>.</p>
                `
            },
        ],
        startingEquipment: [
            {
                item: `A <span class="underline">Katana</span> (<strong>d8 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `A <strong>Tanegashima</strong> with <span class="underline">Spirit+5 Bullets</span> (<strong>d8 damage</strong>)`,
                type: `weapon`,
                die: ``
            },
            {
                item: `A flashy, decorative kimono`,
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
            title: `The Dancer’s Code`,
            honourList: [
                {
                    name: `Expression`,
                    descrip: `Embrace your unique self, expressing it without restraint.`,
                },
                {
                    name: `Rhythm`,
                    descrip: `Life's a dance; move with its rhythm, not against it.`
                },
                {
                    name: 'Passion', 
                    descrip: 'Let your emotions fuel your actions, turning fights into fiery dances.'},
                {
                    name: 'Grace', 
                    descrip: 'Show elegance in every step, even in chaos.'},
                {
                    name: 'Courage', 
                    descrip: 'Face challenges boldly, as a dancer embraces the stage.'},
                {
                    name: 'Innovation', 
                    descrip: 'Constantly improvise, surprising everyone with unexpected moves and actions.'},
            ]
        },
        ryo: `1d6x10`,
    },
    // Reckless Sumo 
    {
        name: `Reckless Sumo`,
        descrip: `
            The <strong>Reckless Sumo</strong>, well, he's no prince charming, but a <strong>boulder among pebbles</strong>, stubborn and solid,
            carved out of raw muscle and grit. They say size is a hindrance, but not for these guys, it's their
            <strong>badge of honour</strong>, a testament to their might that ain't shaking for no one. They're schooled in that
            old sumo wrestling game, <strong>
                trading sword and shield for a chest full of thunder and palms that can
                uproot trees
            </strong>.
            <p>
                They make their stand on the frontline, <strong>immovable</strong>, <strong>unshakeable</strong>, like a lighthouse in the tempest.
                These titans, they don't bank on the quick dance of the sword but the slow, painful endurance of the
                storm.
            </p>
            <p>
                The Sumo class is for those tough nuts who believe in standing firm, outmuscling the odds,
                    and letting the <strong>world know they're not going down without a hell of a fight</strong>.
            </p>
        `,
        stats: {
            swiftness: -2,
            spirit: -1,
            vigor: 3,
            resilience: 2,
            honour: 1,
            virtues: 2,
            hp: 12
        },
        features: [
            {
                title: `Iron Body`,
                descrip:
                `
                    <em>A Sumo's body is like a fortress.</em>
                    <p><span class="underline">Once per day</span>, they may <strong>shrug off an attack that would have damaged them</strong>.</p>
                `
            },

            {
                title: `Sumo Slam`,
                descrip: 
                `
                <em>Uses superior strength and mass to deliver a powerful slam attack.</em>
                <p><span class="underline">Once per combat</span>, they may add <strong>twice their Vigor modifier to a melee attack roll</strong>.</p>
                `
            },
            {
                title: `Mountain's Grasp`,
                descrip: 
                `
                    <strong>Roll 2d6+Vigor.</strong>
                    <p><span class="underline">If the result is higher than the <strong>target's morale</strong></span>, they are <strong>grappled</strong>, rendering them <strong>unable to attack</strong> or <strong>move</strong> <span class="underline">until the start of the Sumo’s next turn</span>. </p>
                    <p><em>The effect ends early if the Sumo is <strong>moved</strong> or <strong>rendered unconscious</strong>.</em></p>
                `
            },
            {
                title: `Ring Out`,
                descrip: 
                `
                    <span class="underline">Once per combat</span>, they may push an enemy out of the immediate combat zone, <strong>stopping them from melee attacks for <span class="underline">a round</span></strong>.
                `
            },
            {
                title: `Chanko Power`,
                descrip: 
                `
                <em>The Reckless Sumo’s diet of <strong><span class="underline">chanko nabe</span></strong> gives them incredible strength.</em>
                <p><span class="underline">Once per day</span>, they can tap into this power to get a <strong>+6 on any Vigor test</strong>.</p>
                `
            },
            {
                title: `Belly Bump`,
                descrip: 
                `
                    <em>The Sumo can use their considerable girth to bump an opponent, potentially knocking them off balance.</em>
                    <p><span class="underline">In the next round</span>, attacks against this <strong>enemy are made at +4</strong>.</p>
                `
            },
        ],
        startingEquipment: [
            {
                item: `<span class="underline">Hand Chalk</span> (<strong>d8 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `Traditional Sumo clothing`,
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
            title: `The Sumo’s Oath`,
            honourList: [
                {
                    name: `Endurance`,
                    descrip: `Embrace the storm, stand your ground, weather adversity.`},
                {
                    name: `Strength`,
                    descrip: `Harness physical power, demonstrate it wisely and responsibly.`},
                {
                    name: `Patience`,
                    descrip: `Learn to wait, to watch, to seize the right moment.`},
                {
                    name: `Respect`,
                    descrip: `Honour your opponents, acknowledge their strengths, regardless of the outcome.`},
                {
                    name: `Discipline`,
                    descrip: `Rigorously train your body and mind, fortify your spirit.`},
                {
                    name: `Tradition`,
                    descrip: `Uphold the ancient practices, respecting the wisdom they embody.`},
            ]
        },
        ryo: `1d6x10`,
    },
    // The Sword Saint 
    {
        name: `The Sword Saint`,
        descrip: `
            The <strong>Sword Saint</strong> - Not just any fencer, but the epitome of duelling mastery. With a blade that dances elegantly and strikes with deadly precision, <strong>their every move is a masterclass</strong>. Their footwork is fluid, their accuracy unmatched.
            <p>A duelling legend, with a legacy of foes bested and a spirit that remains <strong>unyielding</strong>. In the dance of steel, <strong>they're always a step ahead</strong>.</p>
        `,
        stats: {
            swiftness: 2,
            spirit: -1,
            vigor: 2,
            resilience: 1,
            honour: 1,
            virtues: 2,
            hp: 8
        },
        features: [
            {
                title: ` Artful Execution`,
                descrip:
                `
                <em>A true master of their chosen weapon, the Sword Saint is capable of performing strikes of unparalleled precision.</em>
                <p><span class="underline">Once per combat</span>, they can execute a perfect strike, <strong class="adjust-strong-size">ignoring their opponent's armour or natural defences</strong>.</p>
                `
            },

            {
                title: `Unyielding Focus`,
                descrip: 
                `
                    <em>In the heat of battle, the Sword Saint’s focus never wavers. </em>
                    <p><span class="underline">Once per combat</span>, they can enter a state of heightened concentration, <strong class="adjust-strong-size">reducing all incoming damage by half for <span class="underline">one round</span></strong>.</p>
                `
            },
            {
                title: `Blade's Spirit`,
                descrip: 
                `
                    <span class="underline">Once per session</span>, they can pour their spirit into a <span class="underline">single</span>, devastating strike, <strong class="adjust-strong-size">adding their Honour score to the damage roll</strong>.
                `
            },
            {
                title: `Ancestral Weapon`,
                descrip: 
                `
                    <em>The Sword Saint’s weapon is old, passed down through generations.</em>
                    <p><span class="underline">Once per day</span>, the Sword Saint can call upon the spirits of their ancestors to guide their blade, <strong class="adjust-strong-size">granting them a reroll on any <span class="underline">one attack roll</span></strong>.</p>
                `
            },
            {
                title: `Harmonic Duel`,
                descrip: 
                `
                    <em>When engaged in combat with a single opponent, the Sword Saint finds a rhythm in the clash of steel.</em>
                    <p><span class="underline">Once per duel</span>, they can predict their opponent's next move, <strong class="adjust-strong-size">gaining advantage on their next attack, defence, or riposte roll</strong>.</p>
                `
            },
            {
                title: `Unyielding Discipline`,
                descrip: 
                `
                    <em>Years of strict discipline make them a formidable opponent.</em>
                    <p><span class="underline">Once per day</span>, they can intimidate their enemies, <strong class="adjust-strong-size">lowering the DR of their next attack by -</strong>4.</p>
                `
            },
        ],
        startingEquipment: [
            {
                item: `<span class="underline">Odachi</span> (<strong>d10 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `A set of worn armour (tier 3)`,
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
            title: `The Sword Saint's Discipline `,
            honourList: [
                {
                    name: `Precision`,
                    descrip: `Every movement, every strike, every parry should be measured and precise.`
                },
                {
                    name: `Mastery`,
                    descrip: `Strive to perfect your art, constantly seeking improvement.`
                },
                {
                    name: `Discipline`,
                    descrip: `Train the mind as well as the body, maintaining focus and clarity.`
                },
                {
                    name: `Valour`,
                    descrip: `Face combat and adversity with bravery, without fear.`
                },
                {
                    name: `Respect`,
                    descrip: `Honour your opponents and their skills, recognizing their worth.`
                },
                {
                    name: `Legacy`,
                    descrip: `Preserve the ancient way of the sword, honouring the wisdom of past masters.`
                },
            ]
        },
        ryo: `1d6x10`,
    },
    // Ashigaru Survivor
    {
        name: `Ashigaru Survivor`,
        descrip: `
            Footsoldier of no renown; <strong>trained to outlast orders and storms.</strong>
            <p>Orders stopped coming, <strong>so you kept walking</strong>. There’s dirt under your nails and scars under your ribs. <strong>The war never really ended</strong>. You were trained to hold the line. You know where to step, where to hide food, how to patch flesh with a shirt sleeve and a steady hand. </p>
            <p>You get up slow, bleed slow, breathe slow. <strong>And you don’t fall easy…</strong></p>
        `,
        stats: {
            swiftness: 0,
            spirit: -2,
            vigor: 2,
            resilience: 4,
            honour: 2,
            virtues: 2,
            hp: 10
        },
        features: [
            {
                title: `Footslogger's Grit`,
                descrip:
                `
                    <span class="underline">Once per day</span>, when you would drop to 0HP, <strong class="adjust-strong-size">remain at 1HP instead</strong>.
                    <p>Your next <strong class="adjust-strong-size">Defence Test is -2 DR</strong>.</p>
                `
            },

            {
                title: `Wind-Body Drill`,
                descrip: 
                `
                    <span class="underline">Once per combat</span>, steady your breath—<strong class="adjust-strong-size">your next ranged Attack <span class="underline">this round</span> is -4 DR</strong>.
                `
            },
            {
                title: `Suffering Builds Character`,
                descrip: 
                `
                    If you deal <strong class="adjust-strong-size">d4HP of damage</strong> to yourself <span class="underline">prior to combat</span>, you benefit from <strong class="adjust-strong-size">-2 DR</strong> for a <span class="underline">number of rolls equal to the <strong class="adjust-strong-size">HP</strong> lost</span>.
                `
            },
            {
                title: `Quiet Step`,
                descrip: 
                `
                    Your <span class="underline">first</span> <strong class="adjust-strong-size">Swiftness Test</strong> each combat is <strong class="adjust-strong-size">-2 DR</strong>.
                `
            },
            {
                title: `I’m Not Even Hungry`,
                descrip: 
                `
                    You do not need to eat or drink to <strong class="adjust-strong-size">heal</strong>.
                `
            },
            {
                title: `I Can Do This All Day`,
                descrip: 
                `
                    Roll a d6, now. You can be <strong class="adjust-strong-size">resurrected</strong> that many times.
                `
            },
        ],
        startingEquipment: [
            {
                item: `<span class="underline">Yari</span> (<strong>d8 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `<span class="underline">Tanto</span> (<strong>d6 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `<span class="underline">Yumi</span> with <span class="underline">Spirit+10 arrows</span> (<strong>d6 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `Reed rain-cloak`,
                type: `item`,
                die: ``
            },
            {
                item: `Rope coil`,
                type: `item`,
                die: ``
            },
            {
                item: `Needle & bandages`,
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
            title: `Ash-Line's Oath`,
            honourList: [
                {
                    name: `Hold the Line`,
                    descrip: `Never break ranks, never retreat. Face death with honour.`
                },
                {
                    name: `Breathe Before You Move`,
                    descrip: `Stillness is swiftness. Find your centre before you find your feet.`
                },
                {
                    name: `Spare the Ration`,
                    descrip: `Where war marches, famine follows. A soldier should always know where the next meal is coming from.`
                },
                {
                    name: `Bow to Water`,
                    descrip: `Soldiers respect the tides. They too know what it is to be carried on strong currents, and dashed against rocks.`
                },
                {
                    name: `Fix What You Carry`,
                    descrip: `Repair and preserve. Throw nothing away, lest you be discarded yourself.`
                },
                {
                    name: `Spend the Last Arrow Well`,
                    descrip: `Choose wisely when to let a quarrel fly. An empty quiver is useless to the living, as is a full one to the dead.`
                },
            ]
        },
        ryo: `1d6x10`,
    },
    // Hōkaibito
    {
        name: `Hōkaibito`,
        descrip: `
            A vow taken in <strong>rot</strong>; power bought with slow unmaking.
            <p>You made a vow in the dark, and now <strong>it's eating you</strong>. There's moss where there should be skin. <strong>You carry your own rot like a banner</strong> - don't flinch when the bones crack, don’t beg when the fever hits.</p>
            <p>The forest knows you. <strong>The kodama knows better</strong>. You’re what happens when someone <strong>trades time for power and means it</strong>.</p>
        `,
        stats: {
            swiftness: -1,
            spirit: -2,
            vigor: 1,
            resilience: 3,
            honour: -3,
            virtues: 2,
            hp: 8
        },
        features: [
            {
                title: `Absorption`,
                descrip: `
                    If you kill a yōkai, its soul is tied to you, <strong class="adjust-strong-size">granting a feature</strong> determined by the GM based on the <strong class="adjust-strong-size">yōkai's abilities</strong>.
                    <p>This ability can only be <span class="underline">used once per creature</span>.</p>
                `
            },
            {
                title: `Wither's Touch`,
                descrip: `You can <strong class="adjust-strong-size">poison</strong> food and water with touch.`},
            {
                title: `Rot Mark`,
                descrip: `<span class="underline">Once per combat</span>, on a hit, you may mark the target.
                <p>While marked, the <span class="underline">first time each round</span> they <strong class="adjust-strong-size">move</strong> or <strong class="adjust-strong-size">shout</strong>, they take <strong class="adjust-strong-size">d4 damage</strong>.</p>`
            },
            {
                title: `Grave Nourish`,
                descrip: `
                <span class="underline">Once per day</span>, you can pack wounds with moss and sap (<span class="underline">takes roughly 10 minutes</span>).
                <p>Restore <strong class="adjust-strong-size">d6HP to a creature</strong>. If used on yourself, <strong class="adjust-strong-size">also clear any infectio</strong>n.</p>`
            },
            {
                title: `Patient Unbinding`,
                descrip: `
                    If you forgo <strong class="adjust-strong-size">Attacks</strong> <span class="underline">this round</span> and <strong class="adjust-strong-size">keep both feet to the earth</strong>, your first <strong class="adjust-strong-size">Attack</strong> <span class="underline">next round</span> is <strong class="adjust-strong-size">-4 DR</strong>; <span class="underline">on a hit</span>, deal <strong class="adjust-strong-size">+d4 damage</strong> and <strong class="adjust-strong-size">poison</strong> the target.`
            },
            {
                title: `Refuse to Fall`,
                descrip: `
                    <span class="underline">Once per character</span>, when you would drop below <strong class="adjust-strong-size">0HP</strong>, encase yourself in a tree. You can be transported as a tree and count as <strong class="adjust-strong-size">1 heavy item</strong>.
                    <p><span class="underline">If planted</span>, your next character starts with an <strong class="adjust-strong-size">extra d10HP</strong>.</p>
                    <p><span class="underline">If burned</span>, all your allies can be <strong class="adjust-strong-size">resurrected</strong> again if they already have been.</p>
                    <p><span class="underline">If taken to Yomi</span> you return to life with <strong class="adjust-strong-size">maximum Honour</strong>.</p>
                    `
                },
        ],
        startingEquipment: [
            {
                item: `Rust-pitted <span class="underline">katana</span> (<strong>d8 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `<span class="underline">Short blade</span> (<strong>d6 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `Thorn-cord`,
                type: `item`,
                die: ``
            },
            {
                item: `Sap-soaked rag (oil)`,
                type: `item`,
                die: ``
            },
            {
                item: `Bark mask`,
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
            title: `Thorn-Tied Promise`,
            honourList: [
                {
                    name: `Perseverance`,
                    descrip: `Endure what must be borne.`
                },
                {
                    name: `Suffering`,
                    descrip: `Spend pain with purpose.`
                },
                {
                    name: `Fester`,
                    descrip: `Do not spread rot for pride.`
                },
                {
                    name: `Tenacity`,
                    descrip: `Keep the vow even if it scars.`
                },
                {
                    name: `Putrescence`,
                    descrip: `Bloom last. Strike only when it ends things.`
                },
                {
                    name: `Pulchritude`,
                    descrip: `Leave beauty unbroken when you can.`
                },
            ]
        },
        ryo: `1d6x10`,
    },
    // Hōzien
    {
        name: `Hōzien`,
        descrip: `
            The <strong>Hōzien</strong> monks are silent ascetics who live on the volcanic ridges of Kaji. They are known for their doctrine of <strong>cutting without hate</strong>, <strong>stillness over speed</strong>, and <strong>truth through form</strong>.
            <p>Each monk is given a <strong>single spear</strong>—their only tool, weapon, and <strong>mirror</strong>.</p>
        `,
        stats: {
            swiftness: 3,
            spirit: 1,
            vigor: 0,
            resilience: 2,
            honour: 2,
            virtues: 2,
            hp: 8
        },
        features: [
            {
                title: `Line of Truth`,
                descrip:
                `
                    <span class="underline">Once per day</span>, before combat begins, you may draw a line in the ground with your spear. If an enemy attacks you <span class="underlilne">after crossing the line</span>, <strong class="adjust-strong-size">Defence Tests are -4 DR</strong>.
                    <p><strong class="adjust-strong-size">The line only works if you haven't attacked yet.</strong></p>
                `
            },

            {
                title: `Dragonfly Cut`,
                descrip: 
                `
                    <span class="underline">Once per combat</span>, your spear hums with perfect form. You may Attack <strong class="adjust-strong-size">two adjacent enemies in one motion</strong>.
                    <p>
                        <span class="underline">If both attacks hit</span>, choose <strong class="adjust-strong-size">one</strong>:
                        <ul>
                            <li><strong class="adjust-strong-size"><em>Disarm one target</em></strong>. they spend their turn retrieving their weapon.</li>
                            <li><strong class="adjust-strong-size"><em>Move away from both enemies</em></strong>. they cannot attack you next round.</li>
                        </ul>
                    </p>
                `
            },
            {
                title: `Still Hands`,
                descrip: 
                `
                    <span class="underline">Once per combat</span>, if you do not act on your turn, you gain <strong class="adjust-strong-size">-3 DR to any Parries</strong> that round and <strong class="adjust-strong-size">advantage on your next Attack</strong>.
                `
            },
            {
                title: `Moon Mirror Style`,
                descrip: 
                `
                    <span class="underline">Once per session</span>, when an enemy attacks you, you may reflect their form.
                    <p><strong class="adjust-strong-size">Test Resilience DR14</strong> to immediately repeat their action with your own stats and equipment (<em>e.g., if they used a sword technique, you may mimic it with your spear</em>).</p>
                    <p>This includes effects from <strong class="adjust-strong-size">Texts</strong> or <strong class="adjust-strong-size">enemy special abilities</strong> (<em>if the GM approves</em>).</p>
                `
            },
            {
                title: `Cut Without Malice`,
                descrip: 
                `
                    <span class="underline">Once per day</span>, your strikes draw no hatred, only truth.
                    <p><span class="underline">When you reduce a creature to <strong class="adjust-strong-size">0HP</strong></span>, you may instead leave them at <strong class="adjust-strong-size">1HP</strong> and ask one question they <strong class="adjust-strong-size">must answer truthfully</strong>.</p>
                `
            },
            {
                title: `Oath Through Steel`,
                descrip: 
                `
                    <span class="underline">Once per session</span>, each strike affirms a truth.
                    <p><span class="underline">When you declare your intent before battle</span> (<em>a truth, belief, or vow</em>), your first successful <strong class="adjust-strong-size">Attack</strong> deals <strong class="adjust-strong-size">+d8 damage</strong> and you <strong class="adjust-strong-size">gain +2 Honour</strong>.</p>
                `
            },
        ],
        startingEquipment: [
            {
                item: `<span class="underline">Hōzien spear</span> (<strong>d8 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `<span class="underline">Prayer blade</span> (<strong>d4 damage, <em>hidden in sandal sole</em></strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `
                    3 <span class="underline">Ofuda</span> {<em>paper seals bearing your truths</em>}
                    <p>you may burn one to gain advantage on a Test. once all are burned, they must be rewritten in ink and blood during a long rest, during which you forgo healing.</p>
                    <p>while Dishonourable, you cannot rewrite them.</p>
                `,
                type: `item`,
                die: ``
            },
            {
                item: `A <span class="underline">reed-woven monk's robe</span> (<strong>tier 1 armour</strong>)`,
                type: `armor`,
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
            title: `Lines That Do Not Move`,
            honourList: [
                {
                    name: `Stillness`,
                    descrip: `Act only when necessary. Let restraint speak louder than action.`
                },
                {
                    name: `Clarity`,
                    descrip: `Seek truth in all things. Do not act in confusion or haste.`
                },
                {
                    name: `Discipline`,
                    descrip: `Control your body, your thoughts, and your blade. Let nothing strike without purpose.`
                },
                {
                    name: `Mercy`,
                    descrip: `When the line is drawn and your opponent sees the truth, spare them.`
                },
                {
                    name: `Silence`,
                    descrip: `Speak only when words carry weight. Silence is your shield and stance.`
                },
                {
                    name: `Presence`,
                    descrip: `Be unmoved by fear, deception or provocation. Where you stand is where truth begins.`
                },
            ]
        },
        ryo: `1d6x0`,
    },
    // Kamaitachi Rider
    {
        name: `Kamaitachi Rider`,
        descrip: `
            <strong>Wind-weasel outrider</strong>; cuts arrive on the gust before you move.
            <p>You move like you've got <strong>wind in your blood</strong> and a <strong>blade for a shadow</strong>. You don't stand still. <strong>Standing still gets you buried</strong>. You strike between heartbeats, vanishing before the scream.</p>
            <p>Offer salt. Break snares. <strong>Keep running</strong>. Because the moment you stop, <strong>the wind forgets your name</strong>.</p>
        `,
        stats: {
            swiftness: 4,
            spirit: -2,
            vigor: 2,
            resilience: 0,
            honour: 2,
            virtues: 3,
            hp: 6
        },
        features: [
            {
                title: `Slipstream Step`,
                descrip:
                `
                <span class="underline">Once per combat</span>, instantly disengage or take a better position on the battlefield; your next <strong>Attack</strong> or <strong>Defence</strong> is <strong>-2 DR</strong>.
                `
            },

            {
                title: `Ankle Sever`,
                descrip: 
                `
                    Your <span class="underline">first hit each combat</span> adds <strong>+d4 damage</strong> and <strong>staggers</strong> the target (<em>they fall and cannot move</em>).
                `
            },
            {
                title: `Whistle Surge`,
                descrip: 
                `
                    <span class="underline">Once per duel</span>, after you succeed at <strong>Guard</strong>, immediately <strong>Attack at DR8</strong>.
                `
            },
            {
                title: `I Am Weasel`,
                descrip: 
                `
                    You can escape any containment and fit through tiny spaces.
                    <p>Tests involving swift movement are <strong>-4 DR</strong>.</p>
                `
            },
            {
                title: `Offer to the Gust`,
                descrip: 
                `
                    Leave rice, salt, or sake (<em>1 ryō or a ration</em>).
                    <span class="underline">For the rest of the day</span>, make <strong>Swiftness Tests</strong> with <strong>advantage</strong>, and gain <strong>d4 additional HP</strong>.
                `
            },
            {
                title: `Wind Veil`,
                descrip: 
                `
                    All <strong>ranged Attacks</strong> targeting you are <strong>-4 DR</strong>.
                `
            },
        ],
        startingEquipment: [
            {
                item: `<span class="underline">Kama</span> (<strong>d6 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `<span class="underline">Tanto</span> (<strong>d6 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `Pouch of rice/salt`,
                type: `item`,
                die: ``
            },
            {
                item: `Ankle wraps`,
                type: `item`,
                die: ``
            },
            {
                item: `Reed whistle`,
                type: `item`,
                die: ``
            },
            {
                item: `Wind-cloak`,
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
            title: ``,
            honourList: [
                {
                    name: `Motion`,
                    descrip: `Keep moving; strike from the step, not the stand.`
                },
                {
                    name: `Edge of Mercy`,
                    descrip: `First cut staggers, not slaughters; spare those who drop their blades.`
                },
                {
                    name: `Clean Passage`,
                    descrip: `Break snares and lines; leave roads safer than you found them.`
                },
                {
                    name: `Quiet`,
                    descrip: `Let the whistle speak; boastful mouths lose the wind.`
                },
                {
                    name: `Offerings`,
                    descrip: `Feed the gust (rice, salt, sake); pay what the breeze carries for you.`
                },
                {
                    name: `No Masters`,
                    descrip: `Serve no tyrant and bind no spirit to cruelty.`
                },
            ]
        },
        ryo: `2d6x1`,
    },
    // Kensei of the Five Rings
    {
        name: `Kensei of the Five Rings`,
        descrip: `
            <div class="ring-row">
                <div class="ring"></div><div class="ring"></div><div class="ring"></div><div class="ring"></div><div class="ring"></div> Five rings.
            </div>
            <p><strong>Earth</strong> for the ones who never move when they should. <strong>Water</strong> for the ones who slip too far. <strong>Fire</strong> for the ones who burn loud and die early. <strong>Wind</strong> for the fakes who think style will save them. And <strong>Void</strong>... Void's the part you stop trying to understand when you've killed enough to realise there's nothing left to learn.</p>
            <p><strong>Invincible is just a word</strong>.</p>
        `,
        stats: {
            swiftness: 2,
            spirit: 2,
            vigor: 1,
            resilience: 1,
            honour: 2,
            virtues: 2,
            hp: 8
        },
        features: [
            {
                title: `Granite Guard`,
                subtitle: `earth`,
                descrip:
                `
                 <span class="underline">Once per combat</span>, reduce all damage you take by<strong> d6 </strong><span class="underline">until your next turn</span>.
                 <p>If you <strong>Parry</strong> while this is active, you deal <strong>+d6 damage</strong>.</p>
                `
            },

            {
                title: `Flowing Adaptation`,
                subtitle: `water`,
                descrip: 
                `
                    <span class="underline">Once per combat</span>, after a successful <strong>Defence</strong> or <strong>Parry</strong>, immediately reposition and make one <strong>Attack</strong> at <strong>-2 DR</strong>.
                `
            },
            {
                title: `Single-Beat Kill`,
                subtitle: 'fire',
                descrip: 
                `
                    <span class="underline">Once per day</span>, declare before you roll.
                    <p>Your <strong>Attack</strong> is <strong>-4 DR</strong> and, <span class="underline">on a hit</span>, deals <strong>+d8 damage</strong>.</p>
                `
            },
            {
                title: `Cut The Gap`,
                subtitle: 'wind',
                descrip: 
                `
                    When <strong>Attacking</strong> during a <span class="underline">duel</span> your <strong>DR is -4</strong>.
                `
            },
            {
                title: `No-Mind`,
                subtitle: 'void',
                descrip: 
                `
                    <span class="underline">Once per session</span>, before you roll any one <strong>Attack/Defence/Parry</strong>, reduce its <strong>DR by -4</strong>.
                    <p><span class="underline">If it deals damage</span>, ignore <strong>armour</strong> for that hit.</p>
                
                `
            },
            {
                title: `Two Heavens`,
                subtitle: `niten ichi`,
                descrip: 
                `
                    <span class="underline">Once per combat</span>, while wielding <strong>katana</strong> + <strong>wakizashi</strong>, either: make <strong>two Attacks</strong> this turn <span class="underline">OR</span> make <strong>one Attack</strong> now and <strong>automatically succeed with a Parry</strong> <span class="underline">before your next turn</span>.
                `
            },
        ],
        startingEquipment: [
            {
                item: `Fine <span class="underline">katana</span> (<strong>d10 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `<span class="underline">Wakizashi</span> (<strong>d6 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `Training gi`,
                type: `item`,
                die: ``
            },
            {
                item: `Whetstone`,
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
            title: `The Five Rings`,
            honourList: [
                {
                    name: `Be Unmoved`,
                    descrip: '<em>Earth</em>. Plant stance before steel; yield to neither push, taunt, nor noise.'
                },
                {
                    name: `Be Formless`,
                    descrip: '<em>Water</em>. Change guard and distance without pause; answer force with redirection.'
                },
                {
                    name: `Decide`,
                    descrip: '<em>Fire</em>. When the beat opens, strike at once; do not trade blows.'
                },
                {
                    name: `Read Others`,
                    descrip: '<em>Wind</em>. Study every school; cut through habit, not pride.'
                },
                {
                    name: `Empty Intention`,
                    descrip: '<em>Void</em>. No anger, no flourish; make the cut and be still.'
                },
                {
                    name: `Just a Word`,
                    descrip: '<em>Unrivalled</em>. No ego in victory or loss.'
                },
            ]
        },
        ryo: `2d6x10`,
    },
    // Kitsunetsukai
    {
        name: `Kitsunetsukai`,
        descrip: `
            <strong>Fox-binder</strong>; walks markets that aren't there and comes back with <strong>paper teeth</strong>.
            <p><strong>Fox spirits trail you</strong> - small, sharp things that bite through flesh and bone. You bind them with <strong>paper</strong> and <strong>blood</strong>. Lanterns flicker when you pass. Some burn white. You <strong>heal</strong>, you <strong>hex</strong>, <strong>vanish</strong> through walls thinner than truth.</p>
            <p>Just don't say your name out loud. <strong>Not here</strong>. Not where things listen.</p>
        `,
        stats: {
            swiftness: 1,
            spirit: 4,
            vigor: 0,
            resilience: 1,
            honour: 1,
            virtues: 2,
            hp: 8
        },
        features: [
            {
                title: `Fox Step`,
                descrip:
                `
                    <span class="underline">Once per combat</span>, you <strong class="adjust-strong-size">vanish</strong> in a rustle of paper and <strong class="adjust-strong-size">reappear</strong> beside an <span class="underline">ally in sight</span> (<em>through walls no thicker than paper/ wood</em>).
                    That ally regains <strong class="adjust-strong-size">+d4HP</strong>.
                `
            },

            {
                title: `Healing Ofuda`,
                descrip: 
                `
                    <span class="underline">Once per day</span>, send a talisman flying at an <strong class="adjust-strong-size">ally</strong>.
                    <p>They <strong class="adjust-strong-size">regain +d6HP</strong> <em>or</em> remove a <strong class="adjust-strong-size">negative status</strong>.</p>
                `
            },
            {
                title: `White Lantern`,
                descrip: 
                `
                    <span class="underline">Once per day</span>, tests <strong class="adjust-strong-size">Spirit DR12</strong>.
                    <p><span class="underline">If successful</span>, your <em>Kudagitsune</em> ignores <strong class="adjust-strong-size">armour</strong> and deals <strong class="adjust-strong-size">double damage</strong> for <span class="underline">d4 rounds</span>.</p>
                `
            },
            {
                title: `Foxfire Strike`,
                descrip: 
                `
                    <span class="underline">Once per combat</span>, wreathe your blade or ofuda in a pale flame.
                    <p>Your next hit adds <strong class="adjust-strong-size">+d6 blessed fire damage</strong> and <strong class="adjust-strong-size">ignores</strong> mundane armour.</p>
                    <p>If the target is <span class="underline">sealed</span>, <span class="underline">marked</span>, or <span class="underline">muted</span>, roll with <strong class="adjust-strong-size">advantage</strong>.</p>
                `
            },
            {
                title: `Twin Pact`,
                descrip: 
                `
                    You may keep two <em>Kudagitsune</em> bound. You still issue only one <strong class="adjust-strong-size">Command</strong> per round.
                    <p>Dissipated foxes return at <span class="underline">dusk instead of dawn</span>.</p>
                `
            },
            {
                title: `Path of the Fox`,
                descrip: 
                `
                    Your next <strong class="adjust-strong-size">Spirit Test</strong> is <strong class="adjust-strong-size">-2 DR</strong>.
                    <p>If that <strong class="adjust-strong-size">Test</strong> involves <strong class="adjust-strong-size">attacking</strong>, <strong class="adjust-strong-size">sealing</strong>, or <strong class="adjust-strong-size">banishing</strong> a <span class="underline">yōkai</span>, add <strong class="adjust-strong-size">+d4 to the effect</strong>.</p>
                `
            },
        ],
        pet: {
            title: 'Kuoagitsune',
            subtitle: 'HP5',
            features: [
                {
                    title: 'Foxfire Nibble',
                    descrip: `d4 <em>fire</em>`,
                    extra: [],
                },
                {
                    title:`Command`,
                    descrip: `A small fox-spirit slips from sleeve or breath. One <em>Command</em> per round:`,
                    extra: [
                        `<strong>Harrow</strong>. Pick an enemy you can see; when you oppose that enemy this <span class="underline">round</span>, your <em>Test is -2 DR</em>.`,
                        `<strong>Intercept</strong>. <span class="underline">Once per combat</span>, negate a hit against you; the fox takes the damage and vanishes <span class="underline">until combat is over</span>.`,
                        `<strong>Marked</strong>. The fox places an ofuda on a target in your presence; all <em>Spirit</em> or <em>Swiftness Tests</em> against that target are <em>-2 DR</em>.`,
                    ]
                },
            ]
        },
        startingEquipment: [
            {
                item: `<span class="underline">Ritual knife</span> (<strong>d6 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `Ofuda {wooden or paper talismans} (<strong>inscribe Spirit+d4 ofuda on a long rest; new replaces old</strong>)`,
                type: `item`,
                die: ``
            },
            {
                item: `White lantern`,
                type: `item`,
                die: ``
            },
            {
                item: `Ink brush & soot`,
                type: `item`,
                die: ``
            },
            {
                item: `Vial of spring water`,
                type: `item`,
                die: ``
            },
            {
                item: `Twine & needles`,
                type: `item`,
                die: ``
            },
            {
                item: `Pouch of rice/salt`,
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
            title: `Binder's Thread`,
            honourList: [
                {
                    name: `Snuff With Fingers`,
                    descrip: `Never blow out a rite's flame.`
                },
                {
                    name: `Paper Promises Hold`,
                    descrip: `An ofuda you place is a vow—keep it or burn it yourself.`
                },
                {
                    name: `Break Glamour, Not Will`,
                    descrip: `Unmask; do not humiliate.`
                },
                {
                    name: `Offer First`,
                    descrip: `Rice, salt, sake; pay the roads and the little mouths.`
                },
                {
                    name: `Bind Clean`,
                    descrip: `No mortal souls. Sealed spirits release when the danger ends.`
                },
                {
                    name: `Do Not Name Yourself in Markets`,
                    descrip: `Names are doors; keep yours shut.`
                },
            ]
        },
        ryo: `2d6x10`,
    },
    //Kuge Ninja
    {
        name: `Kuge Ninja`,
        descrip: `
            <strong>Kuge Ninja</strong> are masters of deception.
            <p>They act as nobles within palace walls, <strong>orchestrate scandals</strong>, and help pick victims of internal purges. They have learned to wear <strong>names like blades</strong> and <strong>truths like poisons</strong>.</p>
            <p>To the world, <strong>they are whoever they need to be</strong>.</p>
        `,
        stats: {
            swiftness: 1,
            spirit: 3,
            vigor: -2,
            resilience: 1,
            honour: -1,
            virtues: 2,
            hp: 8
        },
        features: [
            {
                title: `THOUSAND FACES`,
                descrip: `<span class="underline">Once per day</span>, assume the identity of any humanoid you've seen. <span class="underline">Requires 1 minute</span>.
                <p><strong class="adjust-strong-size">Spirit DR12</strong> to pass casual inspection. <strong class="adjust-strong-size">DR14</strong> under scrutiny.</p>
                <p><span class="underline">While disguised</span>, you may use <strong class="adjust-strong-size">Spirit</strong> instead of <strong class="adjust-strong-size">Vigor</strong> for <strong class="adjust-strong-size">Attack rolls</strong>.</p>
                `
            },
            {
                title: `FORGED IN SILK`,
                descrip: `
                You may <strong class="adjust-strong-size">Test Spirit DR14</strong> to implant a false memory or belief in a target with whom you've <strong class="adjust-strong-size">spoken for at least <span class="underline">one minute</span></strong>.
                <p>The effect lasts until proven false.</p>
                <p><span class="underline">Can only affect one target at a time</span>.</p>
                `
            },
            {
                title: `MASK OF CONVICTION`,
                descrip: `<span class="underline">Once per session</span>, you may lie with such certainty that the <strong class="adjust-strong-size">GM must treat it as true</strong>.`
            },
            {
                title: `HIDDEN BLADE, HIDDEN NAME`,
                descrip: `<span class="underline">Once per day</span>, you can hide a weapon or tool on your person, undetectable except by magic.
                <p>Declare the item when you need it, <strong class="adjust-strong-size">no action required</strong>.</p>
                <p><span class="underline">If you're disarmed or stripped</span>, <strong class="adjust-strong-size">Test Spirit DR12</strong> to still have it.</p>
                `
            },
            {
                title: `THE REAL POISON IS THE WORD`,
                descrip: `When speaking for <span class="underline">more than a minute</span> with a target, you may poison them with a command.
                <p><strong class="adjust-strong-size">Test Spirit DR14</strong>; on a <span class="underline">success</span>, they must obey a simple order the next time you say their name.</p>
                <p>You may choose to do <strong class="adjust-strong-size">d6 damage ignoring armour</strong> <span class="underline">when they next rest</span> instead of giving an order.</p>
                `
            },
            {
                title: `GHOST IN BROCADE`,
                descrip: `
                <em>You may move unseen, not by stealth, but by appearing to belong.</em>
                <p><strong class="adjust-strong-size">Test Spirit DR10</strong> to avoid detection or suspicion. This includes walking into <em>restricted places</em>, <em>manipulating guards</em>, or <em>interrupting ceremonies</em>.</p>
                <p>You may also <strong class="adjust-strong-size">Test Swiftness</strong> to flee if <span class="underline">you are joining a crowd</span>.</p>
                `
            },
        ],
        startingEquipment: [
            {
                item: `<span class="underline">Tanto</span> (<strong>d4 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `Vial of sleeping poison (<strong>[]{d4} uses, Resilience DR14 or sleep d6 rounds</strong>)`,
                type: `weapon`,
                die: `d4`,
            },
            {
                item: `High-quality silk mask`,
                type: `item`,
                die: ``
            },
            {
                item: `Forged travel document or noble seal`,
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
                    descrip: `Do what you must to achieve your goals, even if that means lying.`,
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
    // Kugutsu-No-Musha
    {
        name: `Kugutsu-No-Musha`,
        descrip: `
            Puppet warrior; the blade behind the curtain
            <p><strong>You're not alone in your skin</strong>. There's something behind you—stitched, lacquered, smiling too wide. <strong>It moves when paid</strong>. <strong>It fights when told</strong>.</p>
            <p>You've got <strong>debts in your teeth</strong> and a partner who doesn't sleep.</p>
            <p><strong>Keep the show going. Keep your hands steady.</strong></p>
        `,
        stats: {
            swiftness: 2,
            spirit: -1,
            vigor: 3,
            resilience: 1,
            honour: -2,
            virtues: 2,
            hp: 6
        },
        features: [
            {
                title: `Cue:Snare`,
                cost: 12,
                descrip:
                `
                <em>The puppet aids your allies</em>. Choose a <span class="underline">visible ally</span> in your presence. Their next roll is <strong>-3DR</strong>.
                `
            },

            {
                title: `Drop Curtain`,
                cost: 20,
                descrip: 
                `
                <em>The puppet changes the set</em>. Pick <strong>one</strong> immediate effect:
                <div class="all-features-flex">
                    <span><strong>Blackout</strong>. Yours and the puppet's Defence Tests are -2 DR.</span>
                    <span><strong>Falling Curtain</strong>. One enemy loses their next action.</span>
                    <span><strong>Sure Footing</strong>. The puppet may Parry in your place at -2 DR.</span>
                </div>
                `
            },
            {
                title: `Raise The Double`,
                cost: 30,
                descrip: 
                `
                    <div class="all-features-flex">
                        <span>
                            Animate the puppet as your partner
                            for this battle. <span class="underline">Each round</span>, after your
                            action, the puppet can either <strong>Strike</strong>
                            (<em>d4 damage</em>) or <span class="underline">Take a Hit</span>.
                        </span>
                        <span>
                            <strong>Take the Hit.</strong> <span class="underline">Once per combat</span>, redirect a hit on you to the puppet (<em>apply its HP</em>). <span class="underline">If reduced to <strong>0HP</strong></span> it collapses into parts until repaired in <em>downtime</em>.
                        </span>
                    </div>
                `
            },
            {
                title: `Red Thread Oath`,
                cost: 60,
                descrip: 
                `
                    The puppet <strong>marks</strong> an enemy <span class="underline">until combat ends</span> or the <span class="underline">puppet is broken</span>. If the <strong>marked</strong>
                    target <span class="underline">attacks anyone but you</span>, they take <strong>d6 damage</strong>. <span class="underline">If they attempt to flee</span>, they take
                    <strong>d6 damage</strong>. Yours and the Puppet's attacks against the <strong>marked enemy have advantage</strong>.
                `
            },
            {
                title: `Director's Cut`,
                cost: 120,
                descrip: 
                `
                If you <strong>die</strong> <span class="underline">while the puppet is active</span> (<em>he takes the ryō from your corpse</em>). He brings you back to <strong>1HP</strong> before you go to <span class="underline"><strong>Yomi</strong></span>.
                
                `
            },
            {
                title: `Final Strings`,
                cost: 300,
                descrip: 
                `
                    <span class="underline">Choose an enemy you can see</span>. The
                    puppet makes one attack at <strong>-2 DR</strong>. <span class="underilne">
                        If
                        successful
                    </span> the target is reduced to <strong>1HP</strong>.
                `
            },
        ],
        rulesFeature: [
            {
                title: `The Contract`,
                content: [
                    `<strong>Pay to Act.</strong> Each feature lists a Cost in ryō that you hand to the puppet. If you don’t or can’t, you may still use it but mark Debt equal to its cost.`,
                    `<strong>Debt Thresholds.</strong> At <em>15 Debt</em> the puppet is <span class="underline">Spiteful</span>; at <em>30</em> the Puppet is <span class="underline">Angry</span>; at <em>60</em> the <span class="underline">contract breaks</span>.`,
                    `<strong>Paying Down Debt.</strong> During downtime, spend 1 ryō to clear 1 Debt.`
                ]
            },
            {
                title: `Debt`,
                content: [
                    `<strong>Spiteful.</strong> <em>15+ Debt.</em> <span class="underline">Once per battle</span> the puppet imposes a petty cost (you drop a weapon, your next roll is +3 DR, or you must pay 10 ryō on the spot).`,
                    `<strong>Angry.</strong> <em>30+ Debt.</em> All features prices are doubled until debt is cleared.`,
                    `<strong>Contract Broken.</strong> <em>60+ Debt, end of session.</em> You cannot use features next session <span class="underline">until you reduce Debt to 10 or less</span>.`,
                ]
            },
            {
                title: `Repairs`,
                content: [
                    `<strong>Mend.</strong> <em>Downtime. 15 ryō.</em> Restore <span class="underline">6HP</span>.`,
                    `<strong>Fresh Paint.</strong> <em>Rest. 30 ryō.</em> Set mood to <span class="underline">Devoted</span>.`
                ]
            },
            {
                title: `Mood`,
                content: [
                    `<span class="underline">Roll 2d6 at session start</span> with the following modifications:`,
                    `<div class="padding-left"><em>+d6</em> if last session ended at <span class="underline">0 Debt</span></div>`,
                    `<div class="padding-left"><em>-2d6</em> if you ended last time at <span class="underline">30+ Debt</span>.</div>`,
                    `<span class="underline">After triggering an effect, </span>Mood drops one step`,
                    `
                        <ul class="rules-list">
                            <li><strong>0-1 Petty.</strong> All costs are doubled</li>
                            <li><strong>2-3 Dormant.</strong> The first feature you use costs +10 ryō</li>
                            <li><strong>4-5 Sulk.</strong> No discount; Cue:Snare cannot be used this session</li>
                            <li><strong>6-8 Attentive.</strong> -10 ryō on your first feature this session</li>
                            <li><strong>9-10 Amused.</strong> -10 ryō on all features this session</li>
                            <li><strong>11 Devoted.</strong> -20 ryō on one feature of your choice</li>
                            <li><strong>12+ Enthralled.</strong> Choose one feature other than Final Strings; it is free once this session</li>
                        </ul>
                    `
                ]
            },
        ],
        pet: {
            title: 'Puppet',
            subtitle: `HP6 | STRIKE D4`,
            features: [
                {
                title: '',
                descrip: `<em>Immune to all statuses.</em>`,
                extra: [],
                },
                {
                    title: '',
                    descrip: '<em>Use your stats when making Tests.</em>',
                    extra: [],
                }
            ]

        },
        startingEquipment: [
            {
                item: `<span class="underline">Awl</span> (<strong>d4 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `<span class="underline">Tanto</span> (<strong>d6 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `Your puppet`,
                type: `item`,
                die: ``
            },
            {
                item: `Stage Gear (<em>red cord coil, stage paints, cue-cards, etc</em>)`,
                type: `item`,
                die: ``
            },
            {
                item: `Puppet chest (<em>worn on back</em>)`,
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
            title: `Marionette's Compact`,
            honourList: [
                {
                    name: `Script`,
                    descrip: `Keep the promise you set onstage.`,
                },
                {
                    name: `Debt`,
                    descrip: `Pay those who lift your hands.`,
                },
                {
                    name: `Restraint`,
                    descrip: `Use a trick before a cut.`,
                },
                {
                    name: `Witness`,
                    descrip: `Leave one truth behind each deception.`,
                },
                {
                    name: `Grace`,
                    descrip: `Exit cleanly.`,
                },
                {
                    name: `Perform`,
                    descrip: `Keep it flashy.`,
                },
            ]
        },
        ryo: `10d6x1`,
    },
    // Onryō
    {
        name: `Onryō`,
        descrip: `
            A grievance given shape; elegance that cuts.
            <p>They buried you too fast. <strong>Didn't bow right</strong>. Didn't speak your name. So now you walk, <strong>slow and cold</strong>, like the ground still misses your weight.</p>
            <p><strong>People look away when you pass</strong>. Dogs don't bark. You wear the <strong>mask</strong> so they don't see <strong>how little face you've got left</strong>.</p>
        `,
        stats: {
            swiftness: 2,
            spirit: 3,
            vigor: 0,
            resilience: 0,
            honour: -3,
            virtues: 2,
            hp: 6
        },
        features: [
            {
                title: `Director's Feedback`,
                descrip:
                `
                    <span class="underline">While masked</span>, you may target a <strong class="adjust-strong-size">Yōkai</strong> and speak a <strong class="adjust-strong-size">one-word command</strong>.
                    <p><strong class="adjust-strong-size">Test Spirit DR12</strong>; on a <span class="underline">success</span> the creature must obey the command.</p>
                `
            },

            {
                title: `Grudge Binding`,
                descrip: 
                `
                    <span class="underline">Once per combat</span>, name your grievance and point at a foe you've struck.
                    <p>
                        <div>They are bound until <span class="underline">combat ends</span>.</div>
                        <ul class="x-list">
                            <li>
                                Your <strong class="adjust-strong-size">Attacks</strong> vs them have <strong class="adjust-strong-size">advantage</strong>.
                            </li>
                            <li>
                                Your <strong class="adjust-strong-size">Defence Tests</strong> vs them are at <strong class="adjust-strong-size">-2 DR</strong>.
                            </li>
                        </ul>
                    </p>
                `
            },
            {
                title: `Silent Verses`,
                descrip: 
                `
                    <span class="underline">Once per day</span>, unfurl a script page and intone its verse in hushed tones.
                    <p>
                        <div><span class="underline">Choose one effect in your presence.</span></div>
                        <ul class="x-list">
                            <li><strong class="adjust-strong-size"><span class="underline">Reflection</span></strong>. One ally rerolls a failed <strong class="adjust-strong-size">Spirit Test</strong>.</li>
                            <li><strong class="adjust-strong-size"><span class="underline">Lament</span></strong>. One enemy <strong class="adjust-strong-size">Tests Spirit DR14</strong> or flees.</li>
                        </ul>
                    </p>
                `
            },
            {
                title: `Ember Step`,
                descrip: 
                `
                    <span class="underline">Once per combat</span>, pass through an enemy like smoke. <strong class="adjust-strong-size">Test Spirit DR13</strong>.
                    <p>
                        <ul class="x-list">
                            <li><strong class="adjust-strong-size"><span class="underline">Success</span></strong>. they take <strong class="adjust-strong-size">d6</strong> fire/spirit damage and <strong class="adjust-strong-size">cannot Attack </strong>until the <span class="underline">end of your next turn</span>.</li>
                            <li><strong class="adjust-strong-size"><span class="underline">Failure</span></strong>. you materialise behind them, gaining <strong class="adjust-strong-size">advantage</strong> on your <span class="underline">next <strong class="adjust-strong-size">Attack</strong> this round</span>.</li>
                        </ul>
                    </p>
                `
            },
            {
                title: `Mask Invocation`,
                descrip: 
                `
                <span class="underline">Once per day</span>, change the mask's face to one of the following:
                <p>
                    <ul class="x-list">
                        <li><strong class="adjust-strong-size"><span class="underline">Yomi</span></strong>. Yōkai believe you to be one of their own and treat you favourably.</li>
                        <li><strong class="adjust-strong-size"><span class="underline">Grinning</span></strong>. Enemies that miss you take <strong class="adjust-strong-size">d4 damage ignoring armour</strong>.</li>
                        <li><strong class="adjust-strong-size"><span class="underline">Weeping</span></strong>. Your <strong class="adjust-strong-size">Attacks</strong> hit with a <strong class="adjust-strong-size">DR8</strong> but you <strong class="adjust-strong-size">defend with DR16</strong>.</li>
                    </ul>
                </p>
                `
            },
            {
                title: `Quiet Release`,
                descrip: 
                `
                    Putting the mask on the face of a <strong class="adjust-strong-size">dead person</strong> causes them to laugh and scream the last words they spoke before dying, <span class="underline">over and over and over again</span>.
                `
            },
        ],
        startingEquipment: [
            {
                item: `<span class="underline">Short blade</span> (<strong>d6 damage</strong>)`,
                type: `weapon`,
                die: ``,
            },
            {
                item: `Funerary mask`,
                type: `item`,
                die: ``
            },
            {
                item: `Ritual cords`,
                type: `item`,
                die: ``
            },
            {
                item: `Script pages`,
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
            title: ``,
            honourList: [
                {
                    name: `Hush`, 
                    descrip: `Speak softly; let form do the cutting.`
                },
                {
                    name: `Subtlety`, 
                    descrip: `Strike only for redress, not spectacle.`
            },
                {
                    name: `Cold`, 
                    descrip: `Mask the face so the grievance is seen.`
                },
                {
                    name: `Open Mind`, 
                    descrip: `Leave a path to ending.`
            },
                {
                    name: `Debt`, 
                    descrip: `Accept salt and silence as the prices of peace.`
                },
                {
                    name: `Assent`, 
                    descrip: `Finish the verse, then be gone.`
            },
            ]
        },
        ryo: `2d6x10`,
    },
];

export const BROKEN_BODIES = [
    `You have a habit of staring with a glazed expression.`,
    `You are covered in scars or wounds, some of which are infected.`,
    `You're missing a limb, but are making due by using a makeshift prosthesis.`,
    `You are emaciated and frail, with sunken eyes and greyish skin.`,
    `Your past has left you with severe burns on yours face and hands. You use a mask to hide them.`,
    `An accident or an unlucky birth has left you deaf in one ear. You struggle to hear from the other.`,
    `Your teeth are rotted or missing, causing you to speak with a lisp.`,
    `An accident or an unlucky birth has left you crippled, walking with a limp or hunchbacked.`,
    `You flesh is covered in boils or blisters, leaving you constantly scratching.`,
    `Words are difficult due to your persistent cough or wheezing.`,
    `Beloved or cursed, you are covered in insect bites.`,
    `A missing or scarred tongue is your reminder to not say the wrong word to the wrong person again.`,
    `Your hands constantly shake, or your body twitches from nervous system damage.`,
    `Feast or famine, you are either severely obese or suffering from malnutrition. Regardless, you are always hungry.`,
    `Accident or abuse has left you missing fingers or toes.`,
    `Accident or abuse has gifted you a broken nose, causing you to breath heavily and snore loudly.`,
    `A blow to the head causes you to be permanently scowling or smiling, making social interaction difficult.`,
    `You suffer from chronic skin conditions, leaving your skin flaky or weeping.`,
    `You've been recently blinded or you're suffering from vision problems.`,
    `Your fingers are crowned with cracked and discoloured nails, with signs of fungal infection.`,
];

export const CHRONICLES = [
    `Having fled from a powerful and dangerous clan, you are constantly on the run.`,
    `Due to your actions, upbringing, or just plain bad luck, you have a powerful enemy who wants you dead at all costs.`,
    `You somehow came into possession of a rare and valuable artifact that is coveted by many.`,
    `Some yōkai has cast a terrible curse upon you that cannot be lifted.`,
    `You once betrayed a close friend and has been wracked with guilt ever since.`,
    `One day you awoke, plagued by haunting visions of a dark future.`,
    `You have done much to survive, leaving you a shadowy past that is slowly catching up with you.`,
    `Due to some action, purposeful or otherwise, you are haunted by a vengeful spirit that will not rest until it gets what it wants.`,
    `You are the only survivor of a massacre that you cannot forget.`,
    `To numb yourself to the horrors of the world, you have developed a powerful addiction that is slowly destroying you.`,
    `Due to some action, purposeful or otherwise, you have angered a powerful spirit that is now out for revenge.`,
    `You are followed by a strange, unexplainable phenomenon that brings chaos and destruction wherever you go.`,
    `You are hunted by a terrifying monster that you cannot defeat.`,
    `You are haunted by a dark secret that, if revealed, could destroy everything you hold dear.`,
    `You have made a powerful enemy of a powerful hidden clan.`,
    `You have made a deal with a malevolent entity that is slowly taking over your mind and body.`,
    `You are cursed with the ability to see the worst in people and cannot help but voice your thoughts.`,
    `You are plagued by unexplainable nightmares that are slowly driving you insane.`,
    `You are cursed with an insatiable hunger that can never be sated.`,
    `You have been marked by a dark force that will stop at nothing to claim your soul`,
];

export const HABITS = [
    `You never know when you'll need it, so you compulsively hoard any small trinkets you come across, often to the detriment of your party.`,
    `You're not going into the dark or enclosed spaces without a few deep breaths, a pray, or a drink due to your crippling fear of either or both.`,
    `Never one to let a thought stay silent, you have an urge to speak your mind, even if it means making enemies or getting into trouble.`,
    `Can't start your day without it, you are addicted to a particular substance and will go to great lengths to get your fix.`,
    `Itchy hands, you've got a habit of stealing things, even when it's not beneficial.`,
    `Never one to pass up the opportunity to escalate a minor altercation into life-changing violence, some might say you've got anger management issues.`,
    `Sleep is for the weak or stupid. You've got chronic insomnia.`,
    `Paranoia is just preparation for future threats. You make up conspiracy theories, even when they have no basis in reality.`,
    `Drugs, genetics, or a blow to the head has left you with a  terrible memory. You WILL often forget important details or information.`,
    `Why do today what you can put off until tomorrow? You are a persistent procrastinator.`,
    `All things have their place, you are obsessed with counting and arranging objects.`,
    `The best way to sort your throughts is to speak them aloud, so you mumble to yourself, even in public.`,
    `You should be handing off anything you care about, but don't, as you're always losing important items.`,
    `At any free opportunity, you are cleaning your weapons and tools. THEY MUST BE KEPT CLEAN.`,
    `Never one for subtly or quiet, you have the habit of telling overly long and irrelevant tales in conversation.`,
    `Human, animal, or otherwise; doesn't matter. You collect ears and whisper secrets into them.`,
    `A body in motion stays alive, so you're constantly fidgeting; can't sit still.`,
    `The only explanation is that you're allergic to danger. Stressful situations wrack you with loud, nervous sneezing.`,
    `Any contact could hide a hidden dagger, so you hate being touched.`,
    `With no sun in the sky, a famine could be looming, so you steal food from everyone and hoard it. `,
];

export const AFFLICTIONS = [
    `Paranoia. You see dangers in everyday events and are convinced some powerful, unseen foe moves against you.`,
    `Sadistic. The defense of cowards, you refuse engage with anything emotionally or seriously.`,
    `Narcissistic. You believe that all the world conspires against you, though they should be bent and bowing before you.`,
    `Compulsive liar. Truth and sincerity are weakness, so you ensure that no one knows who you really are.`,
    `Self-destructive. A meager attempt at control in a violent world, you ensure that the worst abuse comes from yours truly.`,
    `Envious. Your lack of belief in yourself means that you blame all of your woes on what you seek in others.`,
    `Antisocial. People are the reason for this mess of a world, so you rage and disrupt the structures of society at any given opportunity.`,
    `Addicted. To weak to deal with the horrors of reality, you sink into vice to escape it.`,
    `Short-tempered. Patience was a luxury you were never given, so you perpetuate a cycle of sudden brutality.`,
    `Greedy. Others cannot be trusted, so you grasp all you can.`,
    `Pessimistic. To weak to trust, you expect the worst in all situations in the vain hope you'll be proven wrong.`,
    `Manipulative. Used yourself, so others are now just a means to an end.`,
    `Careless. In a world that is so callous to you, why should anything have meaning?`,
    `Aggressive. You bare your fangs at all, not because you are brave, but because you are a kicked dog.`,
    `Insecure. Never given the warmth of a parent's love, you cannot trust in yourself, nor in the words of others.`,
    `Hedonistic. Afraid of friction and pain, you only allow yourself the numb joy of pleasure.`,
    `Fanatical. You apply yourself to the point of breaking, convinced that with enough effort you can make up for your lack of moderation.`,
    `Hypocritical. You preach beliefs and ideas you don't believe in because you think it's the only way anyone will put up with you.`,
    `Unreliable. Too scared, too callous, or too foolish to commit entirely, you cannot be trusted to do anything well.`,
    `Delusional. You ignore the reality of the world you live in, convinced that with enough optimism anything is possible.`,
];
