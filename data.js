// Content tables for Screen's Panic Button generators.
// Placeholder flavor for prototyping the interaction, not official D&D material.
window.SCREEN_DATA = {
  npcFirstNames: [
    "Bram", "Eldrin", "Sable", "Tovin", "Maraia", "Ysolde", "Corvin", "Fenn",
    "Lila", "Garrek", "Nimue", "Osric", "Perra", "Quill", "Rhoswen", "Sten",
    "Ulric", "Vesna", "Wendel", "Xara", "Doriath", "Alis", "Bevan", "Cael"
  ],
  npcSurnames: [
    "Ashdown", "Blackbriar", "Coldwater", "Dunmore", "Emberfell", "Farrow",
    "Grimwald", "Hollowbrook", "Ironwood", "Kettleblack", "Larkspur", "Mournhold",
    "Nightingale", "Oakhart", "Ravensworth", "Stormwell", "Thornbury", "Underbough",
    "Wexley", "Yarrow", "Quickfoot", "Dunn"
  ],
  npcRoles: [
    "innkeeper", "dockhand", "hedge witch", "retired sellsword", "back-alley fence",
    "temple acolyte", "caravan guard", "street urchin", "alchemist", "harbormaster",
    "gravedigger", "tax collector", "bard down on their luck", "blacksmith",
    "ratcatcher", "off-duty city watch", "traveling merchant", "stablehand"
  ],
  npcTraits: [
    "nervously cheerful, laughs at the wrong moments",
    "cold and precise, hates wasting words",
    "warm, but visibly afraid of something",
    "greedy, prices everything in their own favor",
    "world-weary and blunt to the point of rude",
    "overly formal, quotes rules no one asked about",
    "a compulsive gossip who knows everyone",
    "superstitious, touches iron for luck mid-sentence",
    "boastful about a past that may be invented",
    "kind, but plainly exhausted",
    "twitchy and always watching the door",
    "unnervingly calm, smiles too much"
  ],
  npcVoices: [
    "low gravel, speaks slowly",
    "clipped and fast, swallows word endings",
    "sing-song lilt, over-enunciates",
    "raspy whisper, leans in close",
    "booming, treats every sentence as an announcement",
    "dry monotone punctuated by sudden sharp laughs",
    "thick rural drawl",
    "precise, faintly foreign accent",
    "breathless, never quite finishes a thought"
  ],
  npcWants: [
    "a debt paid before someone important finds out",
    "a missing sibling found",
    "protection from a local gang",
    "a rival's shop shut down, quietly",
    "passage out of the city tonight",
    "a stolen heirloom returned, no questions asked",
    "someone else to blame for a recent death",
    "enough coin to finally leave this life behind",
    "a message delivered to someone they can't approach",
    "the party gone before they cause trouble"
  ],
  npcSecrets: [
    "is skimming coin from their employer",
    "saw who really did the murder everyone's talking about",
    "is not who they claim to be",
    "owes the wrong people a dangerous amount",
    "is hiding someone in the cellar",
    "carries a sealed letter they can't read but won't hand over",
    "poisoned someone years ago and was never caught",
    "secretly works for the people hunting the party",
    "is dying, and hasn't told anyone",
    "started the fire everyone blames on bandits"
  ],
  rumorsTrue: [
    "The old mill really is cursed - a child drowned in the race and the miller covered it up.",
    "The magistrate's new ring is worth more than the whole district; it's why the guards patrol her street twice a night.",
    "There is a smuggler's tunnel under the fishmonger's, and the watch captain knows.",
    "The traveling priest is genuine - he's healed two people for free already.",
    "The well on Coin Street has gone bad; three families are quietly sick.",
    "The baron hasn't been seen in a month. His steward signs everything now."
  ],
  rumorsFalse: [
    "They say a dragon nests in the eastern hills. (It's an old wyvern skeleton and a very loud goat farmer.)",
    "The tavern's cook is a retired assassin. (He just has a temper and good knives.)",
    "The ruins are full of gold. (They're full of damp and rats.)",
    "The new merchant is secretly nobility in disguise. (He's a merchant in disguise as a slightly richer merchant.)",
    "A ghost walks the north wall at midnight. (It's a lonely sentry and his lantern.)",
    "The apothecary sells a cure for anything. (She sells sugar water with confidence.)"
  ],
  rumorsMisleading: [
    "The chapel fire was an accident - everyone agrees. (Everyone agrees because they were told to.)",
    "The caravan that vanished simply took the long road. (Something took the long road with them.)",
    "The guildmaster is generous to newcomers. (Generous with debts that never quite clear.)",
    "That house has been empty for years. (Empty of the living.)",
    "The two shops are fierce rivals. (They're owned by the same silent partner.)",
    "The festival is just tradition. (Tradition that ends with someone chosen and gone by morning.)"
  ],
  shopkeepers: [
    "a one-eyed halfling who never stops eating",
    "a towering, soft-spoken orc with careful hands",
    "twin sisters who finish each other's sentences",
    "a bored noble slumming as a merchant for a bet",
    "a nervous apprentice whose master is mysteriously 'out'",
    "a retired adventurer with a limp and strong opinions",
    "a talking raven and the very tired woman it belongs to"
  ],
  shopItems: [
    { name: "Hooded lantern, shuttered", low: 5, high: 9, unit: "gp" },
    { name: "Vial of antitoxin", low: 40, high: 60, unit: "gp" },
    { name: "Coil of silk rope (50 ft)", low: 8, high: 12, unit: "gp" },
    { name: "Grappling hook", low: 1, high: 3, unit: "gp" },
    { name: "Healer's kit", low: 4, high: 7, unit: "gp" },
    { name: "Set of forged travel papers", low: 20, high: 45, unit: "gp" },
    { name: "Smoke pellet (single use)", low: 10, high: 18, unit: "gp" },
    { name: "Local map, hand-drawn and mostly right", low: 2, high: 6, unit: "sp" },
    { name: "Flask of strong spirits", low: 1, high: 4, unit: "sp" },
    { name: "Iron spikes (bag of 10)", low: 8, high: 12, unit: "sp" },
    { name: "Dubious 'holy' water", low: 15, high: 30, unit: "gp" },
    { name: "Charm against the evil eye", low: 3, high: 9, unit: "sp" }
  ],
  complications: [
    "The city gates slam shut - a curfew, effective immediately, no reason given.",
    "An NPC the party wronged earlier walks in and freezes.",
    "A pickpocket lifts something important during the conversation.",
    "The lamps gutter out all at once. Something moves in the dark.",
    "A breathless messenger arrives with news that raises the stakes.",
    "A patron quietly recognizes a party member from a wanted poster.",
    "The floor is not as solid as it looked.",
    "Two factions the party knows both arrive at the same moment.",
    "It starts to rain - hard - and the only shelter belongs to someone dangerous.",
    "Someone offers to help. They are lying, and they are convincing.",
    "A child tugs a sleeve and whispers a warning, then bolts.",
    "The thing the party came for is already gone. Recently."
  ]
};
