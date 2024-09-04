export interface PersonalResponse {
    data: Data;
}

export interface Data {
    staffs: Staff[];
}

export interface Staff {
    id:          string;
    name:        string;
    profession:  string;
    city:        string;
    description: string;
    contactUrl:  null;
    image:       Image;
}

export interface Image {
    url: string;
}
