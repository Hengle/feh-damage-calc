// special data
var specInfo =
{
    "Aegis" : {
        "description" : "Reduces damage inflicted by attacks from foes 2 spaces away by 50%.",
        "cooldown" : 3,
        "reduce_dmg" : {
            "range" : 2,
            "dmg_mod" : 0.5
        }
    },
    "Aether" : {
        "description" : "Resolve combat as if foe suffered DEF/RES-50%. Recover 50% of damage dealt.",
        "cooldown" : 5,
        "heal_dmg" : 0.5,
        "enemy_def_res_mod" : 0.5
    },
    "Astra" : {
        "description" : "Grants +150% to damage dealt.",
        "cooldown" : 5,
        "dmg_mod" : 1.5
    },
    "Blazing Flame" : {
        "description" : "Before initiating combat, foes in an area near target take damage equal to 1.5 × (unit's ATK minus foe's DEF or RES).",
        "cooldown" : 5,
        "before_combat_aoe" : true,
        "aoe_dmg_mod" : 1.5
    },
    "Blazing Light" : {
        "description" : "Before initiating combat, foes in an area near target take damage equal to 1.5 × (unit's ATK minus foe's DEF or RES).",
        "cooldown" : 5,
        "before_combat_aoe" : true,
        "aoe_dmg_mod" : 1.5
    },
    "Blazing Thunder" : {
        "description" : "Before initiating combat, foes in an area near target take damage equal to 1.5 × (unit's ATK minus foe's DEF or RES).",
        "cooldown" : 5,
        "before_combat_aoe" : true,
        "aoe_dmg_mod" : 1.5
    },
    "Blazing Wind" : {
        "description" : "Before initiating combat, foes in an area near target take damage equal to 1.5 × (unit's ATK minus foe's DEF or RES).",
        "cooldown" : 5,
        "before_combat_aoe" : true,
        "aoe_dmg_mod" : 1.5
    },
    "Bonfire" : {
        "description" : "Boosts damage dealt by 50% of unit's DEF.",
        "cooldown" : 3,
        "dmg_buff_by_stat" : {
            "stat" : "def",
            "buff" : 0.5
        }
    },
    "Buckler" : {
        "description" : "Reduces damage inflicted by attacks from adjacent foes by 30%.",
        "cooldown" : 3,
        "reduce_dmg" : {
            "range" : 1,
            "dmg_mod" : 0.3
        }
    },
    "Chilling Wind" : {
        "description" : "Boosts damage dealt by 50% of unit's RES.",
        "cooldown" : 4,
        "dmg_buff_by_stat" : {
            "stat" : "res",
            "buff" : 0.5
        }
    },
    "Daylight" : {
        "description" : "Heal 30% of damage dealt.",
        "cooldown" : 4,
        "heal_dmg" : 0.3
    },
    "Draconic Aura" : {
        "description" : "Boosts damage dealt by 30% of unit's ATK.",
        "cooldown" : 3,
		"dmg_buff_by_stat" : {
            "stat" : "atk",
            "buff" : 0.3
        }
    },
    "Dragon Fang" : {
        "description" : "Boosts damage dealt by 50% of unit's ATK.",
        "cooldown" : 4,
		"dmg_buff_by_stat" : {
            "stat" : "atk",
            "buff" : 0.5
        }
    },
    "Dragon Gaze" : {
        "description" : "Boosts damage dealt by 30% of unit's ATK.",
        "cooldown" : 4,
		"dmg_buff_by_stat" : {
            "stat" : "atk",
            "buff" : 0.3
        }
    },
    "Escutcheon" : {
        "description" : "Reduces damage inflicted by attacks from adjacent foes by 30%.",
        "cooldown" : 2,
        "reduce_dmg" : {
            "range" : 1,
            "dmg_mod" : 0.3
        }
    },
    "Galeforce" : {
        "description" : "If this unit initiates an attack, it can take another action after combat.",
        "cooldown" : 5,
        "non_combat" : true
    },
    "Glacies" : {
        "description" : "Boosts damage dealt by 80% of unit's RES.",
        "cooldown" : 4,
        "dmg_buff_by_stat" : {
            "stat" : "res",
            "buff" : 0.8
        }
    },
    "Glimmer" : {
        "description" : "Grants +50% to damage dealt.",
        "cooldown" : 3,
        "dmg_mod" : 0.5
    },
    "Glowing Ember" : {
        "description" : "Boosts damage dealt by 50% of unit's DEF.",
        "cooldown" : 4,
        "dmg_buff_by_stat" : {
            "stat" : "def",
            "buff" : 0.5
        }
    },
    "Growing Flame" : {
        "description" : "Before initiating combat, foes in a wide area near target take damage equal to unit's ATK minus foe's DEF or RES.",
        "cooldown" : 5,
        "before_combat_aoe" : true
    },
    "Growing Light" : {
        "description" : "Before initiating combat, foes in a wide area near target take damage equal to unit's ATK minus foe's DEF or RES.",
        "cooldown" : 5,
        "before_combat_aoe" : true
    },
	"Growing Thunder" : {
	    "description" : "Before initiating combat, foes in a wide area near target take damage equal to unit's ATK minus foe's DEF or RES.",
        "cooldown" : 5,
        "before_combat_aoe" : true
    },
    "Growing Wind" : {
        "description" : "Before initiating combat, foes in a wide area near target take damage equal to unit's ATK minus foe's DEF or RES.",
        "cooldown" : 5,
        "before_combat_aoe" : true
    },
    "Heavenly Light" : {
        "description" : "When healing an ally with a staff, heal every ally's HP by 10.",
        "cooldown" : 2,
        "non_combat": true
    },
    "Holy Vestments" : {
        "description" : "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.",
        "cooldown" : 3,
        "reduce_dmg" : {
            "range" : 2,
            "dmg_mod" : 0.3
        }
    },
    "Iceberg" : {
        "description" : "Boosts damage dealt by 50% of unit's RES.",
        "cooldown" : 3,
        "dmg_buff_by_stat" : {
            "stat" : "res",
            "buff" : 0.5
        }
    },
    "Ignis" : {
        "description" : "Boosts damage dealt by 80% of unit's DEF.",
        "cooldown" : 4,
        "dmg_buff_by_stat" : {
            "stat" : "def",
            "buff" : 0.8
        }
    },
    "Imbue" : {
        "description" : "When healing an ally with a staff, increase recovered HP by 10.",
        "cooldown" : 1,
        "non_combat" : true
    },
    "Kindled-Fire Balm" : {
        "description" : "When healing an ally with a staff, grants all allies ATK+4 for 1 turn.",
        "cooldown" : 1,
        "non_combat" : true
    },
    "Luna" : {
        "description" : "Resolve combat as if foe suffered DEF/RES-50%.",
        "cooldown" : 3,
        "enemy_def_res_mod" : 0.5
    },
    "Miracle" : {
        "description" : "If HP > 1, survive a lethal attack with 1 HP remaining.",
        "cooldown" : 5,
        "survive" : true
    },
    "Moonbow" : {
        "description" : "Resolve combat as if foe suffered DEF/RES-30%.",
        "cooldown" : 2,
        "enemy_def_res_mod" : 0.3
    },
    "New Moon" : {
        "description" : "Resolve combat as if foe suffered DEF/RES-30%.",
        "cooldown" : 3,
        "enemy_def_res_mod" : 0.3
    },
    "Night Sky" : {
        "description" : "Grants +50% to damage dealt.",
        "cooldown" : 4,
        "dmg_mod" : 0.5
    },
    "Noontime" : {
        "description" : "Heal 30% of damage dealt.",
        "cooldown" : 3,
        "heal_dmg" : 0.3
    },
    "Pavise" : {
        "description" : "Reduces damage inflicted by attacks from adjacent foes by 50%.",
        "cooldown" : 3,
        "reduce_dmg" : {
            "range" : 1,
            "dmg_mod" : 0.5
        }
    },
    "Reprisal" : {
        "description" : "Grants bonus to damage dealt equal to 30% of damage suffered.",
        "cooldown" : 2,
        "dmg_suffer_buff" : 0.3
    },
    "Retribution" : {
        "description" : "Grants bonus to damage dealt equal to 30% of damage suffered.",
        "cooldown" : 3,
        "dmg_suffer_buff" : 0.3
    },
    "Rising Flame" : {
        "description" : "Before initiating combat, foes in an area near target take damage equal to unit's ATK minus foe's DEF or RES.",
        "cooldown" : 5,
        "before_combat_aoe" : true
    },
    "Rising Light" : {
        "description" : "Before initiating combat, foes in an area near target take damage equal to unit's ATK minus foe's DEF or RES.",
        "cooldown" : 5,
        "before_combat_aoe" : true
    },
    "Rising Thunder" : {
        "description" : "Before initiating combat, foes in an area near target take damage equal to unit's ATK minus foe's DEF or RES.",
        "cooldown" : 5,
        "before_combat_aoe" : true
    },
    "Rising Wind" : {
        "description" : "Before initiating combat, foes in an area near target take damage equal to unit's ATK minus foe's DEF or RES.",
        "cooldown" : 5,
        "before_combat_aoe" : true
    },
    "Sacred Cowl" : {
        "description" : "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.",
        "cooldown" : 2,
        "reduce_dmg" : {
            "range" : 2,
            "dmg_mod" : 0.3
        }
    },
    "Sol" : {
        "description" : "Heal 50% of damage dealt.",
        "cooldown" : 4,
        "heal_dmg" : 0.5
    },
    "Solid-Earth Balm" : {
        "description" : "When healing an ally with a staff, grants all allies DEF+4 for 1 turn.",
        "cooldown" : 1,
        "non_combat" : true
    },
    "Still-Water Balm" : {
        "description" : "When healing an ally with a staff, grants all allies RES+4 for 1 turn.",
        "cooldown" : 1,
        "non_combat" : true
    },
    "Swift-Winds Balm" : {
        "description" : "When healing an ally with a staff, grants all allies SPD+4 for 1 turn.",
        "cooldown" : 1,
        "non_combat" : true
    },
    "Vengeance" : {
        "description" : "Grants bonus to damage dealt equal to 50% of damage suffered.",
        "cooldown" : 3,
        "dmg_suffer_buff" : 0.5
    }
};
