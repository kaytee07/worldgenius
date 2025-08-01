const teeandcap = "Delivery will be made 3 to 5 business days after your order.";
const jersey = "Delivery will be made 10 to 12 business days after your order."


export const navigation = [ 
    {
        name: "Shop",
        url:"/shop"
    },
    { 
        name: "Gallery",
        url:"/gallery"
    },
    {
        name: "Press",
        url:"/press"
    },
]

export const press = [
    {
        img: "https://i.ytimg.com/vi/jUO0dUHJeSo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADD9hmVeFk2aVIWKgMjRNO923oIg",
        link: "https://imullar.com/2024/08/20/editors-choice-ghanaian-streetwear-brands-you-should-know/ "
    }
]

export const dashnav = [ 
    {
        name: "Dashboard"
    },
    {
        name: "Pending Oders",
    },
    {
        name: "Delivered Orders",
    },
    {
        name: "Products"
    }
]

export const bestSelling = {

    gtaaccrashirtcream:{
        id: 0,
        name: "GTA ACCRA SHIRT CREAM",
        price: 250.00,
        img: "/img/gtacream.jpg",
        sizes: [
                       {
                name: "S",
                quantity: 90
            },
            {
                name: "M",
                quantity: 30
            },
            {
                name: "L",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
             {
                name: "3XL",
                quantity: 55
            }
        ],
        colors:[
            {
                name: "Cream",
                code: "CEBA7C"
            },
           
        ],
        quantity: 8,
        otherImages: []
    },
    ineedspacetops:{
        id: 2,
        name: "I NEED SPACE TOPS",
        price: 200.00,
        img: "/img/ineedspace.jpg",
        sizes: [
                       {
                name: "S",
                quantity: 90
            },
            {
                name: "M",
                quantity: 30
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
             {
                name: "3XL",
                quantity: 55
            },
             {
                name: "4XL",
                quantity: 55
            }
        ],
        colors:[
            {
                name: "Black",
                code: "88498F"
            },
           
        ],
        quantity: 7,
        otherImages: []
    },
    ghanababecroptop:{
        id:4,
        name: "GHANA BABE CROPTOP",
        price: 200.00,
        img: "/img/ghanababe.jpg",
        sizes: [
            {
                name: "S",
                quantity: 90
            },
            {
                name: "M",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
             {
                name: "3XL",
                quantity: 55
            }
        ],
        colors:[
            {
                name: "White",
                code: "FFFFF"
            },
        ],
        quantity: 7,
        otherImages: []
    },
    dndtruckercap:{
        id: 1,
        name: "DND TRUCKER CAP",
        price: 100.00,
        img: "/img/dndcap.jpg",
        sizes: [
            {
                name: "SAME SIZE",
                quantity: 20
            },
            
        ],
        colors:[
            {
                name: "Red and black",
                code: "e71016"
            },
           
        ],
        quantity: 7,
        otherImages: []
    },
        topoftheworldcapseablue:{
        id: 1,
        name: "TOP OF THE WORLD CAP SEA BLUE",
        price: 0.60,
        img: "/img/topoftheworldseablue.png",
        sizes: [
            {
                name: "SAME SIZE",
                quantity: 20
            },
           
        ],
        colors:[
            {
                name: "Sea Blue",
                code: "e71016"
            },
           
        ],
        quantity: 7,
        otherImages: []
    }
}

export const products = {
    space3shirt: {
        id: 0,
        name: "SPACE 3 SHIRT",
        price: 180.00,
        discountedPrice: 144.00,
        img: "/img/space3frontmock.png",
        sizes: [
            {
                name: "M",
                quantity: 30
            },
            {
                name: "L",
                quantity: 55
            },
        ],
        colors: [
            {
                name: "Cream",
                code: "CEBA7C"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/space3frontmock.png", "/img/space3backmock.png"]
    },
    ghanababecroptop: {
        id: 4,
        name: "GHANA BABE CROPTOP",
        price: 200.00,
        discountedPrice: 160.00,
        img: "/img/ghanababenew.png",
        sizes: [
            {
                name: "S(2-4)",
                quantity: 90
            },
            {
                name: "M(6-8)",
                quantity: 30
            },
            {
                name: "L(10-12)",
                quantity: 55
            },
            {
                name: "XL(14-16)",
                quantity: 55
            },
            {
                name: "2XL(18)",
                quantity: 55
            },
            {
                name: "3XL(20-22)",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "White",
                code: "FFFFF"
            },
        ],
        quantity: 7,
        delivery: teeandcap,
        otherImages: ["/img/ghanababe.jpg"]
    },
    ghanababecroptopblack: {
        id: 4,
        name: "GHANA BABE CROPTOP BLACK",
        price: 200.00,
        discountedPrice: 160.00,
        img: "/img/ghbabeblacknew.png",
        sizes: [
            {
                name: "S(2-4)",
                quantity: 90
            },
            {
                name: "M(6-8)",
                quantity: 30
            },
        ],
        colors: [
            {
                name: "White",
                code: "FFFFF"
            },
        ],
        quantity: 7,
        delivery: teeandcap,
        otherImages: ["/img/ghbabeblacknew.png"]
    },
    gtaaccrashirtcream: {
        id: 0,
        name: "GTA ACCRA SHIRT CREAM",
        price: 250.00,
        discountedPrice: 200.00,
        img: "/img/gtacream.jpg",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Cream",
                code: "CEBA7C"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/gtacream.jpg"]
    },
    gtaaccrashirtgrey: {
        id: 0,
        name: "GTA ACCRA SHIRT GREY",
        price: 250.00,
        discountedPrice: 200.00,
        img: "/img/gtagrey.jpg",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Grey",
                code: "3A3A3A"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/gtagrey.jpg"]
    },
    gtaaccrashirtwhite: {
        id: 0,
        name: "GTA ACCRA SHIRT WHITE",
        price: 250.00,
        discountedPrice: 200.00,
        img: "/img/gtawhite.jpg",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "White",
                code: "FFFFFF"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/gtawhite.jpg"]
    },
    gtaaccrashirtblack: {
        id: 0,
        name: "GTA ACCRA SHIRT BLACK",
        price: 250.00,
        discountedPrice: 200.00,
        img: "/img/gtablack.jpg",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Black",
                code: "000000"
            }
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/gtablack.jpg"]
    },
    boneshakerwhiteshirt: {
        id: 0,
        name: "BONE SHAKER WHITE SHIRT",
        price: 220.00,
        discountedPrice: 176.00,
        img: "/img/boneshakerteeshirt.png",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            },
            {
                name: "4XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Black",
                code: "000000"
            }
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/boneshakerteeshirt.png"]
    },
    topoftheworldtruckercapseablue: {
        id: 1,
        name: "TOP OF THE WORLD TRUCKER CAP SEA BLUE",
        price: 100.00,
        discountedPrice: 80.00,
        img: "/img/topoftheworldseablue.png",
        sizes: [
            {
                name: "SAME SIZE",
                quantity: 20
            },
        ],
        colors: [
            {
                name: "Sea Blue",
                code: "e71016"
            },
        ],
        quantity: 7,
        delivery: teeandcap,
        otherImages: ["/img/topoftheworldseablue.png"]
    },
    topoftheworldtruckercapblackandwhite: {
        id: 1,
        name: "TOP OF THE WORLD TRUCKER CAP BLACK AND WHITE",
        price: 100.00,
        discountedPrice: 80.00,
        img: "/img/topoftheworldblackandwhite.png",
        sizes: [
            {
                name: "SAME SIZE",
                quantity: 20
            },
        ],
        colors: [
            {
                name: "black and white",
                code: "e71016"
            },
        ],
        quantity: 7,
        otherImages: ["/img/topoftheworldblackandwhite.png"]
    },
    // blackholejersey: {
    //     id: 0,
    //     name: "BLACK HOLE JERSEY",
    //     price: 250.00,
    //     discountedPrice: 200.00,
    //     img: "/img/worldjerseyfront.png",
    //     sizes: [
    //         {
    //             name: "M",
    //             quantity: 30
    //         },
    //         {
    //             name: "L",
    //             quantity: 55
    //         },
    //     ],
    //     colors: [
    //         {
    //             name: "Cream",
    //             code: "CEBA7C"
    //         },
    //     ],
    //     quantity: 8,
    //     delivery: teeandcap,
    //     otherImages: ["/img/worldjerseyfront.png", "/img/worldjerseyback.png"]
    // },
    blackholeshirt: {
        id: 0,
        name: "BLACK HOLE SHIRT",
        price: 250.00,
        discountedPrice: 200.00,
        img: "/img/blackholeteefront.png",
        sizes: [
            {
                name: "S",
                quantity: 90
            },
            {
                name: "M",
                quantity: 30
            },
            {
                name: "L",
                quantity: 55
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            },
            {
                name: "4XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Cream",
                code: "CEBA7C"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/blackholeteefront.png", "/img/blackholeteeback.png"]
    },
    boneshakersweatshirt: {
        id: 0,
        name: "BONE SHAKER SWEATSHIRT",
        price: 380.00,
        discountedPrice: 304.00,
        img: "/img/boneshakersweaterArtboard-1.png",
        sizes: [
            {
                name: "M",
                quantity: 30
            },
            {
                name: "L",
                quantity: 55
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            },
            {
                name: "4XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Cream",
                code: "CEBA7C"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/boneshakersweaterArtboard-1.png", "/img/boneshakersweaterArtboard-2.png"]
    },
    dndtruckercap: {
        id: 1,
        name: "DND TRUCKER CAP",
        price: 100.00,
        discountedPrice: 80.00,
        img: "/img/dndcap.jpg",
        sizes: [
            {
                name: "SAME SIZE",
                quantity: 20
            },
        ],
        colors: [
            {
                name: "Red and black",
                code: "e71016"
            },
        ],
        quantity: 7,
        delivery: teeandcap,
        otherImages: ["/img/dndcap.jpg"]
    },
    redletterotwjerseyworldg3niusxoutl8tscollabjersey: {
        id: 0,
        name: "RED LETTER OTW JERSEY WORLDG3NIUS X OUTL8TS COLLAB JERSEY",
        price: 400.00,
        discountedPrice: 320.00,
        img: "/img/redletterdayjerseyfront.png",
        sizes: [
            {
                name: "S",
                quantity: 90
            },
            {
                name: "M",
                quantity: 30
            },
            {
                name: "L",
                quantity: 55
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            },
            {
                name: "4XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Cream",
                code: "CEBA7C"
            },
        ],
        quantity: 8,
        delivery: jersey,
        otherImages: ["/img/redletterdayjerseyfront.png", "/img/redletterjerseyback.png"]
    },
    rawotwjerseyworldg3niusxoutl8tscollabjersey: {
        id: 0,
        name: "RAW OTW JERSEY WORLDG3NIUS X OUTL8TS COLLAB JERSEY",
        price: 400.00,
        discountedPrice: 320.00,
        img: "/img/rawfront.png",
        sizes: [
            {
                name: "S",
                quantity: 90
            },
            {
                name: "M",
                quantity: 30
            },
            {
                name: "L",
                quantity: 55
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            },
            {
                name: "4XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Cream",
                code: "CEBA7C"
            },
        ],
        quantity: 8,
        delivery: jersey,
        otherImages: ["/img/rawfront.png", "/img/rawback.png"]
    },
    ashaotwjerseyworldg3niusxoutl8tscollabjersey: {
        id: 0,
        name: "ASHA OTW JERSEY WORLDG3NIUS X OUTL8TS COLLAB JERSEY",
        price: 400.00,
        discountedPrice: 320.00,
        img: "/img/ashafront.png",
        sizes: [
            {
                name: "S",
                quantity: 90
            },
            {
                name: "M",
                quantity: 30
            },
            {
                name: "L",
                quantity: 55
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            },
            {
                name: "4XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Cream",
                code: "CEBA7C"
            },
        ],
        quantity: 8,
        delivery: jersey,
        otherImages: ["/img/ashafront.png", "/img/ashaback.png"]
    },
    "4girlswhiteteeshirt": {
        id: 0,
        name: "4 GIRLS WHITE TEE SHIRT",
        price: 250.00,
        discountedPrice: 200.00,
        img: "/img/photo_2_2025-07-05_11-07-34.jpg",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
        ],
        colors: [
            {
                name: "Cream",
                code: "CEBA7C"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/photo_2_2025-07-05_11-07-34.jpg", "/img/photo_3_2025-07-05_11-07-34.jpg"]
    },
    "4girlsblackteeshirt": {
        id: 0,
        name: "4 GIRLS BLACK TEE SHIRT",
        price: 250.00,
        discountedPrice: 200.00,
        img: "/img/photo_1_2025-07-05_11-07-34.jpg",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
        ],
        colors: [
            {
                name: "Cream",
                code: "CEBA7C"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/photo_1_2025-07-05_11-07-34.jpg", "/img/photo_4_2025-07-05_11-07-34.jpg"]
    },
    gothicsweatshorts: {
        id: 0,
        name: "GOTHIC SWEAT SHORTS",
        price: 280.00,
        discountedPrice: 224.00,
        img: "/img/summershorts.png",
        sizes: [
            {
                name: "M",
                quantity: 90
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            },
            {
                name: "4XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Cream",
                code: "CEBA7C"
            },
        ],
        quantity: 8,
        delivery: teeandcap,
        otherImages: ["/img/summershorts.png"]
    },
    ineedspacetops: {
        id: 2,
        name: "I NEED SPACE TOPS",
        price: 200.00,
        discountedPrice: 160.00,
        img: "/img/ineedspace.jpg",
        sizes: [
            {
                name: "M",
                quantity: 30
            },
            {
                name: "L",
                quantity: 30
            },
            {
                name: "XL",
                quantity: 55
            },
            {
                name: "2XL",
                quantity: 55
            },
            {
                name: "3XL",
                quantity: 55
            },
            {
                name: "4XL",
                quantity: 55
            }
        ],
        colors: [
            {
                name: "Black",
                code: "88498F"
            },
        ],
        quantity: 7,
        delivery: teeandcap,
        otherImages: ["/img/ineedspace.jpg"]
    },
}
// ghanaboysshirt:{
    //     id: 2,
    //     name: "GHANA BOYS SHIRT",
    //     price: 200.00,
    //     img: "/img/ghanaboysblack.jpg",
    //     sizes: [
                
    //         {
    //             name: "M",
    //             quantity: 30
    //         },
    //         {
    //             name: "L",
    //             quantity: 30
    //         },
    //         {
    //             name: "XL",
    //             quantity: 55
    //         },
    //         {
    //             name: "2XL",
    //             quantity: 55
    //         },
    //          {
    //             name: "3XL",
    //             quantity: 55
    //         },
    //          {
    //             name: "4XL",
    //             quantity: 55
    //         }
    //     ],
    //     colors:[
    //         {
    //             name: "Black",
    //             code: "88498F"
    //         },
           
    //     ],
    //     quantity: 7,
    //     otherImages: ["/img/ghanaboysblack.jpg"]
    // },


