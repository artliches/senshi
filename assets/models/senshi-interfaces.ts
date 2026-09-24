export interface JobObj {
    name: string,
    descrip: string,
    stats: StatsObj,
    features: FeaturesObj[],
    startingEquipment: StartingEquipmentObj[],
    tenants: TenantsObj,
    ryo: string,
};

export interface StatsObj {
    swiftness: number,
    spirit: number,
    vigor: number,
    resilience: number,
    honour: number,
    virtues: number,
    hp: number,
};

export interface FeaturesObj {
    title: string,
    descrip: string,
};

export interface StartingEquipmentObj {
    item: string,
    type: string,
    die: string,
};

export interface TenantsObj {
    title: string,
    honourList: HonourObj[]
};

export interface HonourObj {
    name: string,
    descrip: string,
}