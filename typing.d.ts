type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Category extends Base {
    title: string;
    desc: string[];
    slug: Slug;
    preturi: string[];
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Incaltaminte extends Base {
    title: string;
    slug: Slug;
    image: Image[];
    categories: Category[];
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference";
}

interface Banner extends Base {
    text_1: string;
    text_2: string;
    text_3: string;
    description: string[];
    image: Image[];
}