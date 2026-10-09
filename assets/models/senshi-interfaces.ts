export interface JobObj {
    name: string,
    descrip: string,
    stats: StatsObj,
    features: FeaturesObj[],
    rulesFeature?: {
        title: string,
        content: string[]
    }[],
    pet?: PetObj,
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

export interface AbililtyValuesObj {
    name: string,
    value: number,
};

export interface FeaturesObj {
    title: string,
    subtitle?: string,
    cost?: number,
    descrip: string,
};

export interface PetObj {
    title: string,
    subtitle: string,
    features: {
        title: string,
        descrip: string,
        extra: string[]
    }[],
}

export interface StartingEquipmentObj {
    item: string,
    type: string,
    die: string,
    descrip?: string,
    value?: number,
    splitStringObj?: {
        leftString: string,
        rightString: string,
    },
    splitDescripObj?: {
        leftString: string,
        rightString: string, 
    }
};

export interface TenantsObj {
    title: string,
    honourList: HonourObj[]
};

export interface HonourObj {
    name: string,
    descrip: string,
};

export interface AbilityObj {
    name: string,
    descrip: string,
    value: number,
    rolledDie: any[],
    modifier: number,
};