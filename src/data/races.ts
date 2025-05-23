import { Race } from "./character";
export type { Race };

export const ethnicities = [
  "African American",
  "Hispanic / Latino",
  "Asian",
  "Native American / Alaska Native",
  "White / European descent",
  "Middle Eastern / North African",
  "Pacific Islander"
];



export const coreRaces: Race[] = [
    { 
      id: "human", 
      name: 'Human', 
      source: "Player's Handbook", 
      description: "Versatile and ambitious, humans are the most common race in the realms, known for their adaptability and drive to leave their mark on the world", 
      accessory: ["longsword", "city map", "quill & parchment"],
      subraces: [
        {
          id: "standard",
          name: "Standard",
          description: "The standard human variant gains +1 to all ability scores."
        },
        {
          id: "variant",
          name: "Variant",
          description: "The variant human gains +1 to two different ability scores of your choice, one skill proficiency, and one feat."
        }
      ]
    },
    { 
      id: "elf", 
      name: 'Elf', 
      source: "Player's Handbook", 
      description: "Graceful and long-lived, elves are magical beings of otherworldly grace, living in places of ethereal beauty", 
      accessory: ["elegant bow", "moonlit orb", "ancient scroll"],
      subraces: [
        {
          id: "high-elf",
          name: "High Elf",
          description: "Keepers of ancient knowledge and magic traditions, high elves value intelligence and artistic pursuits"
        },
        {
          id: "wood-elf",
          name: "Wood Elf",
          description: "Swift and stealthy forest dwellers with keen senses and a deep connection to the natural world"
        },
        {
          id: "drow",
          name: "Drow (Dark Elf)",
          description: "Subterranean elves known for their cruelty and affinity for dark magic, with exceptional intelligence and charisma"
        }
      ]
    },
    { id: "high-elf", name: 'High Elf', source: "Player's Handbook", description: "Keepers of ancient knowledge and magic traditions, high elves value intelligence and artistic pursuits", accessory: ["arcane tome", "crystal wand", "scepter"], subraces: [] },
    { id: "wood-elf", name: 'Wood Elf', source: "Player's Handbook", description: "Swift and stealthy forest dwellers with keen senses and a deep connection to the natural world", accessory: ["shortbow", "herbal pouch", "bone flute"], subraces: [] },
    { id: "drow", name: 'Drow (Dark Elf)', source: "Player's Handbook", description: "Subterranean elves known for their cruelty and affinity for dark magic, with exceptional intelligence and charisma", accessory: ["dual scimitars", "poisoned dagger", "spider idol"], subraces: [] },
    { 
      id: "dwarf", 
      name: 'Dwarf', 
      source: "Player's Handbook", 
      description: "Stout and sturdy folk known for their craftsmanship, resilience, and long memory for both friends and foes", 
      accessory: ["warhammer", "forge tongs", "tankard"],
      subraces: [
        {
          id: "hill-dwarf",
          name: "Hill Dwarf",
          description: "Wise and hardy dwarves with exceptional intuition and unmatched endurance"
        },
        {
          id: "mountain-dwarf",
          name: "Mountain Dwarf",
          description: "Strong and hardy warriors, mountain dwarves are trained for combat and life in rugged terrain"
        }
      ]
    },
    { id: "hill-dwarf", name: 'Hill Dwarf', source: "Player's Handbook", description: "Wise and hardy dwarves with exceptional intuition and unmatched endurance", accessory: ["smithing hammer", "shield", "rune stone"], subraces: [] },
    { id: "mountain-dwarf", name: 'Mountain Dwarf', source: "Player's Handbook", description: "Strong and hardy warriors, mountain dwarves are trained for combat and life in rugged terrain", accessory: ["battleaxe", "iron gauntlet", "lantern"], subraces: [] },
    { 
      id: "halfling", 
      name: 'Halfling', 
      source: "Player's Handbook", 
      description: "Small but brave folk known for their luck, curiosity, and ability to find comfort in even the most challenging circumstances", 
      accessory: ["sling", "cooking ladle", "coin purse"],
      subraces: [
        {
          id: "lightfoot-halfling",
          name: "Lightfoot",
          description: "Stealthy and sociable halflings who can easily hide behind creatures larger than themselves"
        },
        {
          id: "stout-halfling",
          name: "Stout",
          description: "Hardy halflings with remarkable resilience against poison and a hint of dwarven blood in their veins"
        }
      ]
    },
    { id: "lightfoot-halfling", name: 'Lightfoot', source: "Player's Handbook", description: "Stealthy and sociable halflings who can easily hide behind creatures larger than themselves", accessory: ["lockpick set", "apple", "hand crossbow"], subraces: [] },
    { id: "stout-halfling", name: 'Stout', source: "Player's Handbook", description: "Hardy halflings with remarkable resilience against poison and a hint of dwarven blood in their veins", accessory: ["small cudgel", "pipe", "lucky die"], subraces: [] },
    { 
      id: "dragonborn", 
      name: 'Dragonborn', 
      source: "Player's Handbook", 
      description: "Draconic humanoids born with an innate connection to dragons, capable of breathing destructive energy", 
      accessory: ["greatsword", "molten orb", "battle standard"],
      subraces: []
    },
    { 
      id: "gnome", 
      name: 'Gnome', 
      source: "Player's Handbook", 
      description: "Inventive and curious tinkerers with a natural resistance to magic and an irrepressible enthusiasm for life", 
      accessory: ["clockwork trinket", "alchemy flask", "spectacles"],
      subraces: [
        {
          id: "forest-gnome",
          name: "Forest Gnome",
          description: "Illusion-savvy gnomes who can speak with small beasts and naturally blend into their woodland surroundings"
        },
        {
          id: "rock-gnome",
          name: "Rock Gnome",
          description: "Inventive engineers and alchemists with an aptitude for creating clever devices and magical items"
        }
      ]
    },
    { id: "forest-gnome", name: 'Forest Gnome', source: "Player's Handbook", description: "Illusion-savvy gnomes who can speak with small beasts and naturally blend into their woodland surroundings", accessory: ["tiny wand", "leafy pouch", "squirrel familiar"], subraces: [] },
    { id: "rock-gnome", name: 'Rock Gnome', source: "Player's Handbook", description: "Inventive engineers and alchemists with an aptitude for creating clever devices and magical items", accessory: ["tinker's kit", "monocle", "pocket anvil"], subraces: [] },
    { 
      id: "half-elf", 
      name: 'Half-Elf', 
      source: "Player's Handbook", 
      description: "Born of two worlds, half-elves combine elven grace with human versatility, often serving as diplomats and mediators", 
      accessory: ["rapier", "lute", "enchanted rose"],
      subraces: []
    },
    { 
      id: "half-orc", 
      name: 'Half-Orc', 
      source: "Player's Handbook", 
      description: "Formidable warriors with orcish endurance and human adaptability, often struggling to find their place in either society", 
      accessory: ["greataxe", "severed head (optional!)", "bone totem"],
      subraces: []
    },
    { 
      id: "tiefling", 
      name: 'Tiefling', 
      source: "Player's Handbook", 
      description: "Descendants of fiendish bloodlines, tieflings combine human appearance with infernal features and innate magical abilities", 
      accessory: ["flaming whip", "infernal pact scroll", "obsidian dagger"],
      subraces: []
    },
  ];

