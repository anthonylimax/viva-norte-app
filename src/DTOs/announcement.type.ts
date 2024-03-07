
export type AnnouncementDTO = {
    announcement: {
        adress: string;
        owner: string;
        price: number;
        status: string;
        id_announcement: string;
        num_bathrooms: number;
        num_garage_space: number;
        num_rooms: number;
        area: number;
    },
    details: {
        box_blindex: number;
        closet: number;
        american_kitchen: number;
        intercom: number;
        furnished: number;
        gourmet_balcony: number;
        balcony: number;
        games_room: number;
        pcd_access: number;
        bicycle_rack: number;
        coworker: number;
        elevator: number;
        laundry: number;
        reception: number;
        turkish_bath: number;
        in_plan: number;
        in_built: number;
        done: number;
        accept_animals: number;
        service_room: number;
        closet_in_bedroom: number;
        cabinet_in_bathroom: number;
        cabinet_in_kitchen: number;
        gym: number;
        grill: number;
        gourmet_space: number;
        green_space: number;
        garden: number;
        pool: number;
        playground: number;
        multisports_court: number;
        party_room: number;
        big_windows: number;
        tv: number;
    },
    pictures: any[];
};
