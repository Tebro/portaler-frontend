interface ZoneTier {
  name: string
  tier: 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI' | 'VII' | 'VIII'
}

const zoneTiers: ZoneTier[] = [
  {
    name: "Arthur's Rest",
    tier: 'I',
  },
  {
    name: 'Astolat',
    tier: 'VI',
  },
  {
    name: 'Avalanche Incline',
    tier: 'VIII',
  },
  {
    name: 'Avalanche Ravine',
    tier: 'V',
  },
  {
    name: 'Battlebrae Flatland',
    tier: 'V',
  },
  {
    name: 'Battlebrae Grassland',
    tier: 'VII',
  },
  {
    name: 'Battlebrae Lake',
    tier: 'V',
  },
  {
    name: 'Battlebrae Meadow',
    tier: 'VII',
  },
  {
    name: 'Battlebrae Peaks',
    tier: 'V',
  },
  {
    name: 'Battlebrae Plain',
    tier: 'V',
  },
  {
    name: 'Bedrock Passage',
    tier: 'VI',
  },
  {
    name: 'Bellever Tor',
    tier: 'IV',
  },
  {
    name: 'Birchcopse',
    tier: 'IV',
  },
  {
    name: 'Birken Fell',
    tier: 'VI',
  },
  {
    name: 'Black Monastery',
    tier: 'VIII',
  },
  {
    name: 'Blackthorn Quarry',
    tier: 'IV',
  },
  {
    name: 'Bleachskull Desert',
    tier: 'VI',
  },
  {
    name: 'Bleachskull Steppe',
    tier: 'V',
  },
  {
    name: 'Bonepool Marsh',
    tier: 'V',
  },
  {
    name: 'Bowscale Fell',
    tier: 'VI',
  },
  {
    name: 'Braemore Lowland',
    tier: 'VI',
  },
  {
    name: 'Braemore Upland',
    tier: 'V',
  },
  {
    name: 'Brambleshore Hinterlands',
    tier: 'V',
  },
  {
    name: 'Brent Knoll',
    tier: 'III',
  },
  {
    name: 'Bridgewatch',
    tier: 'I',
  },
  {
    name: 'Bryn Gorge',
    tier: 'III',
  },
  {
    name: 'Caerleon',
    tier: 'VII',
  },
  {
    name: 'Cairn Camain',
    tier: 'V',
  },
  {
    name: 'Cairn Darg',
    tier: 'V',
  },
  {
    name: 'Cairn Fidair',
    tier: 'V',
  },
  {
    name: 'Cairn Glascore',
    tier: 'V',
  },
  {
    name: 'Cairn Gorm',
    tier: 'V',
  },
  {
    name: 'Camlann',
    tier: 'VII',
  },
  {
    name: 'Cases-Ugumlos',
    tier: 'V',
  },
  {
    name: 'Casitos-Alieam',
    tier: 'VII',
  },
  {
    name: 'Casitos-Atinaum',
    tier: 'V',
  },
  {
    name: 'Casitos-Avaelum',
    tier: 'V',
  },
  {
    name: 'Casos-Aiagsum',
    tier: 'VI',
  },
  {
    name: 'Casos-Aximam',
    tier: 'VI',
  },
  {
    name: 'Casos-Ayosrom',
    tier: 'VI',
  },
  {
    name: 'Casos-Uruxtum',
    tier: 'V',
  },
  {
    name: 'Cebitos-Aeaylum',
    tier: 'V',
  },
  {
    name: 'Cebos-Avemlum',
    tier: 'V',
  },
  {
    name: 'Cedarcopse',
    tier: 'IV',
  },
  {
    name: 'Ceres-Iooinum',
    tier: 'IV',
  },
  {
    name: 'Ceritos-Avulsum',
    tier: 'V',
  },
  {
    name: 'Ceros-Aeaylum',
    tier: 'V',
  },
  {
    name: 'Cetitos-Aiayrom',
    tier: 'V',
  },
  {
    name: 'Cetitos-Avixnum',
    tier: 'V',
  },
  {
    name: 'Cetitos-Aximam',
    tier: 'VI',
  },
  {
    name: 'Cetos-Obaelos',
    tier: 'IV',
  },
  {
    name: 'Chillhag',
    tier: 'III',
  },
  {
    name: 'Cieites-Ugumlos',
    tier: 'V',
  },
  {
    name: 'Cieitos-Avioaum',
    tier: 'VI',
  },
  {
    name: 'Cieitos-Ayosrom',
    tier: 'VI',
  },
  {
    name: 'Cieitos-Obaelos',
    tier: 'IV',
  },
  {
    name: 'Cieitos-Otatrom',
    tier: 'VIII',
  },
  {
    name: 'Cieos-Atatlum',
    tier: 'VIII',
  },
  {
    name: 'Cilitos-Opodam',
    tier: 'VII',
  },
  {
    name: 'Cilos-Avioaum',
    tier: 'VI',
  },
  {
    name: 'Cilos-Ofailos',
    tier: 'VI',
  },
  {
    name: 'Cilos-Otatrom',
    tier: 'VIII',
  },
  {
    name: 'Citadel of Ash',
    tier: 'VIII',
  },
  {
    name: 'Conitos-Ofailos',
    tier: 'VI',
  },
  {
    name: 'Conitos-Oxaeaum',
    tier: 'V',
  },
  {
    name: 'Conitos-Uruxtum',
    tier: 'V',
  },
  {
    name: 'Conos-Avaelum',
    tier: 'V',
  },
  {
    name: 'Coritos-Avemlum',
    tier: 'V',
  },
  {
    name: 'Coros-Aiayrom',
    tier: 'V',
  },
  {
    name: 'Coros-Alieam',
    tier: 'VII',
  },
  {
    name: 'Coros-Atinaum',
    tier: 'V',
  },
  {
    name: 'Coues-Exakrom',
    tier: 'IV',
  },
  {
    name: 'Cougar Den',
    tier: 'V',
  },
  {
    name: 'Couos-Ayayaum',
    tier: 'VI',
  },
  {
    name: 'Couos-Opodam',
    tier: 'VII',
  },
  {
    name: 'Cracked Earth',
    tier: 'III',
  },
  {
    name: 'Craglight Cavern',
    tier: 'VI',
  },
  {
    name: 'Creag Garr',
    tier: 'VI',
  },
  {
    name: 'Creag Morr',
    tier: 'VI',
  },
  {
    name: 'Croker Hill',
    tier: 'V',
  },
  {
    name: 'Crose Gorge',
    tier: 'III',
  },
  {
    name: 'Crosscut Skip',
    tier: 'V',
  },
  {
    name: 'Curites-Exakrom',
    tier: 'IV',
  },
  {
    name: 'Curitos-Ayayaum',
    tier: 'VI',
  },
  {
    name: 'Curlew Fen',
    tier: 'IV',
  },
  {
    name: 'Curos-Avulsum',
    tier: 'V',
  },
  {
    name: 'Cuyites-Iooinum',
    tier: 'IV',
  },
  {
    name: 'Cynitos-Aiagsum',
    tier: 'VI',
  },
  {
    name: 'Cynitos-Atatlum',
    tier: 'VIII',
  },
  {
    name: 'Cynos-Avixnum',
    tier: 'V',
  },
  {
    name: 'Cynos-Oxaeaum',
    tier: 'V',
  },
  {
    name: 'Daemonium Keep',
    tier: 'VIII',
  },
  {
    name: 'Darkbough Snag',
    tier: 'VIII',
  },
  {
    name: 'Darkseep Core',
    tier: 'V',
  },
  {
    name: 'Darkstone Drift',
    tier: 'VI',
  },
  {
    name: 'Deadpine Forest',
    tier: 'V',
  },
  {
    name: 'Deadvein Gully',
    tier: 'VI',
  },
  {
    name: 'Deathcap Channel',
    tier: 'VI',
  },
  {
    name: 'Deathcreep Adit',
    tier: 'VI',
  },
  {
    name: 'Deathreach Priory',
    tier: 'VIII',
  },
  {
    name: 'Deathwisp Bog',
    tier: 'VII',
  },
  {
    name: 'Deathwisp Sink',
    tier: 'VII',
  },
  {
    name: 'Deepwood Copse',
    tier: 'VII',
  },
  {
    name: 'Deepwood Dell',
    tier: 'V',
  },
  {
    name: 'Deepwood Gorge',
    tier: 'VI',
  },
  {
    name: 'Deepwood Pines',
    tier: 'VII',
  },
  {
    name: 'Dewleaf Fen',
    tier: 'IV',
  },
  {
    name: 'Driftwood Glen',
    tier: 'VI',
  },
  {
    name: 'Driftwood Hollow',
    tier: 'VII',
  },
  {
    name: 'Driftwood Vale',
    tier: 'V',
  },
  {
    name: 'Driprock Tunnel',
    tier: 'VI',
  },
  {
    name: 'Drownfield Course',
    tier: 'V',
  },
  {
    name: 'Drownfield Fen',
    tier: 'V',
  },
  {
    name: 'Drownfield Mire',
    tier: 'V',
  },
  {
    name: 'Drownfield Quag',
    tier: 'VII',
  },
  {
    name: 'Drownfield Rut',
    tier: 'VI',
  },
  {
    name: 'Drownfield Sink',
    tier: 'VIII',
  },
  {
    name: 'Drownfield Slough',
    tier: 'VI',
  },
  {
    name: 'Drownfield Wetland',
    tier: 'VI',
  },
  {
    name: 'Drybasin Oasis',
    tier: 'VII',
  },
  {
    name: 'Drybasin Riverbed',
    tier: 'V',
  },
  {
    name: 'Drytop Pillars',
    tier: 'VI',
  },
  {
    name: 'Drytop Riverbed',
    tier: 'VI',
  },
  {
    name: 'Dryvein Confluence',
    tier: 'VII',
  },
  {
    name: 'Dryvein Cross',
    tier: 'V',
  },
  {
    name: 'Dryvein End',
    tier: 'VII',
  },
  {
    name: 'Dryvein Oasis',
    tier: 'VI',
  },
  {
    name: 'Dryvein Plain',
    tier: 'V',
  },
  {
    name: 'Dryvein Riverbed',
    tier: 'V',
  },
  {
    name: 'Dryvein Steppe',
    tier: 'VI',
  },
  {
    name: 'Drywater Meadow',
    tier: 'IV',
  },
  {
    name: 'Dusklight Fen',
    tier: 'IV',
  },
  {
    name: 'Eldersleep',
    tier: 'VIII',
  },
  {
    name: 'Eldon Hill',
    tier: 'V',
  },
  {
    name: 'Everglow Deep',
    tier: 'VI',
  },
  {
    name: 'Everwinter Crossing',
    tier: 'V',
  },
  {
    name: 'Everwinter Expanse',
    tier: 'VII',
  },
  {
    name: 'Everwinter Gap',
    tier: 'VII',
  },
  {
    name: 'Everwinter Gorge',
    tier: 'VI',
  },
  {
    name: 'Everwinter Incline',
    tier: 'VIII',
  },
  {
    name: 'Everwinter Passage',
    tier: 'VII',
  },
  {
    name: 'Everwinter Peak',
    tier: 'VI',
  },
  {
    name: 'Everwinter Plain',
    tier: 'VI',
  },
  {
    name: 'Everwinter Reach',
    tier: 'V',
  },
  {
    name: 'Everwinter Shores',
    tier: 'V',
  },
  {
    name: 'Eye of the Forest',
    tier: 'VIII',
  },
  {
    name: 'Farshore Bay',
    tier: 'V',
  },
  {
    name: 'Farshore Cape',
    tier: 'VII',
  },
  {
    name: 'Farshore Drylands',
    tier: 'VII',
  },
  {
    name: 'Farshore Esker',
    tier: 'V',
  },
  {
    name: 'Farshore Heath',
    tier: 'VI',
  },
  {
    name: 'Farshore Lagoon',
    tier: 'VI',
  },
  {
    name: 'Fasites-Azazsum',
    tier: 'VII',
  },
  {
    name: 'Fasitos-Atezsum',
    tier: 'VII',
  },
  {
    name: 'Fasitos-Oleraum',
    tier: 'VIII',
  },
  {
    name: 'Fasitos-Oyuctum',
    tier: 'VIII',
  },
  {
    name: 'Fasos-Ayiotum',
    tier: 'VI',
  },
  {
    name: 'Febites-Opavun',
    tier: 'VII',
  },
  {
    name: 'Febos-Acalun',
    tier: 'VIII',
  },
  {
    name: 'Ferites-Ohohtum',
    tier: 'VII',
  },
  {
    name: 'Feritos-Enomaum',
    tier: 'V',
  },
  {
    name: 'Feritos-Osinsum',
    tier: 'VI',
  },
  {
    name: 'Ferndell',
    tier: 'IV',
  },
  {
    name: 'Feros-Oyuctum',
    tier: 'VIII',
  },
  {
    name: 'Fetos-Aiaylos',
    tier: 'V',
  },
  {
    name: 'Fiees-Ohohtum',
    tier: 'VII',
  },
  {
    name: 'Fieites-Unavtum',
    tier: 'V',
  },
  {
    name: 'Fieos-Aiuttum',
    tier: 'VIII',
  },
  {
    name: 'Fieos-Atezsum',
    tier: 'VII',
  },
  {
    name: 'Files-Azazsum',
    tier: 'VII',
  },
  {
    name: 'Filites-Izohun',
    tier: 'VI',
  },
  {
    name: 'Filitos-Uzazlum',
    tier: 'VIII',
  },
  {
    name: 'Filos-Abalam',
    tier: 'VIII',
  },
  {
    name: 'Firesink Caldera',
    tier: 'VI',
  },
  {
    name: 'Firesink Trench',
    tier: 'VII',
  },
  {
    name: 'Firitos-Alodrom',
    tier: 'VI',
  },
  {
    name: 'Firos-Aiavam',
    tier: 'VII',
  },
  {
    name: 'Firos-Enomaum',
    tier: 'V',
  },
  {
    name: 'Firos-Ezatam',
    tier: 'VI',
  },
  {
    name: 'Firos-Osinsum',
    tier: 'VI',
  },
  {
    name: 'Flammog Desolation',
    tier: 'VIII',
  },
  {
    name: 'Flammog Fork',
    tier: 'V',
  },
  {
    name: 'Flammog Valley',
    tier: 'VI',
  },
  {
    name: 'Flatrock Cliffs',
    tier: 'V',
  },
  {
    name: 'Flatrock Plateau',
    tier: 'VI',
  },
  {
    name: 'Floatshoal Bight',
    tier: 'VII',
  },
  {
    name: 'Floatshoal Fissure',
    tier: 'VI',
  },
  {
    name: 'Floatshoal Floe',
    tier: 'V',
  },
  {
    name: 'Fones-Opavun',
    tier: 'VII',
  },
  {
    name: 'Fonitos-Amaurom',
    tier: 'V',
  },
  {
    name: 'Fonos-Aiugsum',
    tier: 'VI',
  },
  {
    name: 'Fonos-Oleraum',
    tier: 'VIII',
  },
  {
    name: 'Forest Burrow',
    tier: 'VII',
  },
  {
    name: 'Forest Cross',
    tier: 'II',
  },
  {
    name: 'Foritos-Aiaylos',
    tier: 'V',
  },
  {
    name: 'Foros-Egoisum',
    tier: 'V',
  },
  {
    name: 'Foros-Uzazlum',
    tier: 'VIII',
  },
  {
    name: 'Fort Sterling',
    tier: 'I',
  },
  {
    name: 'Foues-Aeaosum',
    tier: 'V',
  },
  {
    name: 'Fouitos-Aiuttum',
    tier: 'VIII',
  },
  {
    name: 'Fouos-Agosaum',
    tier: 'V',
  },
  {
    name: 'Fouos-Amaurom',
    tier: 'V',
  },
  {
    name: 'Fractured Ground',
    tier: 'III',
  },
  {
    name: 'Frostbite Chasm',
    tier: 'V',
  },
  {
    name: 'Frostbite Mountain',
    tier: 'VI',
  },
  {
    name: 'Frostpeak Ascent',
    tier: 'VI',
  },
  {
    name: 'Frostpeak Vista',
    tier: 'V',
  },
  {
    name: 'Frostseep Crevasse',
    tier: 'VII',
  },
  {
    name: 'Frostseep Ravine',
    tier: 'V',
  },
  {
    name: 'Frostspring Passage',
    tier: 'VI',
  },
  {
    name: 'Frostspring Vulcano',
    tier: 'VII',
  },
  {
    name: 'Furitos-Aiavam',
    tier: 'VII',
  },
  {
    name: 'Fuyes-Izohun',
    tier: 'VI',
  },
  {
    name: 'Fuyitos-Acalun',
    tier: 'VIII',
  },
  {
    name: 'Fuyitos-Ayiotum',
    tier: 'VI',
  },
  {
    name: 'Fynes-Unavtum',
    tier: 'V',
  },
  {
    name: 'Fynites-Aeaosum',
    tier: 'V',
  },
  {
    name: 'Fynitos-Abalam',
    tier: 'VIII',
  },
  {
    name: 'Fynitos-Agosaum',
    tier: 'V',
  },
  {
    name: 'Fynitos-Aiugsum',
    tier: 'VI',
  },
  {
    name: 'Fynitos-Egoisum',
    tier: 'V',
  },
  {
    name: 'Fynitos-Ezatam',
    tier: 'VI',
  },
  {
    name: 'Fynos-Alodrom',
    tier: 'VI',
  },
  {
    name: 'Giantweald Copse',
    tier: 'V',
  },
  {
    name: 'Giantweald Dale',
    tier: 'V',
  },
  {
    name: 'Giantweald Edge',
    tier: 'VII',
  },
  {
    name: 'Giantweald Glade',
    tier: 'VII',
  },
  {
    name: 'Giantweald Roots',
    tier: 'VI',
  },
  {
    name: 'Giantweald Woods',
    tier: 'VI',
  },
  {
    name: 'Glacierbreak Summit',
    tier: 'VI',
  },
  {
    name: 'Glacierfall Canyon',
    tier: 'VI',
  },
  {
    name: 'Glacierfall Cross',
    tier: 'VII',
  },
  {
    name: 'Glacierfall Fissure',
    tier: 'VIII',
  },
  {
    name: 'Glacierfall Pass',
    tier: 'VIII',
  },
  {
    name: 'Glacierfall Passage',
    tier: 'V',
  },
  {
    name: 'Glacierfall Valley',
    tier: 'VII',
  },
  {
    name: 'Gleamstone Deep',
    tier: 'VI',
  },
  {
    name: 'Glowmire Grotto',
    tier: 'VI',
  },
  {
    name: 'Goffers Knoll',
    tier: 'III',
  },
  {
    name: 'Gravemound Brim',
    tier: 'V',
  },
  {
    name: 'Gravemound Cliffs',
    tier: 'VII',
  },
  {
    name: 'Gravemound Hills',
    tier: 'V',
  },
  {
    name: 'Gravemound Knoll',
    tier: 'VII',
  },
  {
    name: 'Gravemound Slope',
    tier: 'VI',
  },
  {
    name: 'Greenhollow Copse',
    tier: 'VII',
  },
  {
    name: 'Greenhollow Vale',
    tier: 'V',
  },
  {
    name: 'Greenshore Bay',
    tier: 'VIII',
  },
  {
    name: 'Greenshore Peninsula',
    tier: 'V',
  },
  {
    name: 'Gutras Hill',
    tier: 'V',
  },
  {
    name: 'Gwan Gorge',
    tier: 'III',
  },
  {
    name: 'Haldon Tor',
    tier: 'IV',
  },
  {
    name: 'Hasitos-Avaolum',
    tier: 'VI',
  },
  {
    name: 'Hasitos-Umayaum',
    tier: 'V',
  },
  {
    name: 'Hasos-Agoitum',
    tier: 'V',
  },
  {
    name: 'Hasos-Ayousum',
    tier: 'VI',
  },
  {
    name: 'Hasos-Inayaum',
    tier: 'V',
  },
  {
    name: 'Hasos-Iuimaum',
    tier: 'V',
  },
  {
    name: 'Hasos-Osuorom',
    tier: 'VI',
  },
  {
    name: 'Haytor',
    tier: 'IV',
  },
  {
    name: 'Hebes-Ouaylos',
    tier: 'V',
  },
  {
    name: 'Hebites-Exemrom',
    tier: 'V',
  },
  {
    name: 'Hebitos-Atontum',
    tier: 'VIII',
  },
  {
    name: 'Hebos-Ulamsum',
    tier: 'V',
  },
  {
    name: 'Heritos-Exozlos',
    tier: 'V',
  },
  {
    name: 'Heritos-Eyoztum',
    tier: 'V',
  },
  {
    name: 'Heritos-Inayaum',
    tier: 'V',
  },
  {
    name: 'Heros-Atoyam',
    tier: 'VII',
  },
  {
    name: 'Hetitos-Iuaerom',
    tier: 'V',
  },
  {
    name: 'Hieos-Aiigaum',
    tier: 'VI',
  },
  {
    name: 'Hieos-Avaolum',
    tier: 'VI',
  },
  {
    name: 'Highbole Glen',
    tier: 'VI',
  },
  {
    name: 'Highland Cross',
    tier: 'II',
  },
  {
    name: 'Highstone Grassland',
    tier: 'V',
  },
  {
    name: 'Highstone Loch',
    tier: 'VIII',
  },
  {
    name: 'Highstone Meadow',
    tier: 'V',
  },
  {
    name: 'Highstone Mound',
    tier: 'VII',
  },
  {
    name: 'Highstone Plains',
    tier: 'V',
  },
  {
    name: 'Highstone Plateau',
    tier: 'VII',
  },
  {
    name: 'Hightree Borderlands',
    tier: 'VI',
  },
  {
    name: 'Hightree Cliffs',
    tier: 'VI',
  },
  {
    name: 'Hightree Dale',
    tier: 'V',
  },
  {
    name: 'Hightree Enclave',
    tier: 'V',
  },
  {
    name: 'Hightree Glade',
    tier: 'V',
  },
  {
    name: 'Hightree Hillock',
    tier: 'VII',
  },
  {
    name: 'Hightree Isle',
    tier: 'VII',
  },
  {
    name: 'Hightree Lake',
    tier: 'V',
  },
  {
    name: 'Hightree Levee',
    tier: 'VI',
  },
  {
    name: 'Hightree Pass',
    tier: 'VI',
  },
  {
    name: 'Hightree Portal East',
    tier: 'V',
  },
  {
    name: 'Hightree Portal North',
    tier: 'V',
  },
  {
    name: 'Hightree Portal West',
    tier: 'V',
  },
  {
    name: 'Hightree Steep',
    tier: 'V',
  },
  {
    name: 'Hightree Strand',
    tier: 'V',
  },
  {
    name: 'Hiles-Izizaum',
    tier: 'VIII',
  },
  {
    name: 'Hilites-Ugumtum',
    tier: 'V',
  },
  {
    name: 'Hilitos-Aiigaum',
    tier: 'VI',
  },
  {
    name: 'Hilitos-Osuorom',
    tier: 'VI',
  },
  {
    name: 'Hiros-Exozlos',
    tier: 'V',
  },
  {
    name: 'Hiros-Iuaerom',
    tier: 'V',
  },
  {
    name: 'Honites-Izizaum',
    tier: 'VIII',
  },
  {
    name: 'Honitos-Uxeulum',
    tier: 'IV',
  },
  {
    name: 'Honos-Oyezam',
    tier: 'VII',
  },
  {
    name: 'Honos-Umayaum',
    tier: 'V',
  },
  {
    name: 'Hornbeam Wood',
    tier: 'V',
  },
  {
    name: 'Horos-Ohenlum',
    tier: 'VII',
  },
  {
    name: 'Hures-Ugumtum',
    tier: 'V',
  },
  {
    name: 'Hurites-Ieatun',
    tier: 'VI',
  },
  {
    name: 'Hurites-Ouaylos',
    tier: 'V',
  },
  {
    name: 'Huritos-Iuimaum',
    tier: 'V',
  },
  {
    name: 'Huritos-Oiaelos',
    tier: 'V',
  },
  {
    name: 'Huros-Atontum',
    tier: 'VIII',
  },
  {
    name: 'Huyes-Ogozlum',
    tier: 'V',
  },
  {
    name: 'Huyitos-Agoitum',
    tier: 'V',
  },
  {
    name: 'Huyitos-Ohenlum',
    tier: 'VII',
  },
  {
    name: 'Huyos-Eyoztum',
    tier: 'V',
  },
  {
    name: 'Huyos-Uxeulum',
    tier: 'IV',
  },
  {
    name: 'Hynes-Exemrom',
    tier: 'V',
  },
  {
    name: 'Hynes-Ieatun',
    tier: 'VI',
  },
  {
    name: 'Hynites-Ogozlum',
    tier: 'V',
  },
  {
    name: 'Hynitos-Atoyam',
    tier: 'VII',
  },
  {
    name: 'Hynitos-Ayousum',
    tier: 'VI',
  },
  {
    name: 'Hynitos-Oyezam',
    tier: 'VII',
  },
  {
    name: 'Hynitos-Ulamsum',
    tier: 'V',
  },
  {
    name: 'Hynos-Oiaelos',
    tier: 'V',
  },
  {
    name: 'Iceburn Cliffs',
    tier: 'VII',
  },
  {
    name: 'Iceburn Firth',
    tier: 'V',
  },
  {
    name: 'Iceburn Peaks',
    tier: 'VI',
  },
  {
    name: 'Iceburn Tundra',
    tier: 'VII',
  },
  {
    name: 'Inis Mon',
    tier: 'V',
  },
  {
    name: 'Kindlegrass Steppe',
    tier: 'VI',
  },
  {
    name: 'Larchroad',
    tier: 'III',
  },
  {
    name: 'Lazygrass Plain',
    tier: 'V',
  },
  {
    name: 'Lewsdon Hill',
    tier: 'V',
  },
  {
    name: 'Longfen Arms',
    tier: 'VI',
  },
  {
    name: 'Longfen Marsh',
    tier: 'V',
  },
  {
    name: 'Longfen Veins',
    tier: 'VII',
  },
  {
    name: 'Longmarch Meadow',
    tier: 'IV',
  },
  {
    name: 'Longtimber Glen',
    tier: 'VI',
  },
  {
    name: "Lurkers' Hollow",
    tier: 'VI',
  },
  {
    name: 'Lymhurst',
    tier: 'I',
  },
  {
    name: 'Malag Crevasse',
    tier: 'VI',
  },
  {
    name: 'Mardale',
    tier: 'VI',
  },
  {
    name: 'Martlock',
    tier: 'I',
  },
  {
    name: 'Mase Knoll',
    tier: 'III',
  },
  {
    name: 'Mawar Gorge',
    tier: 'IV',
  },
  {
    name: 'Meltwater Bog',
    tier: 'V',
  },
  {
    name: 'Meltwater Channel',
    tier: 'VIII',
  },
  {
    name: 'Meltwater Delta',
    tier: 'VI',
  },
  {
    name: 'Meltwater Sump',
    tier: 'VII',
  },
  {
    name: "Merlyn's Rest",
    tier: 'I',
  },
  {
    name: 'Middlemurk Path',
    tier: 'VI',
  },
  {
    name: "Morgana's Rest",
    tier: 'I',
  },
  {
    name: 'Mountain Cross',
    tier: 'II',
  },
  {
    name: 'Mudfoot Mounds',
    tier: 'VI',
  },
  {
    name: 'Mudfoot Sump',
    tier: 'V',
  },
  {
    name: 'Mudrock Burrow',
    tier: 'VI',
  },
  {
    name: 'Munten Fell',
    tier: 'VII',
  },
  {
    name: 'Munten Rise',
    tier: 'V',
  },
  {
    name: 'Munten Tundra',
    tier: 'VI',
  },
  {
    name: 'Murdergulch Cross',
    tier: 'V',
  },
  {
    name: 'Murdergulch Divide',
    tier: 'VIII',
  },
  {
    name: 'Murdergulch Gap',
    tier: 'V',
  },
  {
    name: 'Murdergulch Ravine',
    tier: 'VIII',
  },
  {
    name: 'Murdergulch Trail',
    tier: 'VII',
  },
  {
    name: 'Murkweald',
    tier: 'VII',
  },
  {
    name: 'Nightbloom Track',
    tier: 'VI',
  },
  {
    name: 'Nightcreak Marsh',
    tier: 'V',
  },
  {
    name: 'Northstrand Beach',
    tier: 'VI',
  },
  {
    name: 'Northstrand Dunes',
    tier: 'V',
  },
  {
    name: 'Oakcopse',
    tier: 'IV',
  },
  {
    name: 'Oasitos-Aoeuam',
    tier: 'IV',
  },
  {
    name: 'Oasos-Eraerom',
    tier: 'V',
  },
  {
    name: 'Oasos-Uromlum',
    tier: 'V',
  },
  {
    name: 'Oebitos-Eraerom',
    tier: 'V',
  },
  {
    name: 'Oebitos-Oyozam',
    tier: 'V',
  },
  {
    name: 'Oebos-Ixakaum',
    tier: 'IV',
  },
  {
    name: 'Oeritos-Ecunsum',
    tier: 'VII',
  },
  {
    name: 'Oeritos-Oyexlos',
    tier: 'VI',
  },
  {
    name: 'Oetos-Ofailos',
    tier: 'VII',
  },
  {
    name: 'Oetos-Oyexlos',
    tier: 'VI',
  },
  {
    name: 'Oieitos-Ixakaum',
    tier: 'IV',
  },
  {
    name: 'Oieos-Umiutum',
    tier: 'IV',
  },
  {
    name: 'Oires-Oloblum',
    tier: 'VII',
  },
  {
    name: 'Oiritos-Eramtum',
    tier: 'VI',
  },
  {
    name: 'Oiros-Alaiam',
    tier: 'VIII',
  },
  {
    name: 'Oonitos-Umiutum',
    tier: 'IV',
  },
  {
    name: 'Ooros-Ataltum',
    tier: 'VI',
  },
  {
    name: 'Ooros-Ecunsum',
    tier: 'VII',
  },
  {
    name: 'Oouitos-Alaiam',
    tier: 'VIII',
  },
  {
    name: 'Ore Adit',
    tier: 'VII',
  },
  {
    name: 'Oures-Araosum',
    tier: 'V',
  },
  {
    name: 'Ouritos-Ataltum',
    tier: 'VI',
  },
  {
    name: 'Ouritos-Ofailos',
    tier: 'VII',
  },
  {
    name: 'Ouyos-Aoeuam',
    tier: 'IV',
  },
  {
    name: 'Oynites-Araosum',
    tier: 'V',
  },
  {
    name: 'Oynites-Oloblum',
    tier: 'VII',
  },
  {
    name: 'Oynitos-Uromlum',
    tier: 'V',
  },
  {
    name: 'Oynos-Eramtum',
    tier: 'VI',
  },
  {
    name: 'Oynos-Oyozam',
    tier: 'V',
  },
  {
    name: 'Parchsand Cliffs',
    tier: 'VI',
  },
  {
    name: 'Parchsand Drought',
    tier: 'VIII',
  },
  {
    name: 'Parchthroat Plain',
    tier: 'V',
  },
  {
    name: 'Pasos-Avosam',
    tier: 'V',
  },
  {
    name: 'Pebos-Avosrom',
    tier: 'VI',
  },
  {
    name: 'Pen Garn',
    tier: 'IV',
  },
  {
    name: 'Pen Gent',
    tier: 'IV',
  },
  {
    name: 'Pen Kerrig',
    tier: 'IV',
  },
  {
    name: 'Pen Uchaf',
    tier: 'IV',
  },
  {
    name: 'Peritos-Avosam',
    tier: 'V',
  },
  {
    name: 'Peritos-Oconun',
    tier: 'VII',
  },
  {
    name: 'Peros-Aiataum',
    tier: 'VII',
  },
  {
    name: 'Petitos-Amayam',
    tier: 'IV',
  },
  {
    name: 'Petitos-Avosrom',
    tier: 'VI',
  },
  {
    name: 'Petos-Aietam',
    tier: 'VII',
  },
  {
    name: 'Pieos-Eterrom',
    tier: 'VIII',
  },
  {
    name: 'Pieos-Ofairom',
    tier: 'VII',
  },
  {
    name: 'Pilitos-Eterrom',
    tier: 'VIII',
  },
  {
    name: 'Pirites-Unatam',
    tier: 'V',
  },
  {
    name: 'Piritos-Ofavam',
    tier: 'VII',
  },
  {
    name: 'Piritos-Opabrom',
    tier: 'VIII',
  },
  {
    name: 'Ponitos-Aiayrom',
    tier: 'VI',
  },
  {
    name: 'Poros-Aiayrom',
    tier: 'VI',
  },
  {
    name: 'Poros-Oconun',
    tier: 'VII',
  },
  {
    name: 'Poues-Unatam',
    tier: 'V',
  },
  {
    name: 'Pouitos-Ofairom',
    tier: 'VII',
  },
  {
    name: "Prospector's Hope",
    tier: 'III',
  },
  {
    name: 'Pures-Ouozlum',
    tier: 'IV',
  },
  {
    name: 'Puros-Amayam',
    tier: 'IV',
  },
  {
    name: 'Puros-Ofavam',
    tier: 'VII',
  },
  {
    name: 'Puyitos-Aiataum',
    tier: 'VII',
  },
  {
    name: 'Pynites-Ouozlum',
    tier: 'IV',
  },
  {
    name: 'Pynitos-Aietam',
    tier: 'VII',
  },
  {
    name: 'Pynos-Opabrom',
    tier: 'VIII',
  },
  {
    name: 'Qiient-Al-Nusom',
    tier: 'V',
  },
  {
    name: 'Qiient-Al-Odesum',
    tier: 'V',
  },
  {
    name: 'Qiient-Al-Qinsis',
    tier: 'V',
  },
  {
    name: 'Qiient-Al-Tersas',
    tier: 'V',
  },
  {
    name: 'Qiient-Al-Viesis',
    tier: 'V',
  },
  {
    name: 'Qiient-Al-Vynsis',
    tier: 'V',
  },
  {
    name: 'Qiient-Et-Nusas',
    tier: 'V',
  },
  {
    name: 'Qiient-Et-Odetis',
    tier: 'V',
  },
  {
    name: 'Qiient-Et-Qinsum',
    tier: 'V',
  },
  {
    name: 'Qiient-Et-Tertum',
    tier: 'V',
  },
  {
    name: 'Qiient-In-Nutis',
    tier: 'V',
  },
  {
    name: 'Qiient-In-Odetum',
    tier: 'V',
  },
  {
    name: 'Qiient-In-Qinsis',
    tier: 'V',
  },
  {
    name: 'Qiient-In-Tersom',
    tier: 'V',
  },
  {
    name: 'Qiient-In-Viesis',
    tier: 'V',
  },
  {
    name: 'Qiient-In-Vyntum',
    tier: 'V',
  },
  {
    name: 'Qiient-Nutis',
    tier: 'V',
  },
  {
    name: 'Qiient-Oc-Odetum',
    tier: 'V',
  },
  {
    name: 'Qiient-Odesas',
    tier: 'V',
  },
  {
    name: 'Qiient-Qi-Nusom',
    tier: 'V',
  },
  {
    name: 'Qiient-Qi-Odesas',
    tier: 'V',
  },
  {
    name: 'Qiient-Qi-Tersas',
    tier: 'V',
  },
  {
    name: 'Qiient-Qi-Vynsis',
    tier: 'V',
  },
  {
    name: 'Qiient-Qinsum',
    tier: 'V',
  },
  {
    name: 'Qiient-Sa-Odetis',
    tier: 'V',
  },
  {
    name: 'Qiient-Si-Nusas',
    tier: 'V',
  },
  {
    name: 'Qiient-Si-Odesum',
    tier: 'V',
  },
  {
    name: 'Qiient-Si-Tertum',
    tier: 'V',
  },
  {
    name: 'Qiient-Tersom',
    tier: 'V',
  },
  {
    name: 'Qiient-Vyntum',
    tier: 'V',
  },
  {
    name: 'Qiitun-Al-Duosum',
    tier: 'V',
  },
  {
    name: 'Qiitun-Duosum',
    tier: 'V',
  },
  {
    name: 'Qiitun-Et-Vietis',
    tier: 'V',
  },
  {
    name: 'Qiitun-Et-Vynsom',
    tier: 'V',
  },
  {
    name: 'Qiitun-Si-Vynsom',
    tier: 'V',
  },
  {
    name: 'Qiitun-Vietis',
    tier: 'V',
  },
  {
    name: 'Quaent-Al-Nusis',
    tier: 'IV',
  },
  {
    name: 'Quaent-Al-Odesum',
    tier: 'IV',
  },
  {
    name: 'Quaent-Al-Qintis',
    tier: 'IV',
  },
  {
    name: 'Quaent-Al-Tersis',
    tier: 'IV',
  },
  {
    name: 'Quaent-Al-Viesom',
    tier: 'IV',
  },
  {
    name: 'Quaent-Al-Vynsum',
    tier: 'IV',
  },
  {
    name: 'Quaent-In-Nusis',
    tier: 'IV',
  },
  {
    name: 'Quaent-In-Odesum',
    tier: 'IV',
  },
  {
    name: 'Quaent-Qintis',
    tier: 'IV',
  },
  {
    name: 'Quaent-Tersis',
    tier: 'IV',
  },
  {
    name: 'Quaent-Viesom',
    tier: 'IV',
  },
  {
    name: 'Quaent-Vynsum',
    tier: 'IV',
  },
  {
    name: 'Quatun-Et-Nusas',
    tier: 'IV',
  },
  {
    name: 'Quatun-Et-Odetum',
    tier: 'IV',
  },
  {
    name: 'Quatun-Nusas',
    tier: 'IV',
  },
  {
    name: 'Quatun-Odetum',
    tier: 'IV',
  },
  {
    name: 'Razorrock Bank',
    tier: 'VII',
  },
  {
    name: 'Razorrock Chasm',
    tier: 'VII',
  },
  {
    name: 'Razorrock Edge',
    tier: 'VI',
  },
  {
    name: 'Razorrock Gulch',
    tier: 'VIII',
  },
  {
    name: 'Razorrock Passage',
    tier: 'V',
  },
  {
    name: 'Razorrock Ravine',
    tier: 'VI',
  },
  {
    name: 'Razorrock Valley',
    tier: 'V',
  },
  {
    name: 'Razorrock Verge',
    tier: 'VII',
  },
  {
    name: 'Redlake',
    tier: 'III',
  },
  {
    name: 'Redtree Enclave',
    tier: 'VIII',
  },
  {
    name: 'Rivercopse Crossing',
    tier: 'V',
  },
  {
    name: 'Rivercopse Curve',
    tier: 'VII',
  },
  {
    name: 'Rivercopse Fount',
    tier: 'VIII',
  },
  {
    name: 'Rivercopse Path',
    tier: 'VII',
  },
  {
    name: 'Roastcorpse Steppe',
    tier: 'VI',
  },
  {
    name: 'Rock Adit',
    tier: 'V',
  },
  {
    name: 'Rock Adit',
    tier: 'VII',
  },
  {
    name: 'Rowanwood',
    tier: 'V',
  },
  {
    name: 'Runnel Sink',
    tier: 'VII',
  },
  {
    name: 'Runnelvein Bog',
    tier: 'VI',
  },
  {
    name: 'Runnelvein Sink',
    tier: 'VII',
  },
  {
    name: 'Runnelvein Slough',
    tier: 'V',
  },
  {
    name: 'Russerdell',
    tier: 'IV',
  },
  {
    name: 'STUB-0502',
    tier: 'V',
  },
  {
    name: 'Sabertooth Den',
    tier: 'VI',
  },
  {
    name: 'Saddle Tor',
    tier: 'IV',
  },
  {
    name: 'Sandmount Ascent',
    tier: 'VIII',
  },
  {
    name: 'Sandmount Desert',
    tier: 'VII',
  },
  {
    name: 'Sandmount Esker',
    tier: 'V',
  },
  {
    name: 'Sandmount Strand',
    tier: 'V',
  },
  {
    name: 'Sandrift Coast',
    tier: 'V',
  },
  {
    name: 'Sandrift Dunes',
    tier: 'VII',
  },
  {
    name: 'Sandrift Expanse',
    tier: 'VI',
  },
  {
    name: 'Sandrift Fringe',
    tier: 'VII',
  },
  {
    name: 'Sandrift Portal East',
    tier: 'V',
  },
  {
    name: 'Sandrift Portal North',
    tier: 'V',
  },
  {
    name: 'Sandrift Portal West',
    tier: 'V',
  },
  {
    name: 'Sandrift Prairie',
    tier: 'V',
  },
  {
    name: 'Sandrift Shore',
    tier: 'V',
  },
  {
    name: 'Sandrift Steppe',
    tier: 'V',
  },
  {
    name: 'Sases-Aoarsum',
    tier: 'VI',
  },
  {
    name: 'Sases-Avuotum',
    tier: 'VI',
  },
  {
    name: 'Sasitos-Oyarlum',
    tier: 'VIII',
  },
  {
    name: 'Sasitos-Ugersum',
    tier: 'VII',
  },
  {
    name: 'Sasitos-Umogaum',
    tier: 'VI',
  },
  {
    name: 'Sasos-Abizaum',
    tier: 'VII',
  },
  {
    name: 'Sasos-Egeylos',
    tier: 'V',
  },
  {
    name: 'Sasos-Oiozlum',
    tier: 'V',
  },
  {
    name: 'Scuttlesink Marsh',
    tier: 'VIII',
  },
  {
    name: 'Scuttlesink Mouth',
    tier: 'VI',
  },
  {
    name: 'Scuttlesink Pools',
    tier: 'V',
  },
  {
    name: 'Sebos-Avoirom',
    tier: 'IV',
  },
  {
    name: 'Sebos-Oyohun',
    tier: 'VIII',
  },
  {
    name: 'Sebos-Ugersum',
    tier: 'VII',
  },
  {
    name: 'Secent-Al-Duosom',
    tier: 'VI',
  },
  {
    name: 'Secent-Al-Nutum',
    tier: 'VI',
  },
  {
    name: 'Secent-Al-Odetis',
    tier: 'VI',
  },
  {
    name: 'Secent-Al-Qinsom',
    tier: 'VI',
  },
  {
    name: 'Secent-Al-Tersum',
    tier: 'VI',
  },
  {
    name: 'Secent-Al-Viesum',
    tier: 'VI',
  },
  {
    name: 'Secent-Duosom',
    tier: 'VI',
  },
  {
    name: 'Secent-Et-Odesis',
    tier: 'VI',
  },
  {
    name: 'Secent-Et-Qinsas',
    tier: 'VI',
  },
  {
    name: 'Secent-Et-Vyntum',
    tier: 'VI',
  },
  {
    name: 'Secent-In-Tersum',
    tier: 'VI',
  },
  {
    name: 'Secent-Nutum',
    tier: 'VI',
  },
  {
    name: 'Secent-Odesom',
    tier: 'VI',
  },
  {
    name: 'Secent-Qi-Odesom',
    tier: 'VI',
  },
  {
    name: 'Secent-Qi-Qinsom',
    tier: 'VI',
  },
  {
    name: 'Secent-Sa-Odesis',
    tier: 'VI',
  },
  {
    name: 'Secent-Si-Odetis',
    tier: 'VI',
  },
  {
    name: 'Secent-Si-Qinsas',
    tier: 'VI',
  },
  {
    name: 'Secent-Viesum',
    tier: 'VI',
  },
  {
    name: 'Secent-Vyntum',
    tier: 'VI',
  },
  {
    name: 'Sectun-Al-Vyntis',
    tier: 'VI',
  },
  {
    name: 'Sectun-Et-Tersas',
    tier: 'VI',
  },
  {
    name: 'Sectun-In-Odesis',
    tier: 'VI',
  },
  {
    name: 'Sectun-In-Qinsom',
    tier: 'VI',
  },
  {
    name: 'Sectun-In-Vyntis',
    tier: 'VI',
  },
  {
    name: 'Sectun-Oc-Odesis',
    tier: 'VI',
  },
  {
    name: 'Sectun-Qinsom',
    tier: 'VI',
  },
  {
    name: 'Sectun-Tersas',
    tier: 'VI',
  },
  {
    name: 'Seritos-Egeylos',
    tier: 'V',
  },
  {
    name: 'Seritos-Onaytum',
    tier: 'V',
  },
  {
    name: 'Setent-Al-Duosas',
    tier: 'VII',
  },
  {
    name: 'Setent-Al-Qinsum',
    tier: 'VII',
  },
  {
    name: 'Setent-Al-Vietis',
    tier: 'VII',
  },
  {
    name: 'Setent-Duosas',
    tier: 'VII',
  },
  {
    name: 'Setent-Et-Nusum',
    tier: 'VII',
  },
  {
    name: 'Setent-Et-Qintis',
    tier: 'VII',
  },
  {
    name: 'Setent-In-Qinsum',
    tier: 'VII',
  },
  {
    name: 'Setent-Nusum',
    tier: 'VII',
  },
  {
    name: 'Setent-Qintis',
    tier: 'VII',
  },
  {
    name: 'Setent-Vietis',
    tier: 'VII',
  },
  {
    name: 'Setitos-Obobrom',
    tier: 'VI',
  },
  {
    name: 'Setos-Aiaitum',
    tier: 'VII',
  },
  {
    name: 'Setos-Avamsum',
    tier: 'V',
  },
  {
    name: 'Settun-Al-Nusis',
    tier: 'VII',
  },
  {
    name: 'Settun-Al-Odetum',
    tier: 'VII',
  },
  {
    name: 'Settun-Al-Tersom',
    tier: 'VII',
  },
  {
    name: 'Settun-Al-Vynsis',
    tier: 'VII',
  },
  {
    name: 'Settun-Et-Odetum',
    tier: 'VII',
  },
  {
    name: 'Settun-In-Nusis',
    tier: 'VII',
  },
  {
    name: 'Settun-In-Odetum',
    tier: 'VII',
  },
  {
    name: 'Settun-Odetum',
    tier: 'VII',
  },
  {
    name: 'Settun-Tersom',
    tier: 'VII',
  },
  {
    name: 'Settun-Vynsis',
    tier: 'VII',
  },
  {
    name: 'Shale Underway',
    tier: 'VI',
  },
  {
    name: 'Shaleheath Hills',
    tier: 'VI',
  },
  {
    name: 'Shaleheath Steep',
    tier: 'VII',
  },
  {
    name: 'Shiftshadow Expanse',
    tier: 'VII',
  },
  {
    name: 'Sieos-Ofugtum',
    tier: 'VII',
  },
  {
    name: 'Silitos-Abizaum',
    tier: 'VII',
  },
  {
    name: 'Silos-Apenlum',
    tier: 'VI',
  },
  {
    name: 'Silos-Oyarlum',
    tier: 'VIII',
  },
  {
    name: 'Siritos-Avoirom',
    tier: 'IV',
  },
  {
    name: 'Siritos-Oyohun',
    tier: 'VIII',
  },
  {
    name: 'Siros-Obobrom',
    tier: 'VI',
  },
  {
    name: 'Siros-Ofurlos',
    tier: 'VIII',
  },
  {
    name: 'Skullmarsh Lower',
    tier: 'V',
  },
  {
    name: 'Skullmarsh Upper',
    tier: 'VII',
  },
  {
    name: 'Skylake Bridge',
    tier: 'VI',
  },
  {
    name: 'Skylake Hinterlands',
    tier: 'VII',
  },
  {
    name: 'Skysand Plateau',
    tier: 'V',
  },
  {
    name: 'Skysand Ridge',
    tier: 'VII',
  },
  {
    name: 'Slakesands Canyon',
    tier: 'V',
  },
  {
    name: 'Slakesands Mesa',
    tier: 'VII',
  },
  {
    name: 'Sleetwater Basin',
    tier: 'V',
  },
  {
    name: 'Slimehag',
    tier: 'III',
  },
  {
    name: 'Slowtree Plain',
    tier: 'V',
  },
  {
    name: 'Smoothfloor Cleft',
    tier: 'IV',
  },
  {
    name: "Smuggler's Rut",
    tier: 'VI',
  },
  {
    name: 'Snapshaft Trough',
    tier: 'V',
  },
  {
    name: 'Sonitos-Ayailos',
    tier: 'VI',
  },
  {
    name: 'Soritos-Aiaitum',
    tier: 'VII',
  },
  {
    name: 'Soritos-Apenlum',
    tier: 'VI',
  },
  {
    name: 'Soritos-Avamsum',
    tier: 'V',
  },
  {
    name: 'Soros-Axaesum',
    tier: 'IV',
  },
  {
    name: 'Soues-Uzurtum',
    tier: 'VI',
  },
  {
    name: 'Souitos-Oiozlum',
    tier: 'V',
  },
  {
    name: 'Souos-Availos',
    tier: 'VII',
  },
  {
    name: 'Souos-Ososlos',
    tier: 'VI',
  },
  {
    name: 'Souos-Umogaum',
    tier: 'VI',
  },
  {
    name: 'Southgrove Copse',
    tier: 'VI',
  },
  {
    name: 'Southgrove Escarp',
    tier: 'V',
  },
  {
    name: 'Southgrove Thicket',
    tier: 'VII',
  },
  {
    name: 'Spectral Sump',
    tier: 'VI',
  },
  {
    name: 'Springsump Basin',
    tier: 'V',
  },
  {
    name: 'Springsump Melt',
    tier: 'VII',
  },
  {
    name: 'Springsump Wetland',
    tier: 'VI',
  },
  {
    name: 'Stagbourne',
    tier: 'III',
  },
  {
    name: 'Stalagmite Adit',
    tier: 'VI',
  },
  {
    name: 'Steelhide Meadow',
    tier: 'IV',
  },
  {
    name: 'Steppe Cross',
    tier: 'II',
  },
  {
    name: 'Stinkhag',
    tier: 'III',
  },
  {
    name: 'Stonelake Fields',
    tier: 'V',
  },
  {
    name: 'Stonelake Hillock',
    tier: 'VI',
  },
  {
    name: 'Stonemouth Bay',
    tier: 'VI',
  },
  {
    name: 'Stonemouth Northbluff',
    tier: 'V',
  },
  {
    name: 'Stonemouth Southbluff',
    tier: 'VIII',
  },
  {
    name: 'Stoneslip Passage',
    tier: 'VI',
  },
  {
    name: 'Stumprot Swamp',
    tier: 'VI',
  },
  {
    name: 'Sunfang Approach',
    tier: 'VI',
  },
  {
    name: 'Sunfang Cliffs',
    tier: 'VII',
  },
  {
    name: 'Sunfang Dawn',
    tier: 'VIII',
  },
  {
    name: 'Sunfang Ravine',
    tier: 'V',
  },
  {
    name: 'Sunfang Wasteland',
    tier: 'VII',
  },
  {
    name: 'Sunkenbough Spring',
    tier: 'VIII',
  },
  {
    name: 'Sunkenbough Woods',
    tier: 'VII',
  },
  {
    name: 'Sunstrand Delta',
    tier: 'V',
  },
  {
    name: 'Sunstrand Dunes',
    tier: 'VI',
  },
  {
    name: 'Sunstrand Quicksands',
    tier: 'VII',
  },
  {
    name: 'Sunstrand Shoal',
    tier: 'V',
  },
  {
    name: 'Suyites-Avuotum',
    tier: 'VI',
  },
  {
    name: 'Suyites-Uzurtum',
    tier: 'VI',
  },
  {
    name: 'Suyitos-Axaesum',
    tier: 'IV',
  },
  {
    name: 'Suyitos-Ofugtum',
    tier: 'VII',
  },
  {
    name: 'Suyitos-Oyarlos',
    tier: 'VIII',
  },
  {
    name: 'Suyos-Onaytum',
    tier: 'V',
  },
  {
    name: 'Swamp Burrow',
    tier: 'VII',
  },
  {
    name: 'Swamp Cross',
    tier: 'II',
  },
  {
    name: 'Swiftsands Basin',
    tier: 'VII',
  },
  {
    name: 'Swiftsands Chaparral',
    tier: 'VIII',
  },
  {
    name: 'Swiftsands Plain',
    tier: 'V',
  },
  {
    name: 'Synites-Aoarsum',
    tier: 'VI',
  },
  {
    name: 'Synitos-Availos',
    tier: 'VII',
  },
  {
    name: 'Synitos-Ofurlos',
    tier: 'VIII',
  },
  {
    name: 'Synitos-Ososlos',
    tier: 'VI',
  },
  {
    name: 'Synos-Ayailos',
    tier: 'VI',
  },
  {
    name: 'Synos-Oyarlos',
    tier: 'VIII',
  },
  {
    name: 'Tasitos-Obayam',
    tier: 'V',
  },
  {
    name: 'Tasitos-Ulaurom',
    tier: 'V',
  },
  {
    name: 'Tasos-Iriglos',
    tier: 'VII',
  },
  {
    name: 'Tebitos-Igaelum',
    tier: 'V',
  },
  {
    name: 'Tebitos-Odoxlum',
    tier: 'VII',
  },
  {
    name: 'Teros-Auiusum',
    tier: 'IV',
  },
  {
    name: 'Tetitos-Ayoslum',
    tier: 'VI',
  },
  {
    name: 'Tetos-Igaelum',
    tier: 'V',
  },
  {
    name: 'Tetos-Ulaurom',
    tier: 'V',
  },
  {
    name: 'Tharcal Fissure',
    tier: 'V',
  },
  {
    name: 'The Underway',
    tier: 'VII',
  },
  {
    name: 'Thetford',
    tier: 'I',
  },
  {
    name: 'Thirstwater Gully',
    tier: 'VII',
  },
  {
    name: 'Thirstwater Steppe',
    tier: 'V',
  },
  {
    name: 'Thirstwater Waste',
    tier: 'VI',
  },
  {
    name: 'Thunderrock Ascent',
    tier: 'VII',
  },
  {
    name: 'Thunderrock Draw',
    tier: 'VIII',
  },
  {
    name: 'Thunderrock Rapids',
    tier: 'VI',
  },
  {
    name: 'Thunderrock Upland',
    tier: 'VII',
  },
  {
    name: 'Tieitos-Eyexrom',
    tier: 'VI',
  },
  {
    name: 'Tieitos-Ouultum',
    tier: 'V',
  },
  {
    name: 'Tieos-Ayoslum',
    tier: 'VI',
  },
  {
    name: 'Tilitos-Ataglos',
    tier: 'VII',
  },
  {
    name: 'Timberscar Copse',
    tier: 'VII',
  },
  {
    name: 'Timberscar Dell',
    tier: 'V',
  },
  {
    name: 'Timberslope Bridge',
    tier: 'VIII',
  },
  {
    name: 'Timberslope Dell',
    tier: 'VI',
  },
  {
    name: 'Timberslope Grove',
    tier: 'VII',
  },
  {
    name: 'Timbertop Dale',
    tier: 'VI',
  },
  {
    name: 'Timbertop Escarp',
    tier: 'VIII',
  },
  {
    name: 'Timbertop Wood',
    tier: 'VII',
  },
  {
    name: 'Tiros-Odoxlum',
    tier: 'VII',
  },
  {
    name: 'Tiros-Ouultum',
    tier: 'V',
  },
  {
    name: 'Tonitos-Igurlum',
    tier: 'VII',
  },
  {
    name: 'Tonitos-Uxavrom',
    tier: 'VII',
  },
  {
    name: 'Tonos-Aboysum',
    tier: 'VIII',
  },
  {
    name: 'Tonos-Obayam',
    tier: 'V',
  },
  {
    name: 'Toritos-Iriglos',
    tier: 'VII',
  },
  {
    name: 'Touos-Ataglos',
    tier: 'VII',
  },
  {
    name: 'Touos-Uoemtum',
    tier: 'IV',
  },
  {
    name: 'Turitos-Atatlos',
    tier: 'V',
  },
  {
    name: 'Turitos-Uoemtum',
    tier: 'IV',
  },
  {
    name: 'Tuyitos-Aboysum',
    tier: 'VIII',
  },
  {
    name: 'Tuyitos-Auiusum',
    tier: 'IV',
  },
  {
    name: 'Twinchannel Narrows',
    tier: 'VII',
  },
  {
    name: 'Tynos-Atatlos',
    tier: 'V',
  },
  {
    name: 'Tynos-Eyexrom',
    tier: 'VI',
  },
  {
    name: 'Tynos-Igurlum',
    tier: 'VII',
  },
  {
    name: 'Tynos-Uxavrom',
    tier: 'VII',
  },
  {
    name: 'Unhallowed Cloister',
    tier: 'VIII',
  },
  {
    name: 'Vixen Tor',
    tier: 'IV',
  },
  {
    name: 'Wailing Bulwark',
    tier: 'VIII',
  },
  {
    name: 'Watchwood Bluffs',
    tier: 'VI',
  },
  {
    name: 'Watchwood Grove',
    tier: 'V',
  },
  {
    name: 'Watchwood Lakeside',
    tier: 'VI',
  },
  {
    name: 'Watchwood Precipice',
    tier: 'V',
  },
  {
    name: 'Westweald Shore',
    tier: 'VII',
  },
  {
    name: 'Westweald Thicket',
    tier: 'V',
  },
  {
    name: 'Wetgrave Bog',
    tier: 'V',
  },
  {
    name: 'Wetgrave Marsh',
    tier: 'VII',
  },
  {
    name: 'Wetgrave Swale',
    tier: 'VII',
  },
  {
    name: 'Whitebank Cross',
    tier: 'V',
  },
  {
    name: 'Whitebank Descent',
    tier: 'V',
  },
  {
    name: 'Whitebank Portal East',
    tier: 'V',
  },
  {
    name: 'Whitebank Portal North',
    tier: 'V',
  },
  {
    name: 'Whitebank Portal South',
    tier: 'V',
  },
  {
    name: 'Whitebank Ridge',
    tier: 'VII',
  },
  {
    name: 'Whitebank Shore',
    tier: 'V',
  },
  {
    name: 'Whitebank Stream',
    tier: 'V',
  },
  {
    name: 'Whitebank Wall',
    tier: 'VI',
  },
  {
    name: 'Whitecap Cave',
    tier: 'VI',
  },
  {
    name: 'Whitecliff Expanse',
    tier: 'VII',
  },
  {
    name: 'Whitecliff Peak',
    tier: 'VI',
  },
  {
    name: 'Whitepeak Ascent',
    tier: 'V',
  },
  {
    name: 'Whitepeak Spring',
    tier: 'VII',
  },
  {
    name: 'Whitepeak Tundra',
    tier: 'VIII',
  },
  {
    name: 'Whitewall Pass',
    tier: 'VIII',
  },
  {
    name: 'Whitewall Ridge',
    tier: 'VII',
  },
  {
    name: 'Widemoor Delta',
    tier: 'V',
  },
  {
    name: 'Widemoor End',
    tier: 'VI',
  },
  {
    name: 'Widemoor Estuary',
    tier: 'V',
  },
  {
    name: 'Widemoor Fen',
    tier: 'VII',
  },
  {
    name: 'Widemoor Flats',
    tier: 'VI',
  },
  {
    name: 'Widemoor Hills',
    tier: 'VI',
  },
  {
    name: 'Widemoor Pool',
    tier: 'V',
  },
  {
    name: 'Widemoor Portal North',
    tier: 'V',
  },
  {
    name: 'Widemoor Portal South',
    tier: 'V',
  },
  {
    name: 'Widemoor Portal West',
    tier: 'V',
  },
  {
    name: 'Widemoor Shore',
    tier: 'V',
  },
  {
    name: 'Widemoor Woods',
    tier: 'VI',
  },
  {
    name: 'Willow Wood',
    tier: 'V',
  },
  {
    name: 'Willowshade Hills',
    tier: 'VII',
  },
  {
    name: 'Willowshade Icemarsh',
    tier: 'V',
  },
  {
    name: 'Willowshade Lake',
    tier: 'V',
  },
  {
    name: 'Willowshade Mire',
    tier: 'V',
  },
  {
    name: 'Willowshade Pools',
    tier: 'VI',
  },
  {
    name: 'Willowshade Sink',
    tier: 'VII',
  },
  {
    name: 'Willowshade Wetlands',
    tier: 'V',
  },
  {
    name: 'Willowsigh Marsh',
    tier: 'V',
  },
  {
    name: 'Windgrass Border',
    tier: 'V',
  },
  {
    name: 'Windgrass Coast',
    tier: 'VI',
  },
  {
    name: 'Windgrass Fields',
    tier: 'VI',
  },
  {
    name: 'Windgrass Gully',
    tier: 'V',
  },
  {
    name: 'Windgrass Portal North',
    tier: 'V',
  },
  {
    name: 'Windgrass Portal South',
    tier: 'V',
  },
  {
    name: 'Windgrass Portal West',
    tier: 'V',
  },
  {
    name: 'Windgrass Precipice',
    tier: 'V',
  },
  {
    name: 'Windgrass Rill',
    tier: 'V',
  },
  {
    name: 'Windgrass Terrace',
    tier: 'VII',
  },
  {
    name: 'Windripple Fen',
    tier: 'IV',
  },
  {
    name: 'Wispwhisper Marsh',
    tier: 'V',
  },
  {
    name: 'Wyre Forest',
    tier: 'VI',
  },
  {
    name: 'Xases-Ataglos',
    tier: 'VII',
  },
  {
    name: 'Xases-Oxoulum',
    tier: 'VI',
  },
  {
    name: 'Xasos-Aeoilos',
    tier: 'IV',
  },
  {
    name: 'Xasos-Aoemaum',
    tier: 'VI',
  },
  {
    name: 'Xasos-Oneulum',
    tier: 'V',
  },
  {
    name: 'Xebitos-Oyogam',
    tier: 'V',
  },
  {
    name: 'Xebos-Emimsum',
    tier: 'VI',
  },
  {
    name: 'Xebos-Exostum',
    tier: 'VI',
  },
  {
    name: 'Xerites-Oxoulum',
    tier: 'VI',
  },
  {
    name: 'Xetitos-Emimsum',
    tier: 'VI',
  },
  {
    name: 'Xetitos-Oneulum',
    tier: 'V',
  },
  {
    name: 'Xetos-Obursum',
    tier: 'VII',
  },
  {
    name: 'Xiles-Aiavlum',
    tier: 'VI',
  },
  {
    name: 'Xilitos-Aoemaum',
    tier: 'VI',
  },
  {
    name: 'Xilos-Osayam',
    tier: 'VI',
  },
  {
    name: 'Xiros-Aiairom',
    tier: 'VIII',
  },
  {
    name: 'Xonites-Aiavlum',
    tier: 'VI',
  },
  {
    name: 'Xoritos-Aiairom',
    tier: 'VIII',
  },
  {
    name: 'Xoritos-Exostum',
    tier: 'VI',
  },
  {
    name: 'Xoritos-Osayam',
    tier: 'VI',
  },
  {
    name: 'Xouitos-Aeoilos',
    tier: 'IV',
  },
  {
    name: 'Xouitos-Eyoztum',
    tier: 'IV',
  },
  {
    name: 'Xouos-Aioblos',
    tier: 'V',
  },
  {
    name: 'Xurites-Ataglos',
    tier: 'VII',
  },
  {
    name: 'Xuros-Eyoztum',
    tier: 'IV',
  },
  {
    name: 'Xuyitos-Aioblos',
    tier: 'V',
  },
  {
    name: 'Xynitos-Obursum',
    tier: 'VII',
  },
  {
    name: 'Xynos-Oyogam',
    tier: 'V',
  },
  {
    name: 'Yew Wood',
    tier: 'V',
  },
]

export default zoneTiers