export const expandedRaces: Race[] = [
    { id: "aarakocra", name: 'Aarakocra', source: "Monsters of the Multiverse", description: "Bird-like humanoids from the Elemental Plane of Air, known for their ability to fly", accessory: ["spear", "feathered staff", "sky map"], subraces: [] },
    { id: "aasimar", name: 'Aasimar', source: "Monsters of the Multiverse", description: "Celestial-blooded beings with radiant souls and a destiny for greatness", accessory: ["radiant blade", "holy symbol", "glowing feather"], subraces: [] },
    { id: "bugbear", name: 'Bugbear', source: "Monsters of the Multiverse", description: "Large and stealthy goblinoids with a reputation for brutality and cunning", accessory: ["spiked club", "torch", "captured helmet"], subraces: [] },
    { id: "centaur", name: 'Centaur', source: "Monsters of the Multiverse", description: "Half-human, half-horse beings who combine speed with martial prowess", accessory: ["lance", "bow", "herbal poultice"], subraces: [] },
    { id: "changeling", name: 'Changeling', source: "Monsters of the Multiverse", description: "Shapeshifters capable of altering their appearance at will", accessory: ["mask", "mirror", "dagger"], subraces: [] },
    { id: "deep-gnome", name: 'Deep Gnome (Svirfneblin)', source: "Monsters of the Multiverse", description: "These gnomes dwell in the Underdark and are masters of stealth", accessory: ["pickaxe", "black gem", "fungal sample"], subraces: [] },
    { id: "duergar", name: 'Duergar (Gray Dwarf)', source: "Monsters of the Multiverse", description: "Gray dwarves corrupted by dark magic, often cruel and grim", accessory: ["war pick", "dark lantern", "chain"], subraces: [] },
    { id: "eladrin", name: 'Eladrin', source: "Monsters of the Multiverse", description: "Fey-touched elves with shifting seasonal personalities and innate magic", accessory: ["wand", "seasonal mask", "bouquet (changes by season)"], subraces: [] },
    { id: "fairy", name: 'Fairy', source: "Monsters of the Multiverse", description: "Tiny, winged beings from the Feywild imbued with whimsical magic", accessory: ["glittering wand", "glowing mushroom", "thimble cup"], subraces: [] },
    { id: "firbolg", name: 'Firbolg', source: "Monsters of the Multiverse", description: "Gentle giants with strong ties to nature and druidic traditions", accessory: ["staff", "animal skull", "druidic stone"], subraces: [] },
    { 
      id: "genasi", 
      name: 'Genasi', 
      source: "Monsters of the Multiverse", 
      description: "Beings infused with elemental energy", 
      accessory: ["elemental orb", "tattooed scroll"],
      subraces: [
        {
          id: "air-genasi",
          name: "Air Genasi",
          description: "Beings infused with elemental air energy, light and swift"
        },
        {
          id: "earth-genasi",
          name: "Earth Genasi",
          description: "Beings infused with elemental earth energy, strong and resilient"
        },
        {
          id: "fire-genasi",
          name: "Fire Genasi",
          description: "Beings infused with elemental fire energy, passionate and quick-tempered"
        },
        {
          id: "water-genasi",
          name: "Water Genasi",
          description: "Beings infused with elemental water energy, adaptable and fluid"
        }
      ]
    },
    { id: "air-genasi", name: 'Genasi (Air)', source: "Monsters of the Multiverse", description: "Beings infused with elemental air energy, light and swift", accessory: ["elemental orb", "tattooed scroll"], subraces: [] },
    { id: "earth-genasi", name: 'Genasi (Earth)', source: "Monsters of the Multiverse", description: "Beings infused with elemental earth energy, strong and resilient", accessory: ["elemental orb", "tattooed scroll"], subraces: [] },
    { id: "fire-genasi", name: 'Genasi (Fire)', source: "Monsters of the Multiverse", description: "Beings infused with elemental fire energy, passionate and quick-tempered", accessory: ["elemental orb", "tattooed scroll"], subraces: [] },
    { id: "water-genasi", name: 'Genasi (Water)', source: "Monsters of the Multiverse", description: "Beings infused with elemental water energy, adaptable and fluid", accessory: ["elemental orb", "tattooed scroll"], subraces: [] },
    { 
      id: "gith", 
      name: 'Gith', 
      source: "Monsters of the Multiverse", 
      description: "Psionic humanoids who escaped mind flayer enslavement", 
      subraces: [
        {
          id: "githyanki",
          name: "Githyanki",
          description: "Astral plane raiders who broke free from mind flayer slavery, fierce and militant"
        },
        {
          id: "githzerai",
          name: "Githzerai",
          description: "Monastic and disciplined gith who dwell in Limbo, resisting chaos"
        }
      ]
    },
    { id: "githyanki", name: 'Gith (Githyanki)', source: "Monsters of the Multiverse", description: "Astral plane raiders who broke free from mind flayer slavery, fierce and militant", accessory: ["silver sword", "astral compass", "battle horn"], subraces: [] },
    { id: "githzerai", name: 'Gith (Githzerai)', source: "Monsters of the Multiverse", description: "Monastic and disciplined gith who dwell in Limbo, resisting chaos", accessory: ["psionic orb", "floating stone ring", "bracers"], subraces: [] },
    { id: "goblin", name: 'Goblin', source: "Monsters of the Multiverse", description: "Small but fierce, goblins are clever and quick with a chaotic bent", accessory: ["rusty blade", "sticky trap", "stolen trinket"], subraces: [] },
    { id: "goliath", name: 'Goliath', source: "Monsters of the Multiverse", description: "Towering humanoids from the mountains with a competitive, hardy nature", accessory: ["stone maul", "climbing hook", "mountain totem"], subraces: [] },
    { id: "harengon", name: 'Harengon', source: "Monsters of the Multiverse", description: "Rabbitfolk with quick reflexes and a joyful demeanor from the Feywild", accessory: ["slingshot", "carrot pipe", "pocket watch"], subraces: [] },
    { id: "hobgoblin", name: 'Hobgoblin', source: "Monsters of the Multiverse", description: "Strategic and warlike goblinoids with a strong sense of honor and discipline", accessory: ["tactical map", "polearm", "martial banner"], subraces: [] },
    { id: "kenku", name: 'Kenku', source: "Monsters of the Multiverse", description: "Cursed crow-like humanoids unable to speak independently but adept at mimicry", accessory: ["mimicry bell", "writing chalkboard", "dagger"], subraces: [] },
    { id: "kobold", name: 'Kobold', source: "Monsters of the Multiverse", description: "Small, draconic creatures known for trapmaking and loyalty to dragons", accessory: ["flint spark tool", "tiny crossbow", "dragon carving"], subraces: [] },
    { id: "leonin", name: 'Leonin', source: "Monsters of the Multiverse", description: "Fierce lionfolk from Theros, proud and territorial", accessory: ["claw gauntlets", "sun emblem", "war mask"], subraces: [] },
    { id: "lizardfolk", name: 'Lizardfolk', source: "Monsters of the Multiverse", description: "Reptilian beings who think in alien logic and live by survival instinct", accessory: ["bone spear", "fish", "survival net"], subraces: [] },
    { id: "minotaur", name: 'Minotaur', source: "Monsters of the Multiverse", description: "Strong and courageous, these horned warriors hail from maze-like societies", accessory: ["double-bladed axe", "horned helmet"], subraces: [] },
    { id: "orc", name: 'Orc', source: "Monsters of the Multiverse", description: "Savage and powerful, orcs live by strength and tribal unity", accessory: ["cleaver", "war drum", "beast tooth necklace"], subraces: [] },
    { id: "satyr", name: 'Satyr', source: "Monsters of the Multiverse", description: "Fey creatures full of mirth, music, and mischief", accessory: ["pan flute", "wine goblet", "vine crown"], subraces: [] },
    { id: "sea-elf", name: 'Sea Elf', source: "Monsters of the Multiverse", description: "Elves adapted to life under the sea with swimming prowess and water affinity", accessory: ["coral blade", "conch horn", "netting"], subraces: [] },
    { id: "shadar-kai", name: 'Shadar-kai', source: "Monsters of the Multiverse", description: "Shadowy elves linked to the Raven Queen, often stoic and grim", accessory: ["shadow chain", "raven feather", "black rose"], subraces: [] },
    { id: "tabaxi", name: 'Tabaxi', source: "Monsters of the Multiverse", description: "Feline humanoids driven by curiosity and wanderlust", accessory: ["bag of trinkets", "whip", "journal"], subraces: [] },
    { id: "tortle", name: 'Tortle', source: "Monsters of the Multiverse", description: "Turtle-like humanoids who seek simple, contemplative lives", accessory: ["fishing rod", "coral totem", "wooden bowl"], subraces: [] },
    { id: "triton", name: 'Triton', source: "Monsters of the Multiverse", description: "Aquatic beings who protect the sea from ancient evils", accessory: ["trident", "shell mirror", "tide pearl"], subraces: [] },
    { id: "yuan-ti", name: 'Yuan-ti', source: "Monsters of the Multiverse", description: "Snake-like beings with cold intellect and a hunger for domination", accessory: ["serpent staff", "poison vial", "jeweled dagger"], subraces: [] },
    { id: "warforged", name: 'Warforged', source: "Eberron: Rising from the Last War", description: "Living constructs built for war, seeking purpose in peace", accessory: ["built-in blade", "arcane capacitor", "schematic scroll"], subraces: [] },
    { id: "kalashtar", name: 'Kalashtar', source: "Eberron: Rising from the Last War", description: "Mystics bound with spirits from the dream realm, giving them psionic gifts", accessory: ["dream crystal", "incense fan", "third eye circlet"], subraces: [] },
    { id: "shifter", name: 'Shifter', source: "Eberron: Rising from the Last War", description: "Humanoids with the ability to tap into bestial aspects, often called weretouched", subraces: [] },
    { id: "simic-hybrid", name: 'Simic Hybrid', source: "Guildmaster's Guide to Ravnica", description: "Genetically enhanced beings from Ravnica with biological augmentations", accessory: ["bio-augment claw", "vial rack", "aqua-tube"], subraces: [] },
    { id: "vedalken", name: 'Vedalken', source: "Guildmaster's Guide to Ravnica", description: "Logical and methodical thinkers from Ravnica, devoted to perfection", accessory: ["stylus", "logic cube", "levitating quill"], subraces: [] },
    { id: "loxodon", name: 'Loxodon', source: "Guildmaster's Guide to Ravnica", description: "Elephantine humanoids who are peaceful yet powerful", accessory: ["stone tablet", "bell staff", "incense burner"], subraces: [] },
    { id: "pallid-elf", name: 'Pallid Elf', source: "Explorer's Guide to Wildemount", description: "Pale-skinned elves with innate healing magic and luminous presence", accessory: ["radiant tome", "healing wand", "moon-shaped talisman"], subraces: [] },
    { id: "lotusden-halfling", name: 'Lotusden Halfling', source: "Explorer's Guide to Wildemount", description: "Halflings tied to the cycles of nature and forest growth", accessory: ["planting staff", "blossom satchel", "vine ring"], subraces: [] },
    { id: "autognome", name: 'Autognome', source: "Spelljammer: Adventures in Space", description: "Mechanical gnomes built for exploration and service", accessory: ["wrench", "gear orb", "antenna crystal"], subraces: [] },
    { id: "giff", name: 'Giff', source: "Spelljammer: Adventures in Space", description: "Muscular, hippo-headed creatures with a love of firearms", accessory: ["flintlock pistol", "monocle", "ration tin"], subraces: [] },
    { id: "hadozee", name: 'Hadozee', source: "Spelljammer: Adventures in Space", description: "Gliding simian sailors adapted to life in the skies", accessory: ["rope hook", "banana", "folding wings"], subraces: [] },
    { id: "plasmoid", name: 'Plasmoid', source: "Spelljammer: Adventures in Space", description: "Amorphous, ooze-like beings capable of forming humanoid shapes", accessory: ["ooze blade", "shifting flask", "slime orb"], subraces: [] },
    { id: "thri-kreen", name: 'Thri-kreen', source: "Spelljammer: Adventures in Space", description: "Insectoid nomads with telepathy and tough carapaces", accessory: ["glaive", "hive egg", "psychic shard"], subraces: [] },
    { id: "owlin", name: 'Owlin', source: "Strixhaven: Curriculum of Chaos", description: "Owl-like humanoids who move silently and swiftly through the air", accessory: ["scroll bundle", "timepiece", "quill & ink jar"], subraces: [] },
    { id: "glitchling", name: 'Glitchling', source: "Unearthed Arcana (Playtest)", description: "Digital beings who have crossed from virtual worlds into reality", subraces: [] },
  ];
